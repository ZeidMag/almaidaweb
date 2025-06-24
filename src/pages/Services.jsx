import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import {
  WrenchScrewdriverIcon,
  CubeIcon,
  CogIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Engineering & Consultancy',
    description: 'Comprehensive engineering solutions including mechanical, electrical, civil, instrumentation, control, safety, environment, risk audits, EIA, and incident planning.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Product & Equipment Supply',
    description: 'High-quality equipment including pumps, pipes, flow instruments, gas detectors, screens, and electrical components for the oil and gas industry.',
    icon: CubeIcon,
  },
  {
    title: 'Maintenance & Operations',
    description: 'Professional O&M services for electrical and mechanical systems, ensuring safe and cost-effective plant operations.',
    icon: CogIcon,
  },
  {
    title: 'Composite & Repair Solutions',
    description: 'Specialized services including online leak sealing, reinforcement, pipe/tank repair, coatings, and cathodic protection.',
    icon: WrenchIcon,
  },
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold mb-6">What We Offer</h1>
            <p className="text-xl text-gray-200">
              We provide comprehensive solutions for the oil and gas industry,
              combining technical expertise with innovative approaches to meet
              your operational needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mb-8">
              With decades of experience in the oil and gas industry, we bring
              expertise, reliability, and innovation to every project. Our team
              of skilled professionals ensures the highest standards of quality
              and safety in all our services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Expertise</h3>
                <p className="text-gray-600">
                  Highly qualified team with extensive industry experience
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-600">
                  Commitment to excellence in every project we undertake
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Support</h3>
                <p className="text-gray-600">
                  24/7 technical support and maintenance services
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 