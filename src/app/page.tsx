import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SideMenu } from "@/components/side-menu";
import { ReadingProgress } from "@/components/reading-progress";
import { Hero } from "@/components/sections";
import {
  ChapterOverview,
  ChapterAudienceStrategy,
  ChapterProductMoney,
  ChapterPlan,
  ChapterLifecycle,
  ChapterPhasing,
} from "@/components/chapters";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--kc-ink)] text-[var(--kc-paper)]">
      <ReadingProgress />
      <Header />
      <SideMenu />
      <Hero />
      <ChapterOverview />
      <ChapterAudienceStrategy />
      <ChapterProductMoney />
      <ChapterPlan />
      <ChapterLifecycle />
      <ChapterPhasing />
      <Footer />
    </main>
  );
}
