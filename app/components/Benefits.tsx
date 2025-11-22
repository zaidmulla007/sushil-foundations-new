'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield,
  Dumbbell,
  Brain,
  Activity,
  Sparkles,
  ShieldAlert,
} from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Immune System',
    description: 'The immune system keeps a record of every microbe it has ever defeated, in types of white blood cells (B- and T-lymphocytes) known as memory cells. This means it can recognise and destroy the microbe quickly if it enters the body again, before it can multiply and make you feel sick.',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Dumbbell,
    title: 'Physical Strength',
    description: 'Increases Physical strength and growth of the baby. Physical strength is the measure of a human\'s exertion of force on physical objects. Increasing physical strength is the goal of strength training.',
    color: 'from-amber-400 to-amber-500',
  },
  {
    icon: Brain,
    title: 'Analysis',
    description: 'Grasping power, Analysis power and Recall memory becomes sharper. The definition of analysis is the process of breaking down a something into its parts to learn what they do and how they relate to one another.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Activity,
    title: 'Digestive',
    description: 'Improves Digestive power. The digestive system is made up of organs that are important for digesting food and liquids. These include the mouth, pharynx (throat), esophagus, stomach, small intestine, large intestine, rectum, and anus.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'Skin',
    description: 'Tones up Skin colour and Texture. The skin protects us from microbes and the elements, helps regulate body temperature, and permits the sensations of touch, heat, and cold.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: ShieldAlert,
    title: 'Allergies',
    description: 'Protects the baby from different kinds of Allergies. Allergy occurs when a person reacts to substances in the environment that are harmless to most people. These substances are known as allergens.',
    color: 'from-red-500 to-pink-500',
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="benefits" className="py-07 bg-white scroll-mt-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benefits of{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Swarnabindu Prashana
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the amazing health benefits of this traditional Ayurvedic practice for children
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 mb-4 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center`}>
                <benefit.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 text-justify">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us in our mission to create positive change in communities
            across Karnataka
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
            Partner With Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
