import path from "node:path";
import process from "node:process";
import { defineConfig } from "vite";

export default defineConfig({
    server: {
        port: 3000,
        open: "index.html",
    },
    root: "./src",
    publicDir: "../public",
    build: {
        outDir: "../dist"
    },
    resolve: {
        alias: { "/src": path.resolve(process.cwd(), "src") }
    },
});