<script setup lang="ts">
import type { Experience } from '~/components/Experience.vue';
import picsesimg from '~/assets/img/experience/pisceslogo.png';
import chartdimg from '~/assets/img/experience/chartd.png';
import innovaimg from '~/assets/img/experience/innova.jpg';
import statcanimg from '~/assets/img/experience/stat-can-new.png';
import scsimg from '~/assets/img/experience/scs.png';
import carletonimg from '~/assets/img/experience/carleton.png';

const data: Experience[] = [
  {
    url: "url",
    img: picsesimg,
    img_loaded: false,
    title: "title",
    desc: "desc",
    text: "text",
    date: "date",
  }
]
</script>

<template>
  <div>Experiences</div>
  <Experience :experiences="data" />
</template>

<style lang="scss" scoped>

</style>