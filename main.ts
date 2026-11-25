import { mkdirSync, writeFileSync } from "node:fs";

// One childhood memory, one sentence, at most 280 characters.
// Revised: the burnt rice was the treasure, and the adult still burns
// the rice on purpose to hear the scrape again — the warm ache lingers.
const ENTRY =
  "In my grandmother's kitchen every August, I scraped the burnt rice from the bottom of the pot with a wooden spoon while she pretended not to notice, and thirty years later I still burn the rice on purpose, just to hear that scrape again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
