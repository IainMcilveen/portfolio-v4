<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export interface Experience {
    url: string,
    img: string,
    img_loaded: boolean,
    title: string,
    desc?: string,
    text: string,
    date?: string,
}

const props = defineProps<{
  experiences: Experience[]
}>()

const data = ref(props.experiences)

function setLoaded(index: number) {
  console.log(index)
  data.value[index].img_loaded = true
}
</script>

<template>
  <div class="Card">
    <div v-for="(exp, index) in experiences" class="Experience-Box" :key="'Experience-'+index">
      <div class="Experience-Image">
        <a v-if="exp.url !== ''" :href="exp.url"> 
          <!--Figure out why @load isn't called-->
          <img v-show="exp.img_loaded" :src="exp.img" @load="setLoaded(index)" />
          <div class="img-loading" v-show="!exp.img_loaded">
            <FontAwesomeIcon class="load-icon" :icon="faSpinner" />
          </div>
        </a>
        <img v-if="exp.url == ''" v-show="exp.img_loaded" :src="exp.img" @load="setLoaded(index)" />
        <div v-if="exp.url == ''" class="img-loading" v-show="!exp.img_loaded">
          <FontAwesomeIcon class="load-icon" :icon="faSpinner" />
        </div>
      </div>
      <div class="Experience-Title">
          <a v-if="exp.url !== ''" :href="exp.url"><h4>{{exp.title}}</h4></a>
          <h4 v-else>{{exp.title}}</h4>
          <h6>{{exp.desc}}</h6>
      </div>
      <div class="Experience-Info">
          <p>{{exp.text}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.Experience-Box {
  transition: 300ms ease all;

  width: 500px;
  height: 450px;

  background-color: $bgLight;
  border-radius: 2px;

  margin: 1em 1.35em 1em 1.35em;
  padding: 5px;

  text-align:left;
 
  .Experience-Image{

    height: 50%;
    width: 100%;

    img{
      object-fit:cover;
      width: 100%;
      height: 100%;
    }

    .img-loading {
      width: 100%;
      height: 100%;
    }

  }

  .Experience-Title{
    a{
      text-decoration: none;
      color: $bgDark;
    }
    h4{
      font-size: 22px;
      margin: 5px;
      margin-left: 0;
      margin-bottom: 0;
      color: $bgDark;
    }
    h6{
      font-size: 15px;
      margin-top: 0;
      margin-bottom: 2px;
    }
    p{
      font-size: 13px;
      margin: 7px 0 0 0;
    }
  }

  .Experience-Info{
    p{
      margin: 3px 5px 0 0;
    }
  }
}

.Experience-Box:hover{
  width: 505px;
  height: 455px;
  box-shadow: 0 5px 5px $bgMid;
}

@media screen and (max-width: 440px){
  $mobile-height: 450px;

  .Experience-Box{
    margin: 0.5em 0.3em 0.5em 0.3em;
    height: $mobile-height;

    .Experience-Image{
      height: 30%;
      width: 100%;
    }

  }

  .Experience-Box:hover{
    height: calc(#{$mobile-height} + 5px);
    box-shadow: 0 5px 5px $bgMid;
  }
}

</style>