import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export function VideoModal({ activeVideo, onClose }) {
  // Fechar o modal com a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Bloquear scroll do fundo quando o modal estiver aberto e restaurar ao fechar
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!activeVideo) return null;

  const isMp4 = activeVideo.videoUrl && activeVideo.videoUrl.endsWith('.mp4');
  const isYoutube = activeVideo.videoUrl && (
    activeVideo.videoUrl.includes('youtube.com') ||
    activeVideo.videoUrl.includes('youtu.be') ||
    activeVideo.videoUrl.includes('embed') ||
    activeVideo.youtubeId ||
    (Array.isArray(activeVideo.category) ? activeVideo.category.includes('youtube') : activeVideo.category === 'youtube')
  );

  let iframeSrc = activeVideo.videoUrl;
  if (isYoutube && iframeSrc) {
    if (!iframeSrc.includes('autoplay=')) {
      iframeSrc += iframeSrc.includes('?') ? '&autoplay=1&rel=0' : '?autoplay=1&rel=0';
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
    >
      {/* Botão de Fechar no Topo Direito */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors duration-300 cursor-pointer z-55"
        aria-label="Fechar vídeo"
      >
        <X size={24} />
      </motion.button>

      {/* Container do Vídeo com Framer Motion Scale Animation */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()} // impede fechar ao clicar no player
        className={`relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 transition-all duration-500 w-full ${
          activeVideo.aspectRatio === '9/16'
            ? 'max-w-[420px] aspect-[9/16] h-[85vh]'
            : activeVideo.aspectRatio === '1/1' || activeVideo.aspectRatio === '1:1'
              ? 'max-w-[550px] aspect-square h-auto'
              : 'max-w-5xl aspect-video'
        }`}
      >
        {isMp4 && !isYoutube ? (
          <video
            src={activeVideo.videoUrl}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="w-full h-full object-contain bg-black"
          />
        ) : (
          <iframe
            src={iframeSrc}
            title={activeVideo.title || 'Vídeo YouTube'}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </motion.div>
    </motion.div>
  );
}

export default VideoModal;


