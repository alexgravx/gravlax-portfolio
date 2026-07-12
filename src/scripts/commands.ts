import {
  profile,
  education,
  skillNames,
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

const link = (href: string, label: string) =>
  `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;

const tags = (items: string[]) =>
  `<ul class="tags">${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;

export interface Command {
  name: string;
  summary: string;
  /** HTML fragment, or null for a side effect (clear). */
  run: () => string | null;
}

const registry: Command[] = [
  {
    name: 'help',
    summary: 'list available commands',
    run: () => helpOut(),
  },
  {
    name: 'whoami',
    summary: 'who is this guy',
    run: () => `<p>${esc(profile.bio)}</p>`,
  },
  {
    name: 'experience',
    summary: 'where he has worked',
    run: () =>
      experience
        .map(
          (r) => `
          <div class="entry">
            <div class="entry-head">
              <strong>${r.href ? link(r.href, r.org) : esc(r.org)}</strong>
              <span class="comment">${esc(r.start)} — ${esc(r.end)}</span>
            </div>
            <div class="comment">${esc(r.title)}</div>
            <div>${esc(r.summary)}</div>
            ${tags(r.stack)}
          </div>`,
        )
        .join(''),
  },
  {
    name: 'projects',
    summary: 'things he has built',
    run: () =>
      projects
        .map(
          (p) => `
          <div class="entry compact">
            <div class="entry-head">
              <strong>${esc(p.name)}</strong>
              <span class="comment">${esc(p.year)}</span>
            </div>
            <div>${esc(p.summary)}</div>
          </div>`,
        )
        .join('') +
      `<p class="comment" style="margin-top:var(--sp-3)"># see the projects section for details</p>`,
  },
  {
    name: 'skills',
    summary: 'what he knows',
    run: () =>
      Object.entries(skillNames)
        .map(
          ([group, items]) =>
            `<div class="entry compact"><strong>${esc(group)}</strong>${tags(items)}</div>`,
        )
        .join(''),
  },
  {
    name: 'education',
    summary: 'where he studied',
    run: () =>
      education
        .map(
          (e) => `
          <div class="entry compact">
            <div class="entry-head">
              <strong>${esc(e.school)}</strong>
              <span class="comment">${esc(e.date)}</span>
            </div>
            <div>${esc(e.degree)}${e.note ? ` <span class="comment">(${esc(e.note)})</span>` : ''}</div>
          </div>`,
        )
        .join(''),
  },
  {
    name: 'contact',
    summary: 'how to reach him',
    run: () =>
      profile.links
        .map(
          (l) =>
            `<div><span class="comment">${esc(l.label.padEnd(9))}</span>${link(l.href, l.href)}</div>`,
        )
        .join(''),
  },
  {
    name: 'cv',
    summary: 'open the resume',
    run: () =>
      `<div>${link('/resume', 'open /resume')} · ${link(resumePdf, 'download .pdf')}</div>`,
  },
  { name: 'clear', summary: 'clear the screen', run: () => null },
  {
    name: 'sudo',
    summary: '',
    run: () =>
      `<p class="warn">visitor is not in the sudoers file. This incident has been reported.</p>`,
  },
];

function helpOut(): string {
  const rows = registry
    .filter((c) => c.summary)
    .map(
      (c) =>
        `<div><span class="cmd-name">${esc(c.name.padEnd(11))}</span><span class="comment">${esc(c.summary)}</span></div>`,
    )
    .join('');
  return `${rows}<p class="comment" style="margin-top:var(--sp-3)"># tab completes · ↑/↓ history</p>`;
}

export const commandNames = registry.map((c) => c.name);

export function runCommand(input: string): { html: string | null } {
  const name = input.trim().split(/\s+/)[0]?.toLowerCase() ?? '';
  if (!name) return { html: '' };

  const cmd = registry.find((c) => c.name === name);
  if (!cmd) {
    return {
      html: `<p class="warn">command not found: ${esc(name)} — try <span class="cmd-name">help</span></p>`,
    };
  }
  return { html: cmd.run() };
}
