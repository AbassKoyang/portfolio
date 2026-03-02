'use client'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { SplitText } from 'gsap/all';
import NavLink from './Link';
import { emailLink, headerLinks, socialLinks } from '@/lib/utils';
import Clock from './Clock';

gsap.registerPlugin(SplitText)

const Hero = () => {
    const container = useRef(null);
    const overlayContainer = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            delay: 1
        })
        tl.set(overlayContainer.current, {
            opacity: 0
        })
        tl.from('.welcome-text-1', {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
        })
        tl.from('.welcome-text-2', {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
        })
        tl.from('.welcome-text-3', {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
        })
        tl.set('.loading-screen', {
            display: 'none'
        })
        tl.set(overlayContainer.current, {
            opacity: '1'
        })
        tl.set('.overlay', {
            transformOrigin: 'top'
        })
        tl.fromTo('.overlay', {
            scaleY: '0%',
        }, {
            scaleY: '100%',
            duration: 1,
            ease: 'power2.inOut'
        })

        let split = SplitText.create(".heading", { type: "chars" });
        tl.from(split.chars, {
        duration: 1, 
        y: -100,      
        autoAlpha: 0,
        stagger: 0.1,
        }, "<0.5");

        tl.to('.svg-logo', {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut'
        })
        tl.to('.credit', {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.inOut'
        })
    },{ scope: container, dependencies: [] });

    useGSAP(() => {
        gsap.to('.available-box', {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut',
            repeat: -1,
        })
    }, { scope: container, dependencies: [] })
 
    return (
    <div ref={container} className='w-full min-h-dvh flex items-center justify-center relative'>
         <div className="w-full h-dvh bg-primary-white z-20 fixed top-0 left-0 flex items-center justify-center pointer-events-none loading-screen">
            <p><span className='welcome-text-1'>Tomorrow's</span> <span className='welcome-text-2'>Brands,</span> <span className='welcome-text-3'>Today</span></p>
         </div>
         <div ref={overlayContainer} className="w-full h-dvh bg-primary-white z-30 absolute top-0 left-0 flex items-center justify-center">
           <div className="relative w-full min-h-full">
                <div className="w-full flex items-start justify-center absolute top-5 left-[50%] translate-x-[-50%] z-30 lg:p-8">
                    <div className="w-full flex flex-col justify-start items-start lg:items-center max-w-fit">
                        <div className="lg:flex items-start justify-start w-full hidden">
                            <h1 className='text-white text-[300px] uppercase font-bold font-fragment-mono leading-[200px] heading'>Koyang</h1>
                            <span className='text-[20px] text-white credit opacity-0'>©</span>
                        </div>
                        <div className="flex lg:hidden items-start justify-between w-full">
                            <h1 className='text-white text-[250px] uppercase font-bold font-fragment-mono leading-[200px] heading'>K</h1>
                            <svg className='opacity-0 svg-logo' width="206" height="207" viewBox="0 0 206 207" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.92" d="M0.000216264 103.558C0.000216264 88.1751 2.65555 74.166 7.96621 61.5303C13.46 48.8945 20.7851 37.9985 29.9414 28.8422C39.2808 19.6859 50.1768 12.6355 62.6294 7.69109C75.2652 2.56356 88.725 -0.000213062 103.009 -0.000213062C117.293 -0.000213062 130.661 2.56356 143.113 7.69109C155.566 12.6355 166.371 19.6859 175.527 28.8422C184.866 37.9985 192.191 48.8945 197.502 61.5303C202.996 74.166 205.743 88.1751 205.743 103.558C205.743 118.757 202.996 132.675 197.502 145.311C192.191 157.946 184.866 168.842 175.527 177.999C166.371 186.972 155.566 193.931 143.113 198.875C130.661 203.819 117.293 206.292 103.009 206.292C88.725 206.292 75.2652 203.819 62.6294 198.875C50.1768 193.931 39.2808 186.972 29.9414 177.999C20.7851 168.842 13.46 157.946 7.96621 145.311C2.65555 132.675 0.000216264 118.757 0.000216264 103.558ZM22.7995 103.558C22.7995 115.644 24.8138 126.723 28.8426 136.795C33.0545 146.867 38.7314 155.566 45.8734 162.891C53.1984 170.033 61.7138 175.618 71.4195 179.647C81.1252 183.676 91.655 185.69 103.009 185.69C114.546 185.69 125.167 183.676 134.873 179.647C144.579 175.618 153.002 170.033 160.144 162.891C167.286 155.566 172.872 146.867 176.9 136.795C180.929 126.723 182.943 115.644 182.943 103.558C182.943 91.2883 180.929 80.1176 176.9 70.0456C172.872 59.7906 167.286 51.0005 160.144 43.6754C153.002 36.3504 144.579 30.765 134.873 26.9194C125.167 22.8906 114.546 20.8762 103.009 20.8762C91.655 20.8762 81.1252 22.8906 71.4195 26.9194C61.7138 30.765 53.1984 36.3504 45.8734 43.6754C38.7314 51.0005 33.0545 59.7906 28.8426 70.0456C24.8138 80.1176 22.7995 91.2883 22.7995 103.558ZM103.284 135.696C109.693 135.696 115.278 134.14 120.04 131.027C124.801 127.914 127.914 122.511 129.379 114.82L157.947 121.138C154.834 132.492 148.333 141.831 138.444 149.156C128.738 156.298 116.743 159.869 102.459 159.869C93.8525 159.869 86.0696 158.496 79.1108 155.749C72.3351 152.819 66.5667 148.882 61.8054 143.937C57.0441 138.81 53.3816 132.858 50.8178 126.082C48.4371 119.124 47.2468 111.524 47.2468 103.283C47.2468 94.8593 48.5287 87.2595 51.0925 80.4838C53.8394 73.525 57.685 67.5734 62.6294 62.629C67.5739 57.6846 73.4339 53.9305 80.2096 51.3667C87.1684 48.6198 94.8597 47.2464 103.284 47.2464C110.059 47.2464 116.469 48.2536 122.512 50.268C128.555 52.0992 133.866 54.8461 138.444 58.5087C143.205 61.9881 147.142 66.2 150.255 71.1444C153.552 75.9057 155.749 81.2163 156.848 87.0764L128.555 93.9436C127.639 87.5342 124.892 82.132 120.314 77.7369C115.919 73.1588 110.242 70.8697 103.284 70.8697C96.1416 70.8697 90.0984 73.6166 85.154 79.1104C80.2096 84.4211 77.7374 92.4786 77.7374 103.283C77.7374 113.721 80.0264 121.779 84.6046 127.456C89.3659 132.95 95.5922 135.696 103.284 135.696Z" fill="white"></path></svg>                        </div>
                        <div className="w-full flex flex-col lg:flex-row items-start lg:justify-between ml-5 lg:m-0">
                            <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm lg:ml-4 mt-8 lg:max-w-[55%] max-w-[80%] uppercase'>A visual designer navigating the fluid spaces between motion, brand identity, and interaction.</p>

                            <div className="flex flex-col items-start lg:items-end mt-8">
                                <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase'>Lagos, Nigeria</p>
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 lg:h-3 available-box opacity-30 bg-primary-white"></div>
                                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase'>avallable for work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-primary-black overlay">
                </div>
                <div className="absolute bottom-0 left-0 bg-transparent py-8 px-8 w-full z-20">
                    <div className="lg:items-center items-start justify-between w-full flex flex-col lg:flex-row">
                        <div className="">
                            <Link href='/'>
                                <p className='font-fragment-mono font-bold text-lg text-primary-white uppercase lg:mb-1'>Koyang©</p>
                            </Link>
                            <Clock />
                        </div>

                        <div className="flex items-center gap-12 flex-wrap">
                            <nav className="flex items-center gap-12 flex-row">
                                {headerLinks.map((link, i) => (
                                    <NavLink link={link} key={i} />
                                ))}
                            </nav>
                            <div className="hidden lg:block">
                                <p className="text-sm text-primary-white uppercase">CONTACT</p>
                                <NavLink link={emailLink} />
                            </div>
                            <div className="hidden lg:flex flex-col items-start">
                                {socialLinks.map((link, i) => (
                                    <NavLink link={link} key={i} />
                                ))}
                            </div>

                            <div className="lg:flex flex-col items-end hidden">
                                <Link href='#'>
                                    <p className='text-primary-white font-fragment-mono text-sm uppercase'>Sound [off]</p>
                                </Link>
                                <Link href='#'>
                                    <p className='text-primary-white font-fragment-mono text-sm uppercase'>color [#fffff]</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-12">
                        <p className="text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase"><span>↓</span> SCROLL DOWN to view LATEST WORKS</p>
                    </div>
                </div>
           </div>
         </div>
    </div>
  )
}

export default Hero