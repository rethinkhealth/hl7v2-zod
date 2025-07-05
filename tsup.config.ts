import { defineConfig } from "tsup";
import fs from "node:fs";

// Retrieve all the folders in the src directory
const folders = fs.readdirSync("src").filter((file) => fs.statSync(`src/${file}`).isDirectory());

export default defineConfig({
  entry: {
    index: "src/index.ts",
    ...folders.reduce(
      (acc, folder) => {
        acc[`${folder}/index`] = `src/${folder}/index.ts`;
        return acc;
      },
      {} as Record<string, string>
    )
  },
  format: ["cjs", "esm"],
  dts: false,
  splitting: true,
  sourcemap: false,
  clean: true,
  treeshake: true,
  minify: true,
  external: ["zod", "zod/v4"],
  onSuccess: "tsc --noEmit"
});
