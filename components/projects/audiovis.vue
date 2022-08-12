<script setup lang='ts'>
const fileName: string = 'audio_vis';
const projectName: string = 'Audio Visualizer';
const githubLink: string = 'https://github.com/AnkushSarkar10/audio_vis_threejs';
const siteLink: string = 'https://audio-visualizer-threejs.netlify.app/';
const goToSite = () => {
    window.open(siteLink, '_blank');
}
</script>

<template>
    <div class="grid-template-area">

        <img :src="`/_nuxt/public/img/${fileName}.png`" alt="" class="img object-cover object-left-bottom">
        <div class="img bg-secondary opacity-30 hover:opacity-0 hover:cursor-pointer" @click="goToSite"></div>


        <div class="description place-self-center text-end z-10">
            <h1 class="text-2xl font-semibold tracking-tight font-Source mb-10 mr-5">{{ projectName }}</h1>
            <h1
                class="bg-accent text-accent-content shadow-xl font-medium text-md rounded-lg pl-5 pr-10 py-6 border-0 border-primary-focus">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet libero quam sequi, velit soluta,
                molestias obcaecati ipsa odio dignissimos dolores, voluptatibus fuga ex sit. Tempora iure voluptatum
                tempore molestias.</h1>
            <div class="flex justify-end space-x-6 text-2xl mt-5 mr-4">
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