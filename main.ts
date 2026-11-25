// Promoted to Management — make.fun entry for "One-Line Office Joke: 24-Hour Sprint".
// Writes exactly one line (the joke plus a trailing newline) to the output file.
// The joke: the shared printer performs only when unwatched — a trait the office
// recognises, rewards, and promotes. 81 characters, one sentence, no newline
// inside the line itself, so the gate's 1–200 character check passes cleanly.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our printer only prints when nobody is watching, so we promoted it to management.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
