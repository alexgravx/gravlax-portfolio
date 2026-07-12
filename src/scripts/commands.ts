import { profile } from '../content/resume';
import { renderNeofetch } from './neofetch';
import { lookup, resolve, display, esc, type FsDir, type FsNode, type Path } from './fs';

export { esc };

export interface Shell {
  cwd: Path;
}

export const createShell = (): Shell => ({ cwd: [] });

export const prompt = (shell: Shell) =>
  `visitor@${profile.handle}:${display(shell.cwd)}$`;

export interface Result {
  html: string | null;
  /** Signals the caller to wipe the screen. */
  clear?: boolean;
}

const err = (msg: string) => ({ html: `<p class="warn">${esc(msg)}</p>` });

/* --------------------------------------------------------------- listing */

const nodeLabel = (n: FsNode) =>
  n.type === 'dir'
    ? `<span class="fs-dir">${esc(n.name)}/</span>`
    : `<span class="fs-file">${esc(n.name)}</span>`;

function ls(shell: Shell, arg?: string): Result {
  const path = arg ? resolve(shell.cwd, arg) : shell.cwd;
  if (!path) return err(`ls: ${arg}: no such file or directory`);

  const node = lookup(path);
  if (!node) return err(`ls: ${arg}: no such file or directory`);
  if (node.type === 'file') return { html: `<div class="fs-list">${nodeLabel(node)}</div>` };

  return {
    html: `<div class="fs-list">${node.children.map(nodeLabel).join('')}</div>`,
  };
}

function cd(shell: Shell, arg?: string): Result {
  if (!arg || arg === '~') {
    shell.cwd = [];
    return { html: '' };
  }
  const path = resolve(shell.cwd, arg);
  if (!path) return err(`cd: ${arg}: no such file or directory`);

  const node = lookup(path);
  if (!node) return err(`cd: ${arg}: no such file or directory`);
  if (node.type !== 'dir') return err(`cd: ${arg}: not a directory`);

  shell.cwd = path;
  return { html: '' };
}

function cat(shell: Shell, arg?: string): Result {
  if (!arg) return err('cat: missing operand');

  const path = resolve(shell.cwd, arg);
  if (!path) return err(`cat: ${arg}: no such file or directory`);

  const node = lookup(path);
  if (!node) return err(`cat: ${arg}: no such file or directory`);
  if (node.type === 'dir') return err(`cat: ${arg}: is a directory`);

  return { html: node.render() };
}

/* ------------------------------------------------------------------ tree */

function treeLines(node: FsDir, prefix: string): string[] {
  const out: string[] = [];
  node.children.forEach((child, i) => {
    const last = i === node.children.length - 1;
    out.push(
      `<div><span class="fs-glyph">${prefix}${last ? '└── ' : '├── '}</span>${nodeLabel(child)}</div>`,
    );
    if (child.type === 'dir') {
      out.push(...treeLines(child, `${prefix}${last ? '    ' : '│   '}`));
    }
  });
  return out;
}

function count(node: FsDir): { dirs: number; files: number } {
  let dirs = 0;
  let files = 0;
  for (const c of node.children) {
    if (c.type === 'dir') {
      dirs++;
      const sub = count(c);
      dirs += sub.dirs;
      files += sub.files;
    } else files++;
  }
  return { dirs, files };
}

function tree(shell: Shell, arg?: string): Result {
  const path = arg ? resolve(shell.cwd, arg) : shell.cwd;
  if (!path) return err(`tree: ${arg}: no such file or directory`);

  const node = lookup(path);
  if (!node) return err(`tree: ${arg}: no such file or directory`);
  if (node.type !== 'dir') return err(`tree: ${arg}: not a directory`);

  const { dirs, files } = count(node);
  return {
    html:
      `<div class="fs-tree">` +
      `<div><span class="fs-dir">${esc(display(path))}</span></div>` +
      treeLines(node, '').join('') +
      `<p class="comment" style="margin-top:var(--sp-2)">${dirs} directories, ${files} files</p>` +
      `</div>`,
  };
}

/* -------------------------------------------------------------- registry */

interface Command {
  name: string;
  usage: string;
  summary: string;
  run: (shell: Shell, arg?: string) => Result;
}

const commands: Command[] = [
  { name: 'help', usage: 'help', summary: 'list available commands', run: () => ({ html: help() }) },
  {
    name: 'home',
    usage: 'home',
    summary: 'reprint the welcome banner',
    run: () => ({ html: renderNeofetch() }),
  },
  { name: 'neofetch', usage: 'neofetch', summary: 'system info', run: () => ({ html: renderNeofetch() }) },
  { name: 'ls', usage: 'ls [path]', summary: 'list directory contents', run: ls },
  { name: 'cd', usage: 'cd [path]', summary: 'change directory', run: cd },
  { name: 'cat', usage: 'cat <file>', summary: 'print a file', run: cat },
  { name: 'tree', usage: 'tree [path]', summary: 'list contents recursively', run: tree },
  {
    name: 'pwd',
    usage: 'pwd',
    summary: 'print working directory',
    run: (shell) => ({ html: `<div>${esc(display(shell.cwd))}</div>` }),
  },
  {
    name: 'whoami',
    usage: 'whoami',
    summary: 'print the current user',
    run: () => ({ html: `<div>visitor</div>` }),
  },
  { name: 'clear', usage: 'clear', summary: 'clear the screen (Ctrl+L)', run: () => ({ html: null, clear: true }) },
];

/** Friendly aliases, so nobody has to know the layout to get somewhere. */
const aliases: Record<string, string> = {
  about: 'cat ~/about.md',
  experience: 'cat ~/experience.md',
  education: 'cat ~/education.md',
  contact: 'cat ~/contact.md',
  projects: 'ls ~/projects',
  skills: 'tree ~/skills',
  cv: 'cat ~/resume.pdf',
  resume: 'cat ~/resume.pdf',
};

function help(): string {
  const rows = commands
    .map(
      (c) =>
        `<div><span class="cmd-name">${esc(c.usage.padEnd(13))}</span><span class="comment">${esc(c.summary)}</span></div>`,
    )
    .join('');

  const alias = Object.entries(aliases)
    .map(
      ([name, target]) =>
        `<div><span class="cmd-name">${esc(name.padEnd(13))}</span><span class="comment">${esc(target)}</span></div>`,
    )
    .join('');

  return (
    rows +
    `<p class="comment" style="margin:var(--sp-3) 0 var(--sp-1)"># shortcuts</p>` +
    alias +
    `<p class="comment" style="margin-top:var(--sp-3)"># tab completes · ↑/↓ history · Ctrl+L clears</p>`
  );
}

/* -------------------------------------------------------- completion */

function commonPrefix(items: string[]): string {
  if (!items.length) return '';
  let prefix = items[0]!;
  for (const item of items.slice(1)) {
    let i = 0;
    while (i < prefix.length && i < item.length && prefix[i] === item[i]) i++;
    prefix = prefix.slice(0, i);
  }
  return prefix;
}

export interface Completion {
  /** The line to put back in the input. */
  line: string;
  /** More than one match — the shell prints these and completes the shared prefix. */
  candidates: string[];
}

/**
 * Tab completion, the way a shell actually does it:
 *   - the FIRST word completes against commands and aliases
 *   - anything after it completes against the filesystem, never against command
 *     names (which is why `cat e` used to yield the `experience` alias instead
 *     of education.md / experience.md)
 *   - one match completes it outright; several complete the longest shared
 *     prefix and list the options
 *   - an empty argument (`cat ` + Tab) lists the whole directory
 */
export function complete(shell: Shell, line: string): Completion {
  const trailingSpace = /\s$/.test(line);
  const parts = line.split(/\s+/).filter(Boolean);
  const completingCommand = parts.length === 0 || (parts.length === 1 && !trailingSpace);

  if (completingCommand) {
    const stem = (parts[0] ?? '').toLowerCase();
    const names = [...commands.map((c) => c.name), ...Object.keys(aliases)].sort();
    const hits = names.filter((n) => n.startsWith(stem));

    if (!hits.length) return { line, candidates: [] };
    if (hits.length === 1) return { line: `${hits[0]!} `, candidates: [] };

    const shared = commonPrefix(hits);
    return { line: shared.length > stem.length ? shared : line, candidates: hits };
  }

  // Completing an argument: filesystem only.
  const head = trailingSpace ? parts : parts.slice(0, -1);
  const token = trailingSpace ? '' : parts[parts.length - 1]!;

  // Split `projects/yz` into the directory to look in and the stem to match.
  const slash = token.lastIndexOf('/');
  const dirPart = slash >= 0 ? token.slice(0, slash + 1) : '';
  const stem = slash >= 0 ? token.slice(slash + 1) : token;

  const dirPath = resolve(shell.cwd, dirPart || '.');
  const node = dirPath ? lookup(dirPath) : null;
  if (!node || node.type !== 'dir') return { line, candidates: [] };

  const hits = node.children
    .filter((c) => c.name.toLowerCase().startsWith(stem.toLowerCase()))
    .map((c) => (c.type === 'dir' ? `${c.name}/` : c.name))
    .sort();

  if (!hits.length) return { line, candidates: [] };

  if (hits.length === 1) {
    const only = hits[0]!;
    // Directories keep the visitor typing; files are finished words.
    const tail = only.endsWith('/') ? '' : ' ';
    return { line: `${[...head, dirPart + only].join(' ')}${tail}`, candidates: [] };
  }

  const shared = commonPrefix(hits);
  const filled = shared.length > stem.length ? shared : stem;
  return { line: [...head, dirPart + filled].join(' '), candidates: hits };
}

export function run(shell: Shell, input: string): Result {
  const line = input.trim();
  if (!line) return { html: '' };

  // Expand an alias, then fall through to the normal parser.
  const [head, ...rest] = line.split(/\s+/);
  const expanded = aliases[head!.toLowerCase()] && rest.length === 0 ? aliases[head!.toLowerCase()]! : line;

  const [name, ...args] = expanded.split(/\s+/);
  const cmd = commands.find((c) => c.name === name!.toLowerCase());

  if (!cmd) {
    if (name === 'sudo') {
      return {
        html: `<p class="warn">visitor is not in the sudoers file. This incident has been reported.</p>`,
      };
    }
    return {
      html: `<p class="warn">command not found: ${esc(name!)} — try <span class="cmd-name">help</span></p>`,
    };
  }

  return cmd.run(shell, args[0]);
}
