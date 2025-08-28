<template>
    <header class="lg:bg-zinc-200 dark:lg:bg-dark-800 w-full lg:max-w-fit min-h-screen py-2 lg:py-3 flex flex-col justify-between fixed all-transition z-[999] lg:px-2" :class="[toggle ? 'bg-zinc-300 dark:bg-dark-800 max-w-[14rem] px-2' : 'max-w-[3rem] bg-zinc-300/0 dark:bg-dark-800/0']">
        <div class="flex flex-row items-center gap-2 lg:gap-4 justify-center lg:mt-2 self-end lg:self-center px-2 lg:px-0 lg:bg-transparent aspect-square rounded-r-lg cursor-pointer lg:cursor-default" :class="[toggle ? '' : 'bg-zinc-300/80 dark:bg-dark-800/80 backdrop-blur-xl']" @click="toggleButton">
            <img src="../../assets/img/Zxra-full.png" alt="logo" class="max-w-[2rem] lg:max-w-[1.8rem] invert-100 dark:invert-0">
        </div>
        <div class="text-lg lg:text-xl flex flex-col justify-between min-h-[93vh] lg:min-h-fit items-baseline-last lg:block gap-2" :class="[toggle ? 'block' : 'hidden']">
            <ul class="w-full lg:py-5 flex flex-col gap-2 lg:gap-4 relative">
                <NavLink v-for="({ icon, to, name }, i) in navigation" :icon :to :name :key="i" />
                <div class="large-only-view bg-white dark:bg-dark-900 aspect-[1/0.98] w-[3.5rem] absolute -z-[1] -left-[0.38em] all-transition rounded-l-lg" :style="{ top: `calc(0.75rem + ${3.5 * sectionIndex}rem)`}"></div>
            </ul>

            <button @click="changeDarkMode()" class="aspect-square bg-dark-700/20 dark:bg-white/20 px-2.5 rounded-xl self-end lg:self-center">
                <i class='bx' :class="[darkmode ? 'bxs-moon' : 'bx-star']"></i>
            </button>
        </div>
    </header>
</template>

<script setup>
import { darkmode, sectionIndex } from '@/utils/variables';
import { nextTick, ref } from 'vue';
import { navigation } from '@/constant/data';
import NavLink from '../items/NavLink.vue';

const toggle = ref(false);

const toggleButton = (event) => {
    event.preventDefault();
    toggle.value = !toggle.value;
    nextTick();
}

const changeDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    darkmode.value = !darkmode.value;
    nextTick();
}
</script>