<script setup>
import { inject, ref, watch } from 'vue';
const { galleryIndex, updateIndex } = inject('gallery');
const projects = inject('projects');

const images = ref();
const titles = ref();
const total = ref();
const index = ref(0);

const change = (val) => {
  index.value = (index.value + total.value + val) % total.value;
};

watch(
  () => galleryIndex.value,
  (value) => {
    index.value = 0;
    images.value = value >= 0 ? Object.values(projects[value].collection) : [];
    titles.value = value >= 0 ? Object.keys(projects[value].collection) : [];
    total.value =
      value >= 0 ? Object.keys(projects[value].collection).length : 0;
    value >= 0
      ? document.body.classList.add('modal-open')
      : document.body.classList.remove('modal-open');
  }
);

if (galleryIndex.value >= 0) {
  console.log(projects[galleryIndex.value].collection);
}
</script>
<template>
  <Transition name="modal">
    <div v-if="galleryIndex >= 0" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container my-0 mx-auto w-11/12 bg-white lg:w-4/5">
          <div class="modal-body">
            <img class="h-full" :src="images[index]" alt="" />
          </div>

          <!-- modal footer -->
          <div class="flex h-28 md:h-20 flex-wrap justify-between px-4 py-2 md:flex-row">
            <div class="my-auto order-1 w-1/2 md:w-1/3">
              <h1 class="font-medium capitalize">
                {{ `${titles[index]} Page` }}
              </h1>
              <h1 class="text-xs font-normal">
                {{ `${index + 1} of ${total}` }}
              </h1>
            </div>
            <div class="flex order-3 w-full md:w-1/3 md:order-2 flex-row justify-center space-x-20 lg:space-x-8">
              <button
                class="flex flex-col items-center justify-center text-xs"
                @click="change(-1)"
              >
                <svg
                  class="h-8 md:h-1/3 fill-neutral-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
                  />
                </svg>
                prev
              </button>
              <button
                class="flex flex-col items-center justify-center text-xs"
                @click="change(+1)"
              >
                <svg
                  class="h-8 md:h-1/3 fill-neutral-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                  />
                </svg>
                next
              </button>
            </div>
            <button class="my-auto order-2 md:order-3 lg:w-1/3 text-right" @click="updateIndex(-1)">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="postcss" scoped>
.modal-mask {
  @apply fixed top-0 left-0 h-screen w-screen bg-neutral-900 bg-opacity-60 backdrop-blur-sm;
  z-index: 9998;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  @apply p-1;
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
