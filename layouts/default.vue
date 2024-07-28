<script setup lang="ts">
</script>

<template>
  <div class="page">
    <NavBar />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>