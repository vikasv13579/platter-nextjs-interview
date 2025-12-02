'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Lightbulb, Code, Smartphone, Palette, TrendingUp, Cloud } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="py-16">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Lightbulb className="w-8 h-8 text-[#0f4c5c] mb-3" />
              <h3 className="font-bold text-lg mb-2">Consulting</h3>
              <p className="text-gray-600">Strategic business solutions</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Code className="w-8 h-8 text-[#0f4c5c] mb-3" />
              <h3 className="font-bold text-lg mb-2">Web Development</h3>
              <p className="text-gray-600">Modern web applications</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Smartphone className="w-8 h-8 text-[#0f4c5c] mb-3" />
              <h3 className="font-bold text-lg mb-2">Mobile Apps</h3>
              <p className="text-gray-600">iOS & Android development</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Palette className="w-8 h-8 text-[#0f4c5c] mb-3" />
              <h3 className="font-bold text-lg mb-2">UI/UX Design</h3>
              <p className="text-gray-600">User-centered design</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="w-8 h-8 text-[#0f4c5c] mb-3" />
              <h3 className="font-bold text-lg mb-2">Marketing</h3>
              <p className="text-gray-600">Digital growth strategies</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Cloud className="w-8 h-8 text-[#0f4c5c] mb-3" />
              <h3 className="font-bold text-lg mb-2">Cloud Services</h3>
              <p className="text-gray-600">Scalable infrastructure</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f4c5c]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start?</h2>
          <p className="text-white/80 mb-6">Let's build something great together.</p>
          <Link href="/contact" className="inline-block bg-[#e8aa42] text-[#1a1a2e] px-6 py-3 rounded-full font-medium hover:bg-[#f4c56a]">
            Contact Us
          </Link>
        </motion.div>
      </section>
    </>
  );
}
