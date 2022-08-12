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
    <div class="flex flex-col min-h-screen ml-40 mr-16 mb-[5vh] pl-5 pt-9">
        <h1 ref="page" class="text-5xl font-bold font-Source tracking-wider">Projects</h1>
        <div class="w-[15rem] left-[2.4rem] h-4 bg-secondary relative bottom-4 opacity-80 -z-50"/>
        <h1 class="text-3xl font-Source font-semibold ml-32 mt-10 mb-3">Some Things I’ve Built</h1>
        <div class="flex flex-col mt-10 space-y-32 mx-32 mb-[8vh]">
            <projects-audiovis/>
            <projects-tictactoe/>
            <projects-sorting/>
        </div>
       <a href="https://github.com/AnkushSarkar10" target="_blank"> <h1 class="text-center text-primary text-sm tracking-wider underline hover:text-primary-focus">view other projects</h1></a>
    </div>
</template>

<style scoped>
</style>