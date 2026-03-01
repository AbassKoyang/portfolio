'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Profile = () => {
    const container = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const techStacks = gsap.utils.toArray<HTMLElement>(".tech-stack");
        const projects = gsap.utils.toArray<HTMLElement>(".project");
        const focus = gsap.utils.toArray<HTMLElement>(".focus");
      
        techStacks.forEach((el) => {
          el.dataset.text = el.textContent || "";
        });
        projects.forEach((el) => {
          el.dataset.text = el.textContent || "";
        });
        focus.forEach((el) => {
          el.dataset.text = el.textContent || "";
        });
      
        const tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                    },
            }
        )

        tl.to('.header', {
        opacity: 1,
          duration: 0.2,
          scrambleText: {
            text: ((_i: number, el: Element) => (el as HTMLElement).textContent || "") as any,
            chars: "+x0$a#b!^",
            revealDelay: 0.1,
            speed: 1,
          }
        });
        tl.to(techStacks, {
        opacity: 1,
          duration: 2,
          stagger: 0.2,
          scrambleText: {
            text: ((_i: number, el: Element) => (el as HTMLElement).textContent || "") as any,
            chars: "+x0$a#b!^",
            revealDelay: 0.1,
            speed: 1,
          }
        }, '<');
        tl.to(projects, {
        opacity: 1,
          duration: 2,
          stagger: 0.2,
          scrambleText: {
            text: ((_i: number, el: Element) => (el as HTMLElement).textContent || "") as any,
            chars: "+x0$a#b!^",
            revealDelay: 0.1,
            speed: 1,
          }
        }, '<');
        tl.to(focus, {
        opacity: 1,
          duration: 2,
          stagger: 0.2,
          scrambleText: {
            text: ((_i: number, el: Element) => (el as HTMLElement).textContent || "") as any,
            chars: "+x0$a#b!^",
            revealDelay: 0.1,
            speed: 1,
          }
        }, '<');
      }, { scope: container });
  return (
    <section ref={container} className="w-full p-8 py-10 mt-4 bg-primary-black overflow-x-hidden border-y border-primary-white/10 flex flex-col lg:flex-row items-start justify-between">
        <div className="lg:w-[25%] mb-5 lg:mb-0">
            <h4 className='text-primary-white font-fragment-mono text-xs lg:text-sm uppercase header opacity-0'>Profile</h4>
        </div>
        <div className="w-full lg:w-[75%] flex flex-row flex-wrap items-start justify-between">
            <div className="w-[50%] lg:w-[30%] flex flex-row items-start lg:flex-col gap-5">
                <p className='text-primary-white/50 font-fragment-mono text-[10px] lg:text-sm uppercase tech-stack'>Tech stack</p>
                <div className="">
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-0 lg:mt-5  opacity-0 tech-stack'>TypeScript</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3  opacity-0 tech-stack'>React</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 tech-stack'>Next.js</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 tech-stack'>ShadCN Ui</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3  opacity-0 tech-stack'>GSAP</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3  opacity-0 tech-stack'>Motion</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3  opacity-0 tech-stack'>Firebase</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3  opacity-0 tech-stack'>Node.js/Express</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 tech-stack'>Python</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3  opacity-0 tech-stack'>Django/DRF</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3  opacity-0 tech-stack'>PostgreSQL</p>
                </div>
            </div>
            <div className="w-[50%] lg:w-[30%] flex flex-row items-start lg:flex-col gap-5">
                <p className='text-primary-white/50 font-fragment-mono text-[10px] lg:text-sm uppercase opacity-0 project'>prohects type</p>
                <div className="">
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-0 lg:mt-5 opacity-0 project'>Web Application</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 project'>Interactive Experience</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 project'>Full Stack Application</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 project'>UI Experiment</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 project'>PWA</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 project'>CLI tools</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 project'>dev tools</p>
                </div>
            </div>
            <div className="w-[50%] lg:w-[30%] flex flex-row items-start lg:flex-col gap-5 mt-12 lg:mt-0">
                <p className='text-primary-white/50 font-fragment-mono text-[10px] lg:text-sm uppercase opacity-0 focus'>focus</p>
                <div className="">
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-0 lg:mt-5 opacity-0 focus'>Performance</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 focus'>Animation</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 focus'>ux</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 focus'>System Design</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 focus'>PRECISION</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 focus'>detail</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 focus'>SCALABILITY</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 focus'>ACCESSIBILITY</p>
                    <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase mt-3 opacity-0 focus'>MAINTAINABILITY</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile