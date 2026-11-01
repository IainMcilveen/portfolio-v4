<script setup lang="ts">
const { data } = await useAsyncData("experiences", () => queryCollection("experiences").order("order", "ASC").all());

const title = ref("Experiences");
useHead({
  title,
});
</script>

<template>
  <div class="experiences-page">
    <div class="experiences-content">
      <ol class="timeline">
        <ExperienceEntry v-for="exp in data" :key="exp.id" :experience="exp" />
      </ol>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experiences-page {
  position: relative;
  min-height: 100%;
  overflow-x: hidden;
}

.experiences-content {
  position: relative;
  z-index: 1;
  padding: 40px 0 64px;
}

.timeline {
  --aside: 260px;
  --gap: 56px;
  --dot: 14px;

  position: relative;
  width: 88vw;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  // The vertical line, centred in the gap between the logo column and content
  &::before {
    content: "";
    position: absolute;
    top: 0.35rem;
    bottom: 0;
    left: calc(var(--aside) + var(--gap) / 2 - 1px);
    width: 2px;
    background: linear-gradient(to bottom, $accent, rgba($accent, 0.35) 70%, transparent);
  }
}

@media screen and (max-width: 700px) {
  .timeline {
    --aside: 0px;
    --gap: 36px;
    width: 92vw;
  }
}
</style>
