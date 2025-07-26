import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSettings, FiTruck, FiTool, FiRefreshCw } from 'react-icons/fi';
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline';
import Hero from '../components/Hero';

const services = [
  {
    title: 'Engineering & Consultancy',
    description: 'Comprehensive engineering solutions including mechanical, electrical, civil, instrumentation, control, safety, environment, risk audits, EIA, and incident planning.',
    icon: FiSettings,
    image: '/services4.jpg',
    bullets: [
      'Mechanical, electrical, civil, and instrumentation engineering',
      'Risk audits, environmental impact assessments, and incident planning',
      'Safety, control, and compliance consulting for oil & gas operations',
    ],
  },
  {
    title: 'Product & Equipment Supply',
    description: 'High-quality equipment including pumps, pipes, flow instruments, gas detectors, screens, and electrical components for the oil and gas industry.',
    icon: FiTruck,
    image: '/services5.jpg',
    bullets: [
      'Supply of pumps, pipes, valves, and flow instruments',
      'Gas detectors, screens, and electrical components',
      'Sourcing from leading international manufacturers',
    ],
  },
  {
    title: 'Maintenance & Operations',
    description: 'Professional O&M services for electrical and mechanical systems, ensuring safe and cost-effective plant operations.',
    icon: FiTool,
    image: '/services1.jpg',
    bullets: [
      'Operation & maintenance of plant systems and equipment',
      'Preventive and corrective maintenance programs',
      'Safe, cost-effective, and reliable plant operations',
    ],
  },
  {
    title: 'Composite & Repair Solutions',
    description: 'Specialized services including online leak sealing, reinforcement, pipe/tank repair, coatings, and cathodic protection.',
    icon: FiRefreshCw,
    image: '/services2.jpg',
    bullets: [
      'Online leak sealing and composite reinforcement',
      'Pipe and tank repair, coatings, and cathodic protection',
      'Minimizing downtime with rapid, durable solutions',
    ],
  },
];

const whyChoose = [
  {
    icon: AcademicCapIcon,
    title: 'Expertise',
    desc: 'Highly qualified team with extensive industry experience',
  },
  {
    icon: CheckBadgeIcon,
    title: 'Quality',
    desc: 'Commitment to excellence in every project we undertake',
  },
  {
    icon: LifebuoyIcon,
    title: 'Support',
    desc: '24/7 technical support and maintenance services',
  },
];

export default function Services() {
  return (
    <main className="bg-white" aria-label="Services">
      {/* HERO SECTION */}
      <Hero 
        title="What We Offer"
        subtitle="At Al Maida Oil Services, we provide advanced engineering solutions designed to meet the critical demands of the oil and gas sector. Our mission is to help our clients maximize operational efficiency, ensure asset integrity, and reduce downtime—while maintaining the highest standards of safety and quality."
        showButtons={false}
        backgroundImage="/services1.jpg"
      />

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-gray-50 py-20 px-6" aria-labelledby="why-choose-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="why-choose-title" className="text-3xl font-bold mb-12 text-center text-primary">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whyChoose.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col items-center text-center bg-white rounded-lg p-8 h-full">
                  <Icon className="h-10 w-10 text-primary mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                  <p className="text-charcoal text-base">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES GRID SECTION */}
      <section className="py-20 px-6" aria-labelledby="services-title">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet the critical demands of the oil and gas industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="relative h-64">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="mt-20 bg-[#f8f8f8] rounded-xl py-12 px-6 flex flex-col items-center text-center" aria-labelledby="cta-title">
        <h2 id="cta-title" className="text-2xl font-bold text-primary mb-6">Looking to partner with us?</h2>
        <Link
          to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-8 py-4 text-lg font-bold rounded-full bg-primary text-white hover:bg-orange-700 transition-all duration-200 ease-in-out"
        >
          Start a Conversation
        </Link>
      </section>
    </main>
  );
} 