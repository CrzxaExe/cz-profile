<template>
    <div class="pr-3 lg:pr-6 pb-3 lg:pb-5 rounded-lg flex flex-row items-center gap-2 lg:gap-3 cursor-pointer min-h-fit">
        <div class="max-w-[7rem] overflow-hidden object-fill aspect-[4/3] w-full flex justify-center items-center rounded-lg" :class="[item.accent ?? 'bg-dark-800']">
            <img v-if="item.img" :src="item.img" :alt="item.name" :class="item.imgClass">
        </div>
        <div class="flex flex-col w-full max-w-[24rem]">
            <h1 class="text-base lg:text-lg font-bold tracking-tighter">{{ Formater.name(item.name) }}</h1>
            <span v-if="item.language" class="text-xs -mt-1">{{ item.language }}</span>
            <div v-if="item.topics.length > 0" class="flex flex-row flex-wrap gap-1 text-xs max-w-[24rem] mt-2">
                <span v-for="topic in item.topics" class="ring-1 ring-cyan-600 dark:ring-cyan-500 text-cyan-600 dark:text-cyan-500 rounded-full px-2 py-[1px]">{{ topic }}</span>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center">
            <span class="text-xl lg:text-2xl"><i class="bx bx-chevron-right"></i></span>
        </div>
    </div>
</template>

<script setup>
import { Formater } from '@/utils/formater';

defineProps({
    item: Object
})
</script>