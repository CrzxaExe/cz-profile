<script setup>
import HeroSection from './components/sections/HeroSection.vue';
import { darkmode } from './utils/variables';

import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from "gsap";
import ServiceSection from './components/sections/ServiceSection.vue';
import RepoSection from './components/sections/RepoSection.vue';
import Achievement from './components/sections/Achievement.vue';
import Topbar from './components/navigations/Topbar.vue';

gsap.registerPlugin(SplitText, ScrollTrigger);

darkmode.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
</script>

<template>
   <Topbar />

  <div class="w-full">
    <HeroSection />
    <ServiceSection />
    <RepoSection />
    <Achievement />
  </div>
</template>

<style scoped></style>
