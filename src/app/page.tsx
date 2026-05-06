import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SideMenu } from "@/components/side-menu";
import { ReadingProgress } from "@/components/reading-progress";
import {
  Hero,
  Overview,
  Audience,
  Strategy,
  ProductCvps,
  InvestmentModel,
  Pricing,
  ExecutionPlan,
  SponsorMap,
  VoicesAndPlayers,
  ActivationIdeas,
  Loyalty,
  CustomerJourney,
  RetailFuture,
  Timing,
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
      <ProductCvps />
      <InvestmentModel />
      <Pricing />
      <ExecutionPlan />
      <SponsorMap />
      <VoicesAndPlayers />
      <ActivationIdeas />
      <Loyalty />
      <CustomerJourney />
      <RetailFuture />
      <Timing />
      <Footer />
    </main>
  );
}
