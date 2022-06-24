<script setup>
import NavBar from './components/NavBar.vue';
import Building from './components/Building.vue';
import Home from './components/Home.vue';
import Project from './components/Project.vue';
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
</style>
