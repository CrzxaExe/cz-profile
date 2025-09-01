<template>
        <div class="flex flex-col gap-2 justify-center items-center w-full min-h-[5.4rem] mt-6 lg:mt-4 relative max-w-[40rem] group overflow-hidden">
                <div v-for="(list, i) in tech" :key="i" class="w-full grid grid-cols-9 techstack-left-slide">
                        <img v-for="(item, j) in list" :key="j" :src="item" :alt="j" class="grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out opacity-40 group-hover:opacity-100">
                </div>

                <div class="absolute w-full min-h-full flex items-center justify-center techstack-opacity">
                        <h1 class="px-3 py-0.5 text-2xl lg:text-4xl font-bold tracking-wider font-primary rounded-lg opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out cursor-default">Tech Stack</h1>
                </div>
        </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';

import js from  "../../assets/img/icons/JavaScript.svg"
import ts from  "../../assets/img/icons/TypeScript.svg"
import go from  "../../assets/img/icons/Go.svg"
import c from  "../../assets/img/icons/C.svg"
import cpp from  "../../assets/img/icons/C++.svg"
import py from  "../../assets/img/icons/Python.svg"
import rust from  "../../assets/img/icons/Rust.svg"
import html from  "../../assets/img/icons/HTML5.svg"

import njs from "../../assets/img/icons/Node.js.svg"
import bun from "../../assets/img/icons/Bun.svg"
import npm from "../../assets/img/icons/NPM.svg"
import vue from "../../assets/img/icons/Vue.js.svg"
import react from "../../assets/img/icons/React.svg"
import express from "../../assets/img/icons/Express.svg"
import elysia from "../../assets/img/icons/elysia.svg"
import tailwind from "../../assets/img/icons/Tailwind-CSS.svg"
import postman from "../../assets/img/icons/Postman.svg"
import git from "../../assets/img/icons/Git.svg"
import github from "../../assets/img/icons/GitHub.svg"
import figma from "../../assets/img/icons/Figma.svg"
import vite from "../../assets/img/icons/Vite.js.svg"
import dc from "../../assets/img/icons/Discord.js.svg"
import next from "../../assets/img/icons/Next.js.svg"
import vercel from "../../assets/img/icons/Vercel.svg"
import mongo from "../../assets/img/icons/MongoDB.svg"
import mongoose from "../../assets/img/icons/Mongoose.js.svg"
import docker from "../../assets/img/icons/Docker.svg"

const tech = [
    [js, ts, go, c, cpp, py, rust, html, njs],
    [bun, npm, vue, react, elysia, express, tailwind, postman, vercel],
    [git, github, figma, vite, dc, next, mongo, mongoose, docker],
];

function animation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".techstack-left-slide",
            start: "top bottom",
            end: "+=10"
        },
    })

    tl.from(".techstack-opacity", {
        alpha: 0,
        duration: 0.4,
    })

    tl.from(".techstack-left-slide", {
        x: "-100%",
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