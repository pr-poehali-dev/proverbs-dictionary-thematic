import { useState } from 'react';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import HistoryPage from './pages/HistoryPage';
import ComparisonPage from './pages/ComparisonPage';
import FavoritesPage from './pages/FavoritesPage';
import Navigation from './components/Navigation';

export type Page = 'home' | 'catalog' | 'history' | 'comparison' | 'favorites';

export type PageProps = {
  navigate: (page: Page) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageProps: PageProps = {
    navigate,
    favorites,
    toggleFavorite,
    searchQuery,
    setSearchQuery,
  };

  return (
    <div className="min-h-screen bg-background grain-overlay">
      <Navigation currentPage={currentPage} navigate={navigate} favoritesCount={favorites.length} />
      <main>
        {currentPage === 'home' && <HomePage {...pageProps} />}
        {currentPage === 'catalog' && <CatalogPage {...pageProps} />}
        {currentPage === 'history' && <HistoryPage {...pageProps} />}
        {currentPage === 'comparison' && <ComparisonPage {...pageProps} />}
        {currentPage === 'favorites' && <FavoritesPage {...pageProps} />}
      </main>
    </div>
  );
}
