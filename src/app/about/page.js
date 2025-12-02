'use client';
import { motion } from 'framer-motion';
import { Target, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <>
      <div className="container py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          About Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-4 max-w-2xl"
        >
          We are a digital agency focused on building modern solutions for businesses.
          Since 2016, we have helped companies transform their digital presence.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-10 max-w-2xl"
        >
          Our team combines creativity with technical expertise to deliver results.
        </motion.p>

        <h2 className="text-2xl font-bold mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-10 m-2">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <Target className="w-8 h-8 text-[#e8aa42] mb-3" />
            <h3 className="font-bold mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">We push boundaries with new ideas.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <Award className="w-8 h-8 text-[#e8aa42] mb-3" />
            <h3 className="font-bold mb-2">Quality</h3>
            <p className="text-gray-600 text-sm">Excellence in every project.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <Users className="w-8 h-10 text-[#e8aa42] mb-3" />
            <h3 className="font-bold mb-2">Transparency</h3>
            <p className="text-gray-600 text-sm">Honest and open communication.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
