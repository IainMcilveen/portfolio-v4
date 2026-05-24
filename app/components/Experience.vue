<script setup lang="ts">
export interface ExperienceData {
  url: string;
  img: string;
  title: string;
  time: string;
  desc?: string;
  text: string;
  skills?: string[];
}

const props = defineProps<{
  experience: ExperienceData;
  flipped: boolean;
}>();
</script>

<template>
  <div :class="['experience-card', { flipped }]">
    <div class="experience-info">
      <div class="experience-header">
        <h2>{{ experience.title }}</h2>
        <span v-if="experience.desc" class="company">{{ experience.desc }}</span>
        <span class="time">{{ experience.time }}</span>
      </div>
      <hr />
      <p>{{ experience.text }}</p>
      <div v-if="experience.skills?.length" class="experience-skills">
        <span v-for="(skill, i) in experience.skills" :key="i" class="skill">{{ skill }}</span>
      </div>
    </div>
    <div class="experience-image">
      <LinkableImage :img="experience.img" :url="experience.url" height="100%" objectFit="contain" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience-card {
  display: flex;
  width: 88vw;
  max-width: 1100px;
  margin: 0 auto 16px;

  background: rgba(40, 44, 52, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(99, 179, 237, 0.18);
  border-radius: 14px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.4);
  min-height: 200px;
  overflow: hidden;
  transition: border-color 200ms ease, box-shadow 200ms ease;

  &:hover {
    border-color: rgba(99, 179, 237, 0.35);
    box-shadow: 0 6px 40px rgba(0, 0, 0, 0.55);
  }

  &.flipped {
    flex-direction: row-reverse;
  }
}

.experience-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 18px 20px;
  min-width: 0;

  hr {
    border: none;
    border-top: 1px solid rgba(99, 179, 237, 0.25);
    margin: 8px 0;
  }

  p {
    margin: 0;
    font-size: 0.93em;
    color: $bgLight;
    line-height: 1.55;
  }
}

.experience-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: 10px;

  .skill {
    padding: 3px 10px;
    font-size: 0.78rem;
    background: rgba(99, 179, 237, 0.1);
    border: 1px solid rgba(99, 179, 237, 0.28);
    border-radius: 999px;
    color: #7ec8e3;
  }
}

.experience-header {
  display: flex;
  flex-direction: column;
  gap: 2px;

  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #fff;
  }

  .company {
    font-size: 0.9rem;
    color: #7ec8e3;
  }

  .time {
    font-size: 0.8rem;
    color: $bgMid;
  }
}

.experience-image {
  flex-shrink: 0;
  width: 38%;
  min-height: 200px;
  background-color: #fff;
  border-left: 1px solid rgba(99, 179, 237, 0.12);

  .experience-card.flipped & {
    border-left: none;
    border-right: 1px solid rgba(99, 179, 237, 0.12);
  }
}

@media screen and (max-width: 700px) {
  .experience-card,
  .experience-card.flipped {
    flex-direction: column;
    width: 92vw;
    height: auto;
  }

  .experience-image {
    width: 100%;
    height: 180px;
    border-left: none;
    border-top: 1px solid rgba(99, 179, 237, 0.12);

    .flipped & {
      border-right: none;
      border-top: 1px solid rgba(99, 179, 237, 0.12);
    }
  }

}
</style>
