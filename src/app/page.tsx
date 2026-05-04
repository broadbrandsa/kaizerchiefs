import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Hero,
  Overview,
  MarketContext,
  Audience,
  Strategy,
  TierComparison,
  SponsorMap,
  ActivationIdeas,
  Loyalty,
  Suppliers,
  RetailFuture,
  Timing,
  Measure,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--kc-ink)] text-[var(--kc-paper)]">
      <Header />
      <Hero />
      <Overview />
      <MarketContext />
      <Audience />
      <Strategy />
      <TierComparison />
      <SponsorMap />
      <ActivationIdeas />
      <Loyalty />
      <Suppliers />
      <RetailFuture />
      <Timing />
      <Measure />
      <Footer />
    </main>
  );
}
