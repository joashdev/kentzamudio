<script setup>
import NavBar from './components/NavBar.vue';
import Building from './components/Building.vue';
</script>

<template>
  <NavBar />
  <Building />
</template>

<style deep lang="postcss">
* {
  @apply transition-colors duration-500;
}
</style>
