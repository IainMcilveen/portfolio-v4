<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const title = ref("Home");
useHead({ title });
</script>

<template>
  <div class="page-home">
    <ParticleBackground />
    <div class="card">
      <div class="profile">
        <img src="~/assets/img/profile.jpg" alt="Picture of Me" />
      </div>
      <div class="intro">
        <div class="intro-text">
          <h1>Iain Mcilveen</h1>
          <hr />
          <p>
            Hello there! I am a software developer based out of Halifax, Canada.
            Currently I work as a Software Engineer for
            <a href="https://www.softwaresecured.com/" target="_blank" rel="noopener noreferrer">Software Secured</a> and
            have a Computer Science degree from
            <a href="https://carleton.ca/" target="_blank" rel="noopener noreferrer">Carleton University.</a>
          </p>
          <p>
            I am passionate about all things computer science and enjoy learning
            new things. Outside of work I love cycling and volunteer at
            <a href="https://ecologyaction.ca/our-work/transportation/bike-again" target="_blank" rel="noopener noreferrer"
              >Bike Again</a
            >
            helping people fix their bikes!
          </p>
        </div>
        <div class="links">
          <a href="https://drive.google.com/file/d/1uZkv-KcseAJbz9IjpNXnb5G_69VQ9NFA/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon :icon="faFileLines" />Resume
          </a>
          <a href="https://github.com/IainMcilveen" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon :icon="faGithub" />GitHub
          </a>
          <a href="https://www.linkedin.com/in/iain-mcilveen-64b14a185/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon :icon="faLinkedinIn" />LinkedIn
          </a>
          <a href="mailto:IainMcilveen@outlook.com">
            <FontAwesomeIcon :icon="faEnvelope" />Email
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-home {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1d23;
  overflow: hidden;
}

.card {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 3.5rem 4rem;
  background: rgba(40, 44, 52, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(99, 179, 237, 0.18);
  border-radius: 18px;
  max-width: 1200px;
  width: 94%;
  box-shadow: 0 8px 48px rgba(0, 0, 0, 0.45);
}

.profile {
  flex-shrink: 0;

  img {
    width: 340px;
    height: 340px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(99, 179, 237, 0.45);
    box-shadow: 0 0 32px rgba(99, 179, 237, 0.18);
  }
}

.intro {
  color: $bgLight;

  h1 {
    margin: 0 0 0.25rem;
    font-size: 2.4rem;
    color: #fff;
    letter-spacing: 0.01em;
  }

  hr {
    border: none;
    border-top: 1px solid rgba(99, 179, 237, 0.3);
    margin-bottom: 0.85rem;
  }

  p {
    margin: 0 0 0.75rem;
    font-size: 1.15em;
    line-height: 1.65;
  }

  .intro-text a {
    color: #7ec8e3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.25rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.38rem 1.15rem;
    border: 1px solid rgba(99, 179, 237, 0.35);
    border-radius: 999px;
    color: $bgLight;
    text-decoration: none;
    font-size: 0.9rem;
    transition: background 200ms ease, border-color 200ms ease, color 200ms ease;
    background: rgba(99, 179, 237, 0.07);

    &:hover {
      background: rgba(99, 179, 237, 0.22);
      border-color: rgba(99, 179, 237, 0.65);
      color: #fff;
    }
  }
}

@media (max-width: 700px) {
  .card {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }

  .profile img {
    width: 140px;
    height: 140px;
  }

  .intro h1 {
    text-align: center;
  }

  .links {
    justify-content: center;
  }
}
</style>
