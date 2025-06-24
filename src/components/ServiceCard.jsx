import { motion } from 'framer-motion';

export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-secondary rounded-lg">
          <Icon className="h-6 w-6 text-charcoal" />
        </div>
        <h3 className="text-xl font-semibold ml-3 text-primary">{title}</h3>
      </div>
      <p className="text-charcoal">{description}</p>
    </motion.div>
  );
} 