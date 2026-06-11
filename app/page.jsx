'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Features from '@/components/Features';
import About from '@/components/About';
import ClassroomTools from '@/components/ClassroomTools';
import Integrations from '@/components/Integrations';
import Testimonials from '@/components/Testimonials';
import News from '@/components/News';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      {/* Main content */}
      <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">
        <TrustedBy />
        <Features />
        <About />
        <ClassroomTools />
        <Integrations />
        <Testimonials />
        <News />
      </div>

      <Footer />
    </>
  );
}
