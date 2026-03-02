"use client";
import { projectType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import { useRouter } from "next/navigation";

const MoreProjectsIndex = ({project, setImage}:{project: projectType, setImage: (url: string) => void}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter()

  return (
    <motion.div
    onClick={() => router.push(`/projects/${project.slug}`)}
      ref={containerRef}
      className="indices relative cursor-pointer"
      onMouseEnter={() => setImage(project.images[0])}
    >
      <div className="w-full flex items-center justify-between py-3 px-4 border-b border-primary-white/10 z-30 hover:bg-primary-white/10">
        <div className="w-full flex items-center">
          <div className="w-[25%]">
            <p className="text-primary-white font-fragment-mono text-xs uppercase">
              {project.title}
            </p>
          </div>
          <div className="w-[25%]">
            <p className="text-primary-white font-fragment-mono text-xs uppercase">
              {project.expertise}
            </p>
          </div>
          <div className="w-[40%]">
            <p className="text-primary-white font-fragment-mono text-xs uppercase">
              {project.techStack.length > 50
                ? project.techStack + "..."
                : project.techStack}
            </p>
          </div>
          <div className="w-[10%] flex justify-end">
            <p className="text-primary-white font-fragment-mono text-xs uppercase">
              {project.year}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MoreProjectsIndex