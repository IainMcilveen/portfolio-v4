<script setup lang="ts">
const { data: home } = await useHome();

const title = ref("Home");
useHead({ title });
</script>

<template>
  <div v-if="home" class="page-home">
    <div class="card">
      <div class="profile">
        <NuxtImg
          :src="home.image"
          :alt="home.imageAlt"
          width="340"
          height="340"
          sizes="140px md:340px"
          format="webp"
          preload
        />
      </div>
      <div class="intro">
        <div class="intro-text">
          <h1>{{ home.name }}</h1>
          <hr />
          <ContentRenderer :value="home" />
        </div>
        <div class="links">
          <a :href="home.resume" target="_blank" rel="noopener noreferrer">
            <Icon name="fa6-solid:file-lines" />Resume
          </a>
          <a
            v-for="link in home.links"
            :key="link.url"
            :href="link.url"
            :target="link.url.startsWith('http') ? '_blank' : undefined"
            :rel="link.url.startsWith('http') ? 'noopener noreferrer' : undefined"
          >
            <Icon :name="link.icon" />{{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-home {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 3.5rem 4rem;
  background: rgba(40, 44, 52, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba($accent, 0.18);
  border-radius: 18px;
  max-width: 1200px;
  width: 94%;
  box-shadow: 0 8px 48px rgba(0, 0, 0, 0.45);
}

.profile {
  flex-shrink: 0;

  img {
    width: 340px;
    height: 340px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba($accent, 0.45);
    box-shadow: 0 0 32px rgba($accent, 0.18);
  }
}

.intro {
  color: $bgLight;

  h1 {
    margin: 0 0 0.25rem;
    font-size: 2.4rem;
    color: #fff;
    letter-spacing: 0.01em;
  }

  hr {
    border: none;
    border-top: 1px solid rgba($accent, 0.3);
    margin-bottom: 0.85rem;
  }

  :deep(p) {
    margin: 0 0 0.75rem;
    font-size: 1.15em;
    line-height: 1.65;
  }

  .intro-text :deep(a) {
    color: $accentLight;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.25rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.38rem 1.15rem;
    border: 1px solid rgba($accent, 0.35);
    border-radius: 999px;
    color: $bgLight;
    text-decoration: none;
    font-size: 0.9rem;
    transition:
      background 200ms ease,
      border-color 200ms ease,
      color 200ms ease;
    background: rgba($accent, 0.07);

    &:hover {
      background: rgba($accent, 0.22);
      border-color: rgba($accent, 0.65);
      color: #fff;
    }
  }
}

@media (max-width: 700px) {
  .card {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }

  .profile img {
    width: 140px;
    height: 140px;
  }

  .intro h1 {
    text-align: center;
  }

  .links {
    justify-content: center;
  }
}
</style>
