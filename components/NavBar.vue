<script setup lang="ts">
interface NavItem {
  text: string,
  url: string
}

const data: NavItem[] = [
  {
    text: "Home",
    url: "/"
  },
  {
    text: "Experiences",
    url: "/experiences"
  },
  {
    text: "Projects",
    url: "/projects"
  },
  {
    text: "Resume",
    url: "https://drive.google.com/file/d/1P-3NAXoleGS5Vkq5UAQbExlAARSXi4PA/view?usp=share_link"
  }
];

let hoverIndex = ref(-1)
let navHidden = ref(false)

const navbarClass = computed(() => {
  return (navHidden.value ? "navbar-hidden " : "");
})

const iClass = computed(() => {
  return navHidden.value ? "hidden" : "visible";
})

</script>

<template>
  <nav :class="'navbar ' + navbarClass">
    <ul class="navbar-list">
      <figure @mousedown="navHidden = !navHidden">
        <i :class="iClass"></i>
      </figure>
      <li 
        v-for="(option, index) in data" 
        :key="'nav-'+index"
        class="navbar-element"
        :style="{'backgroundColor': (hoverIndex === index ? '#323742' : '') }"
        @mouseover="hoverIndex = index"
        @mouseleave="hoverIndex = -1"
      >
        <a class="navbar-link" :href="option.url">{{option.text}}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>

.navbar {

  height: 40px;
  width: 100vw;
  background-color: #282c34;
  //z-index: 1;
  //position: fixed;    

  transition: 300ms ease all;

}

.navbar-list {
  display: flex;
  padding: 0;
  padding-left:10px;
  margin-block-start: 0;
  margin-block-end: 0;
  height: 100%;
  align-items: center;

  figure{
    width: 15px;
    margin: 0;
    padding: 10px;
    cursor: pointer;

    .visible {
      position: relative;
      bottom: 5px;
      border: solid white;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);   
    }

    .hidden{
      border: solid white;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }
  }

  .navbar-element{
    transition: 250ms ease all;
    
    align-items: center;
    border-radius: 2px;
    padding: 5px 8px 8px 5px;
    list-style-type: none;
    cursor: pointer;
  }

  .navbar-link{
    color: white;
    text-decoration: none;
    padding: 5px;
  }
}

.navbar-hidden{
  height: 20px;
  .navbar-element{
    display:none;
  }
}

@media screen and (max-width: 759px){
  nav{
    .navbar-list{
      padding-left: 3px;

      .navbar-element{
        padding: 3px;
        padding-left: 1px;
        padding-right: 1px;
      }

      .navbar-link{
        padding: 0.1em;
        padding-right: 0.3em;
        font-size: 0.85em;
      }
    }
  }
}

</style>