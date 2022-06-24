<script setup></script>

<template>
  <section id="home" class="min-h-screen">
    <div
      class="absolute z-10 h-full w-full overflow-y-hidden"
      v-motion-fade-in
    >
      <img class="mx-auto w-1/2" src="@/assets/hero_bw1.png" alt="hero" />
    </div>
    <div>
      <h1
        class="text-[15rem] text-stroke absolute top-0 left-12 z-0 m-0 p-0 font-blanka"
        v-motion-slide-from-left
      >
        KENT
      </h1>
      <h1
        class="text-[15rem] text-stroke absolute bottom-0 right-12 z-0 m-0 overflow-hidden p-0 font-blanka"
        v-motion-slide-from-left
      >
        ZAMUDIO
      </h1>
    </div>
    <div
      class="absolute z-20 flex h-full w-full flex-col items-end justify-end "
    >
      <h1 class="mb-0 pr-5 text-right font-light text-white" v-motion-slide-from-right>
        web developer / programmer
      </h1>
      <h1 class="mb-5 pr-5 text-right text-8xl font-black text-neutral-50" v-motion-slide-from-right>
        KENT<br />
        JOASH<br />ZAMUDIO
      </h1>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
/* * {
  @apply;
} */

.text-stroke {
  -webkit-text-stroke: 4px;
  -webkit-text-fill-color: transparent;
  @apply text-neutral-600 opacity-20;
}
</style>
