import { resolve } from "node:path";
import { defineConfig } from "vite";

const base = "/itis3135-react/";

export default defineConfig({
    base,
    appType: "mpa",
    oxc: { jsx: { runtime: "automatic" } },
    build: {
        target: "es2019",
        rolldownOptions: {
            input: ["index.html", "introduction.html", "contract.html", "about.html"]
                .map((file) => resolve(import.meta.dirname, file)),
            output: {
                entryFileNames: "scripts/[name]-[hash].js",
                chunkFileNames: "scripts/[name]-[hash].js"
            }
        }
    },
    plugins: [{
        name: "course-validator-html",
        transformIndexHtml: {
            order: "post",
            handler(html) {
                // The entries share a directory with their asset folders.
                // Keep Vite's development client URL intact for hot updates.
                html = html.replace(/\b(href|src)="([^"]+)"/g, (attribute, name, url) => {
                    if (!url.startsWith(base)) return attribute;
                    const relative = url.slice(base.length);
                    return /^(styles|images|scripts)\//.test(relative)
                        ? name + '="' + relative + '"'
                        : attribute;
                });
                const accumulus = /[ \t]*<script src="https:\/\/lint\.page\/kit\/4d0fe3\.js"[^>]*><\/script>\r?\n/;
                const tag = html.match(accumulus)?.[0];
                return tag ? html.replace(accumulus, "").replace("</head>", tag + "</head>") : html;
            }
        }
    }]
});
