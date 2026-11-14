import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputFile = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });

const joke = "My coding agent refactored a typo fix into a plugin architecture with dependency injection, config files, and a CLI — the typo is still there.";

writeFileSync(outputFile, joke, 'utf-8');
console.log(`Wrote joke to ${outputFile}`);