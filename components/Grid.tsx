import { projectType } from '@/lib/types'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import {motion} from 'motion/react'

const Grid = ({project}:{project: projectType}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const cursorRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
      const cursor = cursorRef.current;
      const container = containerRef.current;
      if (!cursor || !container) return;
  
      let mouseX = 0;
      let mouseY = 0;
      let posX = 0;
      let posY = 0;
  
      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX - container.getBoundingClientRect().x;
        mouseY = e.clientY - container.getBoundingClientRect().y;
      };
  
      container.addEventListener("mousemove", handleMouseMove);
  
      const animate = () => {
        posX += (mouseX - posX) * 0.1;
        posY += (mouseY - posY) * 0.1;
  
        cursor.style.transform = `translate(${posX}px, ${posY}px)`;
  
        requestAnimationFrame(animate);
      };
  
      animate();
  
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    useGSAP(() => {
        gsap.to('.title-box', {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut',
            repeat: -1,
        })
    }, { scope: containerRef, dependencies: [] })

  return (
    <motion.div onHoverStart={() => gsap.to(cursorRef.current, {opacity: 1})} onHoverEnd={() => gsap.to(cursorRef.current, {opacity: 0})} ref={containerRef} className="w-full h-[250px] lg:h-[350px] row-span-1 lg:nth-1:col-span-1 lg:nth-2:col-span-2 lg:nth-3:col-span-2 lg:nth-4:col-span-1 lg:nth-5:col-span-1 lg:nth-6:col-span-2 lg:nth-7:col-span-2 lg:nth-8:col-span-1 even:bg-black odd:bg-green-300 overflow-hidden relative group cursor-pointer rounded-md grid">
        <p
            ref={cursorRef}
            className="
                pointer-events-none
                fixed
                top-0
                left-0
                -translate-x-1/2
                -translate-y-1/2
                text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase
                z-[10000]
                opacity-0
            "
            >[view project]</p>
        <Image
        className='object-cover group-hover:scale-125 ease-in-out duration-500 transition-all'
        fill
        src={project.images[0]}
        loading='eager'
        placeholder='blur'
        blurDataURL='/assets/images/default-avatar.png'
        alt='Profle Picture'
        />
        <div className="size-full absolute top-0 left-0 hidden lg:flex opacity-60 bg-black z-30 group-hover:opacity-0 ease-in-out duration-500 transition-all items-center justify-center">
            <p className='text-primary-white font-fragment-mono text-2xl uppercase font-semibold'>{project.title}</p>
        </div>
        <div className="flex items-center gap-1 absolute top-5 left-5 group-hover:opacity-100 lg:opacity-0">
            <div className="size-1 lg:size-1.5 title-box opacity-30 bg-white"></div>
            <p className='text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase'>{project.title}</p>
        </div>
    </motion.div>
  )
}

export default Grid