import { useState } from 'react';
import { PageProps } from '../App';
import { proverbs, themes } from '../data/proverbs';
import ProverbCard from '../components/ProverbCard';
import Icon from '@/components/ui/icon';

export default function CatalogPage({ favorites, toggleFavorite, searchQuery, setSearchQuery }: PageProps) {
  const [activeTheme, setActiveTheme] = useState<string>('all');

  const filtered = proverbs.filter(p => {
    const matchTheme = activeTheme === 'all' || p.theme === activeTheme;
    const matchSearch = !searchQuery || 
      p.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.russianEquivalent?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchTheme && matchSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 pb-24">
      {/* Header */}
      <section className="pt-12 pb-8 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold/40" />
          <span className="font-mono text-xs text-gold/60 uppercase tracking-[0.25em]">Каталог</span>
        </div>
        <h1 className="font-display text-5xl font-light text-foreground mb-2">
          Все пословицы
        </h1>
        <p className="font-body text-muted-foreground text-sm">{proverbs.length} пословиц в коллекции</p>
      </section>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in">
        <div className="flex items-center gap-3 border border-border bg-card rounded-sm px-4 py-2.5 flex-1 focus-within:border-gold/50 transition-colors">
          <Icon name="Search" size={14} className="text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Поиск по тексту или значению..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground/50 outline-none"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-muted-foreground/50 hover:text-foreground transition-colors">
              <Icon name="X" size={12} />
            </button>
          )}
        </div>
        <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground/50 shrink-0">
          <Icon name="Filter" size={12} />
          <span>{filtered.length} / {proverbs.length}</span>
        </div>
      </div>

      {/* Themes */}
      <div className="flex flex-wrap gap-2 mb-10 animate-fade-in">
        <button
          onClick={() => setActiveTheme('all')}
          className={`px-3 py-1.5 rounded-sm text-xs font-body transition-all duration-200 border
            ${activeTheme === 'all'
              ? 'bg-gold text-ink border-gold font-medium'
              : 'border-border text-muted-foreground hover:border-gold/40 hover:text-foreground'
            }`}
        >
          Все темы
        </button>
        {themes.map(theme => (
          <button
            key={theme.id}
            onClick={() => setActiveTheme(theme.id)}
            className={`px-3 py-1.5 rounded-sm text-xs font-body transition-all duration-200 border flex items-center gap-1.5
              ${activeTheme === theme.id
                ? 'bg-gold text-ink border-gold font-medium'
                : 'border-border text-muted-foreground hover:border-gold/40 hover:text-foreground'
              }`}
          >
            <span>{theme.emoji}</span>
            {theme.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((proverb, i) => (
            <div
              key={proverb.id}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
            >
              <ProverbCard
                proverb={proverb}
                isFavorite={favorites.includes(proverb.id)}
                onToggleFavorite={toggleFavorite}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="font-display text-6xl text-muted-foreground/20 mb-4">∅</div>
          <p className="font-body text-muted-foreground text-sm">Пословицы не найдены</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveTheme('all'); }}
            className="mt-4 font-mono text-xs text-gold/60 hover:text-gold transition-colors uppercase tracking-widest"
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </div>
  );
}