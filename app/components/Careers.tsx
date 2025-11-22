'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Upload, Send } from 'lucide-react';

export default function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="careers" className="py-07 bg-white scroll-mt-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Careers
            </span>
          </h2>
        </motion.div>

        {/* Career Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border-2 border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Career Application Form
          </h3>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name and Surname
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                placeholder="Enter your name and surname"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile No
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                placeholder="Enter your Mobile No"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position Applying For
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                placeholder="Position Applying For"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors resize-none"
                placeholder="Additional Information"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload your CV
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 px-6 py-3 bg-gray-100 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                  <Upload size={20} className="text-gray-600" />
                  <span className="text-gray-600 font-medium">Choose File</span>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </label>
                <span className="text-gray-500 text-sm">No file chosen</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Submit Application
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
