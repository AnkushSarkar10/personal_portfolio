<script setup lang='ts'>
import anime from 'animejs/lib/anime.es.js';

const page = ref(null);
const titles = ref(null);
const contactButton = ref(null);
const icons = ref(null);

const isVisible = useElementVisibility(page);

const emit = defineEmits(['changeNav'])

onMounted(() => {
    watchEffect(() => {
        if (isVisible.value) {
            emit('changeNav', 'home');
        }
    })
    // animations
    anime({
        targets: titles.value.childNodes,
        opacity: 1,
        top: 0,
        delay: anime.stagger(170, {start : 0})
    });
    anime({
        targets: contactButton.value,
        opacity: 1,
        duration: 700,
    });
    anime({
        targets: icons.value.childNodes,
        opacity: 1,
        delay: anime.stagger(50, { direction: 'reverse' }),
        easing: 'linear'
    });


})

const gotoContact = () => {
    const element = document.getElementById('contact');
    element.scrollIntoView({ behavior: "smooth" });
}

</script>

<template>
    <div>
        <div class="flex flex-col space-y-4 pt-[27vh] md:pt-[26vh] min-h-screen ml-14 md:ml-24 lg:ml-40 lg:mr-16 pl-5">
            <h1 ref="page" class="absolute top-14 text-base-100 text-xs select-none">.</h1>
            <div ref="titles" class="">
                <h1 class="opacity-0 relative top-10 text-base md:text-lg lg:text-xl font-light font-Source">Hi, my name
                    is
                </h1>
                <h1
                    class="opacity-0 relative top-10 mt-1 md:mt-2 text-secondary font-bold text-3xl md:text-5xl lg:text-6xl">
                    Ankush
                    Sarkar.</h1>
                <h1
                    class="opacity-0 relative top-10 mt-1 md:mt-2 text-xl md:text-2xl lg:text-3xl font-normal font-Source">
                    I am an
                    aspiring
                    web developer.

                </h1>
            </div>

            <button ref="contactButton" @click="gotoContact"
                class="opacity-0 font-Source tracking-widest btn btn-outline btn-primary btn-md lg:btn-lg hover:btn-accent self-start relative top-24">Contact
                Me
                <font-awesome-icon icon="fa-solid fa-arrow-down-long" class="ml-4" />
            </button>
        </div>
        <!-- right side icons -->
        <div ref="icons"
            class="invisible md:visible absolute top-[15rem] right-28 flex flex-col text-lg md:text-xl lg:text-3xl space-y-12">
            <a class="opacity-0" href="https://github.com/AnkushSarkar10" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" />
            </a>
            <a class="opacity-0" href="https://www.linkedin.com/in/ankush-sarkar-a55a5b213/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </a>
            <a class="opacity-0" href="https://twitter.com/Ankush_Sarkar_" target="_blank">
                <font-awesome-icon icon="fa-brands fa-twitter" />
            </a>
            <a class="opacity-0" href="https://www.instagram.com/_blaze_kush_/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
        </div>
    </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');


.arrow {
    transform: scaleY(1.2) scaleX(0.9);
}
</style>