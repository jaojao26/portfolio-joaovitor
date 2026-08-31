import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { videos, categories } from './videosData';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { VideoGrid } from './components/VideoGrid';
import { CTASection } from './components/CTASection';
import { VideoModal } from './components/VideoModal';
import { Preloader } from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);

  // Filtrar os vídeos com base na categoria selecionada (suporta formato simples e múltiplos em Array)
  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(video => 
        Array.isArray(video.category)
          ? video.category.includes(selectedCategory)
          : video.category === selectedCategory
      );

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="relative min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-red-500 selection:text-white antialiased overflow-x-hidden">
        {/* Overlay Procedural de Ruído / Film Grain (Porto Template Reference) */}
        <div 
          className="fixed inset-0 pointer-events-none z-50 opacity-[0.035] mix-blend-screen bg-noise"
          aria-hidden="true"
        />

        {/* 1. Cabeçalho / Hero */}
        <Header />

        {/* Divisor discreto */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-zinc-900 w-full"></div>
        </div>

        {/* 2. Barra de Filtros */}
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          filteredVideosCount={filteredVideos.length}
        />

        {/* 3. Grade de Vídeos (Verticais, Quadrados e Horizontais) */}
        <VideoGrid
          filteredVideos={filteredVideos}
          onSelectVideo={setActiveVideo}
        />

        {/* 4. Chamada para Ação Final */}
        <CTASection />

        {/* 5. Modal do Player de Vídeo com AnimatePresence */}
        <AnimatePresence>
          {activeVideo && (
            <VideoModal
              activeVideo={activeVideo}
              onClose={() => setActiveVideo(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
