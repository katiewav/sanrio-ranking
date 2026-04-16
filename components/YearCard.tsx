"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { YearRanking } from "@/data/rankings";
import CharacterCard from "./CharacterCard";
import SwipeCarousel from "./SwipeCarousel";

export default function YearCard({ data }: { data: YearRanking }) {
  const [expanded, setExpanded] = useState(false);
  const winner = data.rankings[0];
  const hasMultiple = data.rankings.length > 1;

  return (
    <motion.div
      layout
      className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-5 flex items-center gap-4 text-left"
      >
        {/* Year badge */}
        <div className="flex-shrink-0">
          <div
            className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center"
            style={{ backgroundColor: winner.color + "15" }}
          >
            <span className="text-xs font-medium text-gray-400">
              #{data.edition}
            </span>
            <span
              className="text-lg font-bold"
              style={{ color: winner.color }}
            >
              {data.year}
            </span>
          </div>
        </div>

        {/* Winner info */}
        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xl">👑</span>
            <span className="font-bold text-gray-800 text-lg truncate">
              {winner.name}
            </span>
          </div>
          {data.totalVotes && (
            <p className="text-xs text-gray-400 mt-0.5">
              {data.totalVotes} total votes
            </p>
          )}
          {hasMultiple && (
            <p className="text-xs text-pink-400 mt-0.5">
              Top {data.rankings.length} available
            </p>
          )}
        </div>

        {/* Expand arrow */}
        {hasMultiple && (
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            className="text-gray-300 flex-shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              />
            </svg>
          </motion.div>
        )}
      </button>

      <AnimatePresence>
        {expanded && hasMultiple && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <div className="border-t border-gray-100 pt-4">
                <SwipeCarousel rankings={data.rankings} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!hasMultiple && (
        <div className="px-5 pb-4 -mt-1">
          <span className="text-xs text-gray-300 italic">
            Only winner recorded for this year
          </span>
        </div>
      )}
    </motion.div>
  );
}
