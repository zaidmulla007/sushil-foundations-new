'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Building, MapPin, Globe, Settings, Smile, Tent, Eye, HandHeart } from 'lucide-react';
import Image from 'next/image';

const organizationStructure = [
  {
    icon: Users,
    title: 'Survekshan Supervisors',
    description: 'Every gram panchayat has a social worker, these supervisors are in charge of spreading awareness to people regarding health, insurance, banking options and others.',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Building,
    title: 'Taluka Officer',
    description: '15 such gram panchayats will be governed by 1 taluk official. Taluka officials take full responsibility.',
    color: 'from-amber-400 to-amber-500',
  },
  {
    icon: MapPin,
    title: 'District Co-ordinators',
    description: 'All these talukas which come under a district will be headed by district co-ordinator.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Globe,
    title: 'Zonal Head Officers',
    description: '4 districts will be grouped into 1 zone which will be looked after by 1 zonal head officer.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Settings,
    title: 'Management',
    description: 'All the zonal head officers will be managed by the main officials of the sansthan/ the management.',
    color: 'from-red-600 to-red-500',
  },
];

const stats = [
  {
    icon: Smile,
    number: '60,50,000+',
    label: 'Happy Clients',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Tent,
    number: '60,000+',
    label: 'Camp',
    color: 'from-amber-400 to-amber-500',
  },
  {
    icon: Eye,
    number: '3,00,000+',
    label: 'Number of Visitors',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: HandHeart,
    number: '6,000+',
    label: 'Our Services',
    color: 'from-red-500 to-pink-500',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="how-it-works" className="py-2 bg-gray-50 scroll-mt-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative w-1/4 max-w-4xl mx-auto mb-8 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/howitworks.png"
              alt="How It Works"
              width={200}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our organizational structure ensures effective reach and impact across all communities
          </p>
        </motion.div>

        {/* Organization Structure */}
        <div className="relative mb-20">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-red-500 rounded-full" />

          {organizationStructure.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <div className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-lg`}>
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-justify">{item.description}</p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex w-6 h-6 bg-white border-4 border-amber-500 rounded-full z-10 flex-shrink-0" />

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Mission and Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mission &{' '}
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
                    <Globe className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-justify">
                  The primary mission of our sansthan is social work. We look forward to enhance human well-being and help to meet the basic human needs in particular attention is given to the needs and empowerment of the people who are vulnerable and living in poverty. A historic and defining feature of our sansthan is professional focus on individual well-being. The fundamental of our service is attention to the environmental forces that create, contribute and address to the problems. We shall promote social justice and social changes on behalf of our highly efficient staff.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center">
                    <Eye className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-justify">
                  We are social workers and are sensitive to cultural and ethnic diversity. We strive to eliminate all types of discrimination such as poverty community, education etc. We seek to enhance the capacity of people and address to their needs and shall also seek forward to promote responsiveness of organization, community and other social institutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="text-white" size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
