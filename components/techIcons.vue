<script setup lang='ts'>
const props = defineProps({
    filename: String
})
const url = `/svg/${props.filename}.svg`;
</script>

<template>
<div class="drop-shadow-lg rounded-xl m-2 bg-gradient-to-r min-w-[23%] from-primary-content to-primary">
    <div class="flex flex-col space-y-4 items-center text-center rounded-xl m-1 pt-4 pb-2 bg-secondary min-w-[23%]">
        <img v-if="props.filename == 'tailwind'" :src="url" alt="" class="object-contain h-8 mt-1">
        <img v-else :src="url" alt="" class="object-contain h-9">
        <h1 class="text-sm text-secondary-content uppercase font-semibold">{{ props.filename }}</h1>
    </div>
</div>
    
</template>

<style scoped>
</style>