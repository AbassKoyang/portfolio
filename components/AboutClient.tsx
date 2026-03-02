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
    <section ref={container} className="w-full bg-primary-black overflow-x-hidden min-h-dvh">
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
                <div className="">
                    <p className="text-sm text-primary-white uppercase">CONTACT</p>
                    <NavLink link={emailLink} />
                </div>
                <div className=" flex flex-col items-start">
                    {socialLinks.map((link, i) => (
                        <NavLink link={link} key={i} />
                    ))}
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
            <button onClick={() => setIsOpen(true)} className='block lg:hidden'>
                <motion.p  className='font-fragment-mono font-bold text-sm text-primary-white uppercase rotate-270 mr-[-20px]'>menu</motion.p>
            </button>
        </div>
        <motion.div initial={{y: '-100%'}} animate={{y: isOpen ? 0 : '-100%', animationDuration: 1, transition: {type: 'tween'}}} className="w-full h-svh fixed top-0 left-0 bg-primary-black px-8 py-4 menu">
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
                  {socialLinks.map((link, i) => (
                      <NavLink link={link} key={i} paragraphStyles='!text-sm' className='mobile-links' />
                  ))}
                  <NavLink link={emailLink} paragraphStyles='!text-sm' className='mobile-links' />
              </div>
              <div className="absolute bottom-0 left-0 w-full flex flex-col items-start buttons">
                  <button>
                      <p className='text-primary-white font-fragment-mono text-xs uppercase'>Sound [off]</p>
                  </button>
                  <button>
                      <p className='text-primary-white font-fragment-mono text-xs uppercase'>color [#fffff]</p>
                  </button>
              </div>
         </div>
      </motion.div>
    </header>

        <div className='w-full flex justify-between flex-col lg:flex-row overflow-x-hidden bg-primary-black mt-5 lg:mt-8 p-8'>
            <div className="lg:w-[40%] w-full">
                <div className="w-full flex flex-col lg:flex-row items-start justify-between">
                    <h4 className='text-[10px] lg:text-sm text-primary-white font-fragment-mono uppercase mb-2 lg:mb-0'>DEVELOPERS'S_BIO:</h4>
                    <div className="">
                        <p className='text-[10px] lg:text-sm text-primary-white font-fragment-mono uppercase'>// GET TO KNOW Koyang</p>
                        <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono mt-2 max-w-[300px]'>I’m Koyang Ahmad Abass — a Nigerian born designer exploring the spaces where motion, brand identity, and interactivity meet.</p>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start justify-between mt-8">
                    <h4 className='text-[10px] lg:text-sm text-primary-white font-fragment-mono uppercase mb-2 lg:mb-0'>EARLY CHILDHOOD:</h4>
                    <div className="">
                        <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono max-w-[300px]'>I grew up listening to Highlife music on my grandma's old radio, with childhood days spent playing street football, reenacting WWE, and chasing adventures. Quiet but curious, I found my passion for design by sketching typography in the backs of my high school notebooks.</p>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start justify-between mt-8">
                    <h4 className='text-[10px] lg:text-sm text-primary-white font-fragment-mono uppercase mb-2 lg:mb-0'>DEVELOPER PHILOSOPHY:</h4>
                    <div className="">
                        <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono max-w-[300px]'>I believe in the power of experimentation, collaboration, and creative play. Anddd I always say yes to creative collaborations I f*ck with :)</p>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start justify-between mt-8">
                    <h4 className='text-[10px] lg:text-sm text-primary-white font-fragment-mono uppercase mb-2 lg:mb-0'>INTERESTS & HOBBIES:</h4>
                    <div className="">
                        <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono max-w-[300px]'>Outside of design, I’m into learning about Art History & Design Culture, discovering new music, and building visual archives on my are.na.</p>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start justify-between mt-8">
                    <h4 className='text-[10px] lg:text-sm text-primary-white font-fragment-mono uppercase mb-2 lg:mb-0'>CAREER_INFO:</h4>
                    <div className="">
                        <div className="">
                            <p className='text-[10px] lg:text-sm text-primary-white font-fragment-mono uppercase'>// PAST WORK EXPERIENCE</p>
                            <div className="flex items-center gap-10 mt-2">
                                <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono max-w-[200px]'>Web Developer Intern, Precious</p> 
                                <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono'>2024-2024</p> 
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-10 mt-2">
                                <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono max-w-[200px]'>Web Developer, Poise Nigeria</p> 
                                <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono'>2023-2024</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="lg:w-[30%] w-full flex flex-col items-end lg:pl-26 mt-16 lg:mt-0">
                <div className="w-full">
                    <p className='text-[10px] lg:text-sm text-primary-white font-fragment-mono uppercase'>// EDUcation</p>
                </div>
                <div className="w-full flex items-start lg:justify-end">
                    <div className="">
                        <div className="flex items-center gap-20 mt-2">
                            <div className="">
                                <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono max-w-[300px]'>BSc Computer Science,</p> 
                                <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono max-w-[300px]'>Bayero University, Kano</p> 
                            </div>
                            <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono'>2024</p> 
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-start lg:justify-end mt-5">
                    <div className="">
                        <div className="flex items-center gap-20">
                            <div className="">
                                <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono max-w-[300px]'>BSc Computer Science,</p> 
                                <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono max-w-[300px]'>Bayero University, Kano</p> 
                            </div>
                            <p className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono'>2024</p> 
                        </div>
                    </div>
                </div>

                <div className="w-full mt-10">
                    <p className='text-[10px] lg:text-sm text-primary-white font-fragment-mono uppercase'>// CONTACT & SOCIAL LINKS</p>
                    <div className="w-full flex items-center justify-between flex-wrap gap-1">
                        <Link href='/' className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono underline font-semibold'>
                        ↗ Instagram
                        </Link>
                        <Link href='/' className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono underline font-semibold'>
                        ↗ X(Formerly Twitter)
                        </Link>
                        <Link href='/' className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono underline font-semibold'>
                        ↗ LinkedIn
                        </Link>
                        <Link href='/' className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono underline font-semibold'>
                        ↗ abasskoyang05@gmail.com
                        </Link>
                        <Link href='/' className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono underline font-semibold'>
                        ↗ Github
                        </Link>
                        <Link href='/' className='text-[10px] lg:text-sm    text-primary-white font-fragment-mono underline font-semibold'>
                        ↗ Braintrust
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </ReactLenis>
  )
}

export default AboutClient