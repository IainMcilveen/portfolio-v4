<script setup lang="ts">
import type { ProjectData } from '~/components/Project.vue';
import betterbasket from '~/assets/img/projects/betterbasket.png';
import database from '~/assets/img/projects/database.png';
import gridworld from '~/assets/img/projects/gridworld.gif';
import mctdevice from '~/assets/img/projects/mctdevice.png';
import pathfinding from '~/assets/img/projects/pathfinding.gif';
import pokemon from '~/assets/img/projects/pokemon.png';
import termtris from '~/assets/img/projects/termtris.gif';
import portfolio from '~/assets/img/projects/portfolio.png';

// add work projects
// https://chartd.ai/configuration_manager
// Sodelic
// Track offsets
// tacklebox

const data: ProjectData[] = [
  {
    url: "https://github.com/IainMcilveen",
    img: betterbasket,
    title: "Better Basket",
    desc: "Algorithms",
    text: "This program is the final group project for COMP 3106, I was primarily responsible for the implementation of A* and had to design the heuristic which would best optimize distance while factoring in the cost of products at each store. We used data scraped from UberEats and Time-Distance Matrix API from OpenRouteService.org"
  },
  {
    url: "https://github.com/IainMcilveen/comp3005pg",
    img: database,
    title: "COMP 3005 Database Project",
    desc: "Web Application",
    text: "This program is my final project for COMP 3005, it is a web application designed to be the platform for a online book store. I made use of postgreSQL to store book and order information, and nodeJS for the backend. For the frontend, I made use of Pug for the templates which pull information from the database."
  },
  {
    url: "https://github.com/IainMcilveen/Whos-That-Pokemon",
    img: pokemon,
    title: "Who's That Pokemon",
    desc: "Mobile Web Application",
    text: "This is a program written for the CUHacking 2020 hackathon, this is a web application written in React which is designed to work well on mobile devices. I made use of the Hooks API to save the quiz state and determine whether the user answered correctly or incorrectly."
  },
  {
    url: "https://github.com/IainMcilveen/pathfinding-visualizer",
    img: pathfinding,
    title: "Pathfinding visualizer",
    desc: "Algorithms",
    text: "I wrote this application as a way to visualize the A star pathfinding algorithm, allowing the user to create different obstacles and set a start and end point for the algorithm to use. It was written in python using pygame to display the graphics."
  },
  {
    url: "https://github.com/IainMcilveen/termtris",
    img: termtris,
    title: "TermTris",
    desc: "Terminal Application",
    text: "This is a program written in C, which allows you to play a simple version of tetris from the convience of your terminal. I used ncurses to draw the game within the terminal."
  },
  {
    url: "https://github.com/IainMcilveen",
    img: mctdevice,
    title: "MCT Device Simulator",
    desc: "Desktop Application",
    text: "This program is my final project does in a group for COMP 3004: Object-Oriented Software Engineering and was written in C++ using QT. It Simulates the user interface as well as various features of the DENAS PCM6 Electroneurostimulation device."
  },
  {
    url: "https://github.com/IainMcilveen/GridWorld",
    img: gridworld,
    title: "Grid World",
    desc: "Game",
    text: "This is a in-progess game being written from scratch in Java using AWT, currently the player can walk around and explore the world and can naviagate to different procedurally generated screens."
  },
  {
    url: "https://github.com/IainMcilveen/portfolio-v3",
    img: portfolio,
    title: "Portfolio",
    desc: "Web Application",
    text: "This is my portfolio website which you are currently viewing! This was written using Vue with Sass styling and was created to demonstrate my current projects, skills and experience. I designed to work well on the desktop as well as on mobile devices."
  },
]
</script>

<template>
  <div class="Projects">
    <Project v-for="(exp, index) in data" :project="exp" :key="'Project'+index" />
  </div>
</template>

<style lang="scss" scoped>
.Projects {
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
}
</style>