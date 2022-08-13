<script setup lang='ts'>
const page = ref(null);
const isVisible = useElementVisibility(page);

const emit = defineEmits(['changeNav'])

onMounted(() => {
    if (isVisible.value) emit('changeNav', 'contact');
    watch(isVisible, (newX) => {
        if (isVisible.value) {
            emit('changeNav', 'contact');
        }
    })
})

const email: string = 'ankush.sarkar2002@gmail.com';
const openEmail = () => {
    window.location.href = `mailto:${email}`;
}
</script>

<template> 
    <div class="flex flex-col min-h-[70vh] md:min-h-[76vh] ml-12 md:ml-40 mr-6 md:mr-16 pl-5 pt-9">
        <h1 ref="page" class="text-2xl md:text-5xl font-bold font-Source tracking-wider">Contact Info</h1>
        <div class="w-[11.5rem] md:w-[22rem] left-[1.3rem] md:left-[2.9rem] h-[0.3rem] md:h-4 bg-secondary relative bottom-[0.7rem] md:bottom-4 opacity-80 -z-50" />

        <div class="flex flex-col justify-center items-center text-center space-y-5 h-[50vh] md:h-[55vh]">
            <h1 class="text-lg md:text-4xl font-medium">Want to work together, or get in touch? </h1>
            <h1 class="text-base md:text-xl font-extralight font-Source">email - ankush.sarkar2002@gmail.com</h1>
            <button @click="openEmail"
                class="relative top-6 border-b-2 border-primary-focus py-1 pr-2 pl-3 text-sm md:text-xl hover:bg-primary hover:border-transparent hover:text-base-100 hover:rounded-sm transition-all duration-150 ease-in-out font-bold tracking-widest">Say
                Hello 👋</button>
        </div>

    </div>
</template>

<style scoped>
</style>