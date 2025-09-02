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

const height = computed(() => {
  if (props.project.big) {
    return "545px";
  } else {
    return "460px";
  }
});

const hoverHeight = computed(() => {
  if (props.project.big) {
    return "540px";
  } else {
    return "455px";
  }
});
</script>

<template>
  <div class="Project-Box">
    <LinkableImage :img="project.img" :url="project.url ?? ''" height="250px" />
    <div class="Project-Title">
      <a v-if="project.url !== ''" :href="project.url"
        ><h4>{{ project.title }}</h4></a
      >
      <h4 v-else>{{ project.title }}</h4>
      <h6>{{ project.desc }}</h6>
    </div>
    <hr />
    <div class="Project-Info">
      <p>{{ project.text }}</p>
    </div>
    <div class="Project-Skills">
      <div
        v-for="(skill, index) in project.skills"
        :key="'skill-' + index"
        class="skill"
      >
        {{ skill }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Project-Box {
  transition: 300ms ease all;

  width: 500px;
  height: v-bind("height");

  background-color: $bgLight;
  border-radius: 2px;

  margin: 1em 1.35em 1em 1.35em;
  padding: 5px;

  text-align: left;

  .Project-Title {
    a {
      text-decoration: none;
      color: $bgDark;
    }
    h4 {
      font-size: 24px;
      margin: 5px;
      margin-left: 0;
      margin-bottom: 0;
      color: $bgDark;
    }
    h6 {
      font-size: 18px;
      margin-top: 0;
      margin-bottom: 2px;
    }
    p {
      font-size: 15px;
      margin: 7px 0 0 0;
    }
  }

  .Project-Info {
    p {
      margin: 3px 5px 0 0;
    }
  }

  .Project-Skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 15px;
    padding-bottom: 5px;
    justify-content: center;

    .skill {
      padding: 5px;
      margin-right: 5px;
      margin-bottom: 5px;
      background-color: lightcyan;
      border-radius: 5px;
    }
  }
}

.Project-Box:hover {
  //width: 505px;
  //height: v-bind("hoverHeight");
  box-shadow: 0 5px 5px $bgMid;
}

@media screen and (max-width: 440px) {
  $mobile-height: 600px;

  .Project-Box {
    margin: 0.5em 0.3em 0.5em 0.3em;
    height: $mobile-height;

    .Project-Image {
      height: 30%;
      width: 100%;
    }
  }

  .Project-Box:hover {
    //height: calc(#{$mobile-height} + 5px);
    box-shadow: 0 7px 7px $bgMid;
  }

  .Project-Skills {
    flex-wrap: wrap;

    .skill {
      margin-bottom: 5px;
    }
  }
}
</style>
