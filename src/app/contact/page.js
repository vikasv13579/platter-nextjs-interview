'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <>
      <div className="container py-16">
        <div className="grid lg:grid-cols-2 gap-12 m-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-600 mb-8">Have a project in mind? Send us a message.</p>
            <div className="space-y-6">
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-8 text-[#0f4c5c]" />
                hello@platter.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-8 text-[#0f4c5c]" />
                +1 234 567 890
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-8 text-[#0f4c5c]" />
                San Francisco, CA
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
          >
            {submitted ? (
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <p className="text-green-700 font-medium">Message sent! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 mb-4 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 mb-4 border rounded-lg"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 mb-4 border rounded-lg resize-none"
                />
                <button type="submit" className="w-full bg-[#0f4c5c] text-white py-3 rounded-lg font-medium hover:bg-[#1a6b7c]">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
