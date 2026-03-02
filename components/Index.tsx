"use client";

import { projectType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import { useRouter } from "next/navigation";

const Index = ({ project }: { project: projectType }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter()



  return (
    <motion.div
    onClick={() => router.push(`/projects/${project.slug}`)}
      ref={containerRef}
      className="indices relative cursor-pointer"
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
    >
      <div className="w-full flex items-center justify-between py-2 border-b border-primary-white/10 z-30">
        <div className="w-[70%] flex items-center">
          <div className="w-[30%]">
            <p className="text-primary-white font-fragment-mono text-sm uppercase">
              {project.title}
            </p>
          </div>
          <div className="w-[25%]">
            <p className="text-primary-white font-fragment-mono text-sm uppercase">
              {project.expertise}
            </p>
          </div>
          <div className="w-[35%]">
            <p className="text-primary-white font-fragment-mono text-sm uppercase">
              {project.techStack.length > 50
                ? project.techStack + "..."
                : project.techStack}
            </p>
          </div>
          <div className="w-[10%]">
            <p className="text-primary-white font-fragment-mono text-sm uppercase">
              {project.year}
            </p>
          </div>
        </div>

        <Link
          className="text-primary-white font-fragment-mono text-sm uppercase"
          href={`/projects/${project.slug}`}
        >
          View more[+]
        </Link>
      </div>

      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
          ref={imageRef}
            key="image-box"
            initial={{ opacity: project.id == 0 || project.id == 7 ? 0 : 1, scale: project.id == 0 || project.id == 7 ? 0 : 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: project.id == 0 || project.id == 7 ? 0 : 1, scale: project.id == 0 || project.id == 7 ? 0 : 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="
              pointer-events-none
              absolute
              top-[50%]
              left-[72%]
              size-[200px]
              -translate-y-1/2
              z-[1000]
            "
          >
            <div className="relative size-full">
              <Image
                fill
                className="object-cover"
                src={project.images[0]}
                alt="Project preview"
                placeholder="blur"
                blurDataURL="/assets/images/default-avatar.png"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Index;