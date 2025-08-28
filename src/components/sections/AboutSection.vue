<template>
    <section class="min-h-screen w-full px-6 lg:px-22 py-2 lg:py-8 -mt-[4rem] flex flex-col justify-center items-center gap-2 lg:gap-4"
        id="about" @mouseover="() => setSectionIndex(1)">
        <h1 class="w-full max-w-[104rem] text-5xl lg:text-6xl font-bold font-primary uppercase about-slide relative">About Me</h1>
        <div class="max-w-[104rem] w-full lg:min-h-1/2 z-[2] flex flex-col lg:flex-row gap-2 lg:gap-[12rem] mt-4 lg:mt-6">

            <div class="w-full lg:w-1/2">

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

                <span class="font-medium mt-4 lg:mt-8 block about-slide">Codename: CrzxaExe3</span>
            </div>
        </div>
        <div class="max-w-[104rem] w-full lg:min-h-1/2 z-[2] mt-6 lg:mt-8 flex flex-col lg:flex-row gap-8 lg:gap-6">
            <div class="w-full lg:w-[45%] bg-zinc-100 dark:bg-dark-800 px-5 py-4 lg:py-3 rounded-xl about-slide">
                <h1 class="text-xl lg:text-2xl font-bold font-primary tracking-tighter">Latest Certificates</h1>
                <div class="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0">
                    <a :href="certificate.link" target="_blank">
                        <img class="w-full lg:max-w-[15rem] aspect-video select-none rounded-lg" src="../../assets/img/latest-sertificates.jpg" alt="certif" />
                    </a>
                    <div>
                        <a :href="certificate.link" class="text-base lg:text-lg font-semibold tracking-tight mt-2 lg:mt-0 block">{{ certificate.title }}</a>
                        <span class="font-extralight text-sm lg:text-base block -mt-1">{{ certificate.code }}</span>
                        <span class="text-light text-xs block -mt-1">{{ certificate.year }}</span>

                        <p class="mt-3 lg:mt-4 text-xs lg:text-sm font-primary font-light tracking-widest">&quot;{{ certificate.motto }}&quot;</p>

                        <a :href="certificate.allCertificates" target="_blank" class="mt-4 lg:mt-3 block text-sky-600 dark:text-sky-400">See all certificates</a>
                    </div>
                </div>
            </div>

            <!-- <div class="w-full lg:w-1/4 about-slide">
                <h1 class="font-primary tracking-widest text-xl lg:text-2xl font-semibold">Contact Me</h1>
                <Sosmed />
            </div> -->
        </div>
    </section>
</template>

<script setup>
import { setSectionIndex } from '@/utils/variables';
import Sosmed from '../lists/Sosmed.vue';
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import { certificate } from '@/constant/data';

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