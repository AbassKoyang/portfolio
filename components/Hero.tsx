'use client'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText)

const Hero = () => {
    const container = useRef(null);
    const overlayContainer = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            delay: 1
        })
        tl.set(overlayContainer.current, {
            opacity: 0
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

        let split = SplitText.create(".heading", { type: "chars" });
        tl.from(split.chars, {
        duration: 1, 
        y: -100,      
        autoAlpha: 0,
        stagger: 0.1,
        }, "<0.5");

        tl.to('.credit', {
            opacity: 1,
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
    <div ref={container} className='w-screen h-screen flex items-center justify-center relative overflow-y-hidden'>
         <div className="w-full h-dvh bg-primary-white z-20 absolute top-0 left-0 flex items-center justify-center">
            <p><span className='welcome-text-1'>Tomorrow's</span> <span className='welcome-text-2'>Brands,</span> <span className='welcome-text-3'>Today</span></p>
         </div>
         <div ref={overlayContainer} className="w-full h-dvh bg-primary-white z-30 absolute top-0 left-0 flex items-center justify-center">
           <div className="relative w-full h-full">
                <div className="w-full flex items-start justify-center absolute top-5 left-[50%] translate-x-[-50%] z-30">
                    <div className="w-full flex flex-col justify-start items-center max-w-fit">
                        <div className="flex items-start justify-center w-full">
                            <h1 className='text-white text-[300px] uppercase font-bold font-fragment-mono leading-[200px] heading'>Koyang</h1>
                            <span className='text-[40px] text-white credit opacity-0'>©</span>
                        </div>
                        <div className="w-full flex items-start justify-between">
                            <p className='text-primary-white font-fragment-mono text-sm ml-4 mt-8 max-w-[55%] uppercase'>A visual designer navigating the fluid spaces between motion, brand identity, and interaction.</p>

                            <div className="flex flex-col items-end mt-8">
                                <p className='text-primary-white font-fragment-mono text-sm uppercase'>Lagos, Nigeria</p>
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-3 available-box opacity-30 bg-white"></div>
                                    <p className='text-primary-white font-fragment-mono text-sm uppercase'>avallable for work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-primary-black overlay">
                </div>
                <div className="absolute bottom-0 left-0 bg-transparent py-8 px-8 w-full z-20">
                    <div className="flex items-center justify-between w-full">
                        <div className="">
                            <Link href='/'>
                                <p className='font-fragment-mono font-bold text-lg text-primary-white uppercase'>Koyang©</p>
                            </Link>
                            <div className="flex items-center gap-3 mt-1">
                                <p className='text-primary-white font-fragment-mono text-sm'>4:07:59</p>
                                <p className='text-primary-white font-fragment-mono text-sm'>PM</p>
                                <p className='text-primary-white font-fragment-mono text-sm'>GMT+1</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-12">
                            <Link href='#'>
                                <p  className='text-primary-white font-fragment-mono text-sm uppercase'>Projects[11]</p>
                            </Link>
                            <Link href='#'>
                                <p  className='text-primary-white font-fragment-mono text-sm uppercase'>About</p>
                            </Link>
                            <Link href='#'>
                                <p  className='text-primary-white font-fragment-mono text-sm uppercase'>archive</p>
                            </Link>
                            <Link href='#'>
                                <p  className='text-primary-white font-fragment-mono text-sm uppercase'>vibe-check</p>
                            </Link>
                            <div className="">
                                <p className="text-sm text-primary-white uppercase">CONTACT</p>
                                <Link href='#'>
                                    <p className='text-primary-white font-fragment-mono text-sm uppercase'>abasskoyang05@gmail.com</p>
                                </Link>
                            </div>
                            <div className="">
                                <Link href='#'>
                                    <p className='text-primary-white font-fragment-mono text-sm uppercase'>github</p>
                                </Link>
                                <Link href='#'>
                                    <p className='text-primary-white font-fragment-mono text-sm uppercase'>linkedin</p>
                                </Link>
                            </div>

                            <div className="flex flex-col items-end">
                                <Link href='#'>
                                    <p className='text-primary-white font-fragment-mono text-sm uppercase'>Sound [off]</p>
                                </Link>
                                <Link href='#'>
                                    <p className='text-primary-white font-fragment-mono text-sm uppercase'>color [#fffff]</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-12">
                        <p className="text-primary-white font-fragment-mono text-sm uppercase"><span>↓</span> SCROLL DOWN to view LATEST WORKS</p>
                    </div>
                </div>
           </div>
         </div>
    </div>
  )
}

export default Hero