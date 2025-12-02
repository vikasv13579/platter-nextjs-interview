'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider() {
  const slides = [
    {
      title: 'BETTER THINGS',
      text: 'We build digital solutions that grow your business.',
      link: '/contact',
      btn: 'Get Started',
      bg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    },
    {
      title: 'STRATEGY MEETS DESIGN',
      text: 'Creative excellence with strategic thinking.',
      link: '/services',
      btn: 'Our Services',
      bg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
    },
    {
      title: 'SCALE YOUR BUSINESS', 
      text: 'Expert team to help you succeed.',
      link: '/about',
      btn: 'About Us',
      bg: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80',
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 1000 }}
      loop
      className="hero-slider full-bleed h-[85vh] min-h-[500px]"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div 
            className="h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex items-center container mx-auto px-6">
              <div className="max-w-xl">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-white/80 text-lg mb-8">{slide.text}</p>
                <Link 
                  href={slide.link}
                  className="inline-block bg-[#e8aa42] text-[#1a1a2e] px-6 py-3 rounded-full font-medium hover:bg-[#f4c56a] transition-colors"
                >
                  {slide.btn}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
