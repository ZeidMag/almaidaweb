import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/80" />
      </div>
      {/* Content */}
      <div className="relative w-full container-custom z-10">
        <div className="flex flex-col justify-center h-full max-w-3xl mx-auto">
          <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm shadow-lg">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
            >
              Almaida Oil Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-accent font-semibold mb-8"
            >
              Engineering Solutions. Equipment Supply. Excellence Delivered.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-charcoal mb-12 max-w-2xl"
            >
              Almaida Oil Services provides cutting-edge oilfield engineering solutions and product supply,
              with a commitment to innovation, safety, and long-term value.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/services"
                className="btn btn-primary inline-block text-lg"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 