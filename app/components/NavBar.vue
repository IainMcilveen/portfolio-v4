<script setup lang="ts">
interface NavItem {
  text: string;
  url: string;
  external?: boolean;
}

const { data: home } = await useHome();

const data = computed<NavItem[]>(() => [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Experiences",
    url: "/experiences",
  },
  {
    text: "Projects",
    url: "/projects",
  },
  ...(home.value ? [{ text: "Resume", url: home.value.resume, external: true }] : []),
]);

const navHidden = ref(false);
</script>

<template>
  <nav :class="['navbar', { 'navbar-hidden': navHidden }]">
    <button
      class="navbar-toggle"
      type="button"
      :aria-expanded="!navHidden"
      aria-controls="navbar-list"
      :aria-label="navHidden ? 'Show navigation' : 'Hide navigation'"
      @click="navHidden = !navHidden"
    >
      <i :class="navHidden ? 'hidden' : 'visible'"></i>
    </button>
    <ul id="navbar-list" class="navbar-list">
      <li v-for="option in data" :key="option.url" class="navbar-element">
        <NuxtLink
          class="navbar-link"
          :to="option.url"
          :target="option.external ? '_blank' : undefined"
          :rel="option.external ? 'noopener noreferrer' : undefined"
        >
          {{ option.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: stretch;
  height: 40px;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: $bgDark;

  transition: 300ms ease all;
}

.navbar-toggle {
  width: 35px;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 2px solid $accent;
    outline-offset: -4px;
    border-radius: 4px;
  }

  i {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  // Shift toward the empty corner so the visible chevron, not its box, is centred
  .visible {
    transform: rotate(45deg) translate(-1.5px, -1.5px);
  }

  .hidden {
    transform: rotate(-135deg) translate(-1.5px, -1.5px);
  }
}

.navbar-list {
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
}

.navbar-element {
  display: flex;
  align-items: center;
}

.navbar-link {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 13px;
  border-radius: 2px;
  color: white;
  text-decoration: none;
  transition: 250ms ease all;

  &:hover,
  &:focus-visible {
    background-color: #323742;
  }

  &:focus-visible {
    outline: 2px solid $accent;
    outline-offset: -4px;
  }

  // Current page
  &.router-link-exact-active {
    color: $accentLight;
    box-shadow: inset 0 -2px 0 $accent;
  }
}

.navbar-hidden {
  height: 20px;

  .navbar-list {
    display: none;
  }
}

@media screen and (max-width: 759px) {
  .navbar {
    padding-left: 3px;
  }

  .navbar-link {
    padding: 0 0.4em;
    font-size: 0.85em;
  }
}
</style>
