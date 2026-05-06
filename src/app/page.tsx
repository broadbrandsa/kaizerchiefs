import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SideMenu } from "@/components/side-menu";
import { ReadingProgress } from "@/components/reading-progress";
import { QuickJump } from "@/components/quick-jump";
import {
  Hero,
  Overview,
  Audience,
  Strategy,
  InvestmentModel,
  ExecutionPlan,
  SponsorMap,
  EarnedVoices,
  PlayerChannel,
  ActivationIdeas,
  Loyalty,
  CustomerJourney,
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
      <ReadingProgress />
      <Header />
      <SideMenu />
      <Hero />
      <Overview />
      <Audience />
      <Strategy />
      <InvestmentModel />
      <ExecutionPlan />
      <SponsorMap />
      <EarnedVoices />
      <PlayerChannel />
      <ActivationIdeas />
      <Loyalty />
      <CustomerJourney />
      <Suppliers />
      <RetailFuture />
      <Waitlist />
      <Timing />
      <Measure />
      <YearTwo />
      <Footer />
      <QuickJump />
    </main>
  );
}
