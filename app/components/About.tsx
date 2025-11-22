'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Shield, Globe } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-10 bg-white scroll-mt-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Sushil Foundation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging awareness gaps and creating social change across Karnataka
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073"
                alt="Community gathering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* <h3 className="text-3xl font-bold text-gray-900 mb-6">
              About US
            </h3> */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
              The population of Karnataka has access to numerous institutions and services that ensure a healthy and secure lifestyle. However, many people are unaware of these facilities and services. This lack of knowledge leaves a portion of the population in poor and unhappy conditions.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
              Our aim is to assist these individuals by providing basic information about the availability of such helpful services, making a positive difference in their lives. This organization was created with the purpose of working with others to overcome obstacles such as poverty, unemployment, and illiteracy. We believe that together, we can advance the cause of humanity.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 bg-amber-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-amber-600">2015</p>
                <p className="text-sm text-gray-600">Established</p>
              </div>
              <div className="flex-1 bg-amber-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-amber-600">100+</p>
                <p className="text-sm text-gray-600">Villages Reached</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Lightbulb,
              title: 'Innovation',
              description:
                'Implementing creative solutions to address complex social challenges',
              color: 'from-amber-500 to-yellow-500',
            },
            {
              icon: Shield,
              title: 'Integrity',
              description:
                'Operating with transparency and accountability in all our programs',
              color: 'from-amber-400 to-amber-500',
            },
            {
              icon: Globe,
              title: 'Impact',
              description:
                'Creating sustainable change that transforms entire communities',
              color: 'from-red-500 to-pink-500',
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div
                className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center`}
              >
                <value.icon className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
