import Icon from '@/components/ui/icon';
import { Proverb } from '../data/proverbs';

type ProverbCardProps = {
  proverb: Proverb;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  variant?: 'default' | 'compact';
};

export default function ProverbCard({ proverb, isFavorite, onToggleFavorite, variant = 'default' }: ProverbCardProps) {
  if (variant === 'compact') {
    return (
      <div className="group border border-border hover:border-gold/40 rounded-sm p-4 transition-all duration-300 bg-card hover:bg-card/80">
        <div className="flex items-start justify-between gap-3">
          <p className="font-display italic text-lg text-foreground/90 leading-snug flex-1">
            «{proverb.text}»
          </p>
          <button
            onClick={() => onToggleFavorite(proverb.id)}
            className={`shrink-0 mt-0.5 transition-all duration-200 ${isFavorite ? 'text-gold' : 'text-muted-foreground/40 hover:text-gold/60'}`}
          >
            <Icon name={isFavorite ? 'Bookmark' : 'BookmarkPlus'} size={16} fallback="Bookmark" />
          </button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground font-body line-clamp-2">{proverb.meaning}</p>
        <div className="mt-3 flex items-center gap-3">
          <span className="font-mono text-[10px] text-gold/60 uppercase tracking-widest">{proverb.century} в.</span>
          {proverb.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[10px] text-muted-foreground/50 font-body"># {tag}</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="group border border-border hover:border-gold/40 rounded-sm p-6 transition-all duration-300 bg-card hover:shadow-[0_0_30px_rgba(196,160,80,0.05)]">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.2em] pt-1">{proverb.century} век</span>
        <button
          onClick={() => onToggleFavorite(proverb.id)}
          className={`transition-all duration-200 hover:scale-110 ${isFavorite ? 'text-gold' : 'text-muted-foreground/30 hover:text-gold/60'}`}
        >
          <Icon name={isFavorite ? 'Bookmark' : 'BookmarkPlus'} size={18} fallback="Bookmark" />
        </button>
      </div>

      {/* Text */}
      <blockquote className="font-display italic text-2xl font-light text-foreground leading-tight mb-4">
        «{proverb.text}»
      </blockquote>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1 bg-border" />
        <div className="w-1 h-1 rounded-full bg-gold/40" />
        <div className="h-px w-8 bg-gold/20" />
      </div>

      {/* Meaning */}
      <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
        {proverb.meaning}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {proverb.tags.map(tag => (
          <span
            key={tag}
            className="inline-block px-2 py-0.5 text-[11px] font-mono text-muted-foreground/60 border border-border/60 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
