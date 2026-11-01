<script setup lang="ts">
defineProps<{
  skills: string[];
}>();
</script>

<template>
  <ul class="skill-tags">
    <li v-for="skill in skills" :key="skill" class="skill">{{ skill }}</li>
  </ul>
</template>

<style lang="scss" scoped>
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 0;
  padding: 10px 0 0;
  list-style: none;
  text-shadow: none;
}

.skill {
  padding: 3px 10px;
  font-size: 0.78rem;
  background: rgba($accent, 0.1);
  border: 1px solid rgba($accent, 0.28);
  border-radius: 999px;
  color: $accentLight;
}
</style>
