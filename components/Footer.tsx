'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/all';
import Link from 'next/link'
import React from 'react'
import {motion} from 'motion/react'
import { links } from '@/lib/utils';
import NavLink from './Link';

gsap.registerPlugin(ScrambleTextPlugin) 

const Footer = () => {
    const handleScrambleText = (element: string, text: string, direction: 'rtl' | 'ltr') => {
        gsap.to(element, {
            duration: 1, 
            scrambleText: {
                text,
                chars: '+x0$a#b!^',
                revealDelay: 0.1, 
                speed: 1, 
                rightToLeft: direction === 'rtl'
            },
        });
    }

  return (
    <footer className='w-full p-8 flex flex-col-reverse lg:flex-row items-center justify-between mt-20 relative'>
        <Link href='/' className='mt-5 lg:mt-0'>
            <motion.p 
            onHoverStart={() => handleScrambleText('.logo', 'Koyang©', 'ltr')}
            onHoverEnd={() => handleScrambleText('.logo', 'Koyang©', 'rtl')}
            className='font-fragment-mono font-bold text-2xl lg:text-4xl text-primary-white uppercase logo'
            >Koyang©</motion.p>
        </Link>
        <nav className="w-full lg:w-fit flex-wrap justify-between lg:justify-start flex items-start lg:items-center gap-0.5 lg:gap-12 flex-row">
            {links.map((link, i) => (
               <NavLink link={link} key={i} />
            ))}
        </nav>
        <a href='#top' className='hidden lg:block'>
            <motion.p  className='text-primary-white font-fragment-mono text-sm uppercase'>BACK TO TOP [^]</motion.p>
        </a>
    </footer>
  )
}

export default Footer