'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImpactBanner from '@/components/ImpactBanner';
import About from '@/components/About';
import ClassroomTools from '@/components/ClassroomTools';
import Features from '@/components/Features';
import Integrations from '@/components/Integrations';
import Testimonials from '@/components/Testimonials';
import TrustedBy from '@/components/TrustedBy';
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
      <ImpactBanner />

      {/* Main content */}
      <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">
        <About />
        <ClassroomTools />
        <Features />
        <Integrations />
        <Testimonials />
        <TrustedBy />
        <News />
      </div>

      <Footer />
    </>
  );
}
