import { Fragment, type ReactNode } from "react";

/**
 * Renders a text string with auto-styling for retired services:
 *   - Any occurrence of "Showmax" (and the phrase that follows up to a delimiter)
 *     renders as <s class="showmax-retired"> with 50% opacity, plus a footnote
 *     marker "†" linking to a single shutdown notice.
 */

const RETIRED_PATTERN_SOURCE =
  String.raw`\bShowmax(?:\s+(?:EPL\s+(?:Season\s+Pass|Mobile|mid-rolls)|PL\s+Mobile|Premier\s+League\s+Mobile))?`;

export function SmartText({ children }: { children: string }): ReactNode {
  if (!children) return null;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  // Fresh regex each call (avoids mutating shared lastIndex)
  const pattern = new RegExp(RETIRED_PATTERN_SOURCE, "g");

  while ((match = pattern.exec(children)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <Fragment key={`t-${key++}`}>
          {children.slice(lastIndex, match.index)}
        </Fragment>,
      );
    }
    parts.push(
      <span
        key={`s-${key++}`}
        className="line-through opacity-50"
        title="Showmax is being shut down — no longer relevant for this plan"
      >
        {match[0]}
      </span>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < children.length) {
    parts.push(<Fragment key={`t-${key++}`}>{children.slice(lastIndex)}</Fragment>);
  }

  return <>{parts}</>;
}

/** Returns true if a string contains any retired-service mention worth flagging */
export function hasRetiredMention(s: string): boolean {
  return /\bShowmax\b/.test(s);
}
