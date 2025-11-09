<template>
    <section class="min-h-screen w-full px-6 lg:px-22 py-3 lg:py-10 pt-[3rem] lg:pt-16 flex flex-col justify-center items-center" id="repo"
        @mouseover="() => setSectionIndex(2)">
        <div class="w-full flex flex-col lg:flex-row gap-4 max-w-[104rem]">
            <div class="w-full lg:w-1/2 repo-slide flex flex-row gap-4">
                <div class="w-fit relative group">
                    <img v-if="profile.avatar_url" :src="profile.avatar_url" :alt="profile.name"
                        class="max-w-[5rem] rounded-[100%] hover:rounded-[15%] aspect-square transition-all ease-in-out duration-300">
                    <div v-else
                        class="w-[7rem] lg:w-[5rem] rounded-[100%] hover:rounded-[15%] aspect-square transition-all ease-in-out duration-300 bg-dark-800">
                    </div>
                    <div class="w-fit absolute top-0 -right-[63%] lg:-right-[70%] flex flex-row gap-2">
                        <div class="block w-[1.2rem] aspect-square rounded-full"
                            :class="[profile.hireable ? 'bg-lime-400' : 'bg-amber-500']"></div>
                        <span class="block opacity-0 group-hover:opacity-100 all-transition text-xs">Hireable</span>
                    </div>
                </div>

                <div class="flex flex-col">
                    <h1 class="text-3xl lg:text-4xl font-bold mt-4">
                        {{ profile.name || "Bintang Nugraha Putra" }}
                        <span class="text-lg lg:text-2xl font-medium tracking-tighter hidden lg:inline">({{ profile.login ||
                        "Crzx" }})</span>
                </h1>
                
                <span class="block font-light text-base lg:text-base -mt-1.5">Company {{ profile.company ?? "Zxra"
                    }}</span>
                </div>
            </div>
            <div class="w-full lg:w-1/2 flex flex-row justify-end items-center repo-slide">
                <a :href="profile.html_url"
                    class="w-full lg:w-fit text-lg flex flex-row items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-dark-700 dark:hover:bg-zinc-400 font-semibold px-3 lg:px-5 py-1 rounded-full transition-color duration-300 ease-in-out"><i
                        class="bx bxl-github text-xl"></i> Github</a>
            </div>
        </div>

        <div class="w-full flex flex-col lg:flex-row-reverse gap-6 lg:gap-[2rem] mt-12 max-w-[104rem] min-h-[70vh] lg:max-h-[70vh] lg:overflow-hidden">
            <div class="w-full max-h-[70vh] lg:w-[72%] flex flex-col gap-4 relative pb-8 lg:pb-0 border-b-[1px] lg:border-b-0">
                <div class="w-full lg:min-h-[80%] max-h-[45vh] lg:aspect-video flex flex-col relative">
                    <div class="w-full flex flex-row items-center">
                        <div class="flex flex-col w-full">
                            <h2 class="text-3xl lg:text-4xl font-bold repo-slide">{{ Formater.name(recent.name ?? "recent-repo") }}</h2>
                            <span class="text-base -mt-1 repo-slide">{{ recent.language ?? "I don't know bruh" }}</span>
                        </div>
                        
                        <div class="w-fit flex flex-row-reverse gap-2 justify-start repo-slide">
                            <a :href="recent.homepage" v-if="recent.homepage" target="_blank" class="text-lg lg:text-xl bg-black dark:bg-white text-white dark:text-black px-1.5 py-0.5 rounded-lg"><i class="bx bx-link"></i></a>
                            <a :href="recent.url" target="_blank" class="text-lg lg:text-xl bg-black dark:bg-white text-white dark:text-black px-1.5 py-0.5 rounded-lg"><i class="bx bxl-github"></i></a>
                        </div>
                    </div>

                    <div class="mt-2 w-full min-h-full lg:max-h-[46vh] aspect-[3/2] lg:aspect-[10/8] overflow-hidden shadow-lg flex justify-center items-center rounded-xl lg:rounded-2xl relative repo-slide" :class="[!recent.img ? 'bg-black' : '']">
                        <img v-if="recent.img" :src="recent.img" :alt="recent.name" class="max-h-full object-contain z-[2]">
                        <img v-if="recent.img" :src="recent.img" :alt="recent.name" class="absolute min-w-full object-fill z-[1] blur-md">
                    </div>
                </div>
                <div class="w-full lg:min-h-[20%]">
                    <div v-if="(recent.topics ?? []).length > 0" class="flex flex-row flex-wrap gap-1 text-xs lg:text-sm repo-slide">
                        <span v-for="topic in recent.topics" class="ring-1 ring-cyan-600 dark:ring-cyan-500 text-cyan-600 dark:text-cyan-500 rounded-full px-2 py-[1px]">{{ topic }}</span>
                    </div>
                    <div v-else class="text-xs lg:text-sm py-[1px] repo-slide">No Topic</div>

                    <p class="mt-2 lg:mt-4 repo-slide">{{ recent.description ?? "No Description" }}</p>
                </div>
            </div>

            <div class="w-full lg:w-[28%] flex flex-col lg:max-h-[70vh] lg:overflow-y-scroll mt-6 lg:mt-0" :class="[fullView ? 'max-h-full' : 'overflow-y-hidden max-h-[32.5rem]']">
                <button class="cursor-pointer lg:hidden bg-zinc-300 dark:bg-dark-800 hover:bg-zinc-500 dark:hover:bg-black focus:bg-cyan-600 dark:focus:bg-cyan-500 mb-4 py-1 rounded-lg font-semibold tracking-widest transition-all ease-in-out duration-300" @click="() => fullView = !fullView">{{ !fullView ? "All" : "Minimize" }}</button>
                <RepoList v-for="(item,i) in repos" :key="i" :item @click="handleRepo(item)" class="repo-slide" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { setSectionIndex } from '@/utils/variables';
import axios from "axios";
import { nextTick, onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import RepoList from '../items/RepoList.vue';
import { Formater } from '@/utils/formater';

const img = [
    { name: "Better-Zxra-Bedrock_TS", img: "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock_TS/refs/heads/main/resource_packs/BZB/pack_icon.png", accent: "bg-black", imgClass: "max-w-[8rem] mx-auto" },
    { name: "ZxRust-Api", img: "https://raw.githubusercontent.com/CrzxaExe/CrzxaExe/refs/heads/main/asset/mkx.jpg", accent: "bg-black", imgClass: "max-w-[8rem]  mx-auto" },
    { name: "cz-profile", img: "https://raw.githubusercontent.com/CrzxaExe/CrzxaExe/refs/heads/main/asset/Screenshot%202025-08-28%20152831.png", accent: "bg-gray-600", imgClass: "max-w-[8rem] mx-auto" },
    { name: "Project-Tekkom-24", img: "https://raw.githubusercontent.com/CrzxaExe/CrzxaExe/refs/heads/main/asset/Screenshot%202025-08-28%20153134.png", accent: "bg-gray-600", imgClass: "max-w-[8rem] mx-auto" },
    { name: "cz-elysia-api", img: "https://elysiajs.com/assets/elysia.svg", accent: "bg-zinc-100", imgClass: "max-w-[5rem] mx-auto" },
    { name: "kaltsit_design", img: "https://raw.githubusercontent.com/CrzxaExe/kaltsit_design/refs/heads/main/src/img/kal4.jpg", accent: "bg-white", imgClass: "max-w-[7rem] mx-auto" },
]

const profile = ref({});
const repos = ref([]);
const recent = ref({});
const fullView = ref(false);
const getData = async (url) => {
    try {
        const result = await axios.get(url);
        const rps = await axios.get(result.data.repos_url);

        if (!result || !rps) throw new Error("Axios error");

        profile.value = result.data;
        repos.value = rps.data.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).map((e, i) => {
            const find = img.find(r => r.name === e.name);

            let temp = e;

            if (!find) return e;

            temp = {
                ...e,
                ...find,
            }
            console.log(temp)

            if(i === 0) {
                recent.value = temp;
            }

            return temp;
        });

        await nextTick()
        animation()
    } catch (error) {
        console.error(error);
    }
}

const handleRepo = (data) => {
    recent.value = data;
}

getData("https://api.github.com/users/CrzxaExe");

function animation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".repo-slide",
            start: "top center+=120",
            end: "+=60"
        },
    })

    tl.from(".repo-slide", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08
    })
}

onMounted(() => {
    document.fonts && document.fonts.ready ?
        document.fonts.ready.then(() => {}) :
        {};
})
</script>