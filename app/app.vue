<script setup lang="ts">
const route = useRoute();
const site = useSiteConfig();
const { data: home } = await useHome();

// Per-page canonical URL, also used for link previews
const pageUrl = computed(() => site.url + (route.path === "/" ? "/" : route.path.replace(/\/$/, "")));
useHead({
  link: [{ rel: "canonical", href: pageUrl }],
  meta: [{ property: "og:url", content: pageUrl }],
});

// Structured data so search engines know this site is about a person
if (home.value) {
  const { name, jobTitle, employer, location, image, links } = home.value;
  useSchemaOrg([
    definePerson({
      name,
      jobTitle,
      image: site.url + image,
      url: site.url,
      worksFor: { "@type": "Organization", name: employer },
      homeLocation: { "@type": "Place", name: location },
      sameAs: links.filter((link) => link.url.startsWith("http")).map((link) => link.url),
    }),
    defineWebSite({ name: site.name }),
    defineWebPage(),
  ]);
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
html * {
  scrollbar-width: thin;
  font-family:
    Inter,
    system-ui,
    -apple-system,
    "Segoe UI",
    Arial,
    sans-serif;
}

html,
body {
  margin: 0;
  background-color: $bgDarkest;
}

hr {
  color: #949494;
  border: 0;
  border-bottom: 2px dashed;
  margin: 2px;
}
</style>
