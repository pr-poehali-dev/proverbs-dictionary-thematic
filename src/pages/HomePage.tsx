import { useState } from 'react';
import { PageProps } from '../App';
import { proverbs, themes, stats } from '../data/proverbs';
import ProverbCard from '../components/ProverbCard';
import Icon from '@/components/ui/icon';

const featured = proverbs.slice(0, 3);

export default function HomePage({ navigate, favorites, toggleFavorite, searchQuery, setSearchQuery }: PageProps) {
  const [activeSearch, setActiveSearch] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('catalog');
    }
  };

  const today = proverbs[new Date().getDate() % proverbs.length];

  return (
    <div className="max-w-6xl mx-auto px-6 pb-24">
      {/* Hero */}
      <section className="pt-20 pb-16 animate-slide-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-gold/40" />
          <span className="font-mono text-xs text-gold/60 uppercase tracking-[0.25em]">Словарь пословиц</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-light text-foreground leading-[0.95] mb-2">
          Народная
        </h1>
        <h1 className="font-display text-6xl md:text-8xl font-light text-gold leading-[0.95] mb-8">
          мудрость
        </h1>
        <p className="font-body text-muted-foreground text-lg max-w-xl leading-relaxed">
          Коллекция русских пословиц с историческим контекстом, сравнением с английскими аналогами и возможностью сохранить любимые.
        </p>

        {/* Search */}
        <form onSubmit={handleSearch} className="mt-10 max-w-lg">
          <div className={`flex items-center gap-3 border rounded-sm px-4 py-3 transition-all duration-300
            ${activeSearch ? 'border-gold/60 bg-card' : 'border-border bg-card/50 hover:border-border/80'}`}>
            <Icon name="Search" size={16} className="text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Найти пословицу..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onFocus={() => setActiveSearch(true)}
              onBlur={() => setActiveSearch(false)}
              className="flex-1 bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground/50 outline-none"
            />
            {searchQuery && (
              <button type="submit" className="text-gold/80 hover:text-gold transition-colors">
                <Icon name="ArrowRight" size={16} />
              </button>
            )}
          </div>
        </form>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
        {[
          { value: stats.total, label: 'пословиц', icon: 'Quote' },
          { value: stats.themes, label: 'тем', icon: 'Layers' },
          { value: stats.centuries, label: 'веков', icon: 'Clock' },
          { value: stats.comparisons, label: 'сравнений', icon: 'Globe' },
        ].map((stat, i) => (
          <div key={i} className="border border-border bg-card rounded-sm p-5 group hover:border-gold/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <Icon name={stat.icon} size={14} className="text-gold/50" fallback="Circle" />
              <div className="h-px flex-1 mx-3 bg-border" />
            </div>
            <div className="font-display text-4xl font-light text-gold">{stat.value}</div>
            <div className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Pословица дня */}
      <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-display text-3xl font-light">Пословица дня</h2>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs text-gold/50 uppercase tracking-widest">21 апр</span>
        </div>
        <div className="border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent rounded-sm p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/3 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="flex items-start justify-between gap-4 relative">
            <div className="flex-1">
              <blockquote className="font-display italic text-3xl font-light text-foreground leading-tight mb-1">
                "{today.text}"
              </blockquote>
              <p className="font-body text-sm text-gold/70 italic mb-4">{today.translation}</p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-2xl">
                {today.meaning}
              </p>
              <div className="flex items-center gap-4 mt-5">
                <span className="font-mono text-xs text-gold/60 uppercase tracking-widest">{today.century} век</span>
                {today.russianEquivalent && (
                  <>
                    <div className="w-px h-3 bg-border" />
                    <span className="text-xs">🇷🇺</span>
                    <span className="font-display italic text-xs text-muted-foreground/60">«{today.russianEquivalent}»</span>
                  </>
                )}
              </div>
            </div>
            <button
              onClick={() => toggleFavorite(today.id)}
              className={`mt-1 shrink-0 transition-all duration-200 hover:scale-110 ${favorites.includes(today.id) ? 'text-gold' : 'text-muted-foreground/30 hover:text-gold/60'}`}
            >
              <Icon name={favorites.includes(today.id) ? 'Bookmark' : 'BookmarkPlus'} size={20} fallback="Bookmark" />
            </button>
          </div>
        </div>
      </section>

      {/* Темы */}
      <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-display text-3xl font-light">Темы</h2>
          <div className="h-px flex-1 bg-border" />
          <button onClick={() => navigate('catalog')} className="font-mono text-xs text-gold/60 hover:text-gold transition-colors uppercase tracking-widest flex items-center gap-1">
            Все <Icon name="ArrowRight" size={12} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {themes.map(theme => {
            const count = proverbs.filter(p => p.theme === theme.id).length;
            return (
              <button
                key={theme.id}
                onClick={() => navigate('catalog')}
                className="border border-border hover:border-gold/40 bg-card hover:bg-gold/5 rounded-sm p-4 text-left transition-all duration-300 group"
              >
                <div className="text-2xl mb-2">{theme.emoji}</div>
                <div className="font-body text-sm text-foreground group-hover:text-gold/90 transition-colors">{theme.label}</div>
                <div className="font-mono text-[10px] text-muted-foreground/50 mt-1">{count} пословиц</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured */}
      <section className="animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-display text-3xl font-light">Избранные</h2>
          <div className="h-px flex-1 bg-border" />
          <button onClick={() => navigate('catalog')} className="font-mono text-xs text-gold/60 hover:text-gold transition-colors uppercase tracking-widest flex items-center gap-1">
            Смотреть все <Icon name="ArrowRight" size={12} />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {featured.map(proverb => (
            <ProverbCard
              key={proverb.id}
              proverb={proverb}
              isFavorite={favorites.includes(proverb.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </section>
    </div>
  );
}