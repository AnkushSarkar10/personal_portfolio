<script setup lang='ts'>
const props = defineProps({
    filename: String
})
const url = `/svg/${props.filename}.svg`;
</script>

<template>
<div class="drop-shadow-lg rounded-md md:rounded-xl m-[0.3rem] md:m-2 bg-gradient-to-r min-w-[35%] md:min-w-[23%] from-secondary to-primary">
    <div class="flex flex-col space-y-4 items-center text-center rounded-md md:rounded-xl m-[0.2rem] md:m-1 pt-4 pb-2 bg-accent min-w-[80%] md:min-w-[23%]">
        <img v-if="props.filename == 'tailwind'" :src="url" alt="" class="object-contain h-6 md:h-8 mt-1">
        <img v-else :src="url" alt="" class="object-contain h-7 md:h-9">
        <h1 class="text-xs md:text-sm text-secondary-content uppercase font-semibold font-Source">{{ props.filename }}</h1>
    </div>
</div>
    
</template>

<style scoped>
</style>