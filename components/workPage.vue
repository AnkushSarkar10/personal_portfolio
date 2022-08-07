<script setup lang='ts'>
const page = ref(null);
const isVisible = useElementVisibility(page);

const emit = defineEmits(['changeNav'])

onMounted(() => {
    watch(isVisible, (newX) => {
        if (isVisible.value) {
            emit('changeNav', 'work');
        }
    })
})

</script>

<template>
    <div class="flex flex-col h-screen ml-40 mr-16 pl-5 pt-9">
        <h1 ref="page" class="text-5xl">My Projects</h1>
    </div>
</template>

<style scoped>
</style>