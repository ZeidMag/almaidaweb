import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSun, FiSettings, FiGlobe } from 'react-icons/fi';

const partners = [
  { name: '3X Engineering', logo: '/3xeng.png' },
  { name: 'Polyken', logo: '/polyken.png' },
  { name: 'Stopaq', logo: '/Stopaq.jpg' },
];

const clients = [
  { name: 'Brega', logo: '/brega.png' },
  { name: 'Greenstream', logo: '/logo_greenstream.png' },
  { name: 'Mabruk Oil', logo: '/mabrukoil-logo.png' },
  { name: 'MOG', logo: '/mog-logo.png' },
  { name: 'Images', logo: '/images.png' },
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

      {/* Section 1: Company Overview */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-primary/10 px-6 py-3 rounded-full mb-8"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            >
              <div className="mb-2">Precision Solutions</div>
              <div>for the Oil & Gas Industry</div>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-32 h-1 bg-primary mx-auto mb-8"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-lg lg:text-xl text-gray-700 leading-relaxed text-justify"
              >
                At Al Maida Oil Services, we provide advanced engineering solutions designed to meet the critical demands of the oil and gas sector. Our mission is to help our clients maximize operational efficiency, ensure asset integrity, and reduce downtime—while maintaining the highest standards of safety and quality.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients/Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              We're proud to work with leading companies in the oil & gas industry, delivering excellence across Libya and the region.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Partner With Us</h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              Our commitment to excellence and innovation sets us apart in the oil & gas industry.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {whyPartner.map((item, idx) => (
              <motion.div 
                key={item.title} 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {item.icon}
                <h3 className="text-xl font-bold text-primary mb-4 mt-2">{item.title}</h3>
                <p className="text-charcoal/80 text-base mb-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Technology Partners</h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto mb-10">
              Almaida Oil Services is proud to partner with world-class technology providers and engineering innovators. Our alliances help us deliver the highest standards of quality, safety, and performance to our clients in the oil & gas sector.
            </p>
          </div>
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
          <div className="text-center">
            <Link
              to="/services"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block px-8 py-4 text-lg font-bold rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 