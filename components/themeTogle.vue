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
    <input type="checkbox" class="toggle absolute top-5 right-5" @click="changeTheme"/>
</template>

<style scoped>

</style>