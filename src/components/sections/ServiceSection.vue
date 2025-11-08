<template>
    <section
        class="max-h-screen w-full px-6 lg:px-22 py-12 lg:py-6 flex flex-col items-center gap-2 lg:gap-4 bg-zinc-300 dark:bg-black"
        id="about" @mouseover="() => setSectionIndex(1)">
        <div
            class="max-w-[104rem] w-full min-h-[30vh] z-[2] flex flex-col lg:flex-row items-center gap-6 lg:gap-[4rem]">
            <div class="lg:w-[60%]">
                <h1
                    class="w-fit text-5xl lg:text-6xl text-left rounded-2xl font-semibold font-primary about-slide relative">
                    What Can I Do For Your Needs</h1>
                <h3 class="mt-2 lg:mt-4 text-base max-w-[50%]">It is easier to entrust the work to the experts because they are able provide the best result</h3>

                <div class="mt-4 lg:mt-8 grid grid-cols-2 lg:grid-cols-4">
                    <div v-for="({ name, value }, i) in stats" :key="i" class="flex flex-col">
                        <span class="text-cyan-600 text-4xl lg:text-5xl font-bold">{{ value }}+</span>
                        <span class="font-light">{{ name }}</span>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-[40%] flex flex-row justify-center items-center mt-8 lg:mt-0">
                <div class="w-full flex flex-col gap-3 lg:gap-6">
                    <div v-for="({ name, icon, description, total }, i) in interest"
                        class="min-h-full flex flex-row items-center px-4 lg:px-6 py-5 lg:py-6 gap-4 lg:gap-2 not-last:border-b-[1px]" :key="i">
                        <i :class="icon" class="text-2xl lg:text-3xl"></i>
                        <div>
                            <h2 class="text-base lg:text-lg font-semibold">{{ name }}</h2>
                            <p class="text-sm lg:text-xs font-light">
                                {{ description }}
                            </p>
                        </div>
                        <span class="ml-auto text-cyan-500">{{ total }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { interest, stats } from '@/constant/data';
import { setSectionIndex } from '@/utils/variables';
import { gsap } from 'gsap';
import { onMounted } from 'vue';

function animation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-slide",
            start: "top bottom",
            end: "+=10"
        },
    })

    tl.from(".about-slide", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.16
    })
    tl.to(".about-block", {
        x: "-100%",
        ease: "expo.inOut",
        duration: 1.56,
        stagger: 0.1
    })
}

onMounted(() => {
    document.fonts && document.fonts.ready ?
        document.fonts.ready.then(animation) :
        animation();
})
</script>