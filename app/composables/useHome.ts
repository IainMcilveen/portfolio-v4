// Site-wide details (name, links, resume) and the home page intro from content/home.md.
// Shared key, so every caller reuses the same fetch and payload.
export const useHome = () => useAsyncData("home", () => queryCollection("home").first());
