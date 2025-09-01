<template>
    <section class="min-h-screen w-full px-6 lg:px-22 py-2 lg:py-8 -mt-[5rem] flex flex-col justify-center items-center gap-2 lg:gap-4"
        id="about" @mouseover="() => setSectionIndex(1)">
        <div class="w-full flex flex-row justify-between items-center max-w-[104rem]">
            <div class="aspect-square h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem] ml-8 bg-dark-900 dark:bg-white block rotate-45 border-4 border-white dark:border-dark-900 ring-8 ring-dark-900 dark:ring-white about-slide"></div>
            <h1 class="w-fit text-6xl lg:text-8xl text-right font-extrabold font-primary uppercase about-slide relative text-black/40 dark:text-white/40 after:content-['About'] after:absolute after:text-zinc-600 dark:after:text-zinc-400 after:right-3 after:font-bold">About</h1>
        </div>
        <div class="max-w-[104rem] w-full lg:min-w-1/2 z-[2] flex flex-col lg:flex-row gap-6 lg:gap-[6rem] mt-8 lg:mt-12">
            <div class="w-full lg:w-1/3">
                <p class="font-light text-sm lg:text-base text-justify about-slide">
                    Im Bintang Nugraha Putra a Backend Dev or Mobile Dev or i can be an Artist.
                    I am currently pursuing a degree in Computer Engineering at Jendral Soedirman
                    University, and I have developed a passion for coding and problem-solving
                    through various projects and coursework.<br /><br />

                    My goal is to use my technical expertise and creative flair to help develop
                    innovative technology solutions. I am eager to learn and take on new challenges,
                    continuously expanding my knowledge and keeping up to date with the latest industry
                    trends. I have a keen eye for detail and a collaborative mindset, and I thrive
                    in team environments. I enjoy contributing to projects that have a real impact.<br /><br />

                    In addition to my technical abilities, I am dedicated to personal growth
                    professional development. I actively seek opportunities to apply my
                    skills in real-world scenarios, such as internships, freelance projects
                    and contributing to open-source communities.
                </p>

                <span class="font-medium mt-4 lg:mt-6 block about-slide">Codename: CrzxaExe3</span>
            </div>
            <div class="w-full lg:w-2/3 about-slide flex flex-col justify-center items-center">
                <TechStack />
            </div>
        </div> 
    </section>
</template>

<script setup>
import { setSectionIndex } from '@/utils/variables';
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import TechStack from '../lists/TechStack.vue';

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
        duration: 0.7,
        stagger: 0.16
    })
}

onMounted(() => {
    document.fonts && document.fonts.ready ?
        document.fonts.ready.then(animation) :
        animation();
})
</script>