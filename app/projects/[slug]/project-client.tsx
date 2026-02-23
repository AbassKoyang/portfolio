'use client'
import { projectType } from '@/lib/types'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ReactLenis from 'lenis/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const ProjectClient = ({project, prevProject, nextProject} : {project: projectType; prevProject: projectType; nextProject: projectType}) => {
    const projectnavRef = useRef<HTMLDivElement>(null)
    const progressBarRef = useRef<HTMLDivElement>(null)
    const projectDescriptionRef = useRef<HTMLDivElement>(null)
    const footerRef = useRef<HTMLDivElement>(null)
    const nextProjectProgressBarRef = useRef<HTMLDivElement>(null)

    const [isTransistioning, setisTransistioning] = useState(false)
    const [shouldUpdateProgress, setShouldUpdateProgress] = useState(true)

    const router = useRouter()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(projectnavRef.current, {
            opacity: 0,
            y: -100
        })

        gsap.to(projectnavRef.current, {
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
            ease: "power3.out"
        })

        const navScrollTrigger = ScrollTrigger.create({
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom' ,
            onUpdate: (self) => {
                if (progressBarRef.current){
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
                if(projectnavRef.current && !isTransistioning){
                    gsap.to(projectnavRef.current, {
                        y: -100,
                        duration: 0.5,
                        ease: 'power2.inOut'
                    })
                }
            }, 
            onLeaveBack: () => {
                if(projectnavRef.current && !isTransistioning){
                    gsap.to(projectnavRef.current, {
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.inOut'
                    })
                }
            }, 
            onUpdate: (self) => {

                if(nextProjectProgressBarRef.current && shouldUpdateProgress){
                    gsap.set(nextProjectProgressBarRef.current, {
                        scaleX: self.progress
                    })
                }

                if(self.progress >= 1 && !isTransistioning){
                    setShouldUpdateProgress(false)
                    setisTransistioning(false)

                    const tl = gsap.timeline()

                    tl.set(nextProjectProgressBarRef.current, {
                        scaleX: 1,
                    })

                    tl.to([footerRef.current?.querySelector('.project-footer-copy'), footerRef.current?.querySelector('.next-project-progress')], {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.inOut'
                    })

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
    <div className="project-page">
        <div ref={projectnavRef} className="project-nav">
                <div className="link">
                    <span>&#8592;&nbsp;</span>
                    <Link href={`/projects/${prevProject.slug}`}>Previous</Link>
                </div>

                <div className="project-page-scroll-progress">
                    <div ref={progressBarRef} className="project-page-scroll-progress-bar"></div>
                    <p>{project.title}</p>
                </div>

                <div className="link">
                    <span>&#8594;&nbsp;</span>
                    <Link href={`/projects/${nextProject.slug}`}>Next</Link>
                </div>
        </div>

        <div className="project-hero">
            <h1>{project.title}</h1>
            <p ref={projectDescriptionRef} id='project-description'>{project.description}</p>
        </div>

        <div className="project-images">
            {project.images && project.images.map((image, i) => (
                <div className="project-img">
                    <img key={i} src={image} alt="Project image" />
                </div>
            ))}
        </div>

        <div ref={footerRef} className="project-footer">
            <h1>{project.title}</h1>
            
            <div className="project-footer-copy">
                <p>Next Project</p>
            </div>

            <div className="next-project-progress">
                <div ref={nextProjectProgressBarRef} className="next-project-progress-bar"></div>
            </div>
        </div>
    </div>
</ReactLenis>
  )
}

export default ProjectClient