<template>
    <section
        class="min-h-screen w-full px-6 lg:px-22 py-4 lg:py-10 pt-[6rem] lg:pt-10 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 relative overflow-hidden"
        id="medal" @mouseover="() => setSectionIndex(3)">
        <div class="w-full lg:w-[38%] bg-cyam-600 z-1 flex flex-col gap-4 lg:gap-12">
            <div class="w-full medal-slide not-last:border-0 not-last:border-b-2 not-last:border-white not-last:pb-4 lg:not-last:pb-12">
                <h1 class="text-2xl lg:text-2xl font-bold font-primary tracking-tighter">Latest Certificates</h1>
                <div class="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0">
                    <a :href="certificate.link" target="_blank">
                        <img class="w-full max-w-[15rem] aspect-video select-none rounded-lg" src="../../assets/img/latest-sertificates.jpg" alt="certif" />
                    </a>
                    <div>
                        <a :href="certificate.link" class="text-base lg:text-lg font-semibold tracking-tight mt-2 lg:-mt-1 block">{{ certificate.title }}</a>
                        <span class="font-extralight text-sm lg:text-base block -mt-1">{{ certificate.code }}</span>
                        <span class="text-light text-xs block -mt-1">{{ certificate.year }}</span>

                        <p class="mt-3 lg:mt-3 text-xs lg:text-sm font-primary font-light tracking-widest">&quot;{{ certificate.motto }}&quot;</p>

                        <a :href="certificate.allCertificates" target="_blank" class="mt-4 lg:mt-2 block text-sky-600 dark:text-sky-400">See all certificates</a>
                    </div>
                </div>
            </div>

            <div class="medal-slide not-last:border-0 not-last:border-b-2 not-last:border-white not-last:pb-4 lg:not-last:pb-12">
                <Sosmed />
            </div>
        </div>
        <div class="w-fit lg:max-w-[10%] absolute lg:relative -right-[17%] lg:right-0">
            <img src="../../assets/img/sword.png" alt="Sword" class="max-h-[100vh] lg:max-h-[86vh] z-0 sword-slide">
        </div>
        <div class="w-[80%] lg:w-[38%] bg-cyan-800 z-1">
        </div>
    </section>
</template>

<script setup>
import { certificate } from '@/constant/data';
import { setSectionIndex } from '@/utils/variables';
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import Sosmed from '../lists/Sosmed.vue';

function animation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sword-slide",
            start: "top bottom",
            end: "center bottom",
        },
    })
    tl.fromTo(".sword-slide", {
        y: -170,
        duration: 1.5,
        ease: 'expo.out'
    }, {
        y: -50,
        duration: 2,
        ease: 'expo.out'
    })
    tl.to(".sword-slide", {
        y: 0,
        duration: 0.3,
        ease: 'expo.out'
    })
    tl.from(".medal-slide", {
        x: 40,
        opacity: 0,
        duration: 0.4,
        stagger: 0.16
    })
}

onMounted(() => {
    document.fonts && document.fonts.ready ?
        document.fonts.ready.then(animation) :
        animation();
})
</script>