"use client";

const HELLO_KITTY = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣅⣀⢈⣩⣷⣶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⠴⣒⣤⣀⡲⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢾⣿⣯⡿⠟⠋⠈⠻⡛⠋⠹⣗⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⠊⢔⢉⢙⣹⡿⠳⣙⡊⣓⣉⣒⡤⡀⠀⠀⠀⠀⠀⣰⡟⣡⠟⠁⠀⠀⠀⠀⠀⠈⠑⢢⡍⡧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠐⡇⠀⠻⣿⠟⠁⠀⠀⠀⠉⠉⠻⣟⠋⠙⠓⢤⣠⡴⣶⡿⣛⣉⣁⠒⠢⣄⣀⠀⣀⣤⡶⢺⣷⠇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠱⡀⢾⠁⠀⠀⠀⣀⡠⠤⠶⠒⣺⠿⣟⢠⣯⣃⣳⡾⠲⠷⣮⣥⣴⣮⣤⣤⣬⣿⣟⣻⡿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠢⣷⣦⣤⣾⣿⣷⣶⡂⢉⡤⢊⣥⣿⡿⠿⠿⢿⣦⣤⣀⠈⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⢀⡤⢤⣄⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠛⠛⠋⡴⣻⣿⠏⠀⠀⠀⠘⢿⢯⠀⠳⣄⠀⠀⠀⠀⠀⠀⠀⢀⠔⠁⠀⢀⢽⣿⣦⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠎⣡⢁⡏⠀⠀⠀⠀⠀⠈⠫⣳⠄⢹⡆⠀⠀⠀⠀⣠⣴⣿⣿⣿⠞⠁⠈⢿⢿⡷⠀⠀
⠀⠀⣰⣾⣏⠩⡉⠰⣄⠀⠀⠀⠀⢠⢂⡴⢛⠎⠀⠀⠀⠀⠀⠀⠀⠀⠉⠷⣾⣿⡀⠀⢠⣾⣿⣿⡿⠟⠁⠀⠀⠀⣸⣾⠃⠀⠀
⠀⣰⡇⠈⠙⠤⣽⣧⣹⣷⣤⣀⣴⣡⡤⠔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠒⠛⠛⠋⠁⠀⠀⠀⣀⣴⣾⡿⠁⠀⠀⠀
⢰⣟⣹⡄⠀⠀⠀⠉⠛⠻⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡃⢀⡖⠁⢸⣿⠃⠀⠀⠀⠀
⢹⡇⠂⢡⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡁⠀⠠⣬⣧⣀⡜⠁⠀⠀⠀⠀⠀
⠀⠱⡄⠀⠣⠀⣠⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⢶⠃⠙⠋⠉⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠢⢀⣙⠿⣿⡿⢿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⡾⡄⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠑⠊⠁⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠺⢷⣿⣿⡶⠤⢕⡄⠀⠀⠀
⠀⠀⠀⣠⠔⠂⢶⣶⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⠁⠀⠀⠀
⠀⣠⡎⠀⣀⣠⡾⠟⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀
⠀⣿⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

const RIBBON = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠋⠀⠀⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣸⡇⠀⠀⠀⠀⠀⠙⢿⣦⡀⠀⠀⢀⣀⣀⣠⣤⣀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⠇⠀⠀⠀⠀⠀⠀⠀⠙⠿⠿⠟⠛⠛⠋⠉⠉⠛⣷⡄
⠀⠀⠀⠀⠀⠀⠀⢠⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇
⠀⠀⠀⠀⣀⣤⣶⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⠃
⠀⣠⣶⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⠃⠀
⢸⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⠁⠀⠀
⢸⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀⠀
⠀⠙⠿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⡄⠀
⠀⠀⠀⠀⠉⠛⠿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡄
⠀⠀⠀⠀⠀⠀⠀⠘⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇
⠀⠀⠀⠀⠀⠀⠀⠀⣿⡆⠀⠀⠀⠀⠀⠀⣠⣶⣶⣦⣤⣤⣄⣀⣀⣤⡿⠃
⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀⣠⣾⠏⠀⠀⠀⠈⠉⠉⠙⠛⠉⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣄⠀⠀⣠⣾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠛⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

interface ArtPlacement {
  art: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  opacity: number;
  scale: number;
  rotate?: number;
}

const placements: ArtPlacement[] = [
  // Big ribbon - top left area
  { art: "ribbon", top: "-5%", left: "-2%", opacity: 0.08, scale: 1.8, rotate: -10 },
  // Big ribbon - top right
  { art: "ribbon", top: "-3%", right: "5%", opacity: 0.07, scale: 1.6, rotate: 12 },
  // Big ribbon - center left
  { art: "ribbon", top: "25%", left: "-4%", opacity: 0.06, scale: 2, rotate: -15 },
  // Big ribbon - center right
  { art: "ribbon", top: "30%", right: "-2%", opacity: 0.07, scale: 1.7, rotate: 8 },
  // Big ribbon - lower left
  { art: "ribbon", top: "55%", left: "1%", opacity: 0.06, scale: 1.9, rotate: 20 },
  // Big ribbon - lower right
  { art: "ribbon", top: "60%", right: "3%", opacity: 0.07, scale: 1.5, rotate: -12 },
  // Big ribbon - bottom left
  { art: "ribbon", bottom: "5%", left: "-3%", opacity: 0.08, scale: 1.8, rotate: 5 },
  // Big ribbon - bottom right
  { art: "ribbon", bottom: "2%", right: "-1%", opacity: 0.07, scale: 2, rotate: -18 },
  // Hello Kitty - top left large
  { art: "kitty", top: "-2%", left: "8%", opacity: 0.06, scale: 1.5, rotate: 5 },
  // Hello Kitty - center
  { art: "kitty", top: "40%", left: "15%", opacity: 0.05, scale: 1.3, rotate: -3 },
  // Hello Kitty - right side
  { art: "kitty", top: "15%", right: "8%", opacity: 0.05, scale: 1.4, rotate: 7 },
  // Hello Kitty - bottom
  { art: "kitty", bottom: "8%", right: "15%", opacity: 0.06, scale: 1.6, rotate: -8 },
];

export default function AsciiBackground() {
  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ zIndex: 0, pointerEvents: "none" }}
      aria-hidden="true"
    >
      {placements.map((p, i) => (
        <pre
          key={i}
          className="absolute whitespace-pre leading-none select-none"
          style={{
            top: p.top,
            bottom: p.bottom,
            left: p.left,
            right: p.right,
            opacity: p.opacity,
            transform: `scale(${p.scale})${p.rotate ? ` rotate(${p.rotate}deg)` : ""}`,
            color: "#FF87B2",
            fontSize: "10px",
            lineHeight: "11px",
            fontFamily: "monospace",
          }}
        >
          {p.art === "kitty" ? HELLO_KITTY : RIBBON}
        </pre>
      ))}
    </div>
  );
}
