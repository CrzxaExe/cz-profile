<template>
    <ul class="flex flex-col gap-2 mt-2">
        <SocailIcon v-for="({ icon, href, text }) in sosmed" :icon :href :text />
    </ul>
</template>

<script setup>
import { sosmed } from '@/constant/data';
import SocailIcon from '../items/SocailIcon.vue';


</script>