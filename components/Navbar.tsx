'use client';
import Link from 'next/link';
import { FormEvent, useEffect, useRef, useState } from 'react'
import {motion} from 'motion/react'


const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY
    
          if (currentScrollY <= 0) {
            return
          }
    
          if (currentScrollY >= window.innerHeight) {
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
                <div className="flex items-center gap-3 mt-0">
                    <p className='text-primary-white font-fragment-mono text-sm'>4:07:59</p>
                    <p className='text-primary-white font-fragment-mono text-sm'>PM</p>
                    <p className='text-primary-white font-fragment-mono text-sm'>GMT+1</p>
                </div>
            </div>

            <div className="lg:flex items-center gap-12 hidden">
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
            <button className='block lg:hidden'>
                <motion.p  className='font-fragment-mono font-bold text-sm text-primary-white uppercase rotate-270 mr-[-20px]'>menu</motion.p>
            </button>
        </div>
    </motion.header>
  )
}

export default Navbar