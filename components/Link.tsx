"use client";

import { linkType } from "@/lib/types";
import Link from "next/link";
import React, { useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";

const NavLink = ({ link }: { link: linkType }) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const handleScrambleText = (
    element: HTMLElement | null,
    text: string,
    direction: "rtl" | "ltr"
  ) => {
    if (!element) return;

    gsap.to(element, {
      duration: 1,
      scrambleText: {
        text,
        chars: "+x0$a#b!^",
        revealDelay: 0.1,
        speed: 1,
        rightToLeft: direction === "rtl",
      },
    });
  };

  return (
    <Link href={link.url}>
      <div className="inline-block relative">
        <motion.p
          ref={textRef}
          onHoverStart={() => {
            handleScrambleText(textRef.current, link.text, "ltr");

            if (lineRef.current) {
              gsap.to(lineRef.current, {
                scaleX: 1,
                transformOrigin: "left",
                duration: 0.8,
                ease: "power2.out",
              });
            }
          }}
          onHoverEnd={() => {
            handleScrambleText(textRef.current, link.text, "rtl");

            if (lineRef.current) {
              gsap.to(lineRef.current, {
                scaleX: 0,
                transformOrigin: "right",
                duration: 0.8,
                ease: "power2.in",
              });
            }
          }}
          className="text-primary-white font-fragment-mono text-[10px] lg:text-sm uppercase"
        >
          {link.text}
        </motion.p>

        <div
          ref={lineRef}
          className="w-full h-px bg-primary-white/60 origin-left scale-x-0"
        />
      </div>
    </Link>
  );
};

export default NavLink;