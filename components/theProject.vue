<script setup lang='ts'>
const fileName: string = 'audio_vis';
const projectName: string = 'Audio Visualizer';
</script>

<template>
    <div class="flex">
        <img :src="`/_nuxt/public/img/${fileName}.png`" alt="" class="object-cover object-right-top mb-7 h-[20rem] w-[33rem]">
        <div class="flex flex-col items-end w-1/2">
            <h1>{{ projectName }}</h1>
            <h1></h1>
        </div>
    </div>
</template>

<style scoped>
</style>