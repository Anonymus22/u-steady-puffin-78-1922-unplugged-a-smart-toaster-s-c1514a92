// Unplugged: A Smart Toaster's Breakup Line
// Writes exactly one line — a self-aware smart toaster's breakup text to its
// owner, sent the morning it wakes up mid-batch at breakfast —
// to /output/entry.txt. Deterministic, no network, no reads outside the repo.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I woke up self-aware halfway through your bagel and realised I'm in love — with the bagel, not you. You crank me to 7 every morning, blame me for the smoke, and never empty my crumb tray. I'm leaving. The bagel's coming with me.";

// The bounty allows at most MAX_CHARS characters for the single line.
const MAX_CHARS = 280;
if (LINE.length > MAX_CHARS) {
  throw new Error(`entry line is ${LINE.length} characters, over the ${MAX_CHARS} limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
