<script setup lang='ts'>
const page = ref(null);
const isVisible = useElementVisibility(page);

const emit = defineEmits(['changeNav'])

onMounted(() => {
    if (isVisible.value) emit('changeNav', 'work');
    watch(isVisible, (newX) => {
        if (isVisible.value) {
            emit('changeNav', 'work');
        }
    })
})

</script>

<template>
    <div class="flex flex-col min-h-screen ml-14 md:ml-40 md:mr-16 mb-[1vh] md:mb-[5vh] pl-5 pt-9">
        <h1 ref="page" class="text-2xl md:text-5xl font-bold font-Source tracking-wider">Projects</h1>
        <div class="w-[7.2rem] md:w-32 left-[1.3rem] md:left-[2.8rem] h-[0.3rem] md:h-4 bg-secondary relative bottom-[0.6rem] md:bottom-4 opacity-80 -z-50"/>

        <h1 class="text-lg md:text-3xl font-Source font-semibold md:ml-32 mt-5 md:mt-10 md:mb-3">Some Things I’ve Built</h1>
        <div class="flex flex-col mt-7 md:mt-10 space-y-32 md:mx-32 mb-[5vh] md:mb-[8vh]">
            <projects-audiovis/>
            <projects-tictactoe/>
            <projects-sorting/>
        </div>
       <a href="https://github.com/AnkushSarkar10" target="_blank"> <h1 class="text-center text-primary text-xs md:text-sm tracking-wider underline hover:text-primary-focus">view other projects</h1></a>
    </div>
</template>

<style scoped>
</style>