<script setup lang="ts">
interface IProps {
  url: string;
  img: string;
  alt?: string;
  height?: string;
  width?: string;
  objectFit?: string;
  // Rendered width per breakpoint, so @nuxt/image only generates the sizes needed
  sizes?: string;
  // Serve the file untouched (e.g. animated images, which resizing would flatten)
  unoptimized?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  alt: "",
  height: "50%",
  width: "100%",
  objectFit: "cover",
  sizes: "xs:100vw",
});
</script>

<template>
  <div class="Image" :style="{ height, width }">
    <a v-if="url !== ''" :href="url" target="_blank" rel="noopener noreferrer">
      <img v-if="unoptimized" :src="img" :alt="alt" loading="lazy" />
      <NuxtImg v-else :src="img" :alt="alt" :sizes="sizes" format="webp" loading="lazy" />
    </a>
    <img v-else-if="unoptimized" :src="img" :alt="alt" loading="lazy" />
    <NuxtImg v-else :src="img" :alt="alt" :sizes="sizes" format="webp" loading="lazy" />
  </div>
</template>

<style lang="scss" scoped>
.Image {
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
}

img {
  display: block;
  object-fit: v-bind("props.objectFit");
  width: 100%;
  height: 100%;
}
</style>
