<template>
        <div class="flex flex-col gap-8 lg:gap-12 justify-center items-center w-full min-h-[5.4rem] mt-6 lg:mt-4">
            <vue3-marquee class="flex flex-row resize-none overflow-hidden gap-4 items-center mask-alpha mask-x-from-80% mask-x-to-90%" duration="12" :clone="false">
                    <img :src="img" :alt="j" class="max-w-[3.05rem] lg:max-w-[5.4rem] items-center flex mr-2 lg:mr-5" v-for="(img, j) in tech[0]" :key="j">
            </vue3-marquee>

            <h1 class="w-full text-center text-2xl lg:text-3xl font-semibold tracking-widest uppercase font-primary">Tech Stack</h1>

            <vue3-marquee class="flex flex-row resize-none overflow-hidden gap-4 items-center mask-alpha mask-x-from-80% mask-x-to-90% min-w-max" duration="16" direction="reverse">
                    <img :src="img" :alt="j" class="max-w-[1.32rem] lg:max-w-[2.32rem] items-center flex mr-1 lg:mr-2.5" v-for="(img, j) in tech[1]" :key="j">
            </vue3-marquee>
        </div>
</template>

<script setup>
import { Vue3Marquee } from "vue3-marquee";
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
import github from "../../assets/img/icons/Github.svg"
import figma from "../../assets/img/icons/Figma.svg"
import vite from "../../assets/img/icons/Vite.js.svg"
import dc from "../../assets/img/icons/Discord.js.svg"
import next from "../../assets/img/icons/Next.js.svg"
import mongo from "../../assets/img/icons/MongoDB.svg"
import mongoose from "../../assets/img/icons/Mongoose.js.svg"
import docker from "../../assets/img/icons/Docker.svg"

const tech = [
    [js, ts, go, c, cpp, py, rust, html],

    [njs, bun, npm, vue, react, elysia, express, tailwind, postman, git, github, figma, vite, dc, next, mongo, mongoose, docker],
];
</script>