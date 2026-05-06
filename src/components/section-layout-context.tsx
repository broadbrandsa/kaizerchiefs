"use client";

import { createContext, useContext, type ReactNode } from "react";

/**
 * SectionLayoutContext lets parent components (like Chapter) tell child
 * Section components to render in a "nested" mode — without the heavy outer
 * border / vertical padding / chapter ribbon. This keeps section components
 * fully reusable: they render at full chapter scale on standalone pages, and
 * collapse cleanly into accordion sub-items when nested inside a Chapter.
 */
type Layout = {
  nested: boolean;
};

const SectionLayoutContext = createContext<Layout>({ nested: false });

export function SectionLayoutProvider({
  nested,
  children,
}: {
  nested: boolean;
  children: ReactNode;
}) {
  return (
    <SectionLayoutContext.Provider value={{ nested }}>
      {children}
    </SectionLayoutContext.Provider>
  );
}

export function useSectionLayout(): Layout {
  return useContext(SectionLayoutContext);
}
