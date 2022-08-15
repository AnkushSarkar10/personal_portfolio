<script setup lang='ts'>
type Theme = 'light' | 'dark';
const curTheme = ref<Theme>();
const isChecked = ref<Boolean>();

onBeforeMount(() => {
    if (localStorage.getItem('theme') != null) {
        curTheme.value = localStorage.getItem('theme') as Theme;
    } else {
        curTheme.value = 'dark' as Theme;
        localStorage.setItem('theme', 'dark');
    }
    if (localStorage.getItem('theme') == 'light') {
        isChecked.value = true;
    } else {
        isChecked.value = false;
    }

    useHead({
        htmlAttrs: {
            "data-theme": curTheme
        }
    })
})



const changeTheme = () => {
    if (curTheme.value == 'light') {
        curTheme.value = 'dark';
        localStorage.setItem('theme', 'dark');
        isChecked.value = false;
    } else {
        curTheme.value = 'light';
        localStorage.setItem('theme', 'light');
        isChecked.value = true;
    }
}


</script>

<template>
    <div
        class="absolute scale-75 md:scale-90 lg:scale-100 top-[2rem] md:top-14 right-[0rem] md:right-[4.6rem] text-base-content">
        <input type="checkbox" v-model="(isChecked as boolean)" class="toggle toggle-lg z-20" @click="changeTheme" />

        <font-awesome-icon v-if="(!isChecked as boolean)"
            class="relative bottom-[0.6rem] right-[1.7rem] text-lg pointer-events-none" icon="fas fa-moon">
        </font-awesome-icon>

        <font-awesome-icon v-else class="relative bottom-[0.6rem] right-[3.6rem] text-lg pointer-events-none"
            icon="fas fa-sun">
        </font-awesome-icon>
    </div>


</template>

<style scoped>
</style>