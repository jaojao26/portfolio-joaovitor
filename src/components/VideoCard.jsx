import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

export function VideoCard({ video, index = 0, onSelectVideo }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '0px 0px -10% 0px' });
  const [hasPassedTop, setHasPassedTop] = useState(false);

  const touchStartPos = useRef({ x: 0, y: 0 });
  const isSwiping = useRef(false);
  const lastTouchTime = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Estabilidade no Topo: Se o card subiu além do topo da janela (rect.top <= 100),
        // ele permanece renderizado/visível na memória sem piscar.
        if (rect.top <= 100) {
          setHasPassedTop(true);
        } else if (rect.top > window.innerHeight) {
          // Se o card recuou para baixo do rodapé da tela, desmarca para permitir a animação de saída e reentrada
          setHasPassedTop(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      isSwiping.current = false;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      const dx = Math.abs(e.touches[0].clientX - touchStartPos.current.x);
      const dy = Math.abs(e.touches[0].clientY - touchStartPos.current.y);
      if (dx > 10 || dy > 10) {
        isSwiping.current = true;
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) {
      lastTouchTime.current = Date.now();
      onSelectVideo(video);
    }
  };

  const handleClick = () => {
    if (Date.now() - lastTouchTime.current < 500) {
      return;
    }
    onSelectVideo(video);
  };

  const isVisible = inView || hasPassedTop;
  const colIndex = index % 4;

  // Staggered reveal pós-preloader para os cards da primeira dobra
  const baseDelay = index < 4 ? 0.65 : 0.05;
  const delay = isVisible ? baseDelay + colIndex * 0.08 : (3 - colIndex) * 0.06;

  const isVertical = video.aspectRatio === '9/16';
  const isSquare = video.aspectRatio === '1/1' || video.aspectRatio === '1:1';

  const categoryLabel = Array.isArray(video.category)
    ? video.category.join(' / ')
    : video.category;

  const posterUrl = video.poster || video.thumbnail || `/thumbnails/${video.id}.webp`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      className={`group relative bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:border-zinc-700 transition-colors duration-300 flex flex-col ${
        isVertical
          ? 'aspect-[9/16]'
          : isSquare
            ? 'aspect-square'
            : 'aspect-video'
      }`}
    >
      {/* Imagem estática leve da Thumbnail do Card */}
      <img
        src={posterUrl}
        alt={video.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-500"
      />

      {/* Gradiente sutil apenas na base para contraste do texto sem apagar a mídia */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-opacity duration-300 pointer-events-none"></div>

      {/* Topo do card: Avatar do Cliente + Nome + Categoria */}
      <div className="absolute top-4 left-4 right-4 flex items-center gap-2.5 z-10">
        <img
          src={video.clientAvatar}
          alt={video.client}
          loading="lazy"
          className="w-7 h-7 rounded-full border border-white/20 object-cover shrink-0"
        />
        <div className="flex flex-col leading-tight overflow-hidden">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-white tracking-wide">
              @{video.client}
            </span>
            {video.verified && (
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#0095f6] text-white shrink-0">
                <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
            )}
          </div>
          <span className="text-[9px] text-zinc-300 font-mono uppercase tracking-widest truncate">
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* Centro: Botão de Play no Hover com Efeito Neumórfico Sutil */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
          <Play size={20} fill="currentColor" className="ml-1 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

export default VideoCard;




