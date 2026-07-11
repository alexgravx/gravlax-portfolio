import {
  profile,
  education,
  skills,
  experience,
  projects,
  clubs,
  resumePdf,
} from '../content/resume';

/** Escape untrusted-ish text before it goes anywhere near innerHTML. */
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
  /** Returns an HTML fragment, or null to signal a side effect (e.g. clear). */
  run: () => string | null;
}

function whoami(): string {
  return `
    <p>${esc(profile.name)} — ${esc(profile.title)}, ${esc(profile.location)}.</p>
    <p>${esc(profile.bio)}</p>
  `;
}

function contact(): string {
  const rows = profile.links
    .map((l) => `<div><span class="comment">${esc(l.label.padEnd(9))}</span>${link(l.href, l.href)}</div>`)
    .join('');
  return `${rows}<div><span class="comment">${esc('resume'.padEnd(9))}</span>${link(resumePdf, 'resume_updated.pdf')}</div>`;
}

function educationOut(): string {
  return education
    .map(
      (e) => `
      <div class="entry">
        <div class="entry-head">
          <strong>${esc(e.detail)}</strong>
          <span class="comment">${esc(e.date)}</span>
        </div>
        <div>${esc(e.degree)}${e.note ? ` <span class="comment">(${esc(e.note)})</span>` : ''}</div>
        ${e.coursework ? `<div class="comment"># ${esc(e.coursework.join(', '))}</div>` : ''}
      </div>`,
    )
    .join('');
}

function roleOut(roles: typeof experience): string {
  return roles
    .map(
      (r) => `
      <div class="entry">
        <div class="entry-head">
          <strong>${r.href ? link(r.href, r.org) : esc(r.org)}</strong>
          <span class="comment">${esc(r.start)} — ${esc(r.end)}</span>
        </div>
        <div>${esc(r.title)} <span class="comment">· ${esc(r.location)}</span></div>
        <ul class="bullets">
          ${r.bullets
            .map(
              (b) => `<li>${esc(b.text)}${
                b.children
                  ? `<ul class="bullets">${b.children.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>`
                  : ''
              }</li>`,
            )
            .join('')}
        </ul>
        ${tags(r.stack)}
      </div>`,
    )
    .join('');
}

function projectsOut(): string {
  return projects
    .map(
      (p) => `
      <div class="entry">
        <div class="entry-head">
          <strong>${esc(p.name)}</strong>
          ${p.href && p.hrefLabel ? `<span>${link(p.href, p.hrefLabel)}</span>` : ''}
        </div>
        <div>${esc(p.blurb)}</div>
        ${tags(p.stack)}
      </div>`,
    )
    .join('');
}

function skillsOut(): string {
  return Object.entries(skills)
    .map(
      ([group, items]) => `
      <div class="entry">
        <div><strong>${esc(group)}</strong></div>
        ${tags(items)}
      </div>`,
    )
    .join('');
}

function cvOut(): string {
  return `
    <p>Rendered resume — printable to a single page.</p>
    <div>${link('/resume', 'open /resume')} · ${link(resumePdf, 'download .pdf')}</div>
  `;
}

const registry: Command[] = [
  { name: 'help', summary: 'list available commands', run: () => helpOut() },
  { name: 'whoami', summary: 'who is this guy', run: whoami },
  { name: 'education', summary: 'where he studied', run: educationOut },
  { name: 'experience', summary: 'where he worked', run: () => roleOut(experience) },
  { name: 'projects', summary: 'things he built', run: projectsOut },
  { name: 'skills', summary: 'what he knows', run: skillsOut },
  { name: 'clubs', summary: 'ViaRézo and other mischief', run: () => roleOut(clubs) },
  { name: 'contact', summary: 'how to reach him', run: contact },
  { name: 'cv', summary: 'open the resume', run: cvOut },
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

export interface Result {
  html: string | null;
  ok: boolean;
}

export function runCommand(input: string): Result {
  const name = input.trim().split(/\s+/)[0]?.toLowerCase() ?? '';
  if (!name) return { html: '', ok: true };

  const cmd = registry.find((c) => c.name === name);
  if (!cmd) {
    return {
      html: `<p class="warn">command not found: ${esc(name)} — try <span class="cmd-name">help</span></p>`,
      ok: false,
    };
  }
  return { html: cmd.run(), ok: true };
}
