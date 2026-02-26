'use client'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Hero from './Hero';
import Works from './Works';

gsap.registerPlugin(useGSAP)

const HomeClient = () => {

  return (
    <div className='w-full flex flex-col overflow-x-hidden bg-blue-500'>
        <Hero />
        <Works />
    </div>
  )
}

export default HomeClient