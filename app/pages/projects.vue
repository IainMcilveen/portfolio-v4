<script setup lang="ts">
const { data: projects } = await useAsyncData("projects", () =>
  queryCollection("projects").order("order", "ASC").all(),
);
const workProjects = computed(() => projects.value?.filter((project) => project.category === "work") ?? []);
const personalProjects = computed(() => projects.value?.filter((project) => project.category === "personal") ?? []);

const title = ref("Projects");
useHead({
  title,
});
</script>

<template>
  <div class="projects-page">
    <div class="projects-content">
      <div class="section-heading"><h2>Work Projects</h2></div>
      <div class="projects-grid">
        <ProjectCard v-for="project in workProjects" :key="project.id" :project="project" />
      </div>
      <div class="section-heading"><h2>Personal Projects</h2></div>
      <div class="projects-grid">
        <ProjectCard v-for="project in personalProjects" :key="project.id" :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-page {
  position: relative;
  min-height: 100%;
  overflow-x: hidden;
}

.projects-content {
  position: relative;
  z-index: 1;
  padding: 24px 0 40px;
}

.section-heading {
  text-align: center;
  padding: 16px 0 8px;

  h2 {
    display: inline-block;
    margin: 0;
    font-size: 1.5rem;
    color: #fff;
    padding-bottom: 6px;
    border-bottom: 2px solid rgba($accent, 0.4);
  }
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5em;
  padding: 8px 24px;

  :deep(.project-card) {
    width: 420px;
    max-width: 100%;
  }
}
</style>
