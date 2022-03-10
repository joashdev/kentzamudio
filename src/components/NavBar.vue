<script setup>
import { ref } from 'vue';
import Toggle from './Toggle.vue';
const sidebar = ref(false);
const toggleSidebar = () => {
  sidebar.value = !sidebar.value;
};
</script>

<template>
  <nav
    class="fixed flex h-14 w-screen justify-between border-b-2 border-slate-400 bg-white p-2 shadow-lg shadow-slate-400 dark:border-slate-900 dark:bg-slate-800 dark:shadow-slate-900"
  >
    <h1 class="font-logo text-3xl font-black text-slate-800 dark:text-white">
      KJZ.
    </h1>
    <div class="hidden flex-row items-center justify-between space-x-4 md:flex">
      <a>HOME</a>
      <a>PROJECTS</a>
      <a>ABOUT</a>
      <a>CONTACT</a>
      <Toggle />
    </div>
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
  </nav>
</template>

<style scoped>
a {
  @apply font-logo text-lg font-light text-slate-800 dark:text-white;
}
</style>
