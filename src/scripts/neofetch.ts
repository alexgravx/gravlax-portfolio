import { profile, neofetch } from '../content/resume';

/**
 * The neofetch block. Shared by two callers:
 *   - Terminal.astro, which renders it server-side as the opening output
 *   - the `home` / `neofetch` command, which rebuilds it at runtime
 *
 * Because the second path injects HTML at runtime, the .nf-* styles live in
 * theme.css (global). Astro's scoped CSS is stamped at build time and would
 * silently skip runtime-built nodes.
 */

// Backticks cannot be escaped inside String.raw without the backslash surviving
// into the output, which is what once turned the salmon into punctuation soup.
export const monogram = [
  ' █████╗  ██████╗',
  '██╔══██╗██╔════╝',
  '███████║██║  ███╗',
  '██╔══██║██║   ██║',
  '██║  ██║╚██████╔╝',
  '╚═╝  ╚═╝ ╚═════╝',
].join('\n');

export const salmon = [
  '      /"*._         _',
  "  .-*'      '*-.._.-'/",
  ' < * ))     ,       (',
  '  \'*-._\'._(__.--*"\'.\\;',
  "       ';/     ''--'",
].join('\n');

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** The visitor's real screen, macOS-style. Returns the placeholder server-side. */
export function resolution(): string {
  if (typeof window === 'undefined') return '—';
  const dpr = Math.round(devicePixelRatio * 100) / 100;
  return `${screen.width}x${screen.height}${dpr !== 1 ? `@${dpr}x` : ''}`;
}

export function renderNeofetch(): string {
  const rows = neofetch
    .map(([k, v]) => {
      const value = k === 'resolution' ? resolution() : v;
      return `<div class="nf-row"><dt>${esc(k)}</dt><dd>${esc(value)}</dd></div>`;
    })
    .join('');

  return `
    <div class="neofetch">
      <div class="nf-art" aria-hidden="true">
        <pre class="nf-mono">${esc(monogram)}</pre>
        <pre class="nf-fish">${esc(salmon)}</pre>
      </div>
      <dl class="nf-info">
        <div class="nf-head">
          <span class="nf-user">visitor</span>@<span class="nf-host">${esc(profile.handle)}</span>
        </div>
        <div class="nf-rule" aria-hidden="true">───────────────────────────────</div>
        ${rows}
      </dl>
    </div>`;
}
