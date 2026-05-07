"use client";

import { Section } from "@/components/section";
import { TargetingMap } from "@/components/charts/targeting-map";

export function MarketingTargeting() {
  return (
    <Section
      id="marketing-targeting"
      eyebrow="Targeting · where the campaign lands"
      title="The map of marketing reach — stadiums, walls, and the digital halo"
      intro="Strategy on a map. KC's home venue is the gravity well. The 15 PSL away venues define where the brand has to land in person at least once each season. The 15 Cider Point walls anchor the highest-density township audiences in Gauteng + KZN. Digital — performance social, DStv Stream, programmatic, YouTube + Search, radio + earned PR — covers everything the physical media can't reach."
    >
      <TargetingMap />
    </Section>
  );
}
