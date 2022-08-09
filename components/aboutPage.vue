<script setup lang='ts'>
const page = ref(null);
const isVisible = useElementVisibility(page);

const emit = defineEmits(['changeNav'])

onMounted(() => {
    if (isVisible.value) emit('changeNav', 'about');
    watch(isVisible, (newX) => {
        if (isVisible.value) {
            emit('changeNav', 'about');
        }
    })
})

</script>

<template>
    <div class="flex flex-col min-h-screen ml-40 mr-16 mb-14 pl-5 pt-9">

        <h1 ref="page" class="text-5xl font-bold">About</h1>
        <div class="w-32 left-12 h-4 bg-primary-focus relative bottom-4 opacity-80 -z-50"/>

        <div class="flex flex-row mt-16">
            <div class="w-1/2 pr-14 text-center items-center flex flex-col">
                <img src="~/public/img/qutubminar.png" alt="img"
                    class="object-cover object-top mb-7 h-[17rem] w-[17rem] rounded-full">
                <div class="text-2xl font-bold italic mb-7 ">Who is this guy?</div>
                <div class="text-xl font-light">
                    Hi, I am Ankush Sarkar. I am a second-year student studying Computer Science at Mcmaster University. I can build full-stack
                    web
                    applications. To the right are some technologies I have used. I like vue, nuxt.js, and all things
                    web
                    development. Building things and bringing ideas to life is what drives me.
                    <div> Trying to learn new things
                    everyday!</div>
                </div>

            </div>
            <div class="w-1/2 pl-5 pr-10 flex flex-row flex-wrap items-center justify-center">
                <tech-icons :filename="'typescript'"></tech-icons>
                <tech-icons :filename="'vue'"></tech-icons>
                <tech-icons :filename="'nuxt'"></tech-icons>

                <tech-icons :filename="'tailwind'"></tech-icons>
                <tech-icons :filename="'css'"></tech-icons>
                <tech-icons :filename="'html'"></tech-icons>

                <tech-icons :filename="'python'"></tech-icons>
                <tech-icons :filename="'flask'"></tech-icons>
                <tech-icons :filename="'threejs'"></tech-icons>

                <tech-icons :filename="'git'"></tech-icons>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hexagon {
    top: 30vh;
    left: 40%;
    position: absolute;
    margin: 0 auto;
    background-color: dodgerblue;
    border-radius: 10px;
    width: 100px;
    height: 63px;
    box-sizing: border-box;
    transition: all 1s;
    border: 0.4vh solid transparent;
}
</style>