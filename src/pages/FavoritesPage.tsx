import { PageProps } from '../App';
import { proverbs } from '../data/proverbs';
import ProverbCard from '../components/ProverbCard';
import Icon from '@/components/ui/icon';

export default function FavoritesPage({ navigate, favorites, toggleFavorite }: PageProps) {
  const saved = proverbs.filter(p => favorites.includes(p.id));

  return (
    <div className="max-w-6xl mx-auto px-6 pb-24">
      {/* Header */}
      <section className="pt-12 pb-8 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold/40" />
          <span className="font-mono text-xs text-gold/60 uppercase tracking-[0.25em]">Личный список</span>
        </div>
        <h1 className="font-display text-5xl font-light text-foreground mb-2">
          Мои пословицы
        </h1>
        <p className="font-body text-muted-foreground text-sm">
          {saved.length > 0
            ? `${saved.length} пословиц сохранено`
            : 'Пока пусто — добавляйте пословицы нажатием на закладку'
          }
        </p>
      </section>

      {saved.length > 0 ? (
        <>
          {/* Progress */}
          <div className="mb-10 border border-border bg-card rounded-sm p-5 animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest">Изучено</span>
              <span className="font-mono text-xs text-gold/60">{saved.length} / {proverbs.length}</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gold/60 to-gold rounded-full transition-all duration-500"
                style={{ width: `${(saved.length / proverbs.length) * 100}%` }}
              />
            </div>
            <p className="font-body text-xs text-muted-foreground/40 mt-2">
              {Math.round((saved.length / proverbs.length) * 100)}% коллекции в вашем списке
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {saved.map((proverb, i) => (
              <div
                key={proverb.id}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
              >
                <ProverbCard
                  proverb={proverb}
                  isFavorite={true}
                  onToggleFavorite={toggleFavorite}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Empty state */
        <div className="text-center py-24 animate-fade-in">
          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 border border-dashed border-border rounded-full flex items-center justify-center mx-auto">
              <Icon name="Bookmark" size={32} className="text-muted-foreground/20" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center">
              <span className="text-gold/50 text-xs">+</span>
            </div>
          </div>

          <h2 className="font-display text-3xl font-light text-foreground/60 mb-3">
            Список пуст
          </h2>
          <p className="font-body text-sm text-muted-foreground/50 max-w-xs mx-auto leading-relaxed mb-8">
            Нажмите на иконку закладки рядом с любой пословицей, чтобы добавить её в список для изучения
          </p>

          <button
            onClick={() => navigate('catalog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-ink text-sm font-body rounded-sm hover:bg-gold/90 transition-colors"
          >
            <Icon name="BookOpen" size={14} />
            Перейти к каталогу
          </button>

          {/* Hint */}
          <div className="mt-12 inline-flex items-center gap-2 border border-border/50 rounded-sm px-4 py-2.5">
            <Icon name="Info" size={12} className="text-gold/40" />
            <span className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">
              Сохранения хранятся в этой вкладке
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
