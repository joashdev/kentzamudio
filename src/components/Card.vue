<script setup>
import { inject, ref } from 'vue';
const projects = inject('projects');
const { updateIndex } = inject('gallery');
</script>

<template>
  <div
    class="project_card group col-span-1 flex h-full w-full flex-col rounded-xl bg-black"
    v-for="(project, index) in projects"
    :key="index"
  >
    <img
      class="w-full grayscale transition-all duration-300 ease-in group-hover:grayscale-0"
      :src="project.img"
      alt=""
    />
    <div
      class="flex h-full w-full flex-col justify-between bg-neutral-900 bg-opacity-30 px-5 pt-3 pb-5 transition-all group-hover:bg-opacity-60"
    >
      <div>
        <h1 class="text-2xl font-semibold">{{ project.name }}</h1>
        <p class="pt-4 text-sm font-extralight">{{ project.description }}</p>
        <p class="pt-4 text-xs font-extralight uppercase">
          <!-- <span class="mx-2" v-for="(item, index) in project.tech" :key="index">
            {{ item }}
          </span> -->
          <!-- {{project.tech.toString().toUpperCase().split(',').join(' ')}} -->
        </p>
      </div>
      <div class="mt-4 flex h-8 w-full flex-row items-center justify-between">
        <button
          class="my-1 mx-1 flex h-full w-1/3 items-center justify-center bg-neutral-900 bg-opacity-50 text-center transition-all duration-200 ease-in hover:scale-105 hover:bg-opacity-80 hover:font-semibold"
          @click="updateIndex(index)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="mr-2 h-4 fill-white"
          >
            <path
              d="M528 32H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48H528c26.51 0 48-21.49 48-48v-256C576 53.49 554.5 32 528 32zM223.1 96c17.68 0 32 14.33 32 32S241.7 160 223.1 160c-17.67 0-32-14.33-32-32S206.3 96 223.1 96zM494.1 311.6C491.3 316.8 485.9 320 480 320H192c-6.023 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.332-16.68l70-96C252.1 194.4 256.9 192 262 192c5.111 0 9.916 2.441 12.93 6.574l22.35 30.66l62.74-94.11C362.1 130.7 367.1 128 373.3 128c5.348 0 10.34 2.672 13.31 7.125l106.7 160C496.6 300 496.9 306.3 494.1 311.6zM456 432H120c-39.7 0-72-32.3-72-72v-240C48 106.8 37.25 96 24 96S0 106.8 0 120v240C0 426.2 53.83 480 120 480h336c13.25 0 24-10.75 24-24S469.3 432 456 432z"
            />
          </svg>
          Gallery
        </button>
        <a
          v-if="project.url"
          class="my-1 mx-1 flex h-full w-1/3 items-center justify-center bg-neutral-900 bg-opacity-50 text-center transition-all duration-200 ease-in hover:scale-105 hover:bg-opacity-80 hover:font-semibold"
          :title="`Visit ${project.url}`"
          :href="project.url"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="mr-2 h-4 fill-white"
          >
            <path
              d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"
            />
          </svg>
          Live
        </a>
        <div
          v-if="!project.url"
          class="my-1 mx-1 flex h-full w-1/3 cursor-not-allowed items-center justify-center bg-neutral-900 bg-opacity-10 text-center text-neutral-900 transition-all duration-200 ease-in"
          title="Site Not Available"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="mr-2 h-4 fill-neutral-900"
          >
            <path
              d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"
            />
          </svg>
          Live
        </div>
        <a
          class="my-1 mx-1 flex h-full w-1/3 items-center justify-center bg-neutral-900 bg-opacity-50 text-center transition-all duration-200 ease-in hover:scale-105 hover:bg-opacity-80 hover:font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            class="mr-2 h-4 fill-white"
          >
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
          </svg>
          Repo
        </a>
      </div>
    </div>
    <!-- <div
      v-if="hovered === index"
      class="absolute h-full w-full rounded-xl bg-black bg-opacity-50 transition-all duration-300 ease-in group-hover:backdrop-blur-sm"
    ></div> -->
  </div>
</template>

<style scoped></style>
