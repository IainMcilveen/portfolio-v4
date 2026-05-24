<script setup lang="ts">
import LinkableImage from "./LinkableImage.vue";

export interface ProjectData {
  url?: string;
  img: string;
  title: string;
  desc?: string;
  text: string;
  skills: string[];
  big?: boolean;
}

const props = defineProps<{
  project: ProjectData;
}>();


</script>

<template>
  <div class="project-card">
    <div class="project-image">
      <LinkableImage :img="project.img" :url="project.url ?? ''" height="200px" />
    </div>
    <div class="project-body">
      <div class="project-title">
        <a v-if="project.url" :href="project.url">
          <h4>{{ project.title }}</h4>
        </a>
        <h4 v-else>{{ project.title }}</h4>
        <h6 v-if="project.desc">{{ project.desc }}</h6>
      </div>
      <hr />
      <p class="project-text">{{ project.text }}</p>
      <div class="project-skills">
        <span v-for="(skill, i) in project.skills" :key="i" class="skill">{{ skill }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  background: rgba(40, 44, 52, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(99, 179, 237, 0.18);
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  transition: border-color 200ms ease, box-shadow 200ms ease;

  &:hover {
    border-color: rgba(99, 179, 237, 0.35);
    box-shadow: 0 6px 36px rgba(0, 0, 0, 0.55);
  }
}

.project-image {
  flex-shrink: 0;
  height: 200px;
  border-bottom: 1px solid rgba(99, 179, 237, 0.12);
}

.project-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px 14px 10px;

  hr {
    border: none;
    border-top: 1px solid rgba(99, 179, 237, 0.2);
    margin: 6px 0;
  }
}

.project-title {
  a {
    text-decoration: none;
  }

  h4 {
    margin: 0 0 2px;
    font-size: 1.1rem;
    color: #7ec8e3;
  }

  h6 {
    margin: 0;
    font-size: 0.82rem;
    color: $bgMid;
    font-weight: normal;
  }
}

.project-text {
  margin: 0;
  font-size: 0.88em;
  color: $bgLight;
  line-height: 1.5;
  flex: 1;
}

.project-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: 8px;

  .skill {
    padding: 3px 10px;
    font-size: 0.78rem;
    background: rgba(99, 179, 237, 0.1);
    border: 1px solid rgba(99, 179, 237, 0.28);
    border-radius: 999px;
    color: #7ec8e3;
  }
}

@media screen and (max-width: 460px) {
  .project-card {
    width: 100%;
  }
}
</style>
