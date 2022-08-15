<script setup lang='ts'>
import anime from 'animejs/lib/anime.es.js';

const page = ref(null);
const img = ref(null);
const container = ref(null);
const iconCont = ref(null);

const isVisible = useElementVisibility(page);
const imgIsVisible = useElementVisibility(img);
const iconIsVisible = useElementVisibility(iconCont);

const emit = defineEmits(['changeNav'])

onMounted(() => {
    watchEffect(() => {
        if (isVisible.value) {
            emit('changeNav', 'about');
        }
    })

    // animations
    watchEffect(() => {
        if (imgIsVisible.value) {
            anime({
                targets: container.value.childNodes,
                opacity: 1,
                top: 0,
                delay: anime.stagger(100, { start: 300 }),
                easing: 'easeOutCubic'
            });
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
    })

    watchEffect(() => {
        if (iconIsVisible.value) {
            anime({
                targets: iconCont.value.childNodes,
                opacity: 1,
                left: 0,
                delay: anime.stagger(70, { start: 500, from: 'last' })
            });
        }
    })

})

</script>

<template>
    <div class="flex flex-col min-h-screen ml-14 md:ml-24 lg:ml-40 lg:mr-16 mb-14 pl-5 pt-9">

        <h1 ref="page"
            class="opacity-0 relative right-16 text-2xl md:text-4xl lg:text-5xl font-bold font-Source tracking-wider">
            About</h1>

        <div
            class="w-16 md:w-[6.2rem] lg:w-32 left-[1.4rem] md:left-[2rem] lg:left-[2.8rem] h-[0.3rem] md:h-[0.6rem] lg:h-4 bg-secondary relative bottom-[0.6rem] md:bottom-[0.8rem] lg:bottom-4 opacity-80 -z-50" />

        <div class="flex flex-col items-center md:flex-row mt-6 md:mt-16">
            <div ref="container" class="md:w-1/2 pr-10 md:pr-14 text-center items-center flex flex-col">

                <img ref="img" src="~/public/img/qutubminar.png" alt="img"
                    class="opacity-0 relative top-14 object-cover object-top mb-7 h-[15rem] w-[15rem] md:h-[17rem] md:w-[17rem] rounded-full border-[2px] md:border-[4px] border-primary-focus shadow-sm">
                <div
                    class="opacity-0 relative top-14 text-xl md:text-xl lg:text-2xl font-Source md:tracking-wide font-bold mb-7 ">
                    Who is
                    this
                    guy?</div>
                <div class="opacity-0 relative top-14 text-sm md:text-base lg:text-xl font-light">
                    Hi, I am Ankush Sarkar. I am currently second-year undergraduate student studying Computer Science
                    at Mcmaster University. I can build full-stack
                    web
                    applications. To the right are some technologies I have used. I like vue js and all things
                    web
                    development. Building things and bringing ideas to life is what drives me.
                    <div> Trying to learn new things
                        everyday!</div>
                </div>

            </div>
            <div ref="iconCont"
                class="md:w-1/2 md:pl-5 pr-10 mt-10 md:mt-0 flex flex-row flex-wrap items-center justify-center">
                <tech-icons class="opacity-0 relative left-16" :filename="'typescript'"></tech-icons>
                <tech-icons class="opacity-0 relative left-16" :filename="'vue'"></tech-icons>
                <tech-icons class="opacity-0 relative left-16" :filename="'nuxt'"></tech-icons>

                <tech-icons class="opacity-0 relative left-16" :filename="'tailwind'"></tech-icons>
                <tech-icons class="opacity-0 relative left-16" :filename="'css'"></tech-icons>
                <tech-icons class="opacity-0 relative left-16" :filename="'html'"></tech-icons>

                <tech-icons class="opacity-0 relative left-16" :filename="'python'"></tech-icons>
                <tech-icons class="opacity-0 relative left-16" :filename="'flask'"></tech-icons>
                <tech-icons class="opacity-0 relative left-16" :filename="'threejs'"></tech-icons>

                <tech-icons class="opacity-0 relative left-16" :filename="'git'"></tech-icons>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>