<script setup lang="ts"></script>

<template>
  <div class="page">
    <ParticleBackground />
    <NavBar />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  // Dynamic viewport height so iOS Safari's toolbars don't cover the page
  height: 100dvh;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  box-sizing: border-box;
}
</style>
