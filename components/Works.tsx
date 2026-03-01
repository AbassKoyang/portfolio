import projects from '@/app/projects'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image'
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import Index from './Index';
import CursorFollower from './Cursor';
import Grid from './Grid';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)
const Works = () => {
  const container = useRef(null);
  const [mode, setMode] = useState<'index' | 'grid'>('grid');

    useGSAP(() => {
      gsap.to('.available-box', {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.inOut',
          repeat: -1,
      })
  }, { scope: container, dependencies: [] })

    useGSAP(() => {
      gsap.fromTo('.indices', {
          opacity: 0,
          scale: '1.05'
          
      }, {
        opacity: 1,
        duration: 0.8,
        scale: 1,
        ease: 'expo.inOut',
        stagger: 0.1
      })
  }, { scope: container, dependencies: [mode] })

    useGSAP(() => {
      gsap.fromTo('.grid', {
          opacity: 0,
          y: '20px'
          
      }, {
        opacity: 1,
        duration: 0.8,
        y: 0,
        ease: 'expo.inOut',
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top center'
        }
      })
  }, { scope: container, dependencies: [mode] })

  return (
    <div ref={container} className="w-full p-8 bg-primary-black overflow-x-hidden">
      <div className="w-full flex items-center justify-between">
        <p className='text-[10px] lg:text-sm text-primary-white font-fragment-mono uppercase'>// Selected projects ©2026</p>
        <div className="lg:flex items-center gap-0.5 text-sm text-primary-white font-fragment-mono hidden">
          <p className='uppercase'>[</p>
          <button onClick={() => setMode('grid')} className={`uppercase ${mode == 'grid' ? 'underline' : ''} cursor-pointer hover:underline ease-in-out duration-300 transition-all origin-left`}>Grid</button>
          <p className='uppercase'>,</p>
          <button onClick={() => setMode('index')} className={`uppercase ${mode == 'index' ? 'underline' : ''} cursor-pointer hover:underline ease-in-out duration-300 transition-all origin-left`}>Index</button>
          <p className='uppercase'>]</p>
        </div>
      </div>

      {mode == 'grid' && (
        <div className="w-full flex flex-wrap lg:grid lg:grid-cols-3 gap-3 mt-8">
          {projects.map((project) => (
            <Grid project={project} />
          ))}
        </div>
      )}

      {mode == 'index' && (
        <div className="w-full mt-8">
        <div className="flex items-center justify-between w-full py-2 border-b border-primary-white/10">
          <div className="w-[70%] flex  items-center">
            <div className="w-[30%] flex items-center justify-start">
              <p className='text-primary-white/50 font-fragment-mono text-sm uppercase'>Project name</p>
            </div>
            <div className="w-[25%] flex items-center justify-start">
              <p className='text-primary-white/50 font-fragment-mono text-sm uppercase'>expertise</p>
            </div>
            <div className="w-[35%] flex items-center justify-start">
              <p className='text-primary-white/50 font-fragment-mono text-sm uppercase'>tech stack</p>
            </div>
            <div className="w-[10%] flex items-center justify-start">
              <p className='text-primary-white/50 font-fragment-mono text-sm uppercase'>year</p>
            </div>
          </div>
        </div>

        {projects.map((project) => (
          <Index project={project} />
        ))}
      </div>
      )}

      <div className="mt-8">
        <Link href='/projects' className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase px-4 py-2 border border-primary-white rounded-md mt'>View all projects</Link>
      </div>
      

    </div>
  )

}

export default Works