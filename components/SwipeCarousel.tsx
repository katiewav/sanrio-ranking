"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { CharacterEntry, CHARACTER_EMOJI, CHARACTER_IMAGES } from "@/data/rankings";

function getRankLabel(rank: number): string {
  if (rank === 1) return "1st";
  if (rank === 2) return "2nd";
  if (rank === 3) return "3rd";
  return `${rank}th`;
}

const swipeThreshold = 50;

export default function SwipeCarousel({
  rankings,
}: {
  rankings: CharacterEntry[];
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (rankings.length <= 1) return null;

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return rankings.length - 1;
      if (next >= rankings.length) return 0;
      return next;
    });
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -swipeThreshold) paginate(1);
    else if (info.offset.x > swipeThreshold) paginate(-1);
  };

  const entry = rankings[index];
  const emoji = CHARACTER_EMOJI[entry.name] || "✨";
  const imgSrc = CHARACTER_IMAGES[entry.name];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <div className="mt-4">
      <div className="relative overflow-hidden rounded-xl" style={{ minHeight: 180 }}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={handleDragEnd}
            className="w-full rounded-xl p-5 text-center cursor-grab active:cursor-grabbing"
            style={{
              backgroundColor: entry.color + "15",
              borderColor: entry.color + "35",
              borderWidth: "2px",
            }}
          >
            <div
              className="inline-flex items-center justify-center rounded-full w-20 h-20 mb-3 overflow-hidden"
              style={{ backgroundColor: entry.color + "25" }}
            >
              {imgSrc ? (
                <Image
                  src={imgSrc}
                  alt={entry.name}
                  width={64}
                  height={64}
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.querySelector(
                      ".emoji-fallback"
                    )!.classList.remove("hidden");
                  }}
                />
              ) : null}
              <span className={`text-3xl emoji-fallback ${imgSrc ? "hidden" : ""}`}>
                {emoji}
              </span>
            </div>
            <div className="font-extrabold text-lg" style={{ color: entry.color }}>
              {entry.name}
            </div>
            <div
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mt-2"
              style={{ backgroundColor: entry.color + "20", color: entry.color }}
            >
              {getRankLabel(entry.rank)}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        <button
          onClick={() => paginate(-1)}
          className="text-gray-400 hover:text-pink-400 transition-colors mr-2 text-lg"
          aria-label="Previous"
        >
          ‹
        </button>
        {rankings.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index
                ? "bg-pink-400 scale-125"
                : "bg-gray-300 hover:bg-pink-200"
            }`}
            aria-label={`Go to rank ${i + 1}`}
          />
        ))}
        <button
          onClick={() => paginate(1)}
          className="text-gray-400 hover:text-pink-400 transition-colors ml-2 text-lg"
          aria-label="Next"
        >
          ›
        </button>
      </div>
      <p className="text-center text-xs text-gray-400 mt-1">
        Swipe or tap to browse top {rankings.length}
      </p>
    </div>
  );
}
