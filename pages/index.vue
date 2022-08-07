<script setup lang='ts'>
// navbar styling logic stuff
type nav = "home" | "about" | "work" | "contact";
const curNav = ref<nav>("home");

const changeNav = (navName:nav) => {
    curNav.value = navName;
    // console.log(curNav.value);
}

</script>

<template>
    <div>
        <nav-bar :curNav="curNav"></nav-bar>
        <theme-togle></theme-togle>
        <!-- pages -->
        <landing-page @change-nav="changeNav" ref="home" id="home"></landing-page>
        <about-page @change-nav="changeNav" id="about" />
        <work-page @change-nav="changeNav" ref="work" id="work"></work-page>
        <contact-page @change-nav="changeNav" ref="contact" id="contact"></contact-page>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

html {
    font-family: 'Poppins', sans-serif;
}
</style>