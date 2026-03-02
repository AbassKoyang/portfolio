'use client'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Hero from './Hero';
import Works from './Works';
import Profile from './Profile';
import Footer from './Footer';
import Navbar from './Navbar';
import ReactLenis from 'lenis/react';

gsap.registerPlugin(useGSAP)

const HomeClient = () => {

  return (
    <ReactLenis root>
    <div className='w-full flex flex-col overflow-x-hidden bg-primary-black'>
      <Navbar />
        <Hero />
        <Works />
        <Profile/>
        <Footer />
    </div>
  </ReactLenis>
  )
}

export default HomeClient