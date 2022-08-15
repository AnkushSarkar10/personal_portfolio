<script setup lang='ts'>
import anime from 'animejs/lib/anime.es.js';

const page = ref(null);
const container = ref(null);
const isVisible = useElementVisibility(page);
const containerIsVisible = useElementVisibility(container);

const emit = defineEmits(['changeNav'])

onMounted(() => {
    watchEffect(() => {
        if (isVisible.value) {
            emit('changeNav', 'contact');
        }
    })
    watchEffect(() => {
        if (isVisible.value) {
            anime({
                targets: page.value,
                right: 0,
                duration: 1500,
                easing: 'easeOutBounce'
            });
            anime({
                targets: page.value,
                opacity: 1,
                duration: 800,
                easing: 'linear'
            });
        }
        if (containerIsVisible.value) {
            anime({
                targets: container.value.childNodes,
                opacity: 1,
                top: 0,
                delay: anime.stagger(100, { start: 400 })
            });
        }
    })
})

const email: string = 'ankush.sarkar2002@gmail.com';
const openEmail = () => {
    window.location.href = `mailto:${email}`;
}
</script>

<template>
    <div class="flex flex-col min-h-[70vh] md:min-h-[76vh] ml-14 md:ml-24 lg:ml-40 mr-6 md:mr-11 lg:mr-16 pl-5 pt-9">
        <h1 ref="page"
            class="opacity-0 relative right-16 text-2xl md:text-4xl lg:text-5xl font-bold font-Source tracking-wider">
            Contact Info</h1>
        <div
            class="w-[11.5rem] md:w-[16.7rem] lg:w-[22rem] left-[1.3rem] md:left-[2rem] lg:left-[2.9rem] h-[0.3rem] md:h-[0.6rem] lg:h-4 bg-secondary relative bottom-[0.7rem] md:bottom-[0.8rem] lg:bottom-4 opacity-80 -z-50" />

        <div ref="container" class="flex flex-col justify-center items-center text-center h-[50vh] md:h-[55vh]">
            <h1 class="opacity-0 relative top-10 text-lg md:text-3xl lg:text-4xl font-medium">Want to work together, or
                get in touch? </h1>
            <h1
                class="opacity-0 relative top-10 mt-5 lg:mt-9 text-base md:text-lg lg:text-xl font-extralight font-Source">
                email -
                ankush.sarkar2002@gmail.com</h1>
            <h1 class="opacity-0 relative top-10 lg:mt-2 text-base md:text-lg lg:text-xl font-extralight font-Source">
                phone - +1 905-921-5769</h1>
            <button @click="openEmail"
                class="opacity-0 mt-6 md:mt-8 lg:mt-10 border-b-2 border-primary-focus pb-1 pt-2 pr-2 pl-3 text-sm md:text-base lg:text-xl hover:bg-primary hover:border-transparent hover:text-base-100 hover:rounded-sm hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out font-bold tracking-widest">Say
                Hello 👋</button>
        </div>

    </div>
</template>

<style scoped>
</style>