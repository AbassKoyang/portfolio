'use client';
import Link from 'next/link';
import { FormEvent, useEffect, useRef, useState } from 'react'
import {motion} from 'motion/react'
import { emailLink, headerLinks, socialLinks } from '@/lib/utils';
import NavLink from './Link';
import Clock from './Clock';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const lastScrollY = useRef(0)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY
    
          if (currentScrollY <= 0) {
            return
          }
    
          if (currentScrollY >= (pathname == '/' ? window.innerHeight : 40)) {
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

  return (
    <motion.header initial={{y:0}} animate={{y: visible ? 0 : '-100%', animationDuration: 1, transition: {type: 'tween'}}} className={`w-full fixed top-0 left-0 md:border-b border-primary-white/30 z-300 bg-primary-black py-4 px-8`}>
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
            <button className='block lg:hidden'>
                <motion.p  className='font-fragment-mono font-bold text-sm text-primary-white uppercase rotate-270 mr-[-20px]'>menu</motion.p>
            </button>
        </div>
    </motion.header>
  )
}

export default Navbar