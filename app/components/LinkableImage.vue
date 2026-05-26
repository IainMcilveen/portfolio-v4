<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  url: string;
  img: string;
  height?: string;
  width?: string;
  objectFit?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  height: "50%",
  width: "100%",
  objectFit: "cover",
});

const img_loaded = ref(false);

function setLoaded() {
  img_loaded.value = true;
}

const ImageStyles = computed(() => {
  return "height:" + props.height + ";width:" + props.width + ";";
});
</script>

<template>
  <ClientOnly>
    <template #fallback>
      <div class="Image" :style="ImageStyles" />
    </template>
    <div class="Image" :style="ImageStyles">
      <a v-if="url !== ''" :href="url" target="_blank" rel="noopener noreferrer">
        <img v-show="img_loaded" :src="img" @load="setLoaded()" />
        <div class="img-loading" v-show="!img_loaded">
          <FontAwesomeIcon class="load-icon" :icon="faSpinner" />
        </div>
      </a>
      <img
        v-if="url == ''"
        v-show="img_loaded"
        :src="img"
        @load="setLoaded()"
      />
      <div v-if="url == ''" class="img-loading" v-show="!img_loaded">
        <FontAwesomeIcon class="load-icon" :icon="faSpinner" />
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.Image {
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
}

img {
  object-fit: v-bind("props.objectFit");
  width: 100%;
  height: 100%;
}

.img-loading {
  width: v-bind("props.width");
  height: v-bind("props.height");
}
</style>
