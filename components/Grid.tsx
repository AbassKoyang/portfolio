import { projectType } from '@/lib/types'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image'
import React, { useRef } from 'react'

const Grid = ({project}:{project: projectType}) => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.to('.title-box', {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut',
            repeat: -1,
        })
    }, { scope: container, dependencies: [] })

  return (
    <div ref={container} className="w-full h-[250px] lg:h-[350px] row-span-1 lg:nth-1:col-span-1 lg:nth-2:col-span-2 lg:nth-3:col-span-2 lg:nth-4:col-span-1 lg:nth-5:col-span-1 lg:nth-6:col-span-2 lg:nth-7:col-span-2 lg:nth-8:col-span-1 even:bg-black odd:bg-green-300 overflow-hidden relative group cursor-pointer rounded-md grid">
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
    </div>
  )
}

export default Grid