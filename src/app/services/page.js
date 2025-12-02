"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb,
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Cloud,
} from "lucide-react";

export default function Services() {
  return (
    <>
      <div className="container py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-10 max-w-2xl"
        >
          We offer comprehensive digital services to help your business grow.
        </motion.p>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <Lightbulb className="w-8 h-8 text-[#0f4c5c] mb-3" />
            <h3 className="font-bold text-lg mb-2">Consulting</h3>
            <p className="text-gray-600 text-sm">
              Strategic business solutions tailored to your needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <Code className="w-8 h-8 text-[#0f4c5c] mb-3" />
            <h3 className="font-bold text-lg mb-2">Web Development</h3>
            <p className="text-gray-600 text-sm">
              Modern, fast, and responsive web applications.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <Smartphone className="w-8 h-8 text-[#0f4c5c] mb-3" />
            <h3 className="font-bold text-lg mb-2">Mobile Apps</h3>
            <p className="text-gray-600 text-sm">
              Native iOS and Android app development.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <Palette className="w-8 h-8 text-[#0f4c5c] mb-3" />
            <h3 className="font-bold text-lg mb-2">UI/UX Design</h3>
            <p className="text-gray-600 text-sm">
              Beautiful, user-centered design solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <TrendingUp className="w-8 h-8 text-[#0f4c5c] mb-3" />
            <h3 className="font-bold text-lg mb-2">Marketing</h3>
            <p className="text-gray-600 text-sm">
              Data-driven digital marketing strategies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <Cloud className="w-8 h-8 text-[#0f4c5c] mb-3" />
            <h3 className="font-bold text-lg mb-2">Cloud Services</h3>
            <p className="text-gray-600 text-sm">
              Scalable and secure cloud infrastructure.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0f4c5c] rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-3">
            Need a Custom Solution?
          </h2>
          <p className="text-white/80 mb-4">Let's discuss your project.</p>
          <Link
            href="/contact"
            className="inline-block bg-[#e8aa42] text-[#1a1a2e] px-6 py-3 rounded-full font-medium hover:bg-[#f4c56a]"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </>
  );
}
