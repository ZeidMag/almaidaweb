import { MdFlag, MdVisibility, MdCheckCircle } from 'react-icons/md';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const values = [
  'Trust and mutual respect',
  'Professional excellence',
  'Integrity and transparency',
  'Commitment',
  'Results-oriented',
];

const timeline = [
  { years: '1999–2001', label: 'Al-Haddaf Engineering' },
  { years: '2001–2006', label: 'IONICS (GWS)' },
  { years: '2006–2014', label: 'ASAS Construction' },
  { years: '2012–Present', label: 'Al-Maida Oil Services' },
];

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`py-20 ${className}`}>
    <div className="container mx-auto px-8">{children}</div>
  </section>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-bold uppercase text-primary tracking-wider mb-8">
    {children}
  </h2>
);

export default function About() {
  return (
    <div className="bg-white text-charcoal">
      {/* 1. HERO SECTION */}
      <Hero 
        title="Who We Are"
        subtitle="Founded in 2012 and headquartered in Tripoli, Libya, Al Maida Oil Services has grown into a trusted provider of engineering and technical solutions for the oil and gas industry."
        showButtons={false}
        backgroundImage="/hero.jpg"
      />

      {/* 2. COMPANY OVERVIEW */}
      <Section id="company-overview">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary">
            <div className="mb-2">Founded in 2012.</div>
            <div>Built on Expertise.</div>
          </h2>
          <p className="text-lg text-charcoal/90">
            Founded in 2012 and headquartered in Tripoli, Libya, Al Maida Oil Services has grown into a trusted provider of engineering and technical solutions for the oil and gas industry. With over a decade of experience, we have built a solid reputation for reliability, innovation, and quality across a wide range of services.
          </p>
        </div>
      </Section>

      {/* 3. CLIENTS SECTION */}
      <Section id="clients" className="bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <SectionTitle>We've been trusted by</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mt-8">
            <div className="flex justify-center">
              <img 
                src="/brega.png" 
                alt="Brega" 
                className="h-16 md:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="/logo_greenstream.png" 
                alt="Greenstream" 
                className="h-16 md:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="/mabrukoil-logo.png" 
                alt="Mabruk Oil" 
                className="h-16 md:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="/mog-logo.png" 
                alt="MOG" 
                className="h-16 md:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="/images.png" 
                alt="Images" 
                className="h-16 md:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 4. OUR MISSION & 5. OUR VISION (side by side) */}
      <Section id="mission-vision" className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-primary/10 px-6 py-3 rounded-full mb-8"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            >
              Mission & Vision
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-32 h-1 bg-primary mx-auto mb-8"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Providing the highest level of full line oilfield services to achieve customer satisfaction. Building long-term mutually beneficial relationship with business partners. Practicing fair business ethics and values. Developing and retaining highly motivated professional team of employees.
                </p>
              </div>
            </motion.div>
            
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Our company was established with a clear vision: to support the energy sector with specialized solutions that enhance operational efficiency, safety, and cost-effectiveness. We proudly serve national and international clients, delivering tailored services that meet the highest industry standards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 5 & 6. CORE VALUES + TEAM HIGHLIGHT SIDE BY SIDE */}
      <Section id="core-values-people" className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-primary/10 px-6 py-3 rounded-full mb-8"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            >
              Values & People
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-32 h-1 bg-primary mx-auto mb-8"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* What We Stand For */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">What We Stand For</h3>
                <ul className="space-y-4 text-center">
                  {values.map((value) => (
                    <li key={value} className="text-xl text-gray-700">
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            {/* Our People Make Us */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our People Make Us</h3>
                <div className="text-lg text-gray-700 leading-relaxed text-center space-y-4">
                  <p>
                    Backed by a team of qualified engineers, certified inspectors, and skilled technicians, we bring deep industry insight and hands-on expertise to every project.
                  </p>
                  <p>
                    At Al Maida Oil Services, we are committed to being more than just a service provider, we aim to be your long-term partner in success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
} 