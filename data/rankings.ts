export interface CharacterEntry {
  rank: number;
  name: string;
  color: string;
}

export interface YearRanking {
  year: number;
  edition: number;
  totalVotes?: string;
  rankings: CharacterEntry[];
}

// Character signature colors
export const CHARACTER_COLORS: Record<string, string> = {
  "Hello Kitty": "#FF4D6A",
  "Cinnamoroll": "#6CB4EE",
  "Pompompurin": "#FFD700",
  "My Melody": "#FF87B2",
  "Kuromi": "#9B59B6",
  "Pochacco": "#4CAF50",
  "Bad Badtz-Maru": "#2C3E50",
  "Keroppi": "#27AE60",
  "Minna no Tabo": "#FF9F43",
  "Marron Cream": "#DEB887",
  "Zashikibuta": "#FFB6C1",
  "Gudetama": "#FFC947",
  "Little Twin Stars": "#C39BD3",
  "Tuxedo Sam": "#5DADE2",
  "Hangyodon": "#1ABC9C",
  "Aggretsuko": "#E74C3C",
  "Wish Me Mell": "#F9E79F",
  "Cogimyun": "#F8C8DC",
  "Dear Daniel": "#85C1E9",
};

// Character image paths — will use emoji fallback until real images are added
export const CHARACTER_IMAGES: Record<string, string> = {
  "Hello Kitty": "/characters/hello-kitty.png",
  "Cinnamoroll": "/characters/cinnamoroll.png",
  "Pompompurin": "/characters/pompompurin.png",
  "My Melody": "/characters/my-melody.png",
  "Kuromi": "/characters/kuromi.png",
  "Pochacco": "/characters/pochacco.png",
  "Bad Badtz-Maru": "/characters/bad-badtz-maru.png",
  "Keroppi": "/characters/keroppi.png",
  "Minna no Tabo": "/characters/minna-no-tabo.png",
  "Marron Cream": "/characters/marron-cream.png",
  "Zashikibuta": "/characters/zashikibuta.png",
  "Gudetama": "/characters/gudetama.png",
  "Little Twin Stars": "/characters/little-twin-stars.png",
};

export const CHARACTER_EMOJI: Record<string, string> = {
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
};

// Character bios
export const CHARACTER_BIOS: Record<string, { debut: number; species: string; bio: string }> = {
  "Hello Kitty": {
    debut: 1974,
    species: "White cat",
    bio: "Born in London, Hello Kitty (Kitty White) is Sanrio's most iconic character. She's cheerful, kind, and loves baking cookies. With her signature red bow, she's become a global pop culture icon and the most decorated champion in ranking history with 15 wins.",
  },
  "Cinnamoroll": {
    debut: 2001,
    species: "White puppy",
    bio: "A fluffy white puppy who floated down from the sky on a cloud. He was found on the rooftop of Cafe Cinnamon, where he now lives. His long ears let him fly, and his curly tail looks like a cinnamon roll. A modern fan favorite with 7 championship titles.",
  },
  "Pompompurin": {
    debut: 1996,
    species: "Golden retriever",
    bio: "A soft, pudding-loving golden retriever who always wears his signature brown beret. He's a bit lazy and loves napping, but his gentle personality has won hearts worldwide. A 4-time champion who reclaimed the crown in 2025 after a 9-year gap.",
  },
  "My Melody": {
    debut: 1975,
    species: "White rabbit",
    bio: "A sweet white rabbit from Mariland forest who always wears a pink or red hood. She's gentle, kind, and loves baking with her mom. One of Sanrio's longest-running characters and a consistent top performer in the rankings.",
  },
  "Kuromi": {
    debut: 2005,
    species: "White rabbit",
    bio: "My Melody's self-proclaimed rival who wears a black jester's hat with a pink skull. Despite her punk rock look, she's actually a hopeless romantic who loves writing in her diary. Her edgy-cute appeal has made her a fan favorite in recent years.",
  },
  "Pochacco": {
    debut: 1989,
    species: "White dog",
    bio: "An adventurous, sporty white dog with floppy black ears. He's curious, playful, and loves long walks. A '90s icon who dominated the rankings with 5 consecutive wins (1991-1995) and has made a remarkable comeback in recent years.",
  },
  "Bad Badtz-Maru": {
    debut: 1993,
    species: "Penguin",
    bio: "A mischievous penguin with spiky hair who dreams of being the boss of everything. He's sarcastic and a bit cranky, but has a heart of gold. He broke Pochacco's winning streak in 1996 to claim the crown.",
  },
  "Keroppi": {
    debut: 1988,
    species: "Frog",
    bio: "A cheerful, adventurous frog from Donut Pond. Known for his big eyes and wide smile, he loves swimming and exploring. He was one of the early ranking champions, winning in 1990.",
  },
  "Minna no Tabo": {
    debut: 1988,
    species: "Human boy",
    bio: "A lovable, easygoing boy who's a bit of a dreamer. He's not the brightest, but his kind heart and optimistic nature make everyone love him. He won back-to-back in the ranking's earliest years (1988-1989).",
  },
  "Marron Cream": {
    debut: 1985,
    species: "White lamb",
    bio: "A fluffy little lamb who's stylish and loves fashion. Born in France, she's elegant and a bit shy. She was the champion of the 2nd annual ranking in 1987, during Sanrio's early golden era.",
  },
  "Zashikibuta": {
    debut: 1986,
    species: "Pig",
    bio: "A round, cheerful pig who loves lounging around the house. The very first champion of the Sanrio Character Ranking in 1986, making history as the inaugural winner.",
  },
  "Gudetama": {
    debut: 2013,
    species: "Egg",
    bio: "A lazy, unmotivated egg yolk who finds everything to be too much effort. Despite — or because of — this relatable attitude, Gudetama became a viral sensation and a consistent top-10 performer in the rankings.",
  },
  "Little Twin Stars": {
    debut: 1975,
    species: "Star siblings",
    bio: "Kiki and Lala are twin stars who came down from the sky. Kiki (boy, blue) is curious and brave; Lala (girl, pink) is gentle and a bit of a crybaby. Together they spread magic and wonder wherever they go.",
  },
};

// Pastel versions of character colors for card backgrounds
export const CHARACTER_PASTELS: Record<string, string> = {
  "Hello Kitty": "#FFE0E8",
  "Cinnamoroll": "#DFF0FF",
  "Pompompurin": "#FFF5D6",
  "My Melody": "#FFE0EE",
  "Kuromi": "#EDE0F5",
  "Pochacco": "#E0F5E8",
  "Bad Badtz-Maru": "#E0E5EA",
  "Keroppi": "#E0F5E0",
  "Minna no Tabo": "#FFE8D6",
  "Marron Cream": "#F5EAD6",
  "Zashikibuta": "#FFE8EE",
  "Gudetama": "#FFF5D6",
  "Little Twin Stars": "#EDE0F5",
};

function c(name: string): string {
  return CHARACTER_COLORS[name] || "#D5A6E6";
}

export const RANKINGS: YearRanking[] = [
  {
    year: 2025,
    edition: 40,
    totalVotes: "63,160,696",
    rankings: [
      { rank: 1, name: "Pompompurin", color: c("Pompompurin") },
      { rank: 2, name: "Cinnamoroll", color: c("Cinnamoroll") },
      { rank: 3, name: "Pochacco", color: c("Pochacco") },
      { rank: 4, name: "Kuromi", color: c("Kuromi") },
      { rank: 5, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2024,
    edition: 39,
    totalVotes: "29,908,978",
    rankings: [
      { rank: 1, name: "Cinnamoroll", color: c("Cinnamoroll") },
      { rank: 2, name: "Pochacco", color: c("Pochacco") },
      { rank: 3, name: "Kuromi", color: c("Kuromi") },
      { rank: 4, name: "Pompompurin", color: c("Pompompurin") },
      { rank: 5, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2023,
    edition: 38,
    rankings: [
      { rank: 1, name: "Cinnamoroll", color: c("Cinnamoroll") },
      { rank: 2, name: "Pompompurin", color: c("Pompompurin") },
      { rank: 3, name: "Kuromi", color: c("Kuromi") },
      { rank: 4, name: "Pochacco", color: c("Pochacco") },
      { rank: 5, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2022,
    edition: 37,
    rankings: [
      { rank: 1, name: "Cinnamoroll", color: c("Cinnamoroll") },
      { rank: 2, name: "Pompompurin", color: c("Pompompurin") },
      { rank: 3, name: "Kuromi", color: c("Kuromi") },
      { rank: 4, name: "Pochacco", color: c("Pochacco") },
      { rank: 5, name: "My Melody", color: c("My Melody") },
    ],
  },
  {
    year: 2021,
    edition: 36,
    rankings: [
      { rank: 1, name: "Cinnamoroll", color: c("Cinnamoroll") },
      { rank: 2, name: "Pompompurin", color: c("Pompompurin") },
      { rank: 3, name: "Pochacco", color: c("Pochacco") },
      { rank: 4, name: "My Melody", color: c("My Melody") },
      { rank: 5, name: "Kuromi", color: c("Kuromi") },
    ],
  },
  {
    year: 2020,
    edition: 35,
    totalVotes: "14,556,939",
    rankings: [
      { rank: 1, name: "Cinnamoroll", color: c("Cinnamoroll") },
      { rank: 2, name: "Pompompurin", color: c("Pompompurin") },
      { rank: 3, name: "Pochacco", color: c("Pochacco") },
      { rank: 4, name: "My Melody", color: c("My Melody") },
      { rank: 5, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2019,
    edition: 34,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
      { rank: 2, name: "Cinnamoroll", color: c("Cinnamoroll") },
      { rank: 3, name: "Pompompurin", color: c("Pompompurin") },
      { rank: 4, name: "My Melody", color: c("My Melody") },
      { rank: 5, name: "Little Twin Stars", color: c("Little Twin Stars") },
    ],
  },
  {
    year: 2018,
    edition: 33,
    rankings: [
      { rank: 1, name: "Cinnamoroll", color: c("Cinnamoroll") },
      { rank: 2, name: "Pompompurin", color: c("Pompompurin") },
      { rank: 3, name: "My Melody", color: c("My Melody") },
      { rank: 4, name: "Hello Kitty", color: c("Hello Kitty") },
      { rank: 5, name: "Gudetama", color: c("Gudetama") },
    ],
  },
  {
    year: 2017,
    edition: 32,
    rankings: [
      { rank: 1, name: "Cinnamoroll", color: c("Cinnamoroll") },
      { rank: 2, name: "Pompompurin", color: c("Pompompurin") },
      { rank: 3, name: "My Melody", color: c("My Melody") },
      { rank: 4, name: "Hello Kitty", color: c("Hello Kitty") },
      { rank: 5, name: "Little Twin Stars", color: c("Little Twin Stars") },
    ],
  },
  {
    year: 2016,
    edition: 31,
    rankings: [
      { rank: 1, name: "Pompompurin", color: c("Pompompurin") },
      { rank: 2, name: "Cinnamoroll", color: c("Cinnamoroll") },
      { rank: 3, name: "My Melody", color: c("My Melody") },
      { rank: 4, name: "Hello Kitty", color: c("Hello Kitty") },
      { rank: 5, name: "Little Twin Stars", color: c("Little Twin Stars") },
    ],
  },
  {
    year: 2015,
    edition: 30,
    rankings: [
      { rank: 1, name: "Pompompurin", color: c("Pompompurin") },
      { rank: 2, name: "My Melody", color: c("My Melody") },
      { rank: 3, name: "Hello Kitty", color: c("Hello Kitty") },
      { rank: 4, name: "Little Twin Stars", color: c("Little Twin Stars") },
      { rank: 5, name: "Cinnamoroll", color: c("Cinnamoroll") },
    ],
  },
  {
    year: 2014,
    edition: 29,
    rankings: [
      { rank: 1, name: "My Melody", color: c("My Melody") },
    ],
  },
  {
    year: 2013,
    edition: 28,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2012,
    edition: 27,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2011,
    edition: 26,
    rankings: [
      { rank: 1, name: "My Melody", color: c("My Melody") },
    ],
  },
  {
    year: 2010,
    edition: 25,
    rankings: [
      { rank: 1, name: "My Melody", color: c("My Melody") },
    ],
  },
  {
    year: 2009,
    edition: 24,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2008,
    edition: 23,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2007,
    edition: 22,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2006,
    edition: 21,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2005,
    edition: 20,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2004,
    edition: 19,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2003,
    edition: 18,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2002,
    edition: 17,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2001,
    edition: 16,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 2000,
    edition: 15,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 1999,
    edition: 14,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 1998,
    edition: 13,
    rankings: [
      { rank: 1, name: "Hello Kitty", color: c("Hello Kitty") },
    ],
  },
  {
    year: 1997,
    edition: 12,
    rankings: [
      { rank: 1, name: "Pompompurin", color: c("Pompompurin") },
    ],
  },
  {
    year: 1996,
    edition: 11,
    rankings: [
      { rank: 1, name: "Bad Badtz-Maru", color: c("Bad Badtz-Maru") },
    ],
  },
  {
    year: 1995,
    edition: 10,
    rankings: [
      { rank: 1, name: "Pochacco", color: c("Pochacco") },
    ],
  },
  {
    year: 1994,
    edition: 9,
    rankings: [
      { rank: 1, name: "Pochacco", color: c("Pochacco") },
    ],
  },
  {
    year: 1993,
    edition: 8,
    rankings: [
      { rank: 1, name: "Pochacco", color: c("Pochacco") },
    ],
  },
  {
    year: 1992,
    edition: 7,
    rankings: [
      { rank: 1, name: "Pochacco", color: c("Pochacco") },
    ],
  },
  {
    year: 1991,
    edition: 6,
    rankings: [
      { rank: 1, name: "Pochacco", color: c("Pochacco") },
    ],
  },
  {
    year: 1990,
    edition: 5,
    rankings: [
      { rank: 1, name: "Keroppi", color: c("Keroppi") },
    ],
  },
  {
    year: 1989,
    edition: 4,
    rankings: [
      { rank: 1, name: "Minna no Tabo", color: c("Minna no Tabo") },
    ],
  },
  {
    year: 1988,
    edition: 3,
    rankings: [
      { rank: 1, name: "Minna no Tabo", color: c("Minna no Tabo") },
    ],
  },
  {
    year: 1987,
    edition: 2,
    rankings: [
      { rank: 1, name: "Marron Cream", color: c("Marron Cream") },
    ],
  },
  {
    year: 1986,
    edition: 1,
    rankings: [
      { rank: 1, name: "Zashikibuta", color: c("Zashikibuta") },
    ],
  },
];
