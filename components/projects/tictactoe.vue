<script setup lang='ts'>
import anime from 'animejs/lib/anime.es.js';

const fileName: string = 'tictactoe';
const projectName: string = 'Multiplayer Tic Tac Toe';
const githubLink: string = 'https://github.com/AnkushSarkar10/vue-flask-tic-tac-toe';
const siteLink: string = 'https://vue-flask-tic-tac-toe.web.app/';
const goToSite = () => {
    window.open(siteLink, '_blank');
}
const image = ref(null);
const project = ref(null);
const isVisible = useElementVisibility(project);
const imgH = ref(0);


onMounted(() => {
    setTimeout(() => {
        console.log(imgH.value);
        imgH.value = image.value.clientHeight;
        console.log(imgH.value);


        window.addEventListener("resize", () => {
            imgH.value = image.value.clientHeight;
            console.log(imgH.value);
        })

        watchEffect(() => {
            if (isVisible.value) {
                anime({
                    targets: project.value,
                    opacity: 1,
                    top: 0,
                    duration: 800,
                    delay: 400,
                    easing: 'easeOutCubic'
                })
            }
        })
    }, 200);
})
</script>

<template>
    <div ref="project" class="opacity-0 relative top-14 grid-template-area">

        <div class="description place-self-center text-start z-10">
            <h1 id="title" class="text-base md:text-2xl font-semibold tracking-tight font-Source mb-10 ml-5">{{
                    projectName
            }}</h1>
            <h1
                class="bg-accent text-accent-content shadow-xl font-medium text-xs md:text-base rounded-lg pl-7 pr-9 py-6 border-0 border-primary-focus">
                An online multiplayer Tic Tac Toe, built using <a href="https://vuejs.org/" target="_blank"
                    class="text-primary underline hover:text-primary-focus">vue js</a> and <a
                    href="https://flask-socketio.readthedocs.io/en/latest/" target="_blank"
                    class="text-primary underline hover:text-primary-focus">flask-socketio</a>. The frontend vue app is
                hosted
                on <a href="https://firebase.google.com/" target="_blank"
                    class="text-primary underline hover:text-primary-focus">firebase</a>, and the flask backend is
                hosted on <a href="https://www.heroku.com/free" target="_blank"
                    class="text-primary underline hover:text-primary-focus">heroku</a>.</h1>
            <div class="flex justify-start space-x-6 text-lg md:text-2xl mt-5 ml-4">
                <a :href="githubLink" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-github" />
                </a>
                <a :href="siteLink" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
                </a>
            </div>

        </div>
        <!-- h-[${image.clientHeight}px] -->
        <img ref="image" :src="`/img/${fileName}.png`" alt="" class="img object-cover object-left-bottom">
        <div :style="{
            'max-height': `${imgH}px`
        }" class="img bg-secondary opacity-30 hover:opacity-0 hover:cursor-pointer transition-opacity duration-700"
            @click="goToSite"></div>

    </div>
</template>

<style scoped>
#title {
    text-shadow: 1px 0px black;
}

.grid-template-area {
    display: grid;
    grid-template-areas: "text image image image image image image image";
    grid-template-columns: repeat(8, minmax(0, 1fr));
}

.img {
    grid-area: image;
    grid-column: 3 / -1;
}

.description {
    grid-column: 1 / 7;
}


@media (min-width: 768px) {
    .img {
        grid-area: image;
        grid-column: 4 / -1;
    }

    .description {
        grid-column: 1 / 5;
    }
}

.img,
.description {
    grid-row: 1 / 2;
}
</style>