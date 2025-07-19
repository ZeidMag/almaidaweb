import { MdFlag, MdVisibility, MdCheckCircle } from 'react-icons/md';

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
      <header className="relative flex items-center justify-center py-32 bg-primary">
        <div className="w-full text-center">
          <h1 className="text-4xl font-bold uppercase text-white tracking-wider">
            Who We Are
          </h1>
          <p className="mt-2 text-lg text-white/90">
            Doing Things Differently in Oil & Gas Services
          </p>
        </div>
      </header>

      {/* 2. COMPANY OVERVIEW */}
      <Section id="company-overview">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary">
            Founded in Tripoli. Built on Expertise.
          </h2>
          <p className="text-lg text-charcoal/90">
            Al-Maida Oil Services was established in 2012 in Tripoli, Libya, bringing decades of hands-on experience to the oil & gas sector. We focus on optimizing operations, supplying quality materials, and sustaining critical infrastructure with excellence.
          </p>
        </div>
      </Section>

      {/* 3. OUR MISSION & 4. OUR VISION (side by side) */}
      <Section id="mission-vision" className="bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div>
            <SectionTitle>Our Mission</SectionTitle>
            <div className="flex items-start gap-4">
              <MdFlag className="text-5xl text-primary mt-1" />
              <p className="text-xl text-charcoal/90">
                To be the first choice in the realm of Oil & Gas Services.
              </p>
            </div>
          </div>
          {/* Vision */}
          <div>
            <SectionTitle>Our Vision</SectionTitle>
            <div className="flex items-start gap-4">
              <MdVisibility className="text-5xl text-primary mt-1" />
              <p className="text-xl text-charcoal/90">
                Deliver top-tier oilfield services, build strong partnerships, and nurture expert teams.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5 & 6. CORE VALUES + TEAM HIGHLIGHT SIDE BY SIDE */}
      <Section id="core-values-people" className="bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          {/* What We Stand For */}
          <div className="flex flex-col justify-center">
            <div className="text-center py-12">
              <SectionTitle>What We Stand For</SectionTitle>
              <ul className="space-y-4 inline-block text-left mx-auto">
                {values.map((value) => (
                  <li key={value} className="flex items-center text-lg">
                    <MdCheckCircle className="text-primary mr-3 text-xl" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Our People Make Us */}
          <div className="flex flex-col justify-center">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold uppercase text-primary tracking-wider mb-6">
                Our People Make Us
              </h2>
              <p className="text-lg text-charcoal/80">
                With over two decades of experience, Almaida's team is made of highly skilled professionals committed to technical excellence. Our culture is responsive, resilient, and adaptive to ever-changing technologies.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
} 