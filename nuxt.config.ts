// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = "https://iainmcilveen.com";
const description =
  "Iain Mcilveen is a Senior Software Engineer based in Halifax, Canada, building full-stack web applications and cloud infrastructure.";

export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
  ],

  // Shared by the sitemap, schema.org and canonical URLs
  site: {
    url: siteUrl,
    name: "Iain Mcilveen",
    description,
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      titleTemplate: "%s | Iain Mcilveen",
      meta: [
        { name: "description", content: description },
        { name: "theme-color", content: "#1a1d23" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Iain Mcilveen" },
        { property: "og:title", content: "Iain Mcilveen | Senior Software Engineer" },
        { property: "og:description", content: description },
        { property: "og:image", content: `${siteUrl}/og-image.jpg` },
        { name: "twitter:card", content: "summary" },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },

  content: {
    // Use Node's built-in SQLite instead of a native better-sqlite3 build
    experimental: { sqliteConnector: "native" },
  },

  image: {
    quality: 80,
  },

  icon: {
    // Bundle the icons into the client so they work without the Iconify API.
    // Icons named only in content/home.md aren't found by the scanner, so list them.
    clientBundle: {
      scan: true,
      icons: ["fa6-brands:github", "fa6-brands:linkedin-in", "fa6-solid:envelope", "fa6-solid:file-lines"],
    },
  },

  fonts: {
    // Downloaded at build time and served from this site
    families: [{ name: "Inter", provider: "google", weights: [400, 600, 700], styles: ["normal"], subsets: ["latin"] }],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/GlobalVar.scss" as *;',
        },
      },
    },
  },
});
