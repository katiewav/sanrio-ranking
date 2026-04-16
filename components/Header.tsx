export default function Header() {
  return (
    <header className="text-center pt-10 pb-8 px-4 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-6 left-[10%] text-2xl animate-float opacity-40">
          ✿
        </span>
        <span
          className="absolute top-12 right-[12%] text-xl animate-float opacity-30"
          style={{ animationDelay: "1s" }}
        >
          ⋆
        </span>
        <span
          className="absolute top-4 right-[30%] text-lg animate-float opacity-25"
          style={{ animationDelay: "2s" }}
        >
          ♡
        </span>
        <span
          className="absolute bottom-4 left-[20%] text-xl animate-float opacity-30"
          style={{ animationDelay: "0.5s" }}
        >
          ✧
        </span>
        <span
          className="absolute bottom-8 right-[18%] text-lg animate-float opacity-25"
          style={{ animationDelay: "1.5s" }}
        >
          ❀
        </span>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-2xl animate-pulse-gentle" style={{ color: "#FF87B2" }}>♡</span>
          <span className="text-xl animate-twinkle" style={{ color: "#C084FC" }}>✧</span>
          <span className="text-2xl animate-pulse-gentle" style={{ color: "#FF87B2", animationDelay: "1s" }}>♡</span>
        </div>

        <h1
          className="text-4xl md:text-5xl font-extrabold"
          style={{
            background: "linear-gradient(135deg, #FF6B9D, #C084FC, #60A5FA, #FF6B9D)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 3s linear infinite",
          }}
        >
          Sanrio Character Ranking
        </h1>

        <p className="mt-3 text-base font-semibold" style={{ color: "#C4A0B9" }}>
          Every winner of the annual{" "}
          <span className="text-pink-400">サンリオキャラクター大賞</span>{" "}
          since 1986
        </p>

        <div className="mt-3 flex items-center justify-center gap-3 text-sm font-bold" style={{ color: "#D4A0C9" }}>
          <span>40 years</span>
          <span className="text-pink-300 animate-pulse-gentle">&#9829;</span>
          <span>13 champions</span>
          <span className="text-pink-300 animate-pulse-gentle" style={{ animationDelay: "0.5s" }}>&#9829;</span>
          <span>millions of votes</span>
        </div>

        <p className="mt-2 text-xs" style={{ color: "#D4B0C9" }}>
          click any card to explore the rankings ✧
        </p>
      </div>
    </header>
  );
}
