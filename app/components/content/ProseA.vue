<script setup lang="ts">
// Overrides the default link rendered from markdown so external links open in a new tab
// `rel` is declared so Nuxt Content's default rel="nofollow" doesn't override the value set below
const props = defineProps<{
  href?: string;
  target?: string;
  rel?: string;
}>();

const external = computed(() => /^https?:\/\//.test(props.href ?? ""));
</script>

<template>
  <a v-if="external" :href="href" target="_blank" rel="noopener noreferrer"><slot /></a>
  <NuxtLink v-else :to="href" :target="target"><slot /></NuxtLink>
</template>
