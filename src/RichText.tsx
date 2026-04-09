import { Fragment, type ReactNode } from "react";

function parseBoldParts(text: string): ReactNode {
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return parts.map((part, i) => {
    const bold = /^\*\*(.+?)\*\*$/.exec(part);
    if (bold) {
      return (
        <strong key={i} className="font-semibold text-[var(--color-ink)]">
          {bold[1]}
        </strong>
      );
    }
    return part;
  });
}

/** Supports `**bold**` and `[label](url)` (non-nested). */
export function RichText({ text }: { text: string }) {
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > last) {
      out.push(
        <Fragment key={`t-${key++}`}>{parseBoldParts(text.slice(last, m.index))}</Fragment>,
      );
    }
    out.push(
      <a
        key={`a-${key++}`}
        href={m[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[var(--color-accent)] underline decoration-[var(--color-accent)]/30 underline-offset-2 transition hover:decoration-[var(--color-accent)]"
      >
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    out.push(<Fragment key={`t-${key++}`}>{parseBoldParts(text.slice(last))}</Fragment>);
  }
  return <>{out}</>;
}
