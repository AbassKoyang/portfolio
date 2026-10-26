'use client'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { SplitText } from 'gsap/all';
import NavLink from './Link';
import { emailLink, headerLinks, socialLinks } from '@/lib/utils';
import Clock from './Clock';

gsap.registerPlugin(SplitText)

const Hero = () => {
    const container = useRef(null);
    const overlayContainer = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            delay: 1
        })
        tl.from('.welcome-text-1', {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
        })
        tl.from('.welcome-text-2', {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
        })
        tl.from('.welcome-text-3', {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
        })
        tl.set('.loading-screen', {
            display: 'none'
        })
        tl.set(overlayContainer.current, {
            opacity: '1'
        })
        tl.set('.overlay', {
            transformOrigin: 'top'
        })
        tl.fromTo('.overlay', {
            scaleY: '0%',
        }, {
            scaleY: '100%',
            duration: 1,
            ease: 'power2.inOut'
        })
    },{ scope: container, dependencies: [] });

    useGSAP(() => {
        gsap.to('.available-box', {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut',
            repeat: -1,
        })
    }, { scope: container, dependencies: [] })
 
    return (
    <div ref={container} className='w-full min-h-screen flex items-center justify-center relative'>

         <div className="w-full h-screen bg-primary-white z-20 fixed top-0 left-0 flex items-center justify-center pointer-events-none loading-screen text-sm">
            <p><span className='welcome-text-1'>Build.</span> <span className='welcome-text-2'>Refine.</span> <span className='welcome-text-3'>Ship.</span></p>
         </div>

         <div ref={overlayContainer} className="w-full h-screen bg-primary-white z-30 absolute top-0 left-0 flex items-center justify-center opacity-0">
           <div className="relative w-full min-h-full">
                <div className="w-full flex items-start justify-center absolute top-[50%] -translate-y-1/2 lg:top-10 lg:translate-y-0 left-[50%] translate-x-[-50%] z-30 p-8">
                    <div className="w-full flex flex-col justify-start items-start lg:items-center lg:max-w-[65%] max-w-[90%]">
                        <h1 className='text-primary-white font-fragment-mono text-xl lg:text-6xl font-medium'>Hi, I'm <span className='font-bold'>Koyang Abass</span>. <br /> A Software Engineer & Computer Science student.</h1>

                        <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm mt-8  uppercase'>I build scalable systems and high-performance web experiences. I care about clean architecture, thoughtful UI and UX, and understanding how things work from the frontend all the way to the backend.</p>

                        <div className="w-full flex justify-between items-center mt-16">
                            <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase'>Lagos, Nigeria</p>
                            <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 lg:h-3 available-box opacity-30 bg-primary-white"></div>
                                <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase'>avallable for work</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-primary-black overlay">
                </div>

                <div className="absolute bottom-50 lg:bottom-0 left-0 bg-transparent py-8 px-8 w-full z-20">
                    <div className="lg:items-center items-start justify-between w-full hidden lg:flex flex-col lg:flex-row">
                        <div className="">
                            <Link href='/'>
                                <p className='font-fragment-mono font-bold text-lg text-primary-white uppercase lg:mb-1'>Koyang©</p>
                            </Link>
                            <Clock />
                        </div>

                        <div className="flex items-center lg:gap-12 gap-8 flex-wrap mt-3 lg:mt-0">
                            <nav className="flex items-center lg:gap-12 gap-8 flex-row">
                                {headerLinks.map((link, i) => (
                                    <NavLink link={link} key={i} />
                                ))}
                            </nav>
                        </div>
                    </div>

                    <div className="w-full lg:mt-12 flex items-center gap-1.5 justify-center text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase">
                        <div className="animate-bounce">
                            <p>↓</p> 
                        </div>
                        <p>SCROLL DOWN to view LATEST WORKS</p>
                    </div>
                </div>
           </div>
         </div>
    </div>
  )
}

export default Hero