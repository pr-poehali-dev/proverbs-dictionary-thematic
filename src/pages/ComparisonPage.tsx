import { useState } from 'react';
import { PageProps } from '../App';
import { proverbs } from '../data/proverbs';
import Icon from '@/components/ui/icon';

const withComparison = proverbs.filter(p => p.englishText);

export default function ComparisonPage({ favorites, toggleFavorite }: PageProps) {
  const [active, setActive] = useState<string>(withComparison[0]?.id ?? '');

  const current = withComparison.find(p => p.id === active);

  return (
    <div className="max-w-6xl mx-auto px-6 pb-24">
      {/* Header */}
      <section className="pt-12 pb-8 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold/40" />
          <span className="font-mono text-xs text-gold/60 uppercase tracking-[0.25em]">Кросс-культурный анализ</span>
        </div>
        <h1 className="font-display text-5xl font-light text-foreground mb-2">
          Русские и английские
        </h1>
        <h1 className="font-display text-5xl font-light text-gold mb-4">
          параллели
        </h1>
        <p className="font-body text-muted-foreground text-sm max-w-lg">
          Пословицы разных народов часто выражают одну мысль — посмотрите, как схожа человеческая мудрость
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-6 animate-fade-in">
        {/* List */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-muted-foreground/40 uppercase tracking-widest">{withComparison.length} пар</span>
          </div>
          {withComparison.map((proverb, i) => (
            <button
              key={proverb.id}
              onClick={() => setActive(proverb.id)}
              className={`w-full text-left border rounded-sm p-3 transition-all duration-300
                ${active === proverb.id
                  ? 'border-gold/50 bg-gold/5'
                  : 'border-border hover:border-gold/25 bg-card'
                }`}
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <p className={`font-display italic text-sm leading-snug ${active === proverb.id ? 'text-foreground' : 'text-foreground/70'}`}>
                «{proverb.text}»
              </p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-[10px]">🇷🇺</span>
                <Icon name="ArrowRight" size={10} className="text-muted-foreground/30" />
                <span className="text-[10px]">🇬🇧</span>
                <span className="font-body text-[10px] text-muted-foreground/40 truncate flex-1">
                  {proverb.englishText}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Comparison Panel */}
        <div className="lg:col-span-2">
          {current && (
            <div className="animate-fade-in" key={current.id}>
              {/* Russian */}
              <div className="border border-border bg-card rounded-sm p-8 mb-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold/60 to-gold/10" />
                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">🇷🇺</span>
                    <div>
                      <div className="font-mono text-[10px] text-gold/50 uppercase tracking-widest">Русская пословица</div>
                      <div className="font-mono text-[10px] text-muted-foreground/40">{current.century} век</div>
                    </div>
                    <div className="ml-auto">
                      <button
                        onClick={() => toggleFavorite(current.id)}
                        className={`transition-all hover:scale-110 ${favorites.includes(current.id) ? 'text-gold' : 'text-muted-foreground/30 hover:text-gold/60'}`}
                      >
                        <Icon name={favorites.includes(current.id) ? 'Bookmark' : 'BookmarkPlus'} size={16} fallback="Bookmark" />
                      </button>
                    </div>
                  </div>
                  <blockquote className="font-display italic text-2xl font-light text-foreground leading-tight mb-4">
                    «{current.text}»
                  </blockquote>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {current.meaning}
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="flex items-center justify-center gap-4 my-2 relative">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                <div className="flex items-center gap-2 border border-border bg-card rounded-full px-4 py-1.5">
                  <Icon name="ArrowUpDown" size={12} className="text-gold/50" />
                  <span className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest">аналог</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
              </div>

              {/* English */}
              <div className="border border-border bg-card rounded-sm p-8 mt-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400/40 to-blue-400/10" />
                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">🇬🇧</span>
                    <div>
                      <div className="font-mono text-[10px] text-blue-400/60 uppercase tracking-widest">Английская пословица</div>
                    </div>
                  </div>
                  <blockquote className="font-display italic text-2xl font-light text-foreground/80 leading-tight mb-4">
                    «{current.englishText}»
                  </blockquote>
                  {current.englishEquivalent && (
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {current.englishEquivalent}
                    </p>
                  )}
                </div>
              </div>

              {/* Analysis */}
              <div className="mt-4 border border-dashed border-border rounded-sm p-5">
                <div className="flex items-start gap-3">
                  <Icon name="Lightbulb" size={14} className="text-gold/50 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] text-gold/50 uppercase tracking-widest mb-2">Общая идея</div>
                    <p className="font-body text-sm text-muted-foreground/70 leading-relaxed">
                      Обе пословицы выражают схожую мудрость, несмотря на разное происхождение. 
                      Это говорит об универсальности человеческого опыта и общих ценностях разных культур.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
