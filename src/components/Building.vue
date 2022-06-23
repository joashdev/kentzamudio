<script setup></script>

<template>
  <main
    class="h-screen w-screen bg-gradient-to-tr from-slate-100 via-slate-300 to-white pt-24 dark:bg-gradient-to-tr dark:from-slate-800 dark:via-slate-700 dark:to-slate-900"
  >
    <h2
      class="font-navlink text-center text-3xl font-bold text-stroke dark:text-white md:text-4xl"
    >
      THIS WEBSITE IS STILL UNDER CONSTRUCTION
    </h2>
    <Transition appear name="image">
      <img
        class="100 m-auto h-5/6 w-5/6"
        src="../assets/buildin.svg"
        alt="website under construction"
      />
    </Transition>
  </main>
</template>

<style scoped>
.image-enter-from {
  transform: translateY(1rem);
  opacity: 0;
}
.image-enter-to {
  transform: translateY(0);
  opacity: 100;
}
.image-enter-active {
  transition: all 0.5s ease-in;
}

.text-stroke {
  -webkit-text-stroke-width: 1px;
  -webkit-text-fill-color: transparent}
</style>
