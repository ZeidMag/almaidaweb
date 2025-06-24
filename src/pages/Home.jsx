import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Seal For Life', logo: '/seal-for-life.png' },
  { name: '3X Engineering', logo: '/3xeng.png' },
  { name: 'IONICS', logo: '/ionics.png' },
  { name: 'ASAS Construction', logo: '/asas.png' },
];

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="section-title">Welcome to Almaida Oil Services</h2>
            <p className="text-lg text-charcoal mb-8">
              As a leading provider of oilfield services in Libya, we combine technical expertise,
              innovative solutions, and unwavering commitment to safety to deliver exceptional
              value to our clients in the oil and gas industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="section-title mb-12">Our Trusted Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer border border-gray-100"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 w-auto object-contain mb-2"
                    style={{ maxWidth: 120 }}
                  />
                  <span className="text-sm text-charcoal font-medium mt-1">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 