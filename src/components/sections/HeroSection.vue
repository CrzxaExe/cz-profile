<template>
    <section class="hero-section" id="hero" @mouseover="() => setSectionIndex(0)">
        <div class="hero-section-container">
            <div class="w-full min-h-full lg:w-[50%] lg:mt-[16rem]">
                <h1 class="text-5xl lg:text-7xl font-primary font-semibold tracking-widest hero-slide"><span
                        class="font-extralight tracking-wider text-back-800 dark:text-zinc-300 block text-xl lg:text-2xl">Hi, I am </span>Bintang Nugraha Putra</h1>

                <div class="mt-12 lg:mt-12 text-xl lg:text-2xl relative mb-24 lg:mb-24 hero-slide font-semibold">
                    <span id="specialist1" class="inline-block absolute">Backend Developer</span>
                    <span id="specialist2" class="inline-block absolute">Mobile Developer</span>
                    <span id="specialist3" class="inline-block absolute">Illustrator</span>
                </div>

                <p class="mt-4 lg:mt-6 font-extralight text-sm lg:text-base w-2/3 lg:w-1/2 text-justify hero-slide">
                    An ordinary people that creating many apps or develop some mod for any games or even create
                    automatic bots to do something. Or maybe do create some artwork for no reason.
                </p>

                <div>
                    <a href="#about"
                    class="bg-dark-900 hover:bg-dark-900/40 dark:bg-white dark:hover:bg-white/40 text-white hover:text-dark-900 dark:text-black dark:hover:text-white font-medium text-base lg:text-lg mt-6 lg:mt-8 px-3 lg:px-4 py-1.5 rounded-full transition-colors inline-flex  gap-2 justify-center items-center ease-in-out duration-300 hero-slide hover:animate-pulse">About
                    Me <i class="bx bx-chevron-right bg-zinc-500 dark:bg-zinc-300 text-white dark:text-dark-900 rounded-full aspect-square text-lg lg:text-xl"></i></a>
                </div>

                <ul class="mt-4 lg:mt-6 list-none flex flex-row gap-2 text-lg lg:text-xl hero-slide">
                    <li v-for="({ href, icon }, i) in sosmed" :key="i" class="rounded-full bg-dark-900 hover:bg-dark-900/40 dark:bg-white dark:hover:bg-white/40 text-white dark:text-dark-900 aspect-square overflow-hidden w-[2.1rem] h-[2rem] flex items-center justify-center">
                        <a :href class="mt-[0.15rem]"><i :class="icon"></i></a>
                    </li>
                </ul>
            </div>
            <div class="hidden lg:block w-full lg:w-1/2 lg:min-h-screen mt-0 lg:mt-0">
                <img src="https://raw.githubusercontent.com/CrzxaExe/portofolio-cz-vue/refs/heads/main/src/assets/me.png" alt="Bintang Nugraha Putra" class="lg:absolute bottom-0 max-w-[16rem] lg:max-w-[38rem] lg:w-[38rem] block ml-[8rem] lg:-ml-[13%] z-[1] aspect-square  lg:aspect-[3/4] object-cover">

                <div class="flex flex-col hero-slide-rev items-end lg:absolute uppercase text-5xl lg:text-6xl font-extrabold bottom-[5%] -mt-22 lg:mt-0 tracking-tighter right-0 lg:z-[2] bg-linear-to-r/srgb from-dark-900/40 to-dark-900/80 dark:from-white/10 dark:to-white/40 text-transparent bg-clip-text mix-blend-difference">
                    <span>Can&apos;t Realize</span>
                    <span>Your Imagination</span>
                </div>
            </div>
        </div>

        <div v-for="(arr, i) in box" class="border-animated-div rotation-animation" :key="i" :class="arr.join(' ')">
        </div>
    </section>
</template>

<script setup>
import { setSectionIndex } from '@/utils/variables';
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import { sosmed } from '@/constant/data';

const box = [
    ["w-[50vh]", "lg:w-[68vw]", "-top-[0%]", "lg:-top-[33%]", "-right-[20%]", "lg:-right-[20%]"],
    ["w-[62vh]", "lg:w-[72vw]", "-top-[5%]", "lg:-top-[28%]", "-right-[29%]", "lg:-right-[27%]"],
    ["w-[54vh]", "lg:w-[70vw]", "-top-[9%]", "lg:-top-[25%]", "-right-[23%]", "lg:-right-[38%]"],
    ["w-[48vh]", "lg:w-[65vw]", "-top-[4%]", "lg:-top-[27%]", "-right-[20%]", "lg:-right-[32%]"],
    ["w-[57vh]", "lg:w-[60vw]", "-top-[12%]", "lg:-top-[22%]", "-right-[18%]", "lg:-right-[18%]"],
    ["w-[52vh]", "lg:w-[63vw]", "-top-[6%]", "lg:-top-[24%]", "-right-[18%]", "lg:-right-[3%]"],
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

    const mainAnim = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-slide",
            start: "top bottom",
            end: "+=10"
        },
    })

    mainAnim.from(".hero-slide", {
        duration: 0.5,
        x: -50,
        opacity: 0,
        stagger: 0.1
    })
    mainAnim.from(".hero-slide-rev", {
        duration: 0.3,
        x: 50,
        opacity: 0,
        stagger: 0.1
    })

    gsap.utils.toArray(".rotation-animation").forEach((el) => {
        gsap.set(el, {
            rotation: gsap.utils.random(0, 360)
        });

        gsap.to(el, {
            rotation: "+=360",
            duration: gsap.utils.random(30, 40),
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