<script setup lang='ts'>

// navbar styling logic stuff
type nav = "home" | "about" | "work" | "contact";
const curNav = ref<nav>("home");

useHead({
    title: "Ankush",
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/svg/A.svg' }],
    meta: [{
        name: 'viewport',
        content: "height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    }]
})

const changeNav = (navName: nav) => {
    curNav.value = navName;
}

onBeforeMount(() => {
    history.scrollRestoration = 'manual';
})

</script>

<template>
    <div class="text-base-content scroll-smooth">
        <nav-bar :curNav="curNav"></nav-bar>
        <theme-togle></theme-togle>
        <!-- sections -->
        <landing-page @change-nav="changeNav" ref="home" id="home" />
        <about-page @change-nav="changeNav" id="about" />
        <work-page @change-nav="changeNav" ref="work" id="work" />
        <contact-page @change-nav="changeNav" ref="contact" id="contact" />

        <TheFooter />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

html {
    font-family: 'Poppins', sans-serif;
}
</style>