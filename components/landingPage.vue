<script setup lang='ts'>
// import mySvg from "~/public/svg/web_developer.svg";
</script>

<template>
    <div class="flex flex-col justify-center h-screen mx-44">
        <h1 class="text-4xl md:text-5xl -translate-y-20">Hello, I'm <span
                class="text-primary font-semibold">Ankush</span>,</h1>
        <h1 class="text-4xl md:text-5xl font-light -translate-y-16">software developer
            <font-awesome-icon icon="fa-brands fa-github" />
        </h1>
        <button class="btn btn-outline btn-lg self-center relative top-14">View My Work</button>
        <font-awesome-icon icon="fa-solid fa-arrow-down-long" class="absolute bottom-10 left-54 tf"/>
        <font-awesome-icon icon="fa-solid fa-arrow-down-long" class="absolute bottom-10 right-52 tf"/>
    </div>
</template>

<style scoped>
.tf {
    transform: scaleY(2.4) scaleX(1.9);
}
</style>