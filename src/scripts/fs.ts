import {
  profile,
  education,
  skills,
  experience,
  projects,
  resumePdf,
} from '../content/resume';

/** Escape before anything goes near innerHTML. */
export function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const link = (href: string, label: string, external = true) =>
  `<a href="${esc(href)}"${
    external ? ' target="_blank" rel="noopener noreferrer"' : ''
  }>${esc(label)}</a>`;

const tags = (items: string[]) =>
  `<ul class="tags">${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;

/* ------------------------------------------------------------------ the tree */

export interface FsFile {
  type: 'file';
  name: string;
  /** Rendered when `cat`-ed. */
  render: () => string;
}

export interface FsDir {
  type: 'dir';
  name: string;
  children: FsNode[];
}

export type FsNode = FsFile | FsDir;

const file = (name: string, render: () => string): FsFile => ({ type: 'file', name, render });
const dir = (name: string, children: FsNode[]): FsDir => ({ type: 'dir', name, children });

function projectFile(p: (typeof projects)[number]): FsFile {
  return file(`${p.id}.md`, () => {
    const links = [
      ...(p.repo ? [link(`https://github.com/${p.repo}`, p.repo)] : []),
      ...(p.links ?? []).map((l) => link(l.href, l.label)),
      ...(p.private ? ['<span class="comment">private client work — no public source</span>'] : []),
    ];
    return `
      <div class="entry">
        <div class="entry-head">
          <strong>${esc(p.name)}</strong>
          <span class="comment">${esc(p.year)}</span>
        </div>
        <p>${esc(p.about)}</p>
        ${links.length ? `<div>${links.join(' · ')}</div>` : ''}
        ${tags(p.stack)}
      </div>`;
  });
}

/** A skill leaf: `cat skills/languages/python` prints a one-liner. */
function skillFile(name: string, group: string): FsFile {
  const slug = name.toLowerCase().replace(/[^a-z0-9+]/g, '-');
  return file(slug, () => `<p>${esc(name)} <span class="comment"># ${esc(group)}</span></p>`);
}

export const root: FsDir = dir('~', [
  file('about.md', () => `<p>${esc(profile.bio)}</p>`),

  file('experience.md', () =>
    experience
      .map(
        (r) => `
        <div class="entry">
          <div class="entry-head">
            <strong>${r.href ? link(r.href, r.org) : esc(r.org)}</strong>
            <span class="comment">${esc(r.start)} — ${esc(r.end)}</span>
          </div>
          <div class="comment">${esc(r.title)} · ${esc(r.location)}</div>
          <p>${esc(r.summary)}</p>
          ${tags(r.stack)}
        </div>`,
      )
      .join(''),
  ),

  file('education.md', () =>
    education
      .map(
        (e) => `
        <div class="entry">
          <div class="entry-head">
            <strong>${esc(e.school)}</strong>
            <span class="comment">${esc(e.date)}</span>
          </div>
          <div>${esc(e.degree)}${e.note ? ` <span class="comment">(${esc(e.note)})</span>` : ''}</div>
          <p class="comment">${esc(e.summary)}</p>
        </div>`,
      )
      .join(''),
  ),

  file('contact.md', () =>
    profile.links
      .map(
        (l) =>
          `<div><span class="comment">${esc(l.label.padEnd(9))}</span>${link(l.href, l.href)}</div>`,
      )
      .join('') +
    `<div><span class="comment">${esc('resume'.padEnd(9))}</span>${link('/resume', '/resume', false)} · ${link(resumePdf, 'download .pdf', false)}</div>`,
  ),

  file('resume.pdf', () =>
    `<p>Binary file.</p><div>${link('/resume', 'open /resume', false)} · ${link(resumePdf, 'download .pdf', false)}</div>`,
  ),

  dir('projects', projects.map(projectFile)),

  dir(
    'skills',
    Object.entries(skills).map(([group, items]) =>
      dir(group, items.map((s) => skillFile(s.name, group))),
    ),
  ),
]);

/* ------------------------------------------------------------------- paths */

export type Path = string[];

export function resolve(cwd: Path, raw: string): Path | null {
  const input = raw.trim();
  const parts = input.split('/').filter((p) => p !== '' && p !== '.');

  // Absolute if it starts at ~ or /.
  const absolute = input.startsWith('/') || input.startsWith('~');
  let next: Path = absolute ? [] : [...cwd];

  for (const part of parts) {
    if (part === '~') {
      next = [];
      continue;
    }
    if (part === '..') {
      next.pop();
      continue;
    }
    next.push(part);
  }
  return next;
}

export function lookup(path: Path): FsNode | null {
  let node: FsNode = root;
  for (const part of path) {
    if (node.type !== 'dir') return null;
    const found: FsNode | undefined = node.children.find((c) => c.name === part);
    if (!found) return null;
    node = found;
  }
  return node;
}

export const display = (path: Path) => (path.length ? `~/${path.join('/')}` : '~');
