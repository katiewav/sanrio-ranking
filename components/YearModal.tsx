"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { YearRanking, CHARACTER_EMOJI } from "@/data/rankings";
import SwipeCarousel from "./SwipeCarousel";

export default function YearModal({
  data,
  onClose,
}: {
  data: YearRanking;
  onClose: () => void;
}) {
  const winner = data.rankings[0];
  const emoji = CHARACTER_EMOJI[winner.name] || "✨";

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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border-2"
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
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-lg"
              style={{ backgroundColor: winner.color + "15", color: winner.color }}
            >
              &times;
            </button>

            {/* Decorations */}
            <div className="flex justify-center gap-2 mb-2 text-xs opacity-60">
              <span className="animate-twinkle">✨</span>
              <span className="animate-twinkle" style={{ animationDelay: "0.5s" }}>
                🌸
              </span>
              <span className="animate-twinkle" style={{ animationDelay: "1s" }}>
                ✨
              </span>
            </div>

            <div className="text-4xl mb-2">{emoji}</div>
            <h2
              className="text-3xl font-extrabold"
              style={{ color: winner.color }}
            >
              {data.year}
            </h2>
            <p className="text-sm mt-1" style={{ color: winner.color + "99" }}>
              #{data.edition} Annual Ranking
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

          {/* Content */}
          <div className="p-6">
            {data.rankings.length > 1 ? (
              <>
                <p
                  className="text-center text-sm font-bold mb-3"
                  style={{ color: winner.color }}
                >
                  Top {data.rankings.length} Rankings
                </p>
                <SwipeCarousel rankings={data.rankings} />
              </>
            ) : (
              <div className="text-center py-4">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ backgroundColor: winner.color + "15" }}
                >
                  <span>👑</span>
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
            🎀 サンリオキャラクター大賞 🎀
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
