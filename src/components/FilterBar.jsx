import { motion } from 'framer-motion';

export function FilterBar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-7xl mx-auto px-6 py-10"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[11px] uppercase tracking-[0.25em] font-mono text-zinc-500 font-bold">
            Trabalhos Selecionados
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-5 py-2 text-xs md:text-sm font-mono rounded-full border transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black border-white font-bold shadow-md'
                    : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                )}
                {cat.label}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default FilterBar;

