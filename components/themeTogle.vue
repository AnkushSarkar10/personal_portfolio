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
<div class="absolute top-14 right-[5rem]">
    <input type="checkbox" class="toggle toggle-lg z-20" @click="changeTheme" />
    <font-awesome-icon v-if="curTheme == 'light'" class="relative bottom-[0.6rem] right-[3.6rem] text-lg z-0" icon="fas fa-sun"></font-awesome-icon>
    <font-awesome-icon v-else class="relative bottom-[0.6rem] right-[1.7rem] text-lg z-0" icon="fas fa-moon"></font-awesome-icon>
</div>
    

</template>

<style scoped>
</style>