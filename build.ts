// https://jsr.io/@luca/esbuild-deno-loader

import * as esbuild from "npm/esbuild";
import { denoPlugins } from "@luca/esbuild-deno-loader";

const result = await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["./src/background.ts"],
  outfile: "./dist/backgrounds.js",
  bundle: true,
  platform: "browser",
});

console.log(result.outputFiles);

esbuild.stop();
