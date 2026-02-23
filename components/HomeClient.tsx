'use client'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Hero from './Hero';

gsap.registerPlugin(useGSAP)

const HomeClient = () => {

  return (
    <div className='w-full min-h-dvh'>
        <Hero />
    </div>
  )
}

export default HomeClient