'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Careers', href: '#careers' },
  ],
  'Get Involved': [
    { name: 'Donate', href: '#donations' },
    { name: 'Volunteer', href: '#contact' },
    { name: 'Partner With Us', href: '#contact' },
    { name: 'Events', href: '#contact' },
  ],
  'Resources': [
    { name: 'Annual Reports', href: '#' },
    { name: 'Success Stories', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/sushil.png"
                alt="Sushil Foundation Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Sushil Foundation</h3>
                <p className="text-sm text-amber-400">Recharge Your Life</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating lasting social change through compassionate programs and
              community empowerment across Karnataka.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <span className="text-sm">info@sushilfoundation.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span className="text-sm">Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sushil Foundation. All rights
              reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-red-500" />
              <span>for a better tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
