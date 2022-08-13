<script setup lang='ts'>
type Theme = 'light' | 'dark';
const curTheme = ref<Theme>('dark');

useHead({
    htmlAttrs: {
        "data-theme": curTheme
    }
})

const changeTheme = () => {
    if (curTheme.value == 'light') {
        curTheme.value = 'dark';
    } else {
        curTheme.value = 'light';
    }
}
</script>

<template>
<div class="absolute scale-75 md:scale-90 lg:scale-100 top-[2rem] md:top-14 right-[0rem] md:right-[4.6rem] text-base-content">
    <input type="checkbox" class="toggle toggle-lg z-20" @click="changeTheme" />
    <font-awesome-icon v-if="curTheme == 'light'" class="relative bottom-[0.6rem] right-[3.6rem] text-lg z-0 pointer-events-none" icon="fas fa-sun"></font-awesome-icon>
    <font-awesome-icon v-else class="relative bottom-[0.6rem] right-[1.7rem] text-lg z-0 pointer-events-none" icon="fas fa-moon"></font-awesome-icon>
</div>
    

</template>

<style scoped>
</style>