"use client";

import { motion } from "motion/react";

export default function SkyMarquee() {
  const items = [
    "☉ Sun 26°50′ Gemini",
    "☽ Moon 12°56′ Gemini",
    "♂ Mars 22°43′ Aries",
    "☿ Mercury 05°22′ Cancer",
    "♃ Jupiter 08°20′ Cancer",
    "♀ Venus 09°52′ Leo",
    "♄ Saturn 20°04′ Pisces",
    "☊ Rahu 07°42′ ℞ Aquarius",
    "☋ Ketu 07°42′ ℞ Leo",
    "Sky now",
  ];

  const marqueeItems = [...items, ...items];

  return (
    <div className="fixed left-0 top-16 z-100 group h-10 overflow-hidden border-b border-neutral-300 bg-background">
      <motion.div
        className="flex w-max h-full"
        animate={{ x: ["0%", "-70%"] }}
        transition={{
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        }}
        whileHover={{}}
        style={{
          animationPlayState: "running",
        }}
      >
        {marqueeItems.map((item, i) => (
          <div
            key={i}
            className="flex h-full items-center whitespace-nowrap border-r border-neutral-300 text-[10px] px-2 md:px-8 md:text-[14px] text-neutral-500"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}