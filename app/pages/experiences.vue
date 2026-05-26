<script setup lang="ts">
import type { ExperienceData } from "~/components/Experience.vue";
import imgsesimg from "~/assets/img/experience/pisceslogo.png";
import chartdimg from "~/assets/img/experience/chartd.png";
import innovaimg from "~/assets/img/experience/innova.jpg";
import statcanimg from "~/assets/img/experience/stat-can-new.png";
import scsimg from "~/assets/img/experience/scs.png";
import carletonimg from "~/assets/img/experience/carleton.png";
import ssimg from "~/assets/img/experience/softwaresecured.jpg";
import Experience from "~/components/Experience.vue";

const data: ExperienceData[] = [
  {
    title: "Software Engineer",
    desc: "Software Secured",
    time: "August 2025 - Present",
    text: "As a Software Engineer, I work across multiple full-stack projects and tech stacks in a security-focused environment, building features, resolving production issues, and improving system reliability across frontend, backend, and cloud infrastructure. My experience includes managing deployments and CI/CD workflows with AWS ECS, GitHub Actions, Docker, and Terraform. Key contributions include implementing organization-wide Sentry observability and centralized error handling, architecting Azure DevOps and GitHub integrations, leading a large-scale Nuxt 3/Pinia refactor with hardened CSRF and session management, extending a Burp Suite plugin with AWS SQS-based security testing pipelines, modernizing internal reporting systems, writing extensive automated test suites, and authoring an MCP server that interfaces directly with Django models to enable AI-assisted workflows.",
    img: ssimg,
    url: "https://www.softwaresecured.com/",
    skills: ["TypeScript", "Vue.js", "Nuxt.js", "Pinia", "Python", "Django", "React", "Express", "PostgreSQL", "AWS", "Terraform", "Docker", "Sentry", "GitHub Actions", "Vitest"],
  },
  {
    title: "Full Stack Developer",
    desc: "Chartd",
    time: "May 2023 - May 2025",
    text: "As a Full Stack Developer, I contributed to a range of internal and client-facing projects, regularly meeting with clients to demo progress, gather feedback, and iteratively refine solutions to meet their requirements. Key contributions include designing a configurable role-based permissions system using Nuxt.js middleware, implementing end-to-end authentication flows with Microsoft Entra SSO and JWT, building a FastAPI integration with the Jira API for automated issue tracking, and leveraging AJV for JSON schema validation to ensure data integrity. I also developed and maintained end-to-end Cypress tests integrated into the CI/CD pipeline via GitHub Actions.",
    img: chartdimg,
    url: "https://gochartd.com/",
    skills: ["TypeScript", "Vue.js", "Nuxt.js", "SCSS", "FastAPI", "Python", "ASP.NET Core", "SQL Server", "MongoDB", "Cypress", "GitHub Actions"],
  },
  {
    title: "Jr. Ocean Programmer",
    desc: "Pisces Research Project Management Inc.",
    time: "May 2022 - August 2022",
    text: "As a Jr Ocean Programmer, I was responsible for doing full-stack web development in Django and Vue.js to make improvements and add a variety of new features to their internal tools. This included making use of Chart.js to create a dashboard which would visualize many different statistics based on responses to forms from users of the application.",
    img: imgsesimg,
    url: "https://piscesrpm.com/",
    skills: ["Django", "Vue.js", "Python", "Chart.js"],
  },
  {
    title: "Web Application Developer",
    desc: "Chartd",
    time: "January 2022 - April 2022",
    text: "As a Web Applications Developer, my responsibilities included working on web applications in Vue.js with Nuxt.js, Vuetify and SCSS. This included adding many new features and improvements as well as designing custom templated layouts which are used in a variety of places in the application.",
    img: chartdimg,
    url: "https://gochartd.com/",
    skills: ["Vue.js", "Nuxt.js", "Vuetify", "SCSS", "JavaScript", "MongoDB"],
  },
  {
    title: "Junior Cloud Engineer",
    desc: "Innovapost",
    time: "May 2021 - August 2021",
    text: "As a Junior Cloud Engineer, I wrote scripts to automate and complete tasks in Azure, these tasks included creating several scripts which comprised the backup infrastructure which is used to backup and restore all of the resources and their configurations in Azure Resource Manager in the event of an emergency. I also was responsible for creating visualizations in PowerBi regarding the security of the resources in Azure.",
    img: innovaimg,
    url: "https://innovapost.com/",
    skills: ["Azure", "PowerShell", "PowerBI"],
  },
  {
    title: "Application Developer",
    desc: "Statistics Canada",
    time: "June 2020 - December 2020",
    text: "As a Application Developer, I created and improved internal tools used by many different clients within Statistics Canada, this included creating a user interface in VB.Net which interfaced with an Oracle database to allow the clients to more easily work with the data in their databases. This meant I had to be able to work with clients to create the programs to suit their needs.",
    img: statcanimg,
    url: "https://www.statcan.gc.ca/eng/start",
    skills: ["VB.Net", "Oracle", "SQL"],
  },
  {
    title: "Computer Science Teaching Assistant",
    desc: "Carleton University: School of Computer Science",
    time: "September 2019 - December 2019",
    text: "As a teaching assistant, I got to help students gain a better understanding of the fundemental concepts of programming. I held office hours, lead tutorials and work with a team of other teaching assistants to help students and complete marking of assignments in a timely manner.",
    img: scsimg,
    url: "https://admissions.carleton.ca/programs/computer-science/",
  },
  {
    title: "B.S.C. Computer Science (Honours) ",
    desc: "Carleton University",
    time: "September 2018 - April 2023",
    text: "Competed a degree in Computer Science at Carleton University where I learned about a wide range of computer science related topics such as: Systems Programming, Software engineering, Web developement as well as many others.",
    img: carletonimg,
    url: "https://carleton.ca/",
  },
];

const title = ref("Experiences");
useHead({
  title,
});
</script>

<template>
  <div class="experiences-page">
    <ParticleBackground />
    <div class="experiences-content">
      <Experience
        v-for="(exp, index) in data"
        :experience="exp"
        :flipped="index % 2 === 0"
        :key="'Experience' + index"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experiences-page {
  position: relative;
  min-height: 100%;
  background-color: #1a1d23;
  overflow-x: hidden;
}

.experiences-content {
  position: relative;
  z-index: 1;
  padding: 24px 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
