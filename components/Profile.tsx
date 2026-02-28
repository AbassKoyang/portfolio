'use client';
import React, { useRef } from 'react'

const Profile = () => {
    const container = useRef(null);
  return (
    <section ref={container} className="w-full p-8 py-10 mt-4 bg-primary-black overflow-x-hidden border-y border-primary-white/10 flex flex-col lg:flex-row items-start justify-between">
        <div className="lg:w-[25%] mb-5 lg:mb-0">
            <h4 className='text-primary-white font-fragment-mono text-xs lg:text-sm uppercase'>Profile</h4>
        </div>
        <div className="w-full lg:w-[75%] flex flex-row flex-wrap items-start justify-between">
            <div className="w-[50%] lg:w-[30%] flex flex-row items-start lg:flex-col gap-5">
                <p className='text-primary-white/50 font-fragment-mono text-[10px] lg:text-sm uppercase'>Tech stack</p>
                <div className="">
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-0 lg:mt-5'>TypeScript</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>React</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>Next.js</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>ShadCN Ui</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>GSAP</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>Motion</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>Firebase</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>Node.js/Express</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>Python</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>Django/DRF</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>PostgreSQL</p>
                </div>
            </div>
            <div className="w-[50%] lg:w-[30%] flex flex-row items-start lg:flex-col gap-5">
                <p className='text-primary-white/50 font-fragment-mono text-[10px] lg:text-sm uppercase'>prohects type</p>
                <div className="">
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-0 lg:mt-5'>Web Application</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>Interactive Experience</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>Full Stack Application</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>UI Experiment</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>PWA</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>CLI tools</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>dev tools</p>
                </div>
            </div>
            <div className="w-[50%] lg:w-[30%] flex flex-row items-start lg:flex-col gap-5 mt-12 lg:mt-0">
                <p className='text-primary-white/50 font-fragment-mono text-[10px] lg:text-sm uppercase'>focus</p>
                <div className="">
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-0 lg:mt-5'>Performance</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>Animation</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>ux</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>System Design</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>PRECISION</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>detail</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>SCALABILITY</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>ACCESSIBILITY</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3'>MAINTAINABILITY</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile