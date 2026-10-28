'use client';
import React, { useRef, useState } from 'react'
import {motion} from 'motion/react'
import Link from 'next/link'
import Clock from './Clock'
import { emailLink, headerLinks, socialLinks } from '@/lib/utils'
import NavLink from './Link'
import Navbar from './Navbar';
import ReactLenis from 'lenis/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Footer from './Footer';

const AboutClient = () => {
    const [isOpen, setIsOpen] = useState(false)
    const container = useRef(null)

    useGSAP(() => {
        if (!isOpen) return

        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.fromTo('.menu', {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 0.4
            })
            tl.fromTo('.slide', {
                opacity: 0,
                y: -30,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.inOut',
            })
            tl.fromTo('.mobile-links', {
                opacity: 0,
                y: 30,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'power2.inOut',
                stagger: 0.1
            })
    
            tl.fromTo('.buttons', {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut',
            })
        })
      
        return () => ctx.revert()
      }, {dependencies: [isOpen], scope: container})

      const handleCloseMenu = () => {
        const tl = gsap.timeline()
        tl.to('.buttons', {
            opacity: 0,
            duration: 0.2,
            ease: 'power2.inOut',
        })
        tl.to('.mobile-links', {
            opacity: 0,
            y: -30,
            duration: 0.4,
            ease: 'power2.inOut',
            stagger: 0.1
        })
        tl.to('.slide', {
            opacity: 0,
            y: -30,
            duration: 0.3,
            ease: 'power2.inOut',
        })
        tl.to('.menu', {
            opacity: 0,
            duration: 0.3
        })
        .call(() => {setIsOpen(false)})

    }

  return (
    <ReactLenis root>
    <section ref={container} id='top' className="w-full bg-primary-black overflow-x-hidden min-h-dvh">
        <Navbar />
            <header className={`w-full bg-primary-black py-4 px-8`}>
            <div className="items-center justify-between w-full flex">
                <div className="">
                    <Link href='/'>
                        <p className='font-fragment-mono font-bold text-xl text-primary-white uppercase'>Koyang©</p>
                    </Link>
                    <Clock />
                </div>

                <div className="lg:flex items-center gap-12 hidden">
                    <nav className="flex items-center gap-12 flex-row">
                        {headerLinks.map((link, i) => (
                            <NavLink link={link} key={i} />
                        ))}
                    </nav>
                </div>
                <button onClick={() => setIsOpen(true)} className='block lg:hidden'>
                    <motion.p  className='font-fragment-mono font-bold text-sm text-primary-white uppercase rotate-270 -mr-5'>menu</motion.p>
                </button>
            </div>
            <motion.div initial={{y: '-100%'}} animate={{y: isOpen ? 0 : '-100%', animationDuration: 1, transition: {type: 'tween'}}} className="w-full h-dvh fixed top-0 left-0 bg-primary-black px-8 py-4 menu z-10000">
            <div className="w-full h-full relative">
                <div className="w-full flex items-start justify-between">
                    <div className="slide">
                        <Link href='/'>
                            <p className='font-fragment-mono font-bold text-xs text-primary-white uppercase lg:mb-1'>Koyang©</p>
                        </Link>
                        <Clock />
                    </div>
                    <button onClick={handleCloseMenu} className='[writing-mode:vertical-rl] rotate-180 font-fragment-mono font-medium text-sm text-primary-white uppercase slide'>exit</button>
                </div>
                <div className="w-full absolute top-1/2 -translate-y-1/2 flex flex-col gap-1">
                    {headerLinks.map((link, i) => (
                        <NavLink key={i} link={link} paragraphStyles='!text-sm' className='mobile-links' />
                    ))}
                    <NavLink link={emailLink} paragraphStyles='!text-sm' className='mobile-links' />
                </div>
                
            </div>
        </motion.div>
        </header>

        <div className='w-full flex items-center justify-center bg-primary-black mt-8 lg:mt-28'>
            <div className="w-full max-w-full lg:max-w-[65%] px-8">
                <h3 className='font-fragment-mono font-semibold text-2xl lg:text-[100px] text-primary-white uppercase tracking-tighter lg:leading-0'>S/About</h3>

                <div className="mt-14 lg:mt-40">
                    <h6 className='font-fragment-mono uppercase text-xs text-primary-white/30 font-semibold'>Early Career</h6>
                    <p className='font-fragment-mono text-sm text-primary-white mt-3 leading-relaxed'>My journey into tech started at EkoBits, where I learnt the basics of web development. With curiosity and passion, I continued learning and building projects, understanding how things work, breaking them, then rebuilding them better.That mindset evolved into learning both frontend interactions and backend systems, eventually leading me toward full-stack development.</p>
                </div>

                <div className="mt-14">
                    <h6 className='font-fragment-mono uppercase text-xs text-primary-white/30 font-semibold'>Developer Philosophy</h6>
                    <p className='font-fragment-mono text-sm text-primary-white mt-3 leading-relaxed'>Discipline. Consistency. Curiosity. Simplicity. Faith. I approach development the same way I approach life. Structured, intentional, and always improving.</p>
                </div>

                <div className="mt-14">
                    <h6 className='font-fragment-mono uppercase text-xs text-primary-white/30 font-semibold'>Interests & Hobbies</h6>
                    <p className='font-fragment-mono text-sm text-primary-white mt-3 leading-relaxed'>When I'm not coding, I'm watching or playing football, training, listening to music, or reflecting. My faith plays a central role in how I move, grounded, focused, and purpose-driven.</p>
                </div>

                <div className="mt-14">
                    <h6 className='font-fragment-mono uppercase text-xs text-primary-white/30 font-semibold'>Work Experience</h6>
                   <div className="mt-3">
                        <p className='font-fragment-mono text-sm text-primary-white leading-relaxed'>Software Developer · Zeema Homes</p>
                        <p className='font-fragment-mono text-xs text-primary-white/60 mt-1 leading-relaxed'>2025 — 2026</p>
                   </div>
                   <div className="mt-3">
                        <p className='font-fragment-mono text-sm text-primary-white leading-relaxed'>Web Developer Intern · Precious</p>
                        <p className='font-fragment-mono text-xs text-primary-white/60 mt-1 leading-relaxed'>2024</p>
                   </div>
                   <div className="mt-3">
                        <p className='font-fragment-mono text-sm text-primary-white leading-relaxed'>Web Developer · Poise Nigeria</p>
                        <p className='font-fragment-mono text-xs text-primary-white/60 mt-1 leading-relaxed'>2023 — 2024</p>
                   </div>
                </div>

                <div className="mt-14">
                    <h6 className='font-fragment-mono uppercase text-xs text-primary-white/30 font-semibold'>Education</h6>
                   <div className="mt-3">
                        <p className='font-fragment-mono text-sm text-primary-white leading-relaxed'>BSc Computer Science</p>
                        <p className='font-fragment-mono text-xs text-primary-white/60 mt-1 leading-relaxed'>Bayero University, Kano · 2024 — Present</p>
                   </div>
                   <div className="mt-3">
                        <p className='font-fragment-mono text-sm text-primary-white leading-relaxed'>Diploma of Computer Science</p>
                        <p className='font-fragment-mono text-xs text-primary-white/60 mt-1 leading-relaxed'>EkoBits ICT Academy, Lagos · 2023 — 2024</p>
                   </div>
                    <div className="mt-3">
                        <p className='font-fragment-mono text-sm text-primary-white leading-relaxed'>High School Certificate</p>
                        <p className='font-fragment-mono text-xs text-primary-white/60 mt-1 leading-relaxed'>OCSSS . 2019 — 2022</p>
                   </div>
                </div>

                <div className="mt-14">
                    <h6 className='font-fragment-mono uppercase text-xs text-primary-white/30 font-semibold'>Certifications</h6>
                   <div className="mt-3">
                        <p className='font-fragment-mono text-sm text-primary-white leading-relaxed'>React Learning Program Certification</p>
                        <p className='font-fragment-mono text-xs text-primary-white/60 mt-1 leading-relaxed'>Meta × Andela . 2023</p>
                   </div>
                   <div className="mt-3">
                        <p className='font-fragment-mono text-sm text-primary-white leading-relaxed'>JavaScript Algorithms & Data Structures</p>
                        <p className='font-fragment-mono text-xs text-primary-white/60 mt-1 leading-relaxed'>FreeCodeCamp · 2024</p>
                   </div>
                    <div className="mt-3">
                        <p className='font-fragment-mono text-sm text-primary-white leading-relaxed'>Python Algorithms & Data Structures</p>
                        <p className='font-fragment-mono text-xs text-primary-white/60 mt-1 leading-relaxed'>FreeCodeCamp . 2026</p>
                   </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </ReactLenis>
  )
}

export default AboutClient