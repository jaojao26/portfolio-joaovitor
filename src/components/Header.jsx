import { motion } from 'framer-motion';
import { Instagram, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Header() {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-6 pt-20 pb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-8"
    >
      <div className="max-w-2xl">
        {/* Indicador REC Piscando */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="text-[10px] tracking-[0.2em] text-red-500 font-mono font-bold uppercase">
            REC PORTFOLIO
          </span>
        </motion.div>

        {/* Título Principal Display Porto Template */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tighter uppercase text-white mb-4 leading-none"
        >
          João Vitor
        </motion.h1>

        {/* Subtítulo Técnico */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl font-mono font-medium text-zinc-400 mb-2 tracking-tight"
        >
          Edição de Vídeo / Filmmaker
        </motion.p>

        {/* Bio Editorial */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-zinc-400 font-sans leading-relaxed max-w-lg"
        >
          Atuação prática em conteúdos digitais, podcasts, criativos para tráfego e outros. Da iluminação e captação à edição no Premiere, trabalho com foco em transformar ideias em vídeos que engajam, trazendo o uso de IA no fluxo para potencializar o resultado. Confira alguns trabalhos selecionados abaixo.
        </motion.p>
      </div>

      {/* Links de Contato com Animação Reversível */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
        <motion.a
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://wa.me/5544997329173"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs md:text-sm font-mono font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-300"
        >
          <MessageCircle size={16} className="text-green-500" />
          <span>WhatsApp</span>
          <ArrowUpRight size={14} className="opacity-55" />
        </motion.a>
        <motion.a
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://www.instagram.com/eu2jao/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs md:text-sm font-mono font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-300"
        >
          <Instagram size={16} className="text-pink-500" />
          <span>Instagram</span>
          <ArrowUpRight size={14} className="opacity-55" />
        </motion.a>
        <motion.a
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="mailto:joaovi.tor@hotmail.com"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs md:text-sm font-mono font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-300"
        >
          <Mail size={16} className="text-blue-400" />
          <span>E-mail</span>
        </motion.a>
      </motion.div>
    </motion.header>
  );
}

export default Header;



