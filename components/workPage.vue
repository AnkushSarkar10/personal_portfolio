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
    <div class="flex flex-col h-screen ml-40 mr-16 pl-5 pt-9">
        <h1 ref="page" class="text-5xl font-bold">My Projects</h1>
        <div class="w-[17rem] left-[3.2rem] h-4 bg-primary-focus relative bottom-4 opacity-80 -z-50"/>
    </div>
</template>

<style scoped>
</style>