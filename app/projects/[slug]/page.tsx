import projects from '@/app/projects'
import React from 'react'
import ProjectClient from './project-client';
import { projectType } from '@/lib/types';
const ProjectPage = async ({params,} : {params: Promise<{slug: string}>}) => {
    const {slug} = await params;
    const project = projects.find((p) => p.slug == slug)!

    const currentIndex = projects.findIndex((p) => p.slug == slug)
    const prevIndex= ((currentIndex - 1) + projects.length) % projects.length ;
    const nextIndex = (currentIndex + 1) % projects.length;

    const prevProject = projects[prevIndex]
    const nextProject = projects[nextIndex]
  return (
    <ProjectClient
    project={project}
    nextProject={nextProject}
    prevProject={prevProject}
    />
  )
}

export default ProjectPage