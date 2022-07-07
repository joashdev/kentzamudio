<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { onMounted, onUnmounted, ref } from 'vue';
onUnmounted(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
// import DarkToggle from './DarkToggle.vue';
const sidebar = ref(false);
const toggleSidebar = () => {
  sidebar.value = !sidebar.value;
};

onMounted(() => {
  gsap
    .timeline({ defaults: { ease: 'power1.out', opacity: 0 } })
    .from('nav>div>a', { y: -20, stagger: 0.3, delay: 2 });
});
</script>

<template>
  <nav
    class="fixed z-40 h-14 w-screen bg-transparent p-2 overflow-hidden"
  >
    <div
      class="h-full w-full items-center justify-evenly flex flex-row"
    >
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <!-- <DarkToggle /> -->
    </div>
      
  </nav>
</template>

<style scoped lang="postcss">
/* * {
  @apply outline outline-1 outline-white
} */
a {
  @apply text-base font-light text-white;
}
</style>
