<template>
    <li class="text-sm"><a :href class="flex flex-row items-center gap-2 font-light" target="_blank"><i :class="icon" class="text-2xl lg:text-xl"></i> {{ text }}</a></li>
</template>

<script setup>
defineProps({
    icon: String,
    href: String,
    text: String,
})
</script>