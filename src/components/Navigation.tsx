import { useState } from 'react';
import { Page } from '../App';
import Icon from '@/components/ui/icon';

type NavProps = {
  currentPage: Page;
  navigate: (page: Page) => void;
  favoritesCount: number;
};

const navItems = [
  { id: 'home' as Page, label: 'Главная', icon: 'Home' },
  { id: 'catalog' as Page, label: 'Каталог', icon: 'BookOpen' },
  { id: 'history' as Page, label: 'История', icon: 'ScrollText' },
  { id: 'comparison' as Page, label: 'Сравнение', icon: 'ArrowLeftRight' },
  { id: 'favorites' as Page, label: 'Избранное', icon: 'Bookmark' },
];

export default function Navigation({ currentPage, navigate, favoritesCount }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          className="flex flex-col leading-none hover:opacity-80 transition-opacity"
        >
          <span className="font-display text-2xl font-light text-gold tracking-wider">Мудрость</span>
          <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase">народов</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`relative px-4 py-2 text-sm font-body transition-all duration-200 rounded-sm
                ${currentPage === item.id
                  ? 'text-gold'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-4 right-4 h-px bg-gold" />
              )}
              {item.label}
              {item.id === 'favorites' && favoritesCount > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 text-[10px] bg-gold text-ink rounded-full font-mono font-medium">
                  {favoritesCount}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md animate-fade-in">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { navigate(item.id); setMenuOpen(false); }}
              className={`w-full text-left px-6 py-3.5 text-sm font-body flex items-center gap-3 transition-colors
                ${currentPage === item.id
                  ? 'text-gold bg-gold/5'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
            >
              <Icon name={item.icon} size={16} fallback="Circle" />
              {item.label}
              {item.id === 'favorites' && favoritesCount > 0 && (
                <span className="ml-auto inline-flex items-center justify-center w-5 h-5 text-[10px] bg-gold text-ink rounded-full font-mono font-medium">
                  {favoritesCount}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
