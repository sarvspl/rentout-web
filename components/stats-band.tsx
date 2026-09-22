import { stats as fallbackStats } from "@/content/site";
import type { StatsContent } from "@/lib/cms";

/**
 * Splits the headline around the accent phrases so each can be coloured,
 * without the editor ever writing markup. Longest phrases first, so a phrase
 * that contains another still matches as a whole.
 */
function splitOnAccents(headline: string, phrases: string[]) {
  const wanted = phrases.filter(Boolean).sort((a, b) => b.length - a.length);
  if (wanted.length === 0) return [{ text: headline, accent: false }];

  const escaped = wanted.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");

  return headline
    .split(pattern)
    .filter((part) => part !== "")
    .map((part) => ({ text: part, accent: wanted.includes(part) }));
}

export function StatsBand({ content }: { content?: StatsContent }) {
  const stats: StatsContent = content ?? {
    headline: fallbackStats.headline.map((part) => part.text).join(""),
    accentPhrases: fallbackStats.headline.filter((part) => part.accent).map((part) => part.text),
    figures: fallbackStats.figures,
  };

  const parts = splitOnAccents(stats.headline, stats.accentPhrases);

  return (
    <section className="shell pb-[50px] pt-[6px] lg:pb-[70px]">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,620px)_1fr] lg:gap-12">
        <p className="max-w-[620px] text-[clamp(18px,2vw,24px)] font-medium leading-[1.5] text-ink">
          {parts.map((part, index) => (
            <span key={index} className={part.accent ? "text-brand" : undefined}>
              {part.text}
            </span>
          ))}
        </p>

        <div className="grid grid-cols-2 gap-6 self-start lg:gap-12 lg:pl-6">
          {stats.figures.map((figure) => (
            <div key={`${figure.value}-${figure.label}`}>
              <p className="text-[clamp(28px,3.5vw,44px)] font-bold leading-none text-ink">
                {figure.value}
              </p>
              <p className="mt-2.5 text-[13px] text-ink/70 lg:text-[15px]">{figure.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
