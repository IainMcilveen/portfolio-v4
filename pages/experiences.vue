<script setup lang="ts">
import type { ExperienceData } from '~/components/Experience.vue';
import imgsesimg from '~/assets/img/experience/pisceslogo.png';
import chartdimg from '~/assets/img/experience/chartd.png';
import innovaimg from '~/assets/img/experience/innova.jpg';
import statcanimg from '~/assets/img/experience/stat-can-new.png';
import scsimg from '~/assets/img/experience/scs.png';
import carletonimg from '~/assets/img/experience/carleton.png';
import Experience from '~/components/Experience.vue';


const data: ExperienceData[] = [
  {
		title: "Full Stack Developer",
		desc: "Chartd",
		time: "May 2023 - Present",
		text: "As a Full Stack Developer I am responsible for working on a variety of a different projects with a variety of different languages and frameworks. This includes but is not limited to working with Python, FastAPI, openPyXl and MongoDB to add back-end Features to an application such as User Management and automatic generation of Excel reports. Creating the front-end for an application from the ground up using Asp.net core and Telerik UI, with automatic deployments to Azure using Github Actions. As well as working on a Nuxt 3 application in Typescript making use of Pinia Stores and Composables to efficiently handle data retreival and updates. This includes creating generic implementations to allow for easily explandable permissions and analytics generation.",
		img: chartdimg,
		url: "https://gochartd.com/"
	},
	{
		title: "Jr. Ocean Programmer",
		desc: "Pisces Research Project Management Inc.",
		time: "May 2022 - August 2022",
		text: "As a Jr Ocean Programmer was responsible for doing full-stack web development in Django and Vue.js to make improvements and add a variety of new features to their internal reporting software. This included making use of Chart.js to create a dashboard which would visualize many different statistics based on responses to forms from users of the application.",
		img: imgsesimg, 
		url: "https://piscesrpm.com/"
	},
	{
		title: "Web Application Developer",
		desc: "Chartd",
		time: "January 2022 - April 2022",
		text: "As a Web Applications Developer my responsibilities included working on web applications in Vue.js with Nuxt.js, Vuetify and SCSS. This included adding many new features and improvements as well as designing custom templated layouts which are used in a variety of places in the application.",
		img: chartdimg,  
		url: "https://gochartd.com/"
	},
	{
		title: "Junior Cloud Engineer",
		desc: "Innovapost",
		time: "May 2021 - August 2021",
		text: "As a Junior Cloud Engineer I wrote scripts to automate and complete tasks in Azure, these tasks included creating several scripts which comprised the backup infrastructure which is used to backup and restore all of the resources in Azure in the event of an emergency. I also was responsible for creating visualizations in PowerBi regarding the security of the resources in Azure.",
		img: innovaimg,  
		url: "https://innovapost.com/"
	},
	{
		title: "Application Developer",
		desc: "Statistics Canada",
		time: "June 2020 - December 2020",
		text: "As a Application Developer I created and improved internal tools used by many different clients within Statistics Canada, this included creating a user interface in VB.Net which interfaced with an Oracle database to allow the clients to more easily work with the data in their databases. This meant I had to be able to work with clients to create the programs to suit their needs.",
		img: statcanimg,
		url: "https://www.statcan.gc.ca/eng/start"
	},
	{
		title: "Computer Science Teaching Assistant",
		desc: "Carleton University: School of Computer Science",
		time: "September 2019 - December 2019",
		text: "As a teaching assistant I got to help students gain a better understanding of the fundemental concepts of programming. I held office hours, lead tutorials and work with a team of other teaching assistants to help students and complete marking of assignments in a timely manner.",
		img: scsimg,   
		url: "https://admissions.carleton.ca/programs/computer-science/"
	},
	{
		title: "B.S.C. Computer Science (Honours) ",
		desc: "Carleton University",
		time: "September 2018 - April 2023",
		text: "Competed a degree in Computer Science at Carleton University where I learned about a wide range of computer science related topics such as: Systems Programming, Software engineering, Web developement as well as many others.",
		img: carletonimg,
		url: "https://carleton.ca/"
	}
];

</script>

<template>
  <div class="Experiences">
    <Experience v-for="(exp, index) in data" :experience="exp" :flipped="index % 2 === 0 ? true : false" :key="'Experience'+index" />
  </div>
</template>

<style lang="scss" scoped>
.Experiences {
  overflow-x: hidden;
  padding-top: 10px;
  background-color: $bgDark;
}
</style>