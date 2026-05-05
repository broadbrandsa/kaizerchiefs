import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SideMenu } from "@/components/side-menu";
import {
  Hero,
  Overview,
  Audience,
  Strategy,
  InvestmentCalculator,
  SponsorMap,
  EarnedVoices,
  ActivationIdeas,
  Loyalty,
  Suppliers,
  RetailFuture,
  Waitlist,
  Timing,
  Measure,
  YearTwo,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--kc-ink)] text-[var(--kc-paper)]">
      <Header />
      <SideMenu />
      <Hero />
      <Overview />
      <Audience />
      <Strategy />
      <InvestmentCalculator />
      <SponsorMap />
      <EarnedVoices />
      <ActivationIdeas />
      <Loyalty />
      <Suppliers />
      <RetailFuture />
      <Waitlist />
      <Timing />
      <Measure />
      <YearTwo />
      <Footer />
    </main>
  );
}
