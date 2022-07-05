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
    class="fixed z-50 h-14 w-full bg-transparent p-2"
  >
    <div
      class="hidden h-full grid-flow-row place-items-center md:grid md:grid-flow-col"
    >
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a>About</a>
      <a>Contact</a>
      <!-- <DarkToggle /> -->
      <div
        class="flex-column flex items-center justify-between space-x-4 md:hidden"
        :class="{ 'is-active': sidebar.value }"
        @click="toggleSidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 dark:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
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
