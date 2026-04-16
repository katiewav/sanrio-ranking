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
  // Hello Kitty - top left
  { art: "kitty", top: "0%", left: "-1%", opacity: 0.09, scale: 1.2 },
  // Ribbon - top right
  { art: "ribbon", top: "3%", right: "3%", opacity: 0.1, scale: 1.1 },
  // Hello Kitty - middle right
  { art: "kitty", top: "32%", right: "-3%", opacity: 0.07, scale: 1, rotate: -5 },
  // Ribbon - middle left
  { art: "ribbon", top: "40%", left: "2%", opacity: 0.08, scale: 1, rotate: 5 },
  // Hello Kitty - bottom center-right
  { art: "kitty", bottom: "2%", right: "8%", opacity: 0.07, scale: 1.1, rotate: 3 },
  // Ribbon - bottom left
  { art: "ribbon", bottom: "5%", left: "4%", opacity: 0.09, scale: 1.1, rotate: -8 },
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
            fontSize: "6px",
            lineHeight: "6.5px",
            fontFamily: "monospace",
          }}
        >
          {p.art === "kitty" ? HELLO_KITTY : RIBBON}
        </pre>
      ))}
    </div>
  );
}
