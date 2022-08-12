<script setup lang='ts'>
const props = defineProps({
    curNav: String,
})

// const className = "underline underline-offset-4 decoration-primary";
const scrollToElm = (id: string) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
    <div class="fixed top-0 left-0 h-screen w-24 flex flex-col shadow-2xl text-2xl pt-36 bg-base-200">
        <h1 @click="scrollToElm('home')"
            :class="{ 'underline underline-offset-[5px] decoration-primary-focus': (props.curNav == 'home') }"
            class="-rotate-90 mb-24 hover:text-secondary-focus hover:cursor-pointer">Home</h1>
        <h1 @click="scrollToElm('about')" :class="{ 'underline underline-offset-[5px] decoration-primary-focus': (props.curNav == 'about') }" class="-rotate-90 mb-20 hover:text-secondary-focus hover:cursor-pointer">About</h1>
        <h1 @click="scrollToElm('work')" :class="{ 'underline underline-offset-[5px] decoration-primary-focus': (props.curNav == 'work') }" class="-rotate-90 mb-28 hover:text-secondary-focus hover:cursor-pointer">Work</h1>
        <h1 @click="scrollToElm('contact')" :class="{ 'underline underline-offset-[5px] decoration-primary-focus': (props.curNav == 'contact') }" class="-rotate-90 hover:text-secondary-focus hover:cursor-pointer">Contact</h1>
    </div>
</template>

<style scoped>
div {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>