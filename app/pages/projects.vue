<script setup lang="ts">
import type { ProjectData } from "~/components/Project.vue";
import betterbasket from "~/assets/img/projects/betterbasket.png";
import database from "~/assets/img/projects/database.png";
import gridworld from "~/assets/img/projects/gridworld.gif";
import mctdevice from "~/assets/img/projects/mctdevice.png";
import pathfinding from "~/assets/img/projects/pathfinding.gif";
import pokemon from "~/assets/img/projects/pokemon.png";
import termtris from "~/assets/img/projects/termtris.gif";
import portfolio from "~/assets/img/projects/portfolio.jpg";
import confmgr from "~/assets/img/projects/confmgr.jpeg";
import sodelic from "~/assets/img/projects/sodelic.jpg";
import trackoffsets from "~/assets/img/projects/trackoffsets.png";
import tacklebox from "~/assets/img/projects/tacklebox.png";
import poster from "~/assets/img/projects/poster.png";
import stickynoter from "~/assets/img/projects/stickynoter.png"
import portal from "~/assets/img/projects/portal.jpg"

const workProjects: ProjectData[] = [
  {
    url: "https://www.softwaresecured.com/portal",
    img: portal,
    title: "Portal",
    desc: "Software Secured: Vulnerability Management Platform",
    text: "While working on this project was responsible for, building new features, improving performance, and strengthening security across a large scale Nuxt.js and Express application. I architected Azure DevOps and GitHub integrations, implemented centralized Sentry error logging to improve observability, and helped lead a major frontend and backend refactor focused on performance, maintainability, and security. This included refactoring authentication middleware, replacing the CSRF implementation, improving session management flows, working with AWS ECS and Terraform infrastructure, and helping build an extensive suite of Unit and Pact tests.",
    skills: [
      "Typescript",
      "Vue.js",
      "Nuxt.js",
      "Pinia",
      "Chart.js",
      "Shadcn",
      "Express",
      "PostgreSQL",
      "TypeORM",
      "AWS",
      "Terraform",
      "Docker",
      "OAuth2",
      "GraphQL",
      "Sentry",
      "Github Actions",
    ],
    big: true,
  },
  {
    url: "https://sodelic.com/",
    img: sodelic,
    title: "Sodelic",
    desc: "Chartd: Project Scope Management Software",
    text: "For this project, I led the design on several core components and features. This includes the user authentication and permissions components, the handler for all communications with the backend API, an export module for exporting data to CSV or Excel as needed and many others. I was responsible for creating end-to-end tests using Cypress which were incorporated into the CI/CD pipeline using Github Actions insuring all changes were validated before deployment.",
    skills: [
      "Typescript",
      "Vue.js",
      "Nuxt.js",
      "Pinia",
      "PrimeVue",
      "PrimeFlex",
      "Cypress",
      "Python",
      "FastAPI",
      "Chart.js",
      "Github Actions",
    ],
    big: true,
  },
  {
    img: confmgr,
    title: "Configuration Manager",
    desc: "Chartd: Web Application",
    text: "While working on this project I was mainly responsible for the creation of the majority of the frontend pages. This included using Telerik UI to create forms with data validation and display tables with potentially 10,000+ records. This meant server side pagination needed to be implemented so the application would remain performant. This also included having regular meetings and demos with clients to take feedback and create the application which best suited their needs.",
    skills: ["C#", "ASP.Net Core", "Telerik UI", "HTML", "CSS", "Javascript"],
    big: true,
  },
  {
    url: "https://trackoffsets.com/",
    img: trackoffsets,
    title: "Track Offsets",
    desc: "Chartd: ITB Policy Management Software",
    text: "While working on this project I fixed various bugs and added features to the existing FastAPI backend including a variety of endpoints for access and modifying data which I had created the models for, permissions management and the automatic generation of reports into various different formats including CSV and Excel using openPyXL to generate the spreadsheets.",
    skills: [
      "Typescript",
      "Vue.js",
      "Nuxt.js",
      "FastAPI",
      "Python",
      "Cognito",
      "OpenPyXL",
      "MongoDB",
    ],
    big: true,
  },
  {
    img: tacklebox,
    title: "Tacklebox",
    desc: "Pisces Research Project Management Inc: Web Application",
    text: "While working on this project I was mainly responsible for adding features to the existing backend Django project as well as creating associated pages in a frontend Vue application to support them. This included creating various models to store in the MongoDB database and creating serializers so that a RestAPI could be created allowing for interactions between the new Vue pages I created and the backend.",
    skills: ["Vue.js", "Django", "Python", "MongoDB"],
    big: true,
  },
];

const personalProjects: ProjectData[] = [
  {
    url: "https://github.com/IainMcilveen/StickyNoter",
    img: stickynoter,
    title: "Sticky Noter",
    desc: "Full Stack Web Application",
    text: "This application allows you to create, edit, delete, and move sticky notes around the web page. The sticky notes contain a rich text editor allowing the user to easily format the contents of each note.",
    skills: ["Javascript", "Vue.js", "Tailwind", "Node.js", "Express", "MongoDB", "Mongoose", "Docker"],
  },
  {
    url: "https://github.com/IainMcilveen",
    img: poster,
    title: "Poster Scanner",
    desc: "Computer Vision",
    text: "This program is the final group project for Comp 4102, I was primarily responsible for using OpenCV to automatically crop a picture to only contain a poster. I also setup Pytesseract to read all of the text on the poster, so it could then be parsed and automatically converted into a Google Calendar event.",
    skills: ["Python", "OpenCV", "Pytesseract"],
  },
  {
    url: "https://github.com/IainMcilveen",
    img: betterbasket,
    title: "Better Basket",
    desc: "Algorithms",
    text: "This program is the final group project for COMP 3106, I was primarily responsible for the implementation of A* and had to design the heuristic which would best optimize distance while factoring in the cost of products at each store. We used data scraped from UberEats and Time-Distance Matrix API from OpenRouteService.org",
    skills: ["Python", "Django"],
  },
  {
    url: "https://github.com/IainMcilveen/comp3005pg",
    img: database,
    title: "Online Bookstore",
    desc: "Web Application",
    text: "This program is my final project for COMP 3005, it is a web application designed to be the platform for a online book store. I made use of postgreSQL to store book and order information, and NodeJS for the backend. For the frontend, I made use of Pug for the templates which pull information from the database.",
    skills: ["NodeJS", "Express", "Javascript", "Pug", "PostgreSQL"],
  },
  {
    url: "https://github.com/IainMcilveen/Whos-That-Pokemon",
    img: pokemon,
    title: "Who's That Pokemon",
    desc: "Mobile Web Application",
    text: "This is a program written for the CUHacking 2020 hackathon, this is a web application written in React which is designed to work well on mobile devices. I made use of the Hooks API to save the quiz state and determine whether the user answered correctly or incorrectly.",
    skills: ["ReactJS", "CSS"],
  },
  {
    url: "https://github.com/IainMcilveen/pathfinding-visualizer",
    img: pathfinding,
    title: "Pathfinding visualizer",
    desc: "Algorithms",
    text: "I wrote this application as a way to visualize the A star pathfinding algorithm, allowing the user to create different obstacles and set a start and end point for the algorithm to use. It was written in python using pygame to display the graphics.",
    skills: ["Python", "Pygame"],
  },
  {
    url: "https://github.com/IainMcilveen/termtris",
    img: termtris,
    title: "TermTris",
    desc: "Terminal Application",
    text: "This is a program written in C, which allows you to play a simple version of tetris from the convience of your terminal. I used ncurses to draw the game within the terminal.",
    skills: ["C", "Ncurses"],
  },
  {
    url: "https://github.com/IainMcilveen",
    img: mctdevice,
    title: "MCT Device Simulator",
    desc: "Desktop Application",
    text: "This program is my final project does in a group for COMP 3004: Object-Oriented Software Engineering and was written in C++ using QT. It Simulates the user interface as well as various features of the DENAS PCM6 Electroneurostimulation device.",
    skills: ["C++", "QT"],
  },
  {
    url: "https://github.com/IainMcilveen/GridWorld",
    img: gridworld,
    title: "Grid World",
    desc: "Game",
    text: "This is a in-progess game being written from scratch in Java using AWT, currently the player can walk around and explore the world and can naviagate to different procedurally generated screens.",
    skills: ["Java", "AWT"],
  },
  {
    url: "https://github.com/IainMcilveen/portfolio-v4",
    img: portfolio,
    title: "Portfolio",
    desc: "Web Application",
    text: "This is my portfolio website which you are currently viewing! This was written in Nuxt.js with Sass styling and was created to demonstrate my current projects, skills and experience. It makes use of Github actions to compress images, and deploy to github pages when changes are pushed.",
    skills: ["Vue.js", "Nuxt.js", "SCSS", "Typescript", "Github Actions"],
  },
];

const title = ref("Projects");
useHead({
  title,
});
</script>

<template>
  <div class="projects-page">
    <ParticleBackground />
    <div class="projects-content">
      <div class="section-heading"><h2>Work Projects</h2></div>
      <div class="projects-grid">
        <Project
          v-for="(project, index) in workProjects"
          :project="project"
          :key="'Work' + index"
        />
      </div>
      <div class="section-heading"><h2>Personal Projects</h2></div>
      <div class="projects-grid">
        <Project
          v-for="(project, index) in personalProjects"
          :project="project"
          :key="'Personal' + index"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-page {
  position: relative;
  min-height: 100%;
  background-color: #1a1d23;
  overflow-x: hidden;
}

.projects-content {
  position: relative;
  z-index: 1;
  padding: 24px 0 40px;
}

.section-heading {
  text-align: center;
  padding: 16px 0 8px;

  h2 {
    display: inline-block;
    margin: 0;
    font-size: 1.5rem;
    color: #fff;
    padding-bottom: 6px;
    border-bottom: 2px solid rgba(99, 179, 237, 0.4);
  }
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5em;
  padding: 8px 24px;

  :deep(.project-card) {
    width: 420px;
    max-width: 100%;
  }
}
</style>
