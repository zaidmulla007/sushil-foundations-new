'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
} from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-white to-gray-50 scroll-mt-20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to learn more? We&apos;d love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Our Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Address</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              #23 D Block Second Floor,<br />
              Shinde Complex Neeligin Road,<br />
              Hubli-580029, Karnataka, INDIA
            </p>
          </motion.div>

          {/* Email Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <a
              href="mailto:info@swarabindu.com"
              className="text-amber-600 hover:text-amber-700 block mb-1 transition-colors"
            >
              info@swarabindu.com
            </a>
            <a
              href="https://www.sushilfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-amber-600 flex items-center justify-center gap-1 transition-colors"
            >
              <Globe size={16} />
              www.sushilfoundation.org
            </a>
          </motion.div>

          {/* Call Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <a
              href="tel:+919243788888"
              className="text-amber-600 hover:text-amber-700 text-lg font-semibold block mb-1 transition-colors"
            >
              +91-09243788888
            </a>
            <p className="text-gray-500 text-sm">Monday-Saturday (9am-5pm)</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-xl max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Send us a Message
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors resize-none"
                placeholder="Enter your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
