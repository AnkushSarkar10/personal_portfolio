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
    <div class="flex flex-col min-h-[76vh] ml-40 mr-16 pl-5 pt-9">
        <h1 ref="page" class="text-5xl font-bold font-Source tracking-wider">Contact Info</h1>
        <div class="w-[22rem] left-[2.9rem] h-4 bg-secondary relative bottom-4 opacity-80 -z-50" />

        <div class="flex flex-col justify-center items-center space-y-5 h-[55vh]">
            <h1 class="text-4xl font-medium">Want to work together, or get in touch? </h1>
            <h1 class="text-xl font-extralight font-Source">email - ankush.sarkar2002@gmail.com</h1>
            <button @click="openEmail"
                class="relative top-6 border-b-2 border-primary-focus py-1 pr-2 pl-3 text-xl hover:bg-primary hover:border-transparent hover:text-base-100 hover:rounded-sm transition-all duration-150 ease-in-out font-bold tracking-widest">Say
                Hello 👋</button>
        </div>

    </div>
</template>

<!-- <template>
    <div class="flex flex-col min-h-[76vh] ml-40 mr-16 pl-5 pt-9">
        <h1 ref="page" class="text-5xl font-bold">Contact Info</h1>
        <div class="w-[17rem] left-14 h-4 bg-secondary relative bottom-4 opacity-80 -z-50" />

        <div class="flex flex-col items-center space-y-4 mt-24">
            <input type="text" placeholder="Name"
                class="input input-bordered focus:border-0 rounded-sm w-full max-w-md">
            <input type="text" placeholder="Email"
                class="input input-bordered focus:border-0 rounded-sm w-full max-w-md">
            <textarea placeholder="Message"
                class="textarea textarea-bordered focus:border-0 rounded-sm w-full max-w-md resize-none"></textarea>

            <div class="flex flex-col items-end w-full max-w-md">
                <button
                    class="border-b-2 border-primary-focus mt-2 py-1 px-2 hover:bg-secondary hover:border-transparent hover:text-base-100 hover:rounded-sm transition-all duration-150 ease-in-out font-bold uppercase tracking-widest">submit</button>
            </div>
        </div>
    </div>
</template> -->

<style scoped>
</style>