'use client';
import Link from 'next/link';
import { FormEvent, useEffect, useRef, useState } from 'react'
import {motion} from 'motion/react'
import { emailLink, headerLinks, socialLinks } from '@/lib/utils';
import NavLink from './Link';
import Clock from './Clock';
import { usePathname } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SideBar = () => {
    const [visible, setVisible] = useState(false);
    const lastScrollY = useRef(0)
    const [isOpen, setIsOpen] = useState(false)
    const container = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY
    
          if (currentScrollY <= 0) {
            setVisible(false)
            lastScrollY.current = currentScrollY
            return
          }
    
          if (Math.abs(currentScrollY - lastScrollY.current) < 15) {
            return
          }
    
          if (currentScrollY < lastScrollY.current) {
            setVisible(true)
          } 
          else {
            setVisible(false)
          }
    
          lastScrollY.current = currentScrollY
        }
    
        window.addEventListener('scroll', handleScroll, { passive: true })
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])

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
    <motion.header ref={container} initial={false} animate={{x: visible ? 0 : '-100%', animationDuration: 1, transition: {type: 'tween'}}} className={`h-full fixed top-0 left-0 md:border-r border-primary-white/30 z-300 bg-primary-black py-8 px-4 hidden lg:block`}>
        <div className="items-center justify-between w-full h-full flex flex-col-reverse">
            <div className="[writing-mode:vertical-rl] rotate-180">
                <Link href='/'>
                    <p className='font-fragment-mono font-bold text-xl text-primary-white uppercase'>Koyang©</p>
                </Link>
                <Clock />
            </div>

            <div className="lg:flex items-center flex-col gap-3 hidden">
                <nav className="flex items-center gap-3 flex-col">
                    {headerLinks.map((link, i) => (
                        <NavLink link={link} key={i} className='[writing-mode:vertical-rl] rotate-180' />
                    ))}
                </nav>
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
    </motion.header>
  )
}

export default SideBar