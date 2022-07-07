<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { onUnmounted, onMounted, inject } from 'vue';
import Card from './Card.vue';
import GalleryModal from './GalleryModal.vue'

gsap.registerPlugin(ScrollTrigger);

const projects = inject('projects');

onMounted(() => {
  // background text animation
  ScrollTrigger.create({
    animation: gsap
      .timeline({
        defaults: { opacity: 0, ease: 'power1.out' },
      })
      .from('.projects_header_left', { x: -200, duration: 1.5 }, '<')
      .from('.projects_header_right', { x: 200, duration: 1.5 }, '-=100%'),
    // .from('.project_card', { y: 30, stagger: 0.3 }, '<2')
    // .to(
    //   'nav',
    //   { backgroundColor:'rgba(0,0,0,.5)', backdropFilter:'blur(3px)', duration: 0.3, opacity: 1 },
    //   '>'
    // )
    trigger: '#projects',
    // start: '40% 80%',
    // end: '60% 20%',
    // start: 'top center',
    // end: 'bottom center',
    toggleActions: 'play reverse restart reverse',
    // markers: true,
    scrub: 0.5,
  });

  // cards and navbar animation
  ScrollTrigger.create({
    animation: gsap
      .timeline({
        defaults: { opacity: 0, ease: 'power1.out' },
      })
      // .from('.projects_header_left', { x: -200, duration: 1.5 }, '<')
      // .from('.projects_header_right', { x: 200, duration: 1.5 }, '-=100%')
      .from('.project_card', { y: 30, stagger: 0.3 }, '<')
      .to(
        'nav',
        {
          backgroundColor: 'rgba(0,0,0,.5)',
          backdropFilter: 'blur(3px)',
          duration: 0.3,
          opacity: 1,
        },
        '-=100%'
      ),
    trigger: '#projects',
    // start: '40% 80%',
    // end: '60% 20%',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play reverse restart reverse',
    // markers: true,
    // scrub: .5
  });
});
onUnmounted(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>
<template>
  <section id="projects" class="min-h-screen">
    <div
      class="projects_header absolute z-0 -mb-64 h-full w-screen overflow-x-hidden"
    >
      <h1
        class="h-full w-full text-[20rem] font-black text-neutral-400 text-opacity-10"
      >
        <span class="projects_header_left float-left -ml-60">PROJECTS</span>
        <br />
        <span class="projects_header_right float-right -mr-60">PROJECTS</span>
      </h1>
    </div>
    <div
      class="grid auto-rows-max grid-cols-1 gap-6 px-7 md:px-14 pb-14 pt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      <Card />
    </div>
    <Teleport to="body">
      <GalleryModal />
    </Teleport>
  </section>
</template>

<style lang="postcss" scoped></style>
