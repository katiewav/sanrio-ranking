"use client";

import { RANKINGS } from "@/data/rankings";
import YearCard from "./YearCard";

export default function Timeline() {
  return (
    <div className="max-w-lg mx-auto px-4 pb-16">
      {/* Decade filters could go here */}
      <div className="flex flex-col gap-3">
        {RANKINGS.map((yearData) => (
          <YearCard key={yearData.year} data={yearData} />
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-sm text-gray-400">
        <p>
          Data sourced from the annual{" "}
          <span className="text-pink-400">サンリオキャラクター大賞</span>
        </p>
        <p className="mt-1">1986 &ndash; 2025 &middot; 40 years of rankings</p>
      </div>
    </div>
  );
}
