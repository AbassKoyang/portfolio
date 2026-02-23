import { projectType } from "@/lib/types"

const projects : projectType[] = [
    {
        id: 0,
        slug: 'digital-ocean',
        title: 'Digital Ocean',
        description: 'A virtual diving experience through digital oceans.',
        images: [
            "/project-1.png",
            "/project-1.png",
            "/project-1.png",
            "/project-1.png",
            "/project-1.png"
        ]
    },
    {
        id: 1,
        slug: 'cosmic-visualizer',
        title: 'Cosmic Visualizer',
        description: 'Interactive visualization of astronomical data.',
        images: [
            "/project-1.png",
            "/project-1.png",
            "/project-1.png",
            "/project-1.png",
            "/project-1.png"
        ]
    },
    {
        id: 2,
        slug: 'smart-controller',
        title: 'Smart Controller',
        description: 'Centralized system for managing smart home devices.',
        images: [
            "/project-1.png",
            "/project-1.png",
            "/project-1.png",
            "/project-1.png",
            "/project-1.png"
        ]
    }
]

export default projects