<script setup>
import { userTheme } from '../theme';
const { isDark, toggleTheme } = userTheme();
</script>

<template>
  <div
    class="flex h-8 w-14 items-center rounded-full border-2 border-slate-800 bg-white p-1"
    :class="{ 'border-white bg-slate-800': isDark }"
    @click="toggleTheme"
  >
    <div class="h-6 w-6 rounded-full" :class="{ 'translate-x-6': isDark }">
      <span v-if="!isDark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 stroke-[#50A8EA]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </span>
      <span v-if="isDark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 stroke-[#50A8EA]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>
