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
      .from('.slide_from_left', { x: -100, duration: 0.5 }, '<1')
      .from('.slide_from_right', { x: 100, duration: 5 }, '-=100%');

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
  <section id="home" class="h-screen w-screen relative">
    <div
      class="fade_in absolute overflow-hidden z-10 h-screen w-screen  opacity-100"
    >
      <img
        class="-ml-[15%] mt-12 w-[130%] max-w-none md:mx-auto md:w-[100%] lg:w-1/2"
        src="@/assets/hero_bw1.png"
        alt="hero"
      />
    </div>
    <div class="slide_from_left absolute hidden md:block h-screen w-screen overflow-x-hidden">
      <h1
        class="text-stroke z-0 float-left ml-6 -mb-12 overflow-x-hidden align-middle font-blanka text-[15rem]"
      >
        KENT
      </h1>
      <br />
      <h1
        class="text-stroke z-0 float-right mr-6 -mt-12 overflow-x-hidden p-0 align-middle font-blanka text-[15rem]"
      >
        ZAMUDIO
      </h1>
    </div>
    <div
      class="slide_from_right absolute z-20 h-screen w-screen overflow-x-hidden"
    >
      <div class="flex flex-col w-full h-full justify-end md:items-end md:pb-0 pb-12 overflow-x-hidden">
        <h1
          class="order-last md:order-1 text-right font-light text-white md:m-0 pr-5"
        >
          web developer / programmer
        </h1>
        <h1
          class="md:mb-12  pr-5 text-right text-4xl font-black text-neutral-50 lg:mb-0 lg:text-8xl"
        >
          KENT<br />
          JOASH<br />ZAMUDIO
        </h1>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
* {
  @apply outline-red-500 outline-2 outline;
}
h1 {
  @apply select-none;
}
</style>
