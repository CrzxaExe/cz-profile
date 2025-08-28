<template>
    <div
        class="aspect-[1.4/1] md:aspect-[1.65/1] w-full max-w-full sm:max-w-[37rem] bg-zinc-400/60 dark:bg-dark-800/70 backdrop-blur-xl rounded-2xl flex flex-col overflow-hidden repo-slide">
        <div class="min-h-[61%] max-h-[61%] overflow-hidden relative"
            :class="[item.accent ? item.accent : 'bg-zinc-400 dark:bg-dark-800']">
            <div class="absolute top-2 right-3 text-lg lg:text-xl">
                <a :href="item.html_url" target="_blank"
                    class="px-1.5 rounded-xl aspect-square bg-black dark:bg-white text-white dark:text-black flex items-center justify-center"><i
                        class="bx bxl-github"></i></a>
            </div>

            <img v-if="item.img" :src="item.img" :alt="item.name" :class="item.imgClass">
            <span v-if="item.language"
                class="absolute bottom-2 left-3 text-xs px-2.5 py-0.5 bg-zinc-200 dark:bg-dark-900 rounded-full">{{
                    item.language }}</span>
        </div>
        <div class="px-4 py-3">
            <h1 class="text-xl lg:text-lg font-bold tracking-wide">{{ Formater.name(item.name) }}</h1>
            <div v-if="item.topics.length > 0" class="flex flex-row gap-1 text-xs lg:text-sm -mt-0.5"><span
                    v-for="topic in item.topics"
                    class="ring-1 ring-dark-800 dark:ring-zinc-500 rounded-full px-2 py-[1px]">{{ topic }}</span></div>

            <p class="text-xs lg:text-sm font-light mt-2.5">{{ item.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { Formater } from '@/utils/formater';

defineProps({
    item: Object
})
</script>