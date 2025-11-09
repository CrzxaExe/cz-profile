<template>
    <span ref="target">
        {{ i }}
    </span>
</template>

<script setup>
import { useElementVisibility } from '@vueuse/core';
import { nextTick, onMounted, ref, useTemplateRef } from 'vue';

const props = defineProps({
    to: { type: Number, default: 0 },
})

const i = ref(0);
const element = useTemplateRef("target");

let isVisible = useElementVisibility(element);
const isPlayed = ref(false);

const animation = (call) => {
    if(isPlayed.value) return;
    
    if(!isVisible.value) return;
    isPlayed.value = true;
    clearInterval(call);

    const interval = setInterval(() => {
        if(i.value >= props.to) {
            clearInterval(interval);
            return;
        }
        
        i.value = i.value + 1;
        nextTick()
    }, 800 / props.to)
}

onMounted(() => {
    const inter = setInterval(() => {        
        animation(inter);

        isVisible = useElementVisibility(element);
    }, 100)
})
</script>