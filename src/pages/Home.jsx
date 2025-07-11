import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSun, FiSettings, FiGlobe } from 'react-icons/fi';

const partners = [
  { name: '3X Engineering', logo: '/3xeng.png' },
  { name: 'Polyken', logo: '/polyken.png' },
  { name: 'Stopaq', logo: '/Stopaq.jpg' },
];

const whyPartner = [
  {
    icon: <FiSun className="text-primary text-5xl mb-6" />,
    title: 'Technical Excellence',
    text: 'Our team brings decades of hands-on experience in oilfield engineering, operations, and consulting, ensuring every project is delivered to the highest standards of safety and innovation.'
  },
  {
    icon: <FiSettings className="text-primary text-5xl mb-6" />,
    title: 'Full-Spectrum Services',
    text: 'We provide end-to-end solutions: engineering, material supply, maintenance, and project management for the oil & gas sector, tailored to client needs.'
  },
  {
    icon: <FiGlobe className="text-primary text-5xl mb-6" />,
    title: 'Global Partnerships',
    text: 'Almaida is the exclusive Libyan partner for leading international brands, enabling access to world-class technology and best practices.'
  },
];

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Section 1: Welcome to Almaida Oil Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Welcome to Almaida Oil Services</h2>
          <p className="text-lg text-charcoal/90 mb-4 text-center">
            Founded in 2012 in Tripoli, Almaida Oil Services is dedicated to delivering high-quality oilfield engineering, consulting, and supply solutions across Libya and the region.
          </p>
          <p className="text-lg text-charcoal/80 text-center">
            Our multidisciplinary team combines deep technical expertise with long-standing partnerships, serving both national and international clients with a commitment to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-14 text-center">Why Partner With Us</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {whyPartner.map((item, idx) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-xl font-bold text-primary mb-4 mt-2">{item.title}</h3>
                <p className="text-charcoal/80 text-base mb-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-primary mb-6 tracking-wider text-center">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto mb-10 text-center">
            Almaida Oil Services is proud to partner with world-class technology providers and engineering innovators. Our alliances help us deliver the highest standards of quality, safety, and performance to our clients in the oil & gas sector.
          </p>
          <div className="flex flex-wrap gap-10 items-center justify-center mb-12">
            {partners.map((partner, index) => {
              let logoLink = null;
              if (partner.name === '3X Engineering') {
                logoLink = 'https://3xeng.com/';
              } else if (partner.name === 'Polyken') {
                logoLink = 'https://www.sealforlife.com/brands/polyken/';
              } else if (partner.name === 'Stopaq') {
                logoLink = 'https://stopaq.com/';
              }
              const logoImg = (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                  style={{ maxWidth: 220 }}
                />
              );
              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center"
                >
                  {logoLink ? (
                    <a href={logoLink} target="_blank" rel="noopener noreferrer" aria-label={partner.name + ' website'}>
                      {logoImg}
                    </a>
                  ) : (
                    logoImg
                  )}
                </motion.div>
              );
            })}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              to="/services"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block px-8 py-4 text-lg font-bold rounded bg-primary text-white hover:bg-primary/90 transition-colors duration-200"
            >
              See What We Offer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 