import { CharacterEntry } from "@/data/rankings";

const EMOJI_MAP: Record<string, string> = {
  "Hello Kitty": "🐱",
  "Cinnamoroll": "☁️",
  "Pompompurin": "🍮",
  "My Melody": "🐰",
  "Kuromi": "💜",
  "Pochacco": "🐶",
  "Bad Badtz-Maru": "🐧",
  "Keroppi": "🐸",
  "Minna no Tabo": "👦",
  "Marron Cream": "🐑",
  "Zashikibuta": "🐷",
  "Gudetama": "🍳",
  "Little Twin Stars": "⭐",
  "Tuxedo Sam": "🐧",
  "Hangyodon": "🐟",
  "Aggretsuko": "🦊",
};

function getRankLabel(rank: number): string {
  if (rank === 1) return "1st";
  if (rank === 2) return "2nd";
  if (rank === 3) return "3rd";
  return `${rank}th`;
}

export default function CharacterCard({
  entry,
  isWinner,
}: {
  entry: CharacterEntry;
  isWinner?: boolean;
}) {
  const emoji = EMOJI_MAP[entry.name] || "✨";
  const size = isWinner ? "w-full" : "w-56 flex-shrink-0";

  return (
    <div
      className={`${size} rounded-2xl p-5 text-center transition-all snap-center`}
      style={{
        backgroundColor: entry.color + "18",
        borderColor: entry.color + "40",
        borderWidth: "2px",
      }}
    >
      <div
        className={`inline-flex items-center justify-center rounded-full mb-3 ${
          isWinner ? "w-20 h-20 text-4xl" : "w-14 h-14 text-2xl"
        }`}
        style={{ backgroundColor: entry.color + "30" }}
      >
        {emoji}
      </div>
      <div
        className={`font-bold mb-1 ${isWinner ? "text-xl" : "text-base"}`}
        style={{ color: entry.color }}
      >
        {entry.name}
      </div>
      <div
        className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block"
        style={{
          backgroundColor: entry.color + "20",
          color: entry.color,
        }}
      >
        {getRankLabel(entry.rank)}
      </div>
    </div>
  );
}
