"use client";

import { useState } from "react";
import Image from "next/image";
import {
  RANKINGS,
  CHARACTER_EMOJI,
  CHARACTER_PASTELS,
  CHARACTER_IMAGES,
} from "@/data/rankings";
import YearModal from "./YearModal";
import type { YearRanking } from "@/data/rankings";

export default function WinnersGrid() {
  const [selectedYear, setSelectedYear] = useState<YearRanking | null>(null);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
          {RANKINGS.map((yearData) => {
            const winner = yearData.rankings[0];
            const emoji = CHARACTER_EMOJI[winner.name] || "✨";
            const pastel =
              CHARACTER_PASTELS[winner.name] || "#F0E0F5";
            const hasTop5 = yearData.rankings.length > 1;
            const imgSrc = CHARACTER_IMAGES[winner.name];

            return (
              <button
                key={yearData.year}
                onClick={() => setSelectedYear(yearData)}
                className="kawaii-card rounded-2xl p-4 flex flex-col items-center gap-1.5 border-2 cursor-pointer relative overflow-hidden group"
                style={{
                  backgroundColor: pastel,
                  borderColor: winner.color + "40",
                }}
              >
                {/* Sparkle decoration */}
                <span className="absolute top-1 right-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity animate-twinkle">
                  ✨
                </span>

                {/* Character avatar */}
                <div
                  className="w-18 h-18 rounded-full flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: winner.color + "25" }}
                >
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={winner.name}
                      width={60}
                      height={60}
                      className="object-contain"
                      onError={(e) => {
                        // Fallback to emoji if image doesn't exist
                        const target = e.currentTarget;
                        target.style.display = "none";
                        target.parentElement!.querySelector(
                          ".emoji-fallback"
                        )!.classList.remove("hidden");
                      }}
                    />
                  ) : null}
                  <span
                    className={`text-2xl emoji-fallback ${imgSrc ? "hidden" : ""}`}
                  >
                    {emoji}
                  </span>
                </div>

                {/* Year */}
                <span
                  className="text-xl font-extrabold"
                  style={{ color: winner.color }}
                >
                  {yearData.year}
                </span>

                {/* Winner name */}
                <span
                  className="text-xs font-bold leading-tight text-center"
                  style={{ color: winner.color + "CC" }}
                >
                  {winner.name}
                </span>

                {/* Crown for winner */}
                <span className="text-xs">👑</span>

                {/* Top 5 indicator */}
                {hasTop5 && (
                  <span
                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: winner.color + "20",
                      color: winner.color,
                    }}
                  >
                    Top 5
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm" style={{ color: "#C4A0B9" }}>
          <p>
            Data sourced from the annual{" "}
            <span className="text-pink-400 font-bold">
              サンリオキャラクター大賞
            </span>
          </p>
          <p className="mt-1">
            1986 &ndash; 2025 &middot; 40 years of rankings &middot; click any
            card to explore
          </p>
          <p className="mt-2 text-lg">
            🎀 ✨ 🌸
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedYear && (
        <YearModal
          data={selectedYear}
          onClose={() => setSelectedYear(null)}
        />
      )}
    </>
  );
}
