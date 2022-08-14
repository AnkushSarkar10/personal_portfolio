<script setup lang='ts'>
import anime from 'animejs/lib/anime.es.js';

const page = ref(null);
const isVisible = useElementVisibility(page);

const emit = defineEmits(['changeNav'])

onMounted(() => {
    watchEffect(() => {
        if (isVisible.value) {
            emit('changeNav', 'work');
        }
    })

    // animations
    watch(isVisible, () => {
        if (isVisible.value) {
            anime({
                targets: page.value,
                right: 0,
                duration: 1500,
                delay: 100,
                easing: 'easeOutBounce'
            });
            anime({
                targets: page.value,
                opacity: 1,
                duration: 800,
                delay: 100,
                easing: 'linear'
            });
        }
    })

})

</script>

<template>
    <div class="flex flex-col min-h-screen ml-14 md:ml-24 lg:ml-40 lg:mr-16 mb-[1vh] md:mb-[5vh] pl-5 pt-9">
        <h1 ref="page"
            class="opacity-0 relative right-16 text-2xl md:text-4xl lg:text-5xl font-bold font-Source tracking-wider">
            Projects</h1>
        <div
            class="w-[7.2rem] md:w-[11rem] lg:w-[14rem] left-[1.3rem] md:left-[1.8rem] lg:left-[2.7rem] h-[0.3rem] md:h-[0.6rem] lg:h-4 bg-secondary relative bottom-[0.6rem] md:bottom-[0.8rem] lg:bottom-4 opacity-80 -z-50" />

        <div class="flex flex-col mt-10 md:mt-20 space-y-14 md:space-y-32 md:mx-12 lg:mx-32 mb-[5vh] md:mb-[8vh]">
            <projects-audiovis />
            <projects-tictactoe />
            <projects-sorting />
        </div>
        <a href="https://github.com/AnkushSarkar10" target="_blank">
            <h1 class="text-center text-primary text-xs md:text-sm tracking-wider underline hover:text-primary-focus">
                view other projects</h1>
        </a>
    </div>
</template>

<style scoped>
</style>