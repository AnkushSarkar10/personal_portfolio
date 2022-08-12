<script setup lang='ts'>
const fileName: string = 'tictactoe';
const projectName: string = 'Multiplayer Tic Tac Toe';
const githubLink: string = 'https://github.com/AnkushSarkar10/vue-flask-tic-tac-toe';
const siteLink: string = 'https://vue-flask-tic-tac-toe.web.app/';
const goToSite = () => {
    window.open(siteLink, '_blank');
}
</script>

<template>
    <div class="grid-template-area">

        <div class="description place-self-center text-start z-10">
            <h1 class="text-2xl font-semibold tracking-tight font-Source mb-10 ml-5">{{ projectName }}</h1>
            <h1
                class="bg-accent text-accent-content shadow-xl font-medium text-md rounded-lg pl-5 pr-10 py-6 border-0 border-primary-focus">
                An online multiplayer Tic Tac Toe, built using <a href="https://vuejs.org/" target="_blank" class="text-primary underline hover:text-primary-focus">vue js</a> and <a href="https://flask-socketio.readthedocs.io/en/latest/" target="_blank" class="text-primary underline hover:text-primary-focus">flask-socketio</a>. The frontend vue app is hosted
                on <a href="https://firebase.google.com/" target="_blank" class="text-primary underline hover:text-primary-focus">firebase</a>, and the flask backend is hosted on <a href="https://www.heroku.com/free" target="_blank" class="text-primary underline hover:text-primary-focus">heroku</a>.</h1>
            <div class="flex justify-start space-x-6 text-2xl mt-5 ml-4">
                <a :href="githubLink" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-github" />
                </a>
                <a :href="siteLink" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
                </a>
            </div>

        </div>

        <img :src="`/_nuxt/public/img/${fileName}.png`" alt="" class="img object-cover object-left-bottom">
        <div class="img bg-secondary opacity-30 hover:opacity-0 hover:cursor-pointer" @click="goToSite"></div>

    </div>
</template>

<style scoped>
.grid-template-area {
    display: grid;
    grid-template-areas: "text image image image image image image image";
    grid-template-columns: repeat(8, minmax(0, 1fr));
}

.img {
    grid-area: image;
    grid-column: 4 / -1;
}

.description {
    grid-column: 1 / 5;
}

/* .img {
    grid-area: image;
    grid-column: 1 / 6;
}

.description {
    grid-column: 5 / -1;
} */

.img,
.description {
    grid-row: 1 / 2;
}
</style>