import React from 'react';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkBrown/90 border-t border-saffron/20 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-saffron mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <p className="text-gray-300">
                  REVA University<br />
                  Rukmini Knowledge Park,<br />
                  Kattigenahalli, Yelahanka,<br />
                  Bangalore - 560064
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-saffron">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:chakravyuh@reva.edu.in" className="text-gray-300 hover:text-saffron">
                  chakravyuh@reva.edu.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gold" />
                <a href="https://www.reva.edu.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-saffron">
                  www.reva.edu.in
                </a>
              </div>
            </div>
          </div>

          {/* Coordinators */}
          <div>
            <h3 className="text-2xl font-bold text-saffron mb-6">Event Coordinators</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-gold font-bold">Chair</h4>
                <p className="text-gray-300">Vardhan</p>
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
              </div>
              <div>
                <h4 className="text-gold font-bold">Vice Chair</h4>
                <p className="text-gray-300">Dhanush</p>
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-saffron mb-6">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-300 hover:text-saffron">About Us</a>
              <a href="/schedule" className="block text-gray-300 hover:text-saffron">Sacred Timeline</a>
              <a href="/register" className="block text-gray-300 hover:text-saffron">Join Battle</a>
              <a href="/sponsors" className="block text-gray-300 hover:text-saffron">Our Sponsors</a>
              <a href="/team" className="block text-gray-300 hover:text-saffron">Sacred Warriors</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-saffron/20 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Chakravyuh CTF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;