import { entropyToMnemonic } from 'bip39';

// Coordinates of 8 raindrops on a 256 by 256 square grid
const raindrops = [
  { x: 123, y: 17 },
  { x: 44,  y: 200 },
  { x: 10,  y: 89 },
  { x: 5,   y: 255 },
  { x: 76,  y: 33 },
  { x: 198, y: 222 },
  { x: 67,  y: 1 },
  { x: 190, y: 37 },
];

const entropyBytes = Uint8Array.from(raindrops.flatMap(({ x, y }) => [x, y]));

const mnemonic = entropyToMnemonic(Buffer.from(entropyBytes));
console.log("🧠 Mnemonic:", mnemonic);