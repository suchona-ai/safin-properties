"use client";

import { useState } from 'react';
import Image from 'next/image';
import QuoteModal from './QuoteModal';
import '../globals.css';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero-section">
      <Image
        src="/london-bridge.jpg" 
        alt="London cityscape"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Your Trusted Partner in Property Management and Sales</h1>
        <p className="hero-subtitle">Discover your dream home in London</p>
        <button
          className="btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Get Quote
        </button>
      </div>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}