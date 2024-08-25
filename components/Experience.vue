<script setup lang="ts">

export interface ExperienceData {
  url: string,
  img: string,
  title: string,
  time: string,
  desc?: string,
  text: string,
}

const props = defineProps<{
  experience: ExperienceData
  flipped: boolean
}>()

function getFipped() {
  if(props.flipped) {
    return 'flipped'
  }
  return ''
}

</script>

<template>
  <div :class="'Experience-Box ' + getFipped()">
    <div class="Experience-Info">
      <div class="Experience-Title">
        <h2>{{experience.title}}</h2>
        <h4>{{experience.desc}}</h4>
      </div>
      <h4>{{experience.time}}</h4>
      <p>{{experience.text}}</p>
    </div>
    <div class="Experience-Image">
      <div class="Image-Container">
        <LinkableImage :img="experience.img" :url="experience.url" height="100%" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.Experience-Box{

  transition: 200ms ease all;

  background-color: $bgLight;

  margin: auto;
  margin-bottom: 10px;
  display:flex;

  text-align: left;

  width: 85vw;
  height: 270px;

  box-shadow: 0 3px 3px $bgDark;
  border-radius: 0.15em;

  .Experience-Info{

    display:flex;
    flex-direction: column;
    width: 50%;
    margin-right: 10px;
    padding: 10px;
    padding-right: 0;
    
    .Experiences-Title {
      margin-top: 10px;
    }
    
    h2{
      margin: 0;
      margin-bottom: 5px;
    }

    h4 {
      margin: 0;
    }

    p {
      margin: 0;
      margin-top: 10px;
      font-size: 1em;
    }

    #subtitle{
      margin: 0;
      text-align: left;
    }
      
  }

  .Experience-Image{

    padding: 10px;
    padding-left: 0px;
    width: 50%;

    .Image-Container{
      object-fit:cover;
      width: 100%;
      height: 100%;
    }

    .img-loading {
      width: 100%;
      height: 100%;
    }
  }

}

.Experience-Box:hover{
  box-shadow: 0 7px 7px $bgDark;
  width: calc(85vw + 5px);
  height: 275px;
}

.Experience-Box.flipped{
  flex-direction: row-reverse;

  .Experience-Image{
    padding-left: 10px;
    padding-right: 0;

  }
  
  .Experience-Info{

    padding-left: 0;
    padding-right: 10px;

    margin-right: 0;
    margin-left: 10px;

    h2,h4,p{
      margin-right: 0;
    }

  }
}

$mobile-height: 560px;

@media screen and (max-width: 640px){

  .Experience-Box, .Experience-Box.flipped{
        
    width: 95vw;
    height: $mobile-height;

    display: block;
    overflow: hidden;

    .Experience-Info{

      padding: 3px;
      margin: 0;
      
      align-items: center;
      width: 100%;

      p,h4,h2 {
        margin: 5px;
          
      }

      h2, h4 {
        text-align: center;
      }

      h2{
        font-size: 1.3em;
      }

      h4 {
        margin: 0;
        font-size: 0.9em;
      }

      p {
        font-size: 0.95em;
      }

    }
      
    .Experience-Image{

      display:flex;
      flex-direction: column;
      justify-content: center;

      width:100%;
      padding: 3px;

      img{
        object-fit: scale-down;
        width:99%;
        height: 100%;
      }

    }
  }

  .Experience-Box:hover{
    height: calc( #{$mobile-height} + 5px);
    width: 95vw;
  }
}
</style>