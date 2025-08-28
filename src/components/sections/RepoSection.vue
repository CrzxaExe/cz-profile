<template>
    <section class="min-h-screen w-full px-6 lg:px-22 py-4 lg:py-10 pt-[6rem] lg:pt-10 flex flex-col justify-center items-center" id="skills"
        @mouseover="() => setSectionIndex(2)">
        <div class="w-full flex flex-col lg:flex-row gap-4">
            <div class="w-full lg:w-1/2 repo-slide">
                <div class="w-fit relative group">
                    <img v-if="profile.avatar_url" :src="profile.avatar_url" :alt="profile.name"
                        class="max-w-[7rem] lg:max-w-[5rem] rounded-[100%] hover:rounded-[15%] aspect-square transition-all ease-in-out duration-300">
                    <div v-else
                        class="w-[7rem] lg:w-[5rem] rounded-[100%] hover:rounded-[15%] aspect-square transition-all ease-in-out duration-300 bg-dark-800">
                    </div>
                    <div class="w-fit absolute top-0 -right-[43%] lg:-right-[70%] flex flex-row gap-2">
                        <div class="block w-[1.2rem] aspect-square rounded-full"
                            :class="[profile.hireable ? 'bg-lime-400' : 'bg-amber-500']"></div>
                        <span class="block opacity-0 group-hover:opacity-100 all-transition text-xs">Hireable</span>
                    </div>
                </div>

                <h1 class="text-3xl lg:text-4xl font-bold mt-4">
                    {{ profile.name || "Bintang Nugraha Putra" }}
                    <span class="text-lg lg:text-2xl font-medium tracking-tighter hidden lg:inline">({{ profile.login ||
                        "Crzx" }})</span>
                </h1>

                <span class="block font-light text-base lg:text-base -mt-1.5">Company {{ profile.company ?? "Zxra"
                    }}</span>
            </div>
            <div class="w-full lg:w-1/2 flex flex-row justify-end items-center repo-slide">
                <a :href="profile.html_url"
                    class="w-full lg:w-fit text-lg flex flex-row items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black font-semibold px-3 lg:px-5 py-1 rounded-full"><i
                        class="bx bxl-github text-xl"></i> Github</a>
            </div>
        </div>
        <div
            class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-[2.3rem] mt-7 lg:mt-8 items-stretch">
            <Repository v-for="item in repos" :item class="repo-slide" />
        </div>
    </section>
</template>

<script setup>
import { setSectionIndex } from '@/utils/variables';
import axios from "axios";
import { nextTick, onMounted, ref } from 'vue';
import Repository from '../items/Repository.vue';
import { gsap } from 'gsap';

const img = [
    { name: "Better-Zxra-Bedrock_TS", img: "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock_TS/refs/heads/main/resource_packs/BZB/pack_icon.png", accent: "bg-black", imgClass: "-translate-y-[20%] max-w-[20rem] object-center mx-auto" },
    { name: "ZxRust-Api", img: "https://raw.githubusercontent.com/CrzxaExe/CrzxaExe/refs/heads/main/asset/mkx.jpg", accent: "bg-black", imgClass: "-translate-y-[20%] max-w-[20rem] object-center mx-auto" },
    { name: "cz-profile", img: "https://raw.githubusercontent.com/CrzxaExe/CrzxaExe/refs/heads/main/asset/Screenshot%202025-08-28%20152831.png", accent: "bg-gray-600", imgClass: "max-w-[25.2rem] object-center mx-auto" },
    { name: "Project-Tekkom-24", img: "https://raw.githubusercontent.com/CrzxaExe/CrzxaExe/refs/heads/main/asset/Screenshot%202025-08-28%20153134.png", accent: "bg-gray-600", imgClass: "max-w-[25.2rem] object-center mx-auto" },
    { name: "cz-elysia-api", img: "https://elysiajs.com/assets/elysia.svg", accent: "bg-zinc-100", imgClass: "max-w-[8rem] object-center mx-auto mt-[2rem]" },
]

const profile = ref({});
const repos = ref([]);
const getData = async (url) => {
    try {
        const result = await axios.get(url);
        const rps = await axios.get(result.data.repos_url);

        if (!result || !rps) throw new Error("Axios error");

        profile.value = result.data;
        repos.value = rps.data.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).slice(0, 6).map((e) => {
            const find = img.find(r => r.name === e.name);

            if (!find) return e;

            return {
                ...e,
                ...find,
            }
        });

        await nextTick()
        animation()
    } catch (error) {
        console.error(error);
    }
}

getData("https://api.github.com/users/CrzxaExe");

function animation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".repo-slide",
            start: "top bottom",
            end: "+=10"
        },
    })

    tl.from(".repo-slide", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.16
    })
}

onMounted(() => {
    document.fonts && document.fonts.ready ?
        document.fonts.ready.then(() => {}) :
        {};
})
</script>