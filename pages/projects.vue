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
import confmgr from '~/assets/img/projects/confmgr.jpeg';
import sodelic from '~/assets/img/projects/sodelic.png';
import trackoffsets from '~/assets/img/projects/trackoffsets.png';
import tacklebox from '~/assets/img/projects/tacklebox.png';
import poster from '~/assets/img/projects/poster.png';

// add work projects
// https://chartd.ai/configuration_manager
// Sodelic
// Track offsets
// tacklebox

const workProjects: ProjectData[] = [
  { 
    url: "https://sodelic.com/",
    img: sodelic,
    title: "Sodelic",
    desc: "Chartd: Web Application",
    text: "For this project I am primarily responsible for creating the front end infrastructure which allows for the efficient communication between the front end and backend project. This includes implmenting the data types used by the backend for communication, creating generic systems for permissions and data analytics which can be easily expanded as needed.",
    skills: ["Vue3", "Nuxt3", "Pinia", "PrimeVue", "Typescript", "SCSS", "Web Sockets"]
  },
  {
    url: "https://chartd.ai/configuration_manager",
    img: confmgr,
    title: "Configuration Manager",
    desc: "Chartd: Web Application",
    text: "While working on this project I was mainly responsible for the creation of the majority of the front end pages. This included using Telerik UI to create forms with data validation and display tables with potentially 10,000+ records. This meant server side pagination needed to be implemented so the application would remain performant. This also included having regular meetings and demos with clients to take feedback and create the application which best suited their needs.",
    skills: ["C#","ASP.Net Core","Telerik UI","HTML","CSS","Javascript"]
  },
  {
    url: "https://trackoffsets.com/",
    img: trackoffsets,
    title: "Track Offsets",
    desc: "Chartd: Web Application",
    text: "While working on this project I fixed various bugs and added features to the existing FastAPI backend including a variety of endpoints for access and modifying data which I had created the models for, permissions management and the automatic generation of reports into various different formats including CSV and Excel using openPyXL to generate the spreadsheets.",
    skills: ["FastAPI","Python","OpenPyXL","MongoDB", "Cognito"]
  },
  {
    url: "https://tacklebox.piscesrpm.com/",
    img: tacklebox,
    title: "Tacklebox",
    desc: "Pisces Research Project Management Inc: Web Application",
    text: "While working on this project I was mainly responsible for adding features to the existing backend Django project as well as creating associated pages in a front end Vue application to support them. This included creating various models to store in the MongoDB database and creating serializers so that a RestAPI could be created allowing for interactions between the new Vue pages I created and the backend.",
    skills: ["Vue","Django","Python","MongoDB"]
  },
]

const personalProjects: ProjectData[] = [
  {
    url: "https://github.com/IainMcilveen",
    img: poster,
    title: "Poster Scanner",
    desc: "Computer Vision",
    text: "This program is the final group project for Comp 4102, I was primarily responsible for using OpenCV to automatically crop a picture to only contain a poster. I also setup Pytesseract to read all of the text on the poster, so it could then be parsed and automatically converted into a Google Calendar event.",
    skills: ["Python", "OpenCV", "Pytesseract"]
  },
  {
    url: "https://github.com/IainMcilveen",
    img: betterbasket,
    title: "Better Basket",
    desc: "Algorithms",
    text: "This program is the final group project for COMP 3106, I was primarily responsible for the implementation of A* and had to design the heuristic which would best optimize distance while factoring in the cost of products at each store. We used data scraped from UberEats and Time-Distance Matrix API from OpenRouteService.org",
    skills: ["Python", "Django"]
  },
  {
    url: "https://github.com/IainMcilveen/comp3005pg",
    img: database,
    title: "COMP 3005 Database Project",
    desc: "Web Application",
    text: "This program is my final project for COMP 3005, it is a web application designed to be the platform for a online book store. I made use of postgreSQL to store book and order information, and NodeJS for the backend. For the frontend, I made use of Pug for the templates which pull information from the database.",
    skills: ["NodeJS", "Express", "Javascript", "Pug", "PostgreSQL"]
  },
  {
    url: "https://github.com/IainMcilveen/Whos-That-Pokemon",
    img: pokemon,
    title: "Who's That Pokemon",
    desc: "Mobile Web Application",
    text: "This is a program written for the CUHacking 2020 hackathon, this is a web application written in React which is designed to work well on mobile devices. I made use of the Hooks API to save the quiz state and determine whether the user answered correctly or incorrectly.",
    skills: ["ReactJS", "CSS"]
  },
  {
    url: "https://github.com/IainMcilveen/pathfinding-visualizer",
    img: pathfinding,
    title: "Pathfinding visualizer",
    desc: "Algorithms",
    text: "I wrote this application as a way to visualize the A star pathfinding algorithm, allowing the user to create different obstacles and set a start and end point for the algorithm to use. It was written in python using pygame to display the graphics.",
    skills: ["Python", "Pygame"]
  },
  {
    url: "https://github.com/IainMcilveen/termtris",
    img: termtris,
    title: "TermTris",
    desc: "Terminal Application",
    text: "This is a program written in C, which allows you to play a simple version of tetris from the convience of your terminal. I used ncurses to draw the game within the terminal.",
    skills: ["C", "Ncurses"]
  },
  {
    url: "https://github.com/IainMcilveen",
    img: mctdevice,
    title: "MCT Device Simulator",
    desc: "Desktop Application",
    text: "This program is my final project does in a group for COMP 3004: Object-Oriented Software Engineering and was written in C++ using QT. It Simulates the user interface as well as various features of the DENAS PCM6 Electroneurostimulation device.",
    skills: ["C++", "QT"]
  },
  {
    url: "https://github.com/IainMcilveen/GridWorld",
    img: gridworld,
    title: "Grid World",
    desc: "Game",
    text: "This is a in-progess game being written from scratch in Java using AWT, currently the player can walk around and explore the world and can naviagate to different procedurally generated screens.",
    skills: ["Java", "AWT"]
  },
  {
    url: "https://github.com/IainMcilveen/portfolio-v3",
    img: portfolio,
    title: "Portfolio",
    desc: "Web Application",
    text: "This is my portfolio website which you are currently viewing! This was written using Vue with Sass styling and was created to demonstrate my current projects, skills and experience. I designed to work well on the desktop as well as on mobile devices.",
    skills: ["Vue3", "Nuxt3", "SCSS", "Typescript"]
  },
]
</script>

<template>
  <div class="Projects">
    <div class="Section-Description">
      <h3>Work Projects</h3>
    </div>
    <div class="Projects-Container">
      <Project v-for="(exp, index) in workProjects" :project="exp" :key="'Project'+index" />
    </div>
    <div class="Section-Description">
      <h3>Personal Projects</h3>
    </div>
    <div class="Projects-Container">
      <Project v-for="(exp, index) in personalProjects" :project="exp" :key="'Project'+index" />
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
.Projects {
  overflow-x: hidden;
  background-color: $bgDark;

  .Section-Description {
    color: $bgLight;
    width: 100vw;
    text-align: center;
  }

  .Projects-Container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>