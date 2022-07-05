<script setup>
import NavBar from './components/NavBar.vue';
import Building from './components/Building.vue';
import Home from './components/Home.vue';
import Project from './components/Project.vue';

import gsap from 'gsap';

// gsap.timeline().from('body', { opacity: 0, ease: 'power1.out', duration: 1 })
</script>

<template>
  <main class="min-h-screen bg-black">
    <NavBar />
    <Home />
    <Project/>
  </main>
</template>

<style deep lang="postcss">
main {
  @apply text-white
}
.text-stroke {
  -webkit-text-stroke: 4px;
  -webkit-text-fill-color: transparent;
  @apply text-neutral-600 opacity-20;
}
</style>
