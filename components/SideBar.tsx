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

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const lastScrollY = useRef(0)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
  
            if (currentScrollY <= 0) {
              setVisible(true)
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
      }, [isOpen])

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
    <motion.header initial={false} animate={{y: visible ? 0 : '-100%', animationDuration: 1, transition: {type: 'tween'}}} className={`w-full fixed top-0 left-0 md:border-b border-primary-white/30 z-[1000] bg-primary-black py-4 px-8`}>
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
                    <button>
                        <p className='text-primary-white font-fragment-mono text-sm uppercase'>Sound [off]</p>
                    </button>
                    <button>
                        <p className='text-primary-white font-fragment-mono text-sm uppercase'>color [#00000]</p>
                    </button>
                </div>
            </div>
            <button onClick={() => setIsOpen(true)} className='block lg:hidden [writing-mode:vertical-rl] rotate-180'>
                <motion.p  className='font-fragment-mono font-bold text-sm text-primary-white uppercase'>menu</motion.p>
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
                      <p className='text-primary-white font-fragment-mono text-xs uppercase'>color [#00000]</p>
                  </button>
              </div>
         </div>
      </motion.div>
  </motion.header>
  )
}

export default Navbar