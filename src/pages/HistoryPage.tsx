import { useState } from 'react';
import { PageProps } from '../App';
import { proverbs } from '../data/proverbs';
import Icon from '@/components/ui/icon';

const centuries = ['XVI', 'XVII', 'XVIII', 'XIX', 'XX'];

export default function HistoryPage({ favorites, toggleFavorite }: PageProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeCentury, setActiveCentury] = useState<string>('all');

  const filtered = activeCentury === 'all'
    ? proverbs
    : proverbs.filter(p => p.century === activeCentury);

  const active = selected ? proverbs.find(p => p.id === selected) : null;

  return (
    <div className="max-w-6xl mx-auto px-6 pb-24">
      {/* Header */}
      <section className="pt-12 pb-8 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold/40" />
          <span className="font-mono text-xs text-gold/60 uppercase tracking-[0.25em]">Происхождение</span>
        </div>
        <h1 className="font-display text-5xl font-light text-foreground mb-2">
          Исторический контекст
        </h1>
        <p className="font-body text-muted-foreground text-sm max-w-lg">
          Узнайте, как и когда возникли пословицы, какие события и наблюдения их породили
        </p>
      </section>

      {/* Century Timeline */}
      <div className="mb-10 animate-fade-in">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="Clock" size={14} className="text-gold/50" />
          <span className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest">По векам</span>
        </div>
        <div className="flex items-center gap-0">
          <button
            onClick={() => setActiveCentury('all')}
            className={`px-4 py-2 text-xs font-mono border-y border-l rounded-l-sm transition-all
              ${activeCentury === 'all' ? 'bg-gold text-ink border-gold' : 'border-border text-muted-foreground hover:text-foreground'}`}
          >
            Все
          </button>
          {centuries.map((c, i) => {
            const count = proverbs.filter(p => p.century === c).length;
            return (
              <button
                key={c}
                onClick={() => setActiveCentury(c)}
                className={`px-4 py-2 text-xs font-mono border-y border-r transition-all relative
                  ${i === centuries.length - 1 ? 'rounded-r-sm' : ''}
                  ${activeCentury === c ? 'bg-gold text-ink border-gold z-10' : 'border-border text-muted-foreground hover:text-foreground'}`}
              >
                {c}
                {count > 0 && (
                  <span className={`ml-1.5 text-[9px] ${activeCentury === c ? 'text-ink/70' : 'text-muted-foreground/40'}`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-6 animate-fade-in">
        {/* List */}
        <div className="space-y-2">
          {filtered.map((proverb, i) => (
            <button
              key={proverb.id}
              onClick={() => setSelected(selected === proverb.id ? null : proverb.id)}
              className={`w-full text-left border rounded-sm p-4 transition-all duration-300 group
                ${selected === proverb.id
                  ? 'border-gold/50 bg-gold/5'
                  : 'border-border hover:border-gold/25 bg-card hover:bg-card/80'
                }`}
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="font-display italic text-lg text-foreground/90 leading-snug">
                    «{proverb.text}»
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-0.5">
                  <span className="font-mono text-[10px] text-gold/50 uppercase">{proverb.century}в</span>
                  <Icon
                    name={selected === proverb.id ? 'ChevronUp' : 'ChevronDown'}
                    size={14}
                    className="text-muted-foreground/40"
                  />
                </div>
              </div>
              {selected === proverb.id && (
                <div className="mt-4 pt-4 border-t border-border/50 animate-fade-in">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {proverb.origin}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Detail Panel */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          {active ? (
            <div className="border border-gold/20 bg-card rounded-sm p-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-gold/60 uppercase tracking-widest">{active.century} век</span>
                <div className="h-px flex-1 bg-border" />
                <button
                  onClick={() => toggleFavorite(active.id)}
                  className={`transition-all hover:scale-110 ${favorites.includes(active.id) ? 'text-gold' : 'text-muted-foreground/30 hover:text-gold/60'}`}
                >
                  <Icon name={favorites.includes(active.id) ? 'Bookmark' : 'BookmarkPlus'} size={16} fallback="Bookmark" />
                </button>
              </div>

              <blockquote className="font-display italic text-2xl font-light text-foreground leading-tight mb-6">
                «{active.text}»
              </blockquote>

              <div className="space-y-5">
                <div>
                  <div className="font-mono text-[10px] text-gold/50 uppercase tracking-widest mb-2">Значение</div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{active.meaning}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <div className="font-mono text-[10px] text-gold/50 uppercase tracking-widest mb-2">Происхождение</div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{active.origin}</p>
                </div>
                {active.englishText && (
                  <>
                    <div className="h-px bg-border" />
                    <div>
                      <div className="font-mono text-[10px] text-gold/50 uppercase tracking-widest mb-2">Английский аналог</div>
                      <p className="font-display italic text-base text-foreground/70">«{active.englishText}»</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="border border-dashed border-border rounded-sm p-12 text-center">
              <Icon name="MousePointerClick" size={24} className="text-muted-foreground/20 mx-auto mb-3" />
              <p className="font-body text-sm text-muted-foreground/40">
                Выберите пословицу, чтобы увидеть подробный контекст
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
