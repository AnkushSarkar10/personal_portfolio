<script setup lang='ts'>
import anime from 'animejs/lib/anime.es.js';

const fileName: string = 'famtree';
const projectName: string = 'Family Tree Visualiser';
const githubLink: string = 'https://github.com/AnkushSarkar10/family-tree-app';
const siteLink: string = 'https://familivistas.vercel.app';
const goToSite = () => {
    window.open(siteLink, '_blank');
}
const image = ref(null);
const project = ref(null);
const isVisible = useElementVisibility(project);
const imgH = ref(0);


onMounted(() => {
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
                A fullstack family tree Visualiser built using <a href="https://nuxt.com/" target="_blank"
                    class="text-primary underline hover:text-primary-focus">Nuxt JS</a>, <a href="https://supabase.com/"
                    target="_blank" class="text-primary underline hover:text-primary-focus">Supabase</a>, <a
                    href="https://github.com/bumbeishvili/org-chart" target="_blank"
                    class="text-primary underline hover:text-primary-focus">d3-org-chart</a>, and <a
                    href="https://tailwindcss.com/" target="_blank"
                    class="text-primary underline hover:text-primary-focus">tailwind css</a>.
            </h1>
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