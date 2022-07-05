<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { onUnmounted, onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const slideFromLeft = () =>
    gsap
      .timeline({
        defaults: { opacity: 0, ease: 'power1.out' },
      })
      .from('.fade_in', { duration: 1.5 }, '<')
      .from('.slide_from_left', { x: -200, duration: 0.5 }, '<1')
      .from('.slide_from_right', { x: 200, duration: 0.5 }, '-=100%');

  ScrollTrigger.create({
    animation: slideFromLeft(),
    trigger: '#home',
    start: '40% 80%',
    end: '60% 20%',
    toggleActions: 'play reverse restart reverse',
    // markers: true,
  });
});
onUnmounted(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
  <section id="home" class="min-h-screen">
    <div
      class="fade_in absolute z-10 h-full w-full overflow-y-hidden opacity-100"
    >
      <img class="mx-auto w-1/2" src="@/assets/hero_bw1.png" alt="hero" />
    </div>
    <div class="slide_from_left absolute h-full w-full">
      <h1
        class="text-stroke absolute top-0 left-12 z-0 m-0 p-0 font-blanka text-[15rem]"
      >
        KENT
      </h1>
      <h1
        class="text-stroke absolute bottom-0 right-12 z-0 m-0 overflow-hidden p-0 font-blanka text-[15rem]"
      >
        ZAMUDIO
      </h1>
    </div>
    <div
      class="slide_from_right absolute z-20 flex h-full w-full flex-col items-end justify-end"
    >
      <h1 class="mb-0 pr-5 text-right font-light text-white">
        web developer / programmer
      </h1>
      <h1 class="mb-5 pr-5 text-right text-8xl font-black text-neutral-50">
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
h1 {
  @apply select-none;
}

</style>
