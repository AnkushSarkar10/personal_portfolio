<script setup lang='ts'>
import anime from 'animejs/lib/anime.es.js';

const fileName: string = 'sortingalgovis';
const githubLink: string = 'https://github.com/AnkushSarkar10/sort-algo-vis';
const siteLink: string = 'https://sorting-algo-visualiser.netlify.app/';
const goToSite = () => {
    window.open(siteLink, '_blank');
}
const image = ref(null);
const project = ref(null);
const isVisible = useElementVisibility(project);
const imgH = ref(0);

onMounted(() => {
    setTimeout(() => {
        imgH.value = image.value.clientHeight;
        window.addEventListener("resize", () => {
            imgH.value = image.value.clientHeight;
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

        <img ref="image" :src="`/img/${fileName}.png`" alt="" class="img object-cover object-left-bottom">
        <div :style="{
            'max-height': `${imgH}px`
        }" class="img bg-secondary opacity-30 hover:opacity-0 hover:cursor-pointer transition-opacity duration-700"
            @click="goToSite"></div>

        <div class="description place-self-center text-end z-10">
            <h1 id="title" class="text-base md:text-2xl font-semibold tracking-tight font-Source mr-5">Sorting Algorithm
            </h1>
            <h1 id="title" class="text-base md:text-2xl font-semibold tracking-tight font-Source mb-6 mr-5">Visualizer
            </h1>
            <h1
                class="bg-accent text-accent-content shadow-xl font-medium text-xs md:text-base rounded-lg pl-5 pr-10 py-6 border-0 border-primary-focus">
                A web app for visualizing various sorting algorithms. Built using <a href="https://v3.nuxtjs.org/"
                    target="_blank" class="text-primary underline hover:text-primary-focus">Nuxt js</a>, <a
                    href="https://tailwindcss.com/" target="_blank"
                    class="text-primary underline hover:text-primary-focus">tailwind css</a>, <a
                    href="https://daisyui.com//" target="_blank"
                    class="text-primary underline hover:text-primary-focus">daisyui</a>. The app is hosted on <a
                    href="https://www.netlify.com/" target="_blank"
                    class="text-primary underline hover:text-primary-focus">Netlify</a>.</h1>
            <div class="flex justify-end space-x-6 text-lg md:text-2xl mt-4 mr-4">
                <a :href="githubLink" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-github" />
                </a>
                <a :href="siteLink" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
                </a>
            </div>

        </div>
    </div>
</template>

<style scoped>
#title {
    text-shadow: 1px 0px black;
}

.grid-template-area {
    display: grid;
    grid-template-areas: "image image image image image image image text";
    grid-template-columns: repeat(8, minmax(0, 1fr));
}

.img {
    grid-area: image;
    grid-column: 1 / 7;
}

.description {
    grid-column: 3 / -1;
}

@media (min-width: 768px) {
    .img {
        grid-area: image;
        grid-column: 1 / 6;
    }

    .description {
        grid-column: 5 / -1;
    }
}

.img,
.description {
    grid-row: 1 / 2;
}
</style>