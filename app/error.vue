<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const notFound = computed(() => props.error.statusCode === 404);
useHead({ title: notFound.value ? "Page not found" : "Error" });
</script>

<template>
  <NuxtLayout>
    <div class="error-page">
      <div class="error-content">
        <span class="code">{{ error.statusCode }}</span>
        <h1>{{ notFound ? "Page not found" : "Something went wrong" }}</h1>
        <p>
          {{ notFound ? "The page you're looking for doesn't exist or has moved." : "Please try again in a moment." }}
        </p>
        <button type="button" @click="clearError({ redirect: '/' })">Back to home</button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.error-page {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.code {
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
  color: $accent;
}

h1 {
  margin: 0.5rem 0;
  color: #fff;
}

p {
  margin: 0 0 1.5rem;
  color: $bgLight;
}

button {
  padding: 0.5rem 1.4rem;
  border: 1px solid rgba($accent, 0.35);
  border-radius: 999px;
  background: rgba($accent, 0.07);
  color: $bgLight;
  font-size: 0.95rem;
  cursor: pointer;
  transition:
    background 200ms ease,
    border-color 200ms ease,
    color 200ms ease;

  &:hover,
  &:focus-visible {
    background: rgba($accent, 0.22);
    border-color: rgba($accent, 0.65);
    color: #fff;
  }
}
</style>
