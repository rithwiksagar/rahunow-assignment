"use client";
import BirthForm from "@/components/readingForm";
import { easeOut, motion } from "motion/react";

export default function HeroSection(){
      return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(4px)",
        y: 10,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: easeOut,
      }}
      className="min-h-screen flex items-start justify-center pt-44"
    >
      <div className="flex flex-col items-center">
        <h6 className="inline-flex items-center gap-1 rounded-full border border-neutral-300 bg-white/60 px-1.5 py-0.5 md:px-2.5 md:py-1 md:gap-2 text-[12px] md:text-sm text-neutral-500">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path
              fill="orange"
              stroke="none"
              d="M12 4l1.7 4.6L18 10l-4.3 1.4L12 16l-1.7-4.6L6 10l4.3-1.4z"
            />
            <path
              fill="orange"
              stroke="none"
              d="M17.6 14l.55 1.6 1.6.55-1.6.55-.55 1.6-.55-1.6-1.6-.55 1.6-.55z"
            />
          </svg>
          Real Vedic astrology · computed live
        </h6>

        <h1 className="mt-10 max-w-120 text-center font-serif text-3xl md:text-5xl font-medium text-foreground">
          The sky the minute you were born.
        </h1>
        <p className="mt-5 max-w-140 text-center text-neutral-500 text-[13px] md:text-[16px]">
          Your free
          <span className="text-black font-medium bg-orange-200/90 px-0.5">
            {" "}
            Vedic astrology reading{" "}
          </span>
          — built from the exact position of every planet at your birth. See
          what's ahead in{" "}
          <span className="text-black font-medium">love, work and money.</span>
        </p>

        <BirthForm />
      </div>
    </motion.div>
  );
}