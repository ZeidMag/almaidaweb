import { Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Almaida Oil Services</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Engineering Solutions. Equipment Supply. Excellence Delivered.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
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
            <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <address className="text-gray-300 not-italic">
                  404 Office, Almadina Building<br />
                  Khalifa Alzaidi Street<br />
                  Tripoli, Libya<br />
                  P.O. Box 4496
                </address>
              </div>
              
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+218 213333693</p>
                  <p>+218 917975687</p>
                  <p>+218 912189029</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@almaidaoil.com"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  info@almaidaoil.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Almaida Oil Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 