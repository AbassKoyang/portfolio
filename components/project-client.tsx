'use client'
import { projectType } from '@/lib/types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ReactLenis from 'lenis/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import SideBar from './SideBar'
import MoreProjects from './MoreProjects'

const ProjectClient = ({
  project,
  prevProject,
  nextProject
}: {
  project: projectType
  prevProject: projectType
  nextProject: projectType
}) => {

  const projectnavRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const projectDescriptionRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const nextProjectProgressBarRef = useRef<HTMLDivElement>(null)

  const [isTransistioning, setisTransistioning] = useState(false)
  const [shouldUpdateProgress, setShouldUpdateProgress] = useState(true)

  const router = useRouter()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // gsap.set(projectnavRef.current, { opacity: 0, y: -100 })

    gsap.fromTo(projectnavRef.current, {
      opacity: 0,
      y: -100,
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.25,
        ease: 'power3.out'
    })

    gsap.to(projectDescriptionRef.current, {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out'
    })

    const navScrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (progressBarRef.current) {
          gsap.set(progressBarRef.current, {
            scaleX: self.progress
          })
        }
      }
    })

    const footerScrollTrigger = ScrollTrigger.create({
      trigger: footerRef.current,
      start: 'top top',
      end: `+=${window.innerHeight * 3}px`,
      pin: true,
      pinSpacing: true,
      onEnter: () => {
        if (projectnavRef.current && !isTransistioning) {
          gsap.to(projectnavRef.current, {
            y: -100,
            duration: 0.5,
            ease: 'power2.inOut'
          })
        }
      },
      onLeaveBack: () => {
        if (projectnavRef.current && !isTransistioning) {
          gsap.to(projectnavRef.current, {
            y: 0,
            duration: 0.5,
            ease: 'power2.inOut'
          })
        }
      },
      onUpdate: (self) => {

        if (nextProjectProgressBarRef.current && shouldUpdateProgress) {
          gsap.set(nextProjectProgressBarRef.current, {
            scaleX: self.progress
          })
        }

        if (self.progress >= 1 && !isTransistioning) {
          setShouldUpdateProgress(false)
          setisTransistioning(false)

          const tl = gsap.timeline()

          tl.set(nextProjectProgressBarRef.current, { scaleX: 1 })

          tl.to(
            [
              footerRef.current?.querySelector('.project-footer-copy'),
              footerRef.current?.querySelector('.next-project-progress')
            ],
            {
              opacity: 0,
              duration: 0.3,
              ease: 'power2.inOut'
            }
          )

          tl.call(() => {
            router.push(`/projects/${nextProject.slug}`)
          })
        }
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }

  }, [nextProject.slug, isTransistioning, shouldUpdateProgress])

  return (
    <ReactLenis root>
      <div className="relative w-screen bg-primary-black">
        <SideBar />
        <div
          ref={projectnavRef}
          className="
            fixed top-0 left-[50%] -translate-x-[50%]
            w-[100%] md:w-[70%]
            flex justify-between gap-8
            p-4 z-20 opacity-0
          "
        >
          <Link href={`/projects/${prevProject.slug}`} className="flex items-center gap-2 px-4 bg-primary-white">
            <span className="relative -top-[0.075em] text-xs lg:text-base font-medium">
              &#8592;
            </span>
            <p
              className="uppercase font-semibold text-sm text-primary-black font-mono hidden lg:block"
            >
              Previous
            </p>
          </Link>

          <div className="
            relative flex-1 h-[30px]
            flex items-center justify-center
            border border-primary-white/10
            backdrop-blur-xl overflow-hidden
            bg-white/25
          ">
            <div
              ref={progressBarRef}
              className="
                absolute top-0 left-0
                w-full h-full
                bg-primary-white/30
                mix-blend-difference
                scale-x-0 origin-left
                will-change-transform
                -z-10
              "
            />
            <p className="text-base font-medium text-primary-white mix-blend-difference">
              {project.title}
            </p>
          </div>

          <Link href={`/projects/${prevProject.slug}`} className="flex items-center gap-2 px-4 bg-primary-white">
            <span className="relative -top-[0.075em] text-base font-medium">
              &#8594;
            </span>
            <p
              className="uppercase font-semibold text-sm text-[#1a1a1a] font-mono hidden lg:block"
            >
              Next
            </p>
          </Link>
        </div>

        <div className="relative w-screen h-svh flex items-center justify-center">
          <h1 className="text-[7.5vw] font-semibold text-primary-white">
            {project.title}
          </h1>

          <p
            ref={projectDescriptionRef}
            className="
              absolute bottom-[10%]
              left-1/2 -translate-x-1/2 -translate-y-1/2
              text-center text-base font-medium
              opacity-0
              text-primary-white
            "
          >
            {project.description}
          </p>
        </div>

        <div className="w-full h-[300px] lg:h-screen overflow-hidden relative">
            <Image
            className='object-cover group-hover:scale-125 ease-in-out duration-500 transition-all'
            fill
            src={project.images[0]}
            loading='eager'
            placeholder='blur'
            blurDataURL='/assets/images/default-avatar.png'
            alt='Project Image'
            />
        </div>

        <div className="mt-5 lg:mt-10 w-full flex px-4">
            <div className="w-full lg:w-[70%] bg-primary-black">
                <div className="w-full h-[300px] lg:h-[600px] rounded-xl relative overflow-hidden">
                <Image
                    className='object-cover group-hover:scale-125 ease-in-out duration-500 transition-all'
                    fill
                    src={project.images[1]}
                    loading='eager'
                    placeholder='blur'
                    blurDataURL='/assets/images/default-avatar.png'
                    alt='Project Image'
                    />
                </div>

                <div className="w-full h-[300px] lg:h-[600px] rounded-xl relative overflow-hidden mt-4 lg:mt-8">
                <Image
                    className='object-cover group-hover:scale-125 ease-in-out duration-500 transition-all'
                    fill
                    src={project.images[1]}
                    loading='eager'
                    placeholder='blur'
                    blurDataURL='/assets/images/default-avatar.png'
                    alt='Project Image'
                    />
                </div>

                <div className="w-full py-8 h-fit bg-primary-black sticky block lg:hidden">
                    <h1 className='text-primary-white font-semibold text-3xl tracking-tighter'>{project.title}</h1>
                    <Link href={project.slug}  className='text-primary-white font-mono text-sm uppercase font-medium'>view project <span className='text-lg'>↗</span></Link>
                    <div className="w-full mt-4">
                        <h5 className='text-primary-white/50 font-fragment-mono text-sm uppercase'>Overview</h5>
                        <p className='text-primary-white font-mono text-xs font-medium mt-2'>
                                {project.overview}
                        </p>
                    </div>
                    <div className="w-full py-2 border-y border-primary-white/10 mt-4">
                        <h5 className='text-primary-white/50 font-fragment-mono text-sm uppercase'>Tech Stack</h5>
                        <p className='text-primary-white font-mono text-xs uppercase font-medium mt-2'>
                            {project.techStack}
                        </p>
                    </div>
                    <div className="w-full mt-4">
                        <h5 className='text-primary-white/50 font-fragment-mono text-sm uppercase'>expertise</h5>
                        <p className='text-primary-white font-mono text-xs font-medium mt-2'>
                                {project.expertise}
                        </p>
                    </div>
                    <div className="w-full mt-4">
                        <h5 className='text-primary-white/50 font-fragment-mono text-sm uppercase'>year</h5>
                        <p className='text-primary-white font-mono text-xs font-medium mt-2'>
                                {project.year}
                        </p>
                    </div>
                </div>

                <div className="w-full lg:h-[500px] mt-4 lg:mt-8 flex flex-wrap lg:grid lg:grid-cols-2 gap-5">
                    <div className="w-full lg:col-span-1 h-[300px] lg:h-full relative rounded-xl overflow-hidden">
                        <Image
                        className='object-cover group-hover:scale-125 ease-in-out duration-500 transition-all'
                        fill
                        src={project.images[1]}
                        loading='eager'
                        placeholder='blur'
                        blurDataURL='/assets/images/default-avatar.png'
                        alt='Project Image'
                        />
                    </div>
                    <div className="w-full lg:col-span-1 h-[300px] lg:h-full relative rounded-xl overflow-hidden">
                        <Image
                        className='object-cover group-hover:scale-125 ease-in-out duration-500 transition-all'
                        fill
                        src={project.images[1]}
                        loading='eager'
                        placeholder='blur'
                        blurDataURL='/assets/images/default-avatar.png'
                        alt='Project Image'
                        />
                    </div>
                </div>
                <div className="w-full h-[300px] lg:h-[600px] rounded-xl relative overflow-hidden mt-4 lg:mt-8">
                <Image
                    className='object-cover group-hover:scale-125 ease-in-out duration-500 transition-all'
                    fill
                    src={project.images[1]}
                    loading='eager'
                    placeholder='blur'
                    blurDataURL='/assets/images/default-avatar.png'
                    alt='Project Image'
                    />
                </div>
            </div>
            <div className="w-[30%] pl-12 pt-14 h-fit bg-primary-black sticky top-[45px] hidden lg:block">
                <h1 className='text-primary-white font-semibold text-3xl tracking-tighter'>{project.title}</h1>
                <Link href={project.slug}  className='text-primary-white font-mono text-sm uppercase font-medium'>view project <span className='text-lg'>↗</span></Link>
                <div className="w-full mt-4">
                    <h5 className='text-primary-white/50 font-fragment-mono text-sm uppercase'>Overview</h5>
                    <p className='text-primary-white font-mono text-xs font-medium mt-2'>
                            {project.overview}
                    </p>
                </div>
                <div className="w-full py-2 border-y border-primary-white/10 mt-4">
                    <h5 className='text-primary-white/50 font-fragment-mono text-sm uppercase'>Tech Stack</h5>
                    <p className='text-primary-white font-mono text-xs uppercase font-medium mt-2'>
                        {project.techStack}
                    </p>
                </div>
                <div className="w-full mt-4">
                    <h5 className='text-primary-white/50 font-fragment-mono text-sm uppercase'>expertise</h5>
                    <p className='text-primary-white font-mono text-xs font-medium mt-2'>
                            {project.expertise}
                    </p>
                </div>
                <div className="w-full mt-4">
                    <h5 className='text-primary-white/50 font-fragment-mono text-sm uppercase'>year</h5>
                    <p className='text-primary-white font-mono text-xs font-medium mt-2'>
                            {project.year}
                    </p>
                </div>
            </div>
        </div>


        <MoreProjects />


        <div
          ref={footerRef}
          className="relative w-screen h-svh flex items-center justify-center"
        >
          <h1 className="text-[7.5vw] font-semibold text-primary-white">
            {nextProject.title}
          </h1>

          <div className="
            project-footer-copy
            absolute top-[35%]
            left-1/2 -translate-x-1/2 -translate-y-1/2
          ">
            <p className="text-base font-medium text-primary-white">
              Next Project
            </p>
          </div>

          <div className="
            next-project-progress
            absolute bottom-[25%]
            w-1/2 h-1
            bg-primary-white/10
          ">
            <div
              ref={nextProjectProgressBarRef}
              className="
                absolute top-0 left-0
                w-full h-full
                bg-primary-white
                scale-x-0 origin-left
                will-change-transform
              "
            />
          </div>
        </div>

      </div>
    </ReactLenis>
  )
}

export default ProjectClient