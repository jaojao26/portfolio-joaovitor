import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isEnding, setIsEnding] = useState(false);

  // Bloquear o scroll do body enquanto o Preloader estiver ativo
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 2200; // ~2.2 segundos de pré-carregamento elegante

    let animationFrameId;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // Curva de animação suave (easeOutCubic)
      const easeProgress = 1 - Math.pow(1 - progressRatio, 3);
      const currentPercentage = Math.floor(easeProgress * 100);

      setProgress(currentPercentage);

      if (progressRatio < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setIsEnding(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col justify-between p-8 md:p-16 bg-[#050505] text-white select-none pointer-events-none"
    >
      <motion.div
        animate={{ opacity: isEnding ? 0 : 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="w-full h-full flex flex-col justify-between"
      >
        {/* Topo: Nome / Branding Minimalista */}
        <div className="flex items-center justify-between text-xs tracking-widest font-mono text-zinc-400 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="font-semibold text-white tracking-wider">JOÃO VITOR</span>
          </div>
          <span className="text-zinc-500">PORTFÓLIO &copy; 2026</span>
        </div>

        {/* Centro: Contagem de Porcentagem Estilo Editorial / Framer */}
        <div className="my-auto flex flex-col items-center justify-center">
          <div className="relative font-mono font-bold tracking-tighter text-7xl md:text-9xl text-white">
            <span>{progress}</span>
            <span className="text-red-500 font-light text-4xl md:text-6xl ml-1">%</span>
          </div>
          <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mt-4">
            Carregando Experiências
          </p>
        </div>

        {/* Base: Barra de Progresso Sutil */}
        <div className="w-full max-w-md mx-auto flex flex-col gap-2">
          <div className="w-full h-[2px] bg-zinc-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Preloader;

