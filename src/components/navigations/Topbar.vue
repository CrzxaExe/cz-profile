<template>
    <header
        class="w-full min-h-fit flex items-center justify-center fixed z-[99] transition-all duration-300 ease-in-out"
        :class="[scroll > 0 ? 'lg:bg-zinc-500/60 dark:lg:bg-dark-900/60 backdrop-blur-lg shadow-xl' : '']">
        <div
            class="w-full px-6 lg:px-2 py-4 lg:py-3 max-w-[104rem] flex flex-row gap-4 justify-between lg:justify-start items-center relative">
            <div class="flex flex-row items-center gap-2 lg:min-w-[10rem]">
                <img src="../../assets/img/Zxra-full.png" alt="Logo"
                    class="aspect-square max-w-[3rem] invert-100 dark:invert-0">
                <h1 class="font-semibold text-xl lg:text-2xl font-primary">Zxra</h1>
            </div>

            <div class="w-full flex flex-row items-center justify-end lg:justify-between">
                <div class="flex-col lg:flex-row absolute lg:relative justify-between min-w-[12rem] px-5 lg:px-0 py-2 lg:py-0 w-fit lg:w-full top-[9vh] lg:top-0 rounded-xl bg-zinc-300 dark:bg-dark-700 lg:bg-transparent dark:lg:bg-transparent lg:flex" :class="[toggle ? 'flex' : 'hidden']">
                    <ul class="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-10 w-full">
                        <li class="text-sm font-extralight -ml-2 block lg:hidden">Navigations</li>
                        <li v-for="({ to, name }, i) in navigation" :key="i" class="flex flex-row gap-2 items-center">
                            <a :href="to" class="text-sm lg:text-base tracking-widest">{{ name.toUpperCase() }}</a>
                        </li>
                    </ul>
                    <div class="flex flex-row gap-4 items-center">
                        <div class="flex flex-col lg:flex-row gap-2 lg:gap-6 lg:items-center mt-2 lg:mt-0 w-full lg:w-fit">
                            <span class="text-sm font-extralight -ml-2 w-full block lg:hidden">Others</span>
                            <div class="flex flex-row gap-2 lg:gap-4 items-center">
                                <a v-for="({ icon, to }, i) in otherNav" :key="i" :href="to" class="text-lg lg:text-xl">
                                    <i :class="icon"></i>
                                </a>
                            </div>
                            <button @click="changeDarkMode()"
                                class="lg:aspect-square bg-dark-700/20 dark:bg-white/20 px-2.5 py-1 lg:py-0 rounded-xl lg:self-center">
                                <i class='bx' :class="[darkmode ? 'bxs-moon' : 'bx-star']"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    class="flex flex-col items-end aspect-square relative lg:hidden w-[30px] gap-2 hover:cursor-pointer"
                    @click="handleToggle">
                    <span class="w-full h-[2px] bg-black dark:bg-white block rounded-full origin-top-right transition-all duration-300 ease-in-out" :class="[toggle ? '-rotate-45' : '']"></span>
                    <span class="w-[80%] h-[2px] bg-black dark:bg-white block rounded-full transition-all duration-300 ease-in-out"  :class="[toggle ? 'scale-0' : '']"></span>
                    <span class="w-full h-[2px] bg-black dark:bg-white block rounded-full origin-bottom-right transition-all duration-300 ease-in-out"  :class="[toggle ? 'rotate-45' : '']"></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import { navigation, otherNav } from '@/constant/data';
import { darkmode } from '@/utils/variables';
import { nextTick, ref } from 'vue';

const scroll = ref(0);
const toggle = ref(false);

const handleToggle = () => {
    toggle.value = !toggle.value
}

const changeDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    darkmode.value = !darkmode.value;
    nextTick();
}

window.addEventListener("scroll", () => {
    scroll.value = window.scrollY;
})
</script>