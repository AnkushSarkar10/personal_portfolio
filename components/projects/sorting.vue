<script setup lang='ts'>
const fileName: string = 'sortingalgovis';
const githubLink: string = 'https://github.com/AnkushSarkar10/sort-algo-vis';
const siteLink: string = 'https://sorting-algo-visualiser.netlify.app/';
const goToSite = () => {
    window.open(siteLink, '_blank');
}
</script>

<template>
    <div class="grid-template-area">

        <img :src="`/_nuxt/public/img/${fileName}.png`" alt="" class="img object-cover object-left-bottom">
        <div class="img bg-secondary opacity-30 hover:opacity-0 hover:cursor-pointer" @click="goToSite"></div>

        <div class="description place-self-center text-end z-10">
            <h1 class="text-2xl font-semibold tracking-tight font-Source mr-5">Sorting Algorithm</h1>
            <h1 class="text-2xl font-semibold tracking-tight font-Source mb-6 mr-5">Visualizer</h1>
            <h1
                class="bg-accent text-accent-content shadow-xl font-medium text-md rounded-lg pl-5 pr-10 py-6 border-0 border-primary-focus">
                A web app for visualizing various sorting algorithms. Built using <a
                    href="https://v3.nuxtjs.org/" target="_blank"
                    class="text-primary underline hover:text-primary-focus">Nuxt js</a>, <a
                    href="https://tailwindcss.com/" target="_blank"
                    class="text-primary underline hover:text-primary-focus">tailwind css</a>, <a
                    href="https://daisyui.com//" target="_blank"
                    class="text-primary underline hover:text-primary-focus">daisyui</a>. The app is hosted on <a
                    href="https://www.netlify.com/" target="_blank"
                    class="text-primary underline hover:text-primary-focus">Netlify</a>.</h1>
            <div class="flex justify-end space-x-6 text-2xl mt-4 mr-4">
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
.grid-template-area {
    display: grid;
    grid-template-areas: "image image image image image image image text";
    grid-template-rows: min-content;
    grid-template-columns: repeat(8, minmax(0, 1fr));
}

.img {
    grid-area: image;
    grid-column: 1 / 6;
}

.description {
    grid-column: 5 / -1;
}

.img,
.description {
    grid-row: 1 / 2;
}
</style>