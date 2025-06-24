import { CheckCircleIcon, StarIcon, EyeIcon, UsersIcon, BuildingOffice2Icon, Cog6ToothIcon, ChartBarIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const timeline = [
  {
    years: '1999–2001',
    label: 'Al-Haddaf Engineering',
    icon: <BuildingOffice2Icon className="h-6 w-6 text-primary" />,
  },
  {
    years: '2001–2006',
    label: 'IONICS (GWS)',
    icon: <Cog6ToothIcon className="h-6 w-6 text-primary" />,
  },
  {
    years: '2006–2014',
    label: 'ASAS Construction',
    icon: <ChartBarIcon className="h-6 w-6 text-primary" />,
  },
  {
    years: '2012–Present',
    label: 'Al-Maida Oil Services',
    icon: <UsersIcon className="h-6 w-6 text-primary" />,
  },
];

const values = [
  'Trust and mutual respect',
  'Professional excellence',
  'Integrity and transparency',
  'Commitment',
  'Results-oriented',
];

export default function About() {
  return (
    <div className="bg-white text-charcoal">
      {/* Hero Section */}
      <section className="relative min-h-[350px] flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: 'url("/hero.jpg"), linear-gradient(0deg, #fff 80%, #fff8 100%)' }}>
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Who We Are
          </h1>
          <div className="flex flex-col items-center">
            <span className="text-lg md:text-2xl font-medium mb-2">Doing Things Differently in Oil &amp; Gas Services</span>
            <span className="block w-20 h-1 rounded bg-primary mx-auto mb-2" />
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Founded in 2012, Based in Tripoli</h2>
          </div>
          <div>
            <p className="text-lg">
              Al-Maida Oil Services is a privately held Libyan company, delivering multi-discipline engineering, consulting, material supply, and maintenance services across the oil &amp; gas industry. We work to bring operations to their optimal state, reduce risk, and build lasting partnerships with clients.
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline - Our Legacy */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-primary">Our Legacy</h2>
          {/* Horizontal Timeline */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-0">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 z-0" style={{ transform: 'translateY(-50%)' }} />
            {timeline.map((item, idx) => (
              <div key={item.years} className="relative z-10 flex flex-col items-center md:w-1/4 mb-8 md:mb-0">
                {/* Icon above */}
                <div className="mb-2 bg-white rounded-full p-2 shadow-md border-2 border-primary">
                  {item.icon}
                </div>
                {/* Dot for timeline */}
                <div className="hidden md:block w-4 h-4 rounded-full bg-primary border-4 border-white mb-2" />
                {/* Years and label below */}
                <div className="font-bold text-primary text-lg text-center">{item.years}</div>
                <div className="text-center text-base mb-2">{item.label}</div>
                {/* Vertical line for mobile */}
                {idx < timeline.length - 1 && (
                  <div className="block md:hidden w-1 h-12 bg-primary/20 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values - Our Foundation */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-primary">Our Foundation</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Mission Card */}
            <div className="bg-white border-t-4 border-primary rounded-lg shadow p-6 flex flex-col items-center">
              <StarIcon className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-bold text-lg mb-2 text-primary">Mission</h3>
              <p className="text-center">To be the first choice in the realm of Oil &amp; Gas Services.</p>
            </div>
            {/* Vision Card */}
            <div className="bg-white border-t-4 border-primary rounded-lg shadow p-6 flex flex-col items-center">
              <EyeIcon className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-bold text-lg mb-2 text-primary">Vision</h3>
              <p className="text-center">Deliver top-tier oilfield services, build strong partnerships, and nurture expert teams.</p>
            </div>
          </div>
          {/* Core Values Card - full width */}
          <div className="bg-white border-t-4 border-primary rounded-lg shadow p-6 flex flex-col items-center">
            <CheckCircleIcon className="h-8 w-8 text-primary mb-2" />
            <h3 className="font-bold text-lg mb-2 text-primary">Core Values</h3>
            <ul className="mt-2 space-y-2 text-left max-w-xl w-full mx-auto">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-2">
                  <span className="text-primary">✅</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our People Make Us</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded" />
          <p className="text-lg text-accent max-w-2xl mx-auto mb-8">
            With over two decades of experience, Almaida's team is made of highly skilled professionals committed to technical excellence. Our service culture is responsive, resilient, and adaptive to ever-changing technologies.
          </p>
          {/* Optional: Team grid for future headshots */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="bg-white/10 rounded-lg p-4 text-white">Headshot Placeholder</div>
          </div> */}
        </div>
      </section>
    </div>
  );
} 