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

      {/* 3. OUR MISSION */}
      <Section id="our-mission" className="bg-gray-50">
        <div className="max-w-4xl">
          <SectionTitle>Our Mission</SectionTitle>
          <div className="flex items-start gap-4">
            <MdFlag className="text-5xl text-primary mt-1" />
            <p className="text-xl text-charcoal/90">
              To be the first choice in the realm of Oil & Gas Services.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. OUR VISION */}
      <Section id="our-vision">
        <div className="max-w-4xl">
          <SectionTitle>Our Vision</SectionTitle>
          <div className="flex items-start gap-4">
            <MdVisibility className="text-5xl text-primary mt-1" />
            <p className="text-xl text-charcoal/90">
              Deliver top-tier oilfield services, build strong partnerships, and nurture expert teams.
            </p>
          </div>
        </div>
      </Section>

      {/* 5. CORE VALUES */}
      <Section id="core-values" className="bg-gray-50">
        <div className="max-w-4xl">
          <SectionTitle>What We Stand For</SectionTitle>
          <ul className="space-y-4">
            {values.map((value) => (
              <li key={value} className="flex items-center text-lg">
                <MdCheckCircle className="text-primary mr-3 text-xl" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 6. OUR LEGACY */}
      <Section id="our-legacy">
        <div className="max-w-4xl">
          <SectionTitle>Our Legacy</SectionTitle>
          <div className="border-l-2 border-primary/20 pl-8 space-y-8">
            {timeline.map((item) => (
              <div key={item.label} className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 bg-primary rounded-full border-2 border-white" />
                <p className="font-bold text-primary">{item.years}</p>
                <p className="text-charcoal text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. TEAM HIGHLIGHT BAND */}
      <section id="our-people" className="py-20 bg-charcoal">
        <div className="container mx-auto px-8 text-left max-w-4xl">
          <h2 className="text-2xl font-bold uppercase text-accent tracking-wider mb-6">
            Our People Make Us
          </h2>
          <p className="text-lg text-white/80">
            With over two decades of experience, Almaida's team is made of highly skilled professionals committed to technical excellence. Our culture is responsive, resilient, and adaptive to ever-changing technologies.
          </p>
        </div>
      </section>
    </div>
  );
} 