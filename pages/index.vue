<script setup lang="ts"></script>

<template>
    <div class="App-main">
        <div class="About">
            <div class="profile">
                <img src="~/assets/img/profile.jpg" alt="Picture of Me" />
            </div>
            <div class="intro">
                <div class="introText">
                    <h1>Iain Mcilveen</h1>
                    <hr />
                    <p>
                        Hello there! I am a software developer based out of
                        Halifax, Canada. I have 3+ years experience working in
                        various development roles and have a Computer Science
                        degree from
                        <a href="https://carleton.ca/">Carleton University.</a>
                    </p>
                    <p>
                        I am passionate about all things computer science and
                        enjoy learning new things.
                    </p>
                </div>
                <div class="resume">
                    <a
                        href="https://drive.google.com/file/d/1GV-1k8kDxFJT-x43vYvVBi9MX2CrEBSl/view?usp=sharing"
                        >Resume</a
                    >
                    <a href="https://github.com/IainMcilveen">GitHub</a>
                    <a
                        href="https://www.linkedin.com/in/iain-mcilveen-64b14a185/"
                        >Linkedin</a
                    >
                    <a href="mailto:IainMcilveen@outlook.com">Email</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.App-main {
    background-color: $bgDark;
    color: $bgLight;
    height: 100%;
    width: 100%;

    .About {
        display: flex;
        width: 80%;
        height: 100%;
        margin: auto;

        .profile {
            margin: auto;
            padding: 0.5em;
            padding-right: 2em;

            width: 35vw;
            height: 30vw;

            img {
                border-radius: 5px;
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        .intro {
            color: $bgLight;
            margin: auto;
            max-width: 50vw;
            padding: 1em;

            hr {
                color: #949494;
                border: 0;
                border-bottom: 2px dashed;
                margin: 2px;
            }

            h1 {
                margin: 0;
                margin-bottom: 0.25em;
                text-align: center;
            }

            p {
                margin: 0;
                margin-top: 0.25em;
                margin-bottom: 0.75em;
                text-align: left;
                font-size: 1.1em;
            }

            .introText {
                a {
                    color: lightblue;
                    text-decoration: none;
                }
            }

            .resume {
                text-align: center;
                padding-top: 10px;
                a {
                    transition: 300ms ease all;
                    padding: 5px;
                    margin-right: 5px;
                    border-radius: 5px;
                    color: $bgLight;
                    text-decoration: none;
                }
                a:hover {
                    color: white;
                    background-color: #181b20;
                }
            }
        }
        //font-size: calc(10px + 1vmin);
    }
}

@media screen and (max-width: 850px) {
    .App-main {
        height: 100vh;

        .About {
            flex-direction: column;
            align-items: center;

            width: 100vw;
            padding: 0;

            .profile {
                margin: auto;
                margin-bottom: 0.5em;
                padding: 0;
                width: 75vw;
                height: 75vw;

                display: flex;
                justify-content: center;

                img {
                    object-fit: cover;
                    max-width: 475px;
                    width: 90%;
                    height: 100%;
                }
            }

            .intro {
                margin: auto;
                margin-top: 0.5em;
                max-width: 90%;
                width: 90%;
            }
        }
    }
}
</style>
