'use client';
import projects from '@/app/projects'
import React, { useRef, useState } from 'react'
import Index from './Index'
import MoreProjectsIndex from './MoreProjectsIndex'
import Image from 'next/image'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Grid from './Grid';

const MoreProjects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [image, setImage] = useState(projects[0].images[0]);

    useGSAP(() => {
        gsap.from('.project-preview', {
            scale: 1.15,
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }, {scope: containerRef, dependencies: [image]})
  return (
    <div ref={containerRef} className="w-full mt-20 px-4">
        <div className="hidden lg:flex items-start justify-between gap-5 w-full py-2">
            <div className="w-[25%]">
                <h5 className='text-primary-white font-fragment-mono text-sm uppercase'>More_Projects</h5>
                <div className="w-full h-[330px] relative rounded-lg mt-2 overflow-hidden">
                <Image
                fill
                className="object-cover project-preview  opacity-100"
                src={image}
                alt="Project preview"
                placeholder="blur"
                blurDataURL="/assets/images/default-avatar.png"
                />
            </div>
            </div>
            <div className="w-[75%]">
                <div className="w-full flex items-center px-4">
                    <div className="w-[25%] flex items-center justify-start">
                    <p className='text-primary-white/50 font-fragment-mono text-sm uppercase'>Project name</p>
                    </div>
                    <div className="w-[25%] flex items-center justify-start">
                    <p className='text-primary-white/50 font-fragment-mono text-sm uppercase'>expertise</p>
                    </div>
                    <div className="w-[40%] flex items-center justify-start">
                    <p className='text-primary-white/50 font-fragment-mono text-sm uppercase'>tech stack</p>
                    </div>
                    <div className="w-[10%] flex items-center justify-end">
                    <p className='text-primary-white/50 font-fragment-mono text-sm uppercase'>year</p>
                    </div>
                </div>

                {projects.map((project) => (
                <MoreProjectsIndex project={project} setImage={setImage} />
                    ))}
            </div>
        </div>
        <div className="w-full lg:hidden">
            <h5 className='text-primary-white font-fragment-mono text-xs uppercase'>More_Projects</h5>
            <div className="w-full flex flex-wrap gap-8 mt-2">
            {projects.map((project) => (
                <Grid project={project} />
            ))}
            </div>
        </div>
    </div>
  )
}

export default MoreProjects