<template>
    <li class="px-3 lg:px-1 w-full py-2.5 lg:py-1 hover:bg-zinc-100 dark:hover:bg-dark-900 lg:hover:bg-zinc-100/0 dark:lg:hover:bg-dark-900/0 lg:bg-none rounded-lg all-transition">
        <a :href="to" class="w-full uppercase lg:tracking-[0.23em] text-base lg:text-lg font-medium flex flex-row lg:justify-center items-center gap-4 lg:aspect-square lg:pl-1">
            <img :src="icon" :alt="name" class="max-w-[1rem] aspect-square invert-100 dark:invert-0">
            <span class="inline-block lg:hidden">{{ name }}</span>
        </a>
    </li>
</template>

<script setup> 
defineProps({
    icon: String,
    to: String,
    name: String,
})
</script>