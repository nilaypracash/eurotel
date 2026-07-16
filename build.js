// Build step for Vercel (and any static host with env vars).
//
// Generates mapbox-config.js from the MAPBOX_TOKEN environment variable so the
// real token never lives in git. Set MAPBOX_TOKEN in the Vercel dashboard:
//   Project -> Settings -> Environment Variables -> MAPBOX_TOKEN = pk.your_token
//
// If the variable is missing, we still emit a config with an empty token; the
// page then falls back to its static island instead of failing the build.
const fs = require("fs");

const token = process.env.MAPBOX_TOKEN || "";

if (!token) {
  console.warn("[build] MAPBOX_TOKEN is not set — writing empty token (map will use the static fallback).");
} else {
  console.log("[build] MAPBOX_TOKEN found — writing mapbox-config.js.");
}

const contents =
  "// Generated at build time from the MAPBOX_TOKEN env var. Do not edit by hand.\n" +
  "window.MAPBOX_TOKEN = " + JSON.stringify(token) + ";\n";

fs.writeFileSync("mapbox-config.js", contents);
