<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  url: string;
  img: string;
  height?: string;
  width?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  height: "50%",
  width: "100%",
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
    <div class="Image" :style="ImageStyles">
      <a v-if="url !== ''" :href="url">
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
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.img-loading {
  width: 100%;
  height: 100%;
  min-height: 150px;
}
</style>
