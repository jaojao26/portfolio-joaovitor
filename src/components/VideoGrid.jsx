import { motion } from 'framer-motion';
import { VideoCard } from './VideoCard';

const sectionTitleVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function VideoGrid({ filteredVideos, onSelectVideo }) {
  // Separar os vídeos filtrados nos 3 formatos dinâmicos
  const verticalVideos = filteredVideos.filter(v => v.aspectRatio === '9/16');
  const squareVideos = filteredVideos.filter(v => v.aspectRatio === '1/1' || v.aspectRatio === '1:1');
  const horizontalVideos = filteredVideos.filter(v => v.aspectRatio === '16/9');

  if (filteredVideos.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="py-20 text-center text-zinc-500 font-mono text-sm">
          Nenhum vídeo cadastrado nesta categoria ainda.
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 pb-32">
      <div className="flex flex-col gap-16">
        
        {/* Seção A: Vídeos Verticais (Reels & Shorts - 9:16) */}
        {verticalVideos.length > 0 && (
          <section>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={sectionTitleVariants}
              className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 mb-6 flex items-center gap-2"
            >
              <span>Vídeos Verticais (Reels &amp; Shorts - 9:16)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
              {verticalVideos.map((video, index) => (
                <VideoCard key={video.id} index={index} video={video} onSelectVideo={onSelectVideo} />
              ))}
            </div>
          </section>
        )}

        {/* Seção B: Vídeos Quadrados (Feed / Posts - 1:1) */}
        {squareVideos.length > 0 && (
          <section>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={sectionTitleVariants}
              className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 mb-6 flex items-center gap-2"
            >
              <span>Vídeos Quadrados (Feed / Posts - 1:1)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
              {squareVideos.map((video, index) => (
                <VideoCard key={video.id} index={index} video={video} onSelectVideo={onSelectVideo} />
              ))}
            </div>
          </section>
        )}

        {/* Seção C: Vídeos Horizontais (YouTube & Criativos - 16:9) */}
        {horizontalVideos.length > 0 && (
          <section>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={sectionTitleVariants}
              className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 mb-6 flex items-center gap-2"
            >
              <span>Vídeos Horizontais (YouTube &amp; Criativos - 16:9)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {horizontalVideos.map((video, index) => (
                <VideoCard key={video.id} index={index} video={video} onSelectVideo={onSelectVideo} />
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}

export default VideoGrid;



