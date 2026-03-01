'use client';
import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import Clock from './Clock'
import { emailLink, headerLinks, socialLinks } from '@/lib/utils'
import NavLink from './Link'
import {motion} from 'motion/react'
import Works from './Works'
import Profile from './Profile'


const ProjectsClient = () => {
  return (
        <section className="w-full bg-primary-black overflow-x-hidden min-h-dvh">
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
                <button className='block lg:hidden'>
                    <motion.p  className='font-fragment-mono font-bold text-sm text-primary-white uppercase rotate-270 mr-[-20px]'>menu</motion.p>
                </button>
            </div>
        </header>
        <div className="w-full mt-8 lg:mt-0 lg:py-8 px-8">
            <div className="flex items-start lg:mt-20">
                <h3 className='font-fragment-mono font-semibold text-2xl lg:text-[100px] text-primary-white uppercase tracking-tighter lg:leading-0'>S/WORK</h3>
                <span className='text-sm lg:text-xl lg:leading-0 font-fragment-mono font-semibold text-primary-white uppercase'>[11]</span>
            </div>
        </div>
        <Works />
        <Profile/>
    </section>
  )
}

export default ProjectsClient