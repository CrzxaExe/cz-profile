<template>
    <section class="hero-section" id="hero" @mouseover="() => setSectionIndex(0)">
        <div class="max-w-[104rem] w-full z-[2] block relative min-h-[89vh] lg:min-h-fit">
            <h1 class="text-5xl lg:text-6xl font-extrabold lg:font-bold uppercase tracking-wider w-[82%] lg:w-full whitespace-pre-line overflow-clip max-w-[40rem] font-primary hero-slide">Can&apos;t Realize Your Imagination</h1>

            <h3 class="text-xl lg:text-2xl font-primary font-medium tracking-wider mt-8 lg:mt-3 hero-slide"><span class="font-extralight text-back-800 dark:text-zinc-300">I am </span>Bintang Nugraha Putra,</h3>

            <div class="mt-8 lg:mt-10 text-lg lg:text-xl relative mb-18 lg:mb-20 hero-slide font-semibold">
                <span id="specialist1" class="inline-block absolute">Backend Developer</span>
                <span id="specialist2" class="inline-block absolute">Mobile Developer</span>
                <span id="specialist3" class="inline-block absolute">Artist</span>
            </div>

            <p class="mt-4 lg:mt-6 font-extralight text-sm w-2/3 lg:w-1/3 text-justify hero-slide">
                An ordinary people that creating many apps or develop some mod for any games or even create automatic bots to do something.
            </p>

            <a href="#about" class="bg-dark-900 hover:bg-dark-900/40 dark:bg-white dark:hover:bg-white/40 text-white hover:text-dark-900 dark:text-black dark:hover:text-white font-medium text-base lg:text-lg mt-6 lg:mt-8 px-3 lg:px-4 py-1.5 rounded-full transition-colors inline-block ease-in-out duration-300 hero-slide">About Me</a>

            <TextLine text="Scroll Down" primary-class="absolute block bottom-[10rem] lg:-bottom-[24vh]" />
        </div>
        <div v-for="(arr, i) in box" class="border-animated-div rotation-animation" :key="i" :class="arr.join(' ')"></div>
    </section>
</template>

<script setup>
import { setSectionIndex } from '@/utils/variables';
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import TextLine from '../items/TextLine.vue';

const box = [
    ["w-[50vh]","lg:w-[68vw]","-top-[0%]","lg:-top-[30%]", "-right-[20%]", "lg:-right-[20%]"],
    ["w-[62vh]","lg:w-[72vw]","-top-[5%]","lg:-top-[28%]", "-right-[25%]", "lg:-right-[27%]"],
    ["w-[54vh]","lg:w-[70vw]","-top-[9%]","lg:-top-[25%]", "-right-[23%]", "lg:-right-[38%]"],
    ["w-[48vh]","lg:w-[65vw]","-top-[4%]","lg:-top-[27%]", "-right-[20%]", "lg:-right-[32%]"],
    ["w-[57vh]","lg:w-[60vw]","-top-[12%]","lg:-top-[22%]", "-right-[18%]", "lg:-right-[18%]"],
    ["w-[52vh]","lg:w-[63vw]","-top-[6%]","lg:-top-[24%]", "-right-[18%]", "lg:-right-[3%]"],
]

function animation() {
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.from("#specialist1", {
            y: 10,
            opacity: 0,
            duration: 0.3,
        })
        .to("#specialist1", {
            delay: 0.8,
            y: -10,
            opacity: 0,
            duration: 0.1,
        })
        .from("#specialist2", {
            y: 10,
            opacity: 0,
            duration: 0.3,
        })
        .to("#specialist2", {
            delay: 0.8,
            y: -10,
            opacity: 0,
            duration: 0.1,
        })
        .from("#specialist3", {
            y: 10,
            opacity: 0,
            duration: 0.3,
        })
        .to("#specialist3", {
            delay: 0.8,
            y: -10,
            opacity: 0,
            duration: 0.1,
        })

    gsap.from(".hero-slide", {
        duration: 0.7,
        x: -50,
        opacity: 0,
        stagger: 0.1
    })
    gsap.utils.toArray(".rotation-animation").forEach((el) => {
        gsap.set(el, {
            rotation: gsap.utils.random(0, 360)
        });

        gsap.to(el, {
            rotation: "+=360",
            duration: gsap.utils.random(30, 50),
            ease: "none",
            repeat: -1
        });
    });
}

onMounted(() => {
    document.fonts && document.fonts.ready ?
        document.fonts.ready.then(animation) :
        animation();
})
</script>