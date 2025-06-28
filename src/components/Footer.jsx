import { Link } from 'react-router-dom';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Almaida Oil Services</h3>
            <p className="text-gray-300">
              Engineering Solutions. Equipment Supply. Excellence Delivered.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4">Contact Us</h3>
            <address className="text-gray-300 not-italic">
              404 Office, Almadina Building<br />
              Khalifa Alzaidi Street<br />
              Tripoli, Libya<br />
              P.O. Box 4496
            </address>
            <div className="mt-4 space-y-2">
              <p className="text-gray-300">Tel: +218 213333693</p>
              <p className="text-gray-300">Fax: +218 213333693</p>
              <p className="text-gray-300">Mob: +218 917975687</p>
              <a
                href="mailto:info@almaidaoil.com"
                className="flex items-center text-gray-300 hover:text-primary transition-colors duration-200"
              >
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                info@almaidaoil.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-charcoal-light">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Almaida Oil Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 