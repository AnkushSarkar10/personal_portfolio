<script setup lang='ts'>
const page = ref(null);
const isVisible = useElementVisibility(page);

const emit = defineEmits(['changeNav'])

onMounted(() => {
    if (isVisible.value) emit('changeNav', 'home');
    watch(isVisible, (newX) => {
        if (isVisible.value) {
            emit('changeNav', 'home');
        }
    })
})

const gotoContact = () => {
    const element = document.getElementById('contact');
    element.scrollIntoView({behavior : "smooth"});
}
</script>

<template>
    <div>
        <div class="flex flex-col justify-center min-h-screen ml-40 mr-16 pl-5">
            <h1 ref="page" class="absolute top-14 text-base-100 text-xs select-none">.</h1>
            <h1 class="text-5xl md:text-6xl -translate-y-20">Hello, I'm <span
                    class="text-primary font-bold">Ankush</span>,</h1>
            <h1 class="text-4xl md:text-5xl font-light -translate-y-16">an aspiring web developer <span
                    class="text-xs italic"></span>

            </h1>
            <button @click="gotoContact" class="btn btn-outline btn-lg hover:btn-secondary self-start relative top-14">Contact Me<font-awesome-icon icon="fa-solid fa-arrow-down-long" class="ml-4"/></button>
        </div>
        <div class="absolute top-[14rem] right-28 flex flex-col text-lg md:text-3xl space-y-12">
            <a href="https://github.com/AnkushSarkar10" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/ankush-sarkar-a55a5b213/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </a>
            <a href="https://twitter.com/Ankush_Sarkar_" target="_blank">
                <font-awesome-icon icon="fa-brands fa-twitter" />
            </a>
            <a href="https://www.instagram.com/_blaze_kush_/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
        </div>
    </div>

</template>

<style scoped>
.arrow {
    transform: scaleY(1.2) scaleX(0.9);
}
</style>