import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function CTASection() {
  return (
    <section className="bg-zinc-950 border-t border-zinc-900 py-24 px-6 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-4 text-white uppercase leading-tight"
        >
          Bora elevar o nível dos seus vídeos?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-zinc-400 font-sans mb-8 max-w-md mx-auto text-sm md:text-base leading-relaxed"
        >
          Estou disponível para novos projetos, freelas e parcerias de longo prazo. Entre em contato para fazermos um orçamento!
        </motion.p>

        <motion.a
          variants={itemVariants}
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="https://wa.me/5544997329173"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-zinc-100 font-mono font-bold text-sm tracking-wide uppercase rounded-full transition-all duration-300 shadow-xl hover:shadow-white/10"
        >
          <span>Iniciar um Orçamento</span>
          <ArrowUpRight size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
}

export default CTASection;

