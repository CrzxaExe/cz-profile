<template>
    <div class="flex flex-row gap-2 w-full items-center" :class="primaryClass">
        <span class="w-full h-[1px] bg-dark-700 dark:bg-zinc-500"></span>
        <span class="text-back-700 dark:text-zinc-500 text-xs w-fit whitespace-nowrap" :class="textClass">{{ text }}</span>
        <span class="w-full h-[1px] bg-dark-700 dark:bg-zinc-500"></span>
    </div>
</template>

<script setup>
defineProps({ 
    text: String,
    primaryClass: String,
    textClass: String,
})
</script>