import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/hero.jpg")' }}
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
      <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center py-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-8 max-w-3xl"
        >
          Engineering Solutions.<br />
          Equipment Supply.<br />
          Excellence Delivered.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl"
        >
          Almaida Oil Services provides cutting-edge oilfield engineering solutions and product supply, with a commitment to innovation, safety, and long-term value.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            to="/services"
            className="inline-block px-8 py-4 text-lg font-bold rounded bg-primary text-white hover:bg-primary/90 transition-colors duration-200 shadow-none"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 