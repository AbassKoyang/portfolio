'use client';
import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import Clock from './Clock'
import { emailLink, headerLinks, socialLinks } from '@/lib/utils'
import NavLink from './Link'
import {motion} from 'motion/react'
import Works from './Works'
import Profile from './Profile'
import Footer from './Footer';
import ReactLenis from 'lenis/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const ProjectsClient = () => {
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

                <div className="lg:flex items-center gap-8 lg:gap-12 hidden">
                    <nav className="flex items-center gap-8 lg:gap-12 flex-row">
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
        <div className="w-full mt-8 lg:mt-0 lg:py-8 px-8">
            <div className="flex items-start lg:mt-20">
                <h3 className='font-fragment-mono font-semibold text-2xl lg:text-[100px] text-primary-white uppercase tracking-tighter lg:leading-0'>S/Projects</h3>
                <span className='text-sm lg:text-xl lg:leading-0 font-fragment-mono font-semibold text-primary-white uppercase'>[11]</span>
            </div>
        </div>
        <Works />
        <Profile/>
        <Footer />
    </section>
    </ReactLenis>
  )
}

export default ProjectsClient