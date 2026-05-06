import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { EARNED_VOICES } from "@/data/proposal";

export function EarnedVoices() {
  return (
    <Section
      id="earned-voices"
      eyebrow="Borrowed channels"
      title="Earned voices · KC Legends + SA football media"
      intro={EARNED_VOICES.intro}
    >
      {/* KC Legends */}
      <div className="mt-2">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          KC Legends · cultural authority
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          Five voices the Amakhosi base already trusts
        </h3>
        <p className="mt-3 max-w-3xl text-sm text-[var(--kc-paper)]/75">
          Each legend has a distinct role inside the launch. Some are stadium /
          launch-day voices, some are diaspora voices, some are derby voices.
          The ask for each is small relative to the cultural weight they carry.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {EARNED_VOICES.legends.map((l) => (
            <Card key={l.name}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="outline">Legend</Badge>
                  <span className="text-[17px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
                    {l.era}
                  </span>
                </div>
                <h4 className="mt-4 text-xl font-semibold leading-snug text-[var(--kc-paper)]">
                  {l.name}
                </h4>
                <div className="mt-2 text-xs uppercase tracking-wider text-[var(--kc-gold)]">
                  {l.role}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--kc-paper)]/85">
                  {l.angle}
                </p>
                <div className="mt-4 rounded-lg bg-[var(--kc-ink)]/60 p-3">
                  <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                    The ask
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--kc-paper)]/85">
                    {l.ask}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* SA football media */}
      <div className="mt-14">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          SA football media · editorial reach
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          Press relationships, layered to land the launch
        </h3>
        <p className="mt-3 max-w-3xl text-sm text-[var(--kc-paper)]/75">
          Not all the same outlet. Soccer Laduma owns the cover; KickOff owns
          the long article; the youth-skewing TikTok-friendly editorial
          (Idiski Times) reaches the 16–29 fan over-index. Embargoed,
          layered, sequenced — the launch becomes a 4-week news cycle, not
          a one-day announcement.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {EARNED_VOICES.media.map((m) => (
            <Card key={m.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="outline">Editorial</Badge>
                </div>
                <h4 className="mt-4 text-base font-semibold leading-snug text-[var(--kc-paper)]">
                  {m.title}
                </h4>
                <div className="mt-2 text-[17px] uppercase tracking-[0.18em] text-[var(--kc-mute)]">
                  {m.role}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[var(--kc-paper)]/80">
                  {m.angle}
                </p>
                <div className="mt-4 rounded-lg bg-[var(--kc-ink)]/60 p-3">
                  <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                    The ask
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--kc-paper)]/85">
                    {m.ask}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
