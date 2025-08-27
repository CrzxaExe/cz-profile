<script setup>
import Sidebar from './components/navigations/Sidebar.vue';
import HeroSection from './components/sections/HeroSection.vue';
import { darkmode } from './utils/variables';

import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from "gsap";
import AboutSection from './components/sections/AboutSection.vue';
import RepoSection from './components/sections/RepoSection.vue';

gsap.registerPlugin(SplitText, ScrollTrigger);

darkmode.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
</script>

<template>
  <Sidebar />

  <div class="w-full lg:pl-16">
    <HeroSection />
    <AboutSection />
    <RepoSection />
  </div>
</template>

<style scoped></style>
