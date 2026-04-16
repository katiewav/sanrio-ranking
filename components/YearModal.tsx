"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { YearRanking, CHARACTER_BIOS } from "@/data/rankings";
import SwipeCarousel from "./SwipeCarousel";

export default function YearModal({
  data,
  onClose,
}: {
  data: YearRanking;
  onClose: () => void;
}) {
  const winner = data.rankings[0];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center p-4 modal-backdrop"
        style={{ zIndex: 10000 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-y-auto max-h-[90vh] border-2"
          style={{ borderColor: winner.color + "30" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="p-6 text-center relative"
            style={{
              background: `linear-gradient(135deg, ${winner.color}15, ${winner.color}08)`,
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-lg cursor-pointer"
              style={{ backgroundColor: winner.color + "15", color: winner.color, zIndex: 10 }}
            >
              &times;
            </button>

            {/* Decorations */}
            <div className="flex justify-center gap-2 mb-2 text-xs opacity-60">
              <span className="animate-twinkle">&#10023;</span>
              <span className="animate-twinkle" style={{ animationDelay: "0.5s" }}>
                &#10047;
              </span>
              <span className="animate-twinkle" style={{ animationDelay: "1s" }}>
                &#10023;
              </span>
            </div>

            <h2
              className="text-3xl font-extrabold"
              style={{ color: winner.color }}
            >
              {data.year}
            </h2>
            <p className="text-sm mt-1" style={{ color: winner.color + "99" }}>
              &#10038; {data.edition}th Annual Ranking
            </p>
            {data.totalVotes && (
              <p
                className="text-xs mt-1 font-semibold"
                style={{ color: winner.color + "80" }}
              >
                {data.totalVotes} total votes
              </p>
            )}
          </div>

          {/* Winner bio */}
          {CHARACTER_BIOS[winner.name] && (
            <div className="px-6 pt-2 pb-1">
              <div
                className="rounded-2xl p-4 text-sm leading-relaxed"
                style={{ backgroundColor: winner.color + "08" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs" style={{ color: winner.color }}>&#9733;</span>
                  <span
                    className="font-extrabold"
                    style={{ color: winner.color }}
                  >
                    {winner.name}
                  </span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                    style={{
                      backgroundColor: winner.color + "15",
                      color: winner.color + "AA",
                    }}
                  >
                    est. {CHARACTER_BIOS[winner.name].debut} · {CHARACTER_BIOS[winner.name].species}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#7A6B8A" }}>
                  {CHARACTER_BIOS[winner.name].bio}
                </p>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-6 pt-3">
            {data.rankings.length > 1 ? (
              <>
                <p
                  className="text-center text-sm font-bold mb-3"
                  style={{ color: winner.color }}
                >
                  ✧ Top {data.rankings.length} Rankings ✧
                </p>
                <SwipeCarousel rankings={data.rankings} />
              </>
            ) : (
              <div className="text-center py-4">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ backgroundColor: winner.color + "15" }}
                >
                  <span style={{ color: winner.color }}>&#9733;</span>
                  <span
                    className="font-extrabold text-lg"
                    style={{ color: winner.color }}
                  >
                    {winner.name}
                  </span>
                </div>
                <p className="text-xs mt-3" style={{ color: "#C4A0B9" }}>
                  Only the winner is recorded for this year
                </p>
              </div>
            )}
          </div>

          {/* Bottom decoration */}
          <div
            className="px-6 py-3 text-center text-xs"
            style={{
              background: `linear-gradient(135deg, ${winner.color}08, ${winner.color}15)`,
              color: winner.color + "80",
            }}
          >
            ♡ サンリオキャラクター大賞 ♡
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
