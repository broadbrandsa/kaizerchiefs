import { type ReactNode } from "react";

/** SmartText — passes children through unchanged. */
export function SmartText({ children }: { children: string }): ReactNode {
  return <>{children}</>;
}

export function hasRetiredMention(): boolean {
  return false;
}
