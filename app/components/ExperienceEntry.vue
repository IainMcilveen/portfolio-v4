<script setup lang="ts">
import type { ExperiencesCollectionItem } from "@nuxt/content";

type ExperienceRole = ExperiencesCollectionItem["roles"][number];

const props = defineProps<{
  experience: ExperiencesCollectionItem;
}>();

// Overall span: start of the earliest role through the end of the latest role
const span = computed(() => {
  const roles = props.experience.roles;
  const start = roles[roles.length - 1]!.time.split(" - ")[0];
  const end = roles[0]!.time.split(" - ")[1];
  return start === end ? start : `${start} - ${end}`;
});

const isCurrent = (role: ExperienceRole) => role.time.endsWith("Present");
</script>

<template>
  <li class="entry">
    <div class="entry-aside">
      <div class="entry-logo">
        <LinkableImage
          :img="experience.img"
          :url="experience.url"
          :alt="`${experience.company} logo`"
          height="100%"
          object-fit="contain"
          sizes="150px md:260px"
        />
      </div>
      <span class="entry-span">{{ span }}</span>
    </div>
    <div class="entry-body">
      <a class="company" :href="experience.url" target="_blank" rel="noopener noreferrer">
        {{ experience.company }}
      </a>
      <div v-for="(role, i) in experience.roles" :key="i" :class="['role', { current: isCurrent(role) }]">
        <h2>{{ role.title }}</h2>
        <span class="time">{{ role.time }}</span>
      </div>
      <ContentRenderer class="text" :value="experience" />
      <SkillTags v-if="experience.skills?.length" :skills="experience.skills" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
// --aside, --gap and --dot are defined on the parent .timeline
.entry {
  display: grid;
  grid-template-columns: var(--aside) 1fr;
  column-gap: var(--gap);
  padding-bottom: 48px;

  &:last-child {
    padding-bottom: 0;
  }
}

.entry-aside {
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  text-align: right;
}

.entry-logo {
  width: 100%;
  aspect-ratio: 2 / 1;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.entry-span {
  font-size: 0.8rem;
  color: $bgMid;
}

.entry-body {
  min-width: 0;
  text-shadow: 0 1px 6px rgba(26, 29, 35, 0.9);
}

.company {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $accentLight;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.role {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;

  & + & {
    margin-top: 14px;
  }

  // Dot sitting on the timeline line
  &::before {
    content: "";
    position: absolute;
    top: 0.35rem;
    left: calc(-1 * var(--gap) / 2 - var(--dot) / 2);
    width: var(--dot);
    height: var(--dot);
    box-sizing: border-box;
    border-radius: 50%;
    background: $bgDarkest;
    border: 2px solid $accent;
  }

  &.current::before {
    background: $accent;
    box-shadow:
      0 0 0 4px rgba($accent, 0.2),
      0 0 14px rgba($accent, 0.6);
  }

  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #fff;
  }

  .time {
    font-size: 0.8rem;
    color: $bgMid;
  }
}

.text {
  margin-top: 12px;
  font-size: 0.93em;
  color: $bgLight;
  line-height: 1.6;

  :deep(p) {
    margin: 0;
  }

  :deep(p + p) {
    margin-top: 0.75em;
  }
}

@media screen and (max-width: 700px) {
  .entry {
    grid-template-columns: 1fr;
    row-gap: 14px;
    padding-left: var(--gap);
  }

  .entry-aside {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }

  .entry-logo {
    width: 150px;
    flex-shrink: 0;
  }
}
</style>
