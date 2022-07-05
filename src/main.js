import { createApp } from 'vue';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
// import { MotionPlugin, useMotionVariants } from '@vueuse/motion';
import {projects, skills} from '@/store/store'
import App from './App.vue';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

createApp(App).provide('projects', projects).provide('skills', skills)
  // .use(MotionPlugin, {
  //   directives: {
  //     'slide-from-left': {
  //       initial: {
  //         opacity: 0,
  //         x: -100,
  //       },
  //       enter: {
  //         opacity: 1,
  //         x: 0,
  //         transition: {
  //           delay: 1200,
  //           duration: 500,
  //           ease: 'ease',
  //         },
  //       },
  //     },
  //     'slide-from-right': {
  //       initial: {
  //         opacity: 0,
  //         x: 100,
  //       },
  //       enter: {
  //         opacity: 1,
  //         x: 0,
  //         transition: {
  //           delay: 1500,
  //           duration: 500,
  //           ease: 'ease',
  //         },
  //       },
  //     },
  //     'fade-in': {
  //       initial: {
  //         opacity: 0,
  //       },
  //       enter: {
  //         opacity: 1,
  //         transition: {
  //           delay: 1000,
  //           duration: 500,
  //           ease: 'ease',
  //         },
  //       },
  //     },
  //     'visible-from-left': {
  //       initial: {
  //         opacity: 0,
  //         x: -100,
  //       },
  //       visible: {
  //         opacity: 1,
  //         x: 0,
  //         transition: {
  //           delay: 300,
  //           duration: 1000,
  //           ease: 'ease',
  //         },
  //       },
  //     },
  //   },
  // })
  .mount('#app');
