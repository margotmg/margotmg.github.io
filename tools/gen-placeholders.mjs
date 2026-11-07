// Generates tonal placeholder SVGs in the brand palette.
// Swap any of these for real imagery — keep the filename and the layout holds.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = resolve(root, "assets");
mkdirSync(out, { recursive: true });

// Tonal pairs drawn from the palette: cream, olive, warm grey, near-black.
const tones = [
  ["#e8e2d2", "#c3bfb5"],
  ["#d9d3c2", "#786c4a"],
  ["#c3bfb5", "#8d8778"],
  ["#efeadb", "#b3ac97"],
  ["#a39b84", "#5d5540"],
  ["#f3efe2", "#cfc9b6"],
  ["#8d8778", "#2b2822"],
  ["#d2cbb6", "#6f6750"],
];

const svg = ({ w, h, name, label, i }) => {
  const [a, b] = tones[i % tones.length];
  const angle = (i * 37) % 360;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g${i}" gradientTransform="rotate(${angle} .5 .5)">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <radialGradient id="r${i}" cx="${30 + ((i * 13) % 40)}%" cy="${25 + ((i * 17) % 40)}%" r="70%">
      <stop offset="0" stop-color="#fcfcfc" stop-opacity=".45"/>
      <stop offset="1" stop-color="#fcfcfc" stop-opacity="0"/>
    </radialGradient>
    <filter id="n${i}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g${i})"/>
  <rect width="${w}" height="${h}" fill="url(#r${i})"/>
  <rect width="${w}" height="${h}" filter="url(#n${i})" opacity=".14" style="mix-blend-mode:multiply"/>
  <g fill="#0d0d0d" fill-opacity=".38" font-family="DM Mono, ui-monospace, monospace" font-size="${Math.max(11, Math.round(w / 52))}" letter-spacing="1.4">
    <text x="${Math.round(w * 0.055)}" y="${h - Math.round(w * 0.045)}">${label.toUpperCase()}</text>
    <text x="${w - Math.round(w * 0.055)}" y="${h - Math.round(w * 0.045)}" text-anchor="end">${w}×${h}</text>
  </g>
</svg>
`;
};

const specs = [
  { name: "hero", w: 1920, h: 1080, label: "hero" },
  { name: "featured-01", w: 900, h: 1200, label: "featured 01" },
  { name: "featured-02", w: 900, h: 1200, label: "featured 02" },
  { name: "featured-03", w: 900, h: 1200, label: "featured 03" },
  { name: "about", w: 1000, h: 1250, label: "about" },
  ...Array.from({ length: 8 }, (_, n) => ({
    name: `work-0${n + 1}`,
    w: n % 2 ? 1000 : 960,
    h: n % 2 ? 1250 : 1280,
    label: `work 0${n + 1}`,
  })),
  ...Array.from({ length: 5 }, (_, n) => ({
    name: `capability-0${n + 1}`,
    w: 1000,
    h: 1200,
    label: `capability 0${n + 1}`,
  })),
  { name: "inquiries", w: 1600, h: 900, label: "inquiries" },
];

specs.forEach((spec, i) => {
  writeFileSync(resolve(out, `${spec.name}.svg`), svg({ ...spec, i }));
});

console.log(`wrote ${specs.length} placeholders to assets/`);
