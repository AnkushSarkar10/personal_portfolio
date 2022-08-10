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
    <div class="flex flex-col min-h-screen ml-40 mr-16 pl-5 pt-9">
        <h1 ref="page" class="text-5xl font-bold font-Source tracking-wider">Projects</h1>
        <div class="w-[15rem] left-[2.4rem] h-4 bg-secondary relative bottom-4 opacity-80 -z-50"/>

        <div class="flex flex-col mt-10">
            <the-project></the-project>
        </div>
    </div>
</template>

<style scoped>
</style>