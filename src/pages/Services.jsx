import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSettings, FiTruck, FiTool, FiRefreshCw } from 'react-icons/fi';
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline';

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
      {/* HERO SECTION - flush under nav */}
      <div className="relative min-h-[45vh] flex flex-col justify-center items-center px-6 lg:px-12 overflow-hidden bg-primary">
        <section className="relative z-10 min-h-[45vh] flex flex-col justify-center items-center w-full" aria-labelledby="services-hero-title">
          <div className="max-w-4xl px-6 lg:px-12">
            <h1 id="services-hero-title" className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              What We Offer
            </h1>
            <p className="mt-4 max-w-xl text-lg lg:text-xl text-white/90">
              Comprehensive oil &amp; gas solutions that blend technical expertise
              with innovation to meet your operational goals.
            </p>
          </div>
        </section>
        {/* Angled bottom divider */}
        <div className="h-8 bg-white clip-path-diagonal absolute bottom-0 left-0 w-full" />
      </div>

      {/* SERVICES INLINE GRID */}
      <section className="bg-gray-50 py-20 px-6" aria-labelledby="services-list-title">
        <div className="max-w-6xl mx-auto space-y-24">
          <h2 id="services-list-title" className="text-3xl font-bold mb-12 text-center text-primary">Our Service Areas</h2>
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="grid md:grid-cols-2 gap-10 items-center"
              >
                <img
                  src={service.image}
                  alt={service.title + ' illustration'}
                  className={`rounded-lg shadow-md w-full h-64 object-cover ${idx % 2 === 1 ? 'order-2 md:order-1' : 'order-1'}`}
                  loading="lazy"
                />
                <div className={`${idx % 2 === 1 ? 'order-1 md:order-2' : 'order-2'}`}> 
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 text-primary mr-3" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-primary" id={`service-title-${idx}`}>{service.title}</h3>
                  </div>
                  <p className="text-charcoal mb-4 text-base">{service.description}</p>
                  <ul className="list-disc pl-6 space-y-2 mb-2">
                    {service.bullets.map((point, i) => (
                      <li key={i} className="text-charcoal text-sm">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* WHY CHOOSE US SECTION */}
          <div className="w-full relative bg-[#f1f1f1] py-20" aria-labelledby="why-choose-title">
            <section>
              <h2 id="why-choose-title" className="text-3xl font-bold mb-12 text-center text-primary max-w-6xl mx-auto px-6">Why Choose Us?</h2>
              <div className="max-w-6xl mx-auto px-6">
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
          </div>

          {/* CTA Block */}
          <section className="mt-20 bg-[#f8f8f8] rounded-xl py-12 px-6 flex flex-col items-center text-center" aria-labelledby="cta-title">
            <h2 id="cta-title" className="text-2xl font-bold text-primary mb-6">Looking to partner with us?</h2>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 text-lg font-bold rounded-full bg-primary text-white hover:bg-orange-700 transition-all duration-200 ease-in-out"
            >
              Start a Conversation
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
} 