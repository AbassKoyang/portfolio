import projects from '@/app/projects'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image'
import Link from 'next/link';
import React, { useRef, useState } from 'react'

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
      // gsap.set('.indices', {
      //   transformOrigin: 'cent'
      // })
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

  return (
    <div ref={container} className="w-full  p-8 bg-primary-black overflow-x-hidden">
      <div className="w-full flex items-center justify-between">
        <p className='text-sm text-primary-white font-fragment-mono uppercase'>// Selected projects ©2026</p>
        <div className="flex items-center gap-0.5 text-sm text-primary-white font-fragment-mono">
          <p className='uppercase'>[</p>
          <button onClick={() => setMode('grid')} className={`uppercase ${mode == 'grid' ? 'underline' : ''} cursor-pointer hover:underline ease-in-out duration-300 transition-all origin-left`}>Grid</button>
          <p className='uppercase'>,</p>
          <button onClick={() => setMode('index')} className={`uppercase ${mode == 'index' ? 'underline' : ''} cursor-pointer hover:underline ease-in-out duration-300 transition-all origin-left`}>Index</button>
          <p className='uppercase'>]</p>
        </div>
      </div>

      {mode == 'grid' && (
        <div className="w-full h-[1800px] grid grid-cols-3 grid-row-4 gap-3 mt-8">
          {projects.map((project) => (
            <div className="row-span-1 nth-1:col-span-1 nth-2:col-span-2 nth-3:col-span-2 nth-4:col-span-1 nth-5:col-span-1 nth-6:col-span-2 nth-7:col-span-2 nth-8:col-span-1 even:bg-black odd:bg-green-300 overflow-hidden relative group cursor-pointer rounded-md">
              <Image
                className='object-cover group-hover:scale-125 ease-in-out duration-500 transition-all'
                fill
                src={project.images[0]}
                loading='eager'
                placeholder='blur'
                blurDataURL='/assets/images/default-avatar.png'
                alt='Profle Picture'
                />
                <div className="size-full absolute top-0 left-0 opacity-60 bg-black z-30 group-hover:opacity-0 ease-in-out duration-500 transition-all flex items-center justify-center">
                  <p className='text-primary-white font-fragment-mono text-2xl uppercase font-semibold'>{project.title}</p>
                </div>
                <div className="flex items-center gap-1 absolute top-5 left-5 group-hover:opacity-100 opacity-0">
                    <div className="size-1.5 available-box opacity-30 bg-white"></div>
                    <p className='text-primary-white font-fragment-mono text-sm uppercase'>{project.title}</p>
                </div>
            </div>
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
          <div className='indices'>
            <div className="w-full flex items-center justify-between py-2 border-b border-primary-white/10">
                <div className="w-[70%] flex items-center">
                    <div className="w-[30%] flex items-center justify-start">
                      <p className='text-primary-white font-fragment-mono text-sm uppercase'>{project.title}</p>
                    </div>
                    <div className="w-[25%] flex items-center justify-start">
                      <p className='text-primary-white font-fragment-mono text-sm uppercase'>{project.expertise}</p>
                    </div>
                    <div className="w-[35%] flex items-center justify-start">
                      <p className='text-primary-white font-fragment-mono text-sm uppercase'>{project.techStack.length > 50 ? project.techStack + '...' : project.techStack}</p>
                    </div>
                    <div className="w-[10%] flex items-center justify-start">
                      <p className='text-primary-white font-fragment-mono text-sm uppercase'>{project.year}</p>
                    </div>
                  </div>
                  <Link className='text-primary-white font-fragment-mono text-sm uppercase' href={`/projects/${project.slug}`}>View more[+]</Link>
                </div>
          </div>
        ))}
      </div>
      )}

      <div className="mt-8">
        <Link href='/projects' className='text-primary-white font-fragment-mono text-sm uppercase px-4 py-2 border border-primary-white rounded-md mt'>View all projects</Link>
      </div>
      

    </div>
  )

}

export default Works