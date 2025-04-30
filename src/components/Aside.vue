<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref<boolean>(false);

const switchAside = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    :class="[
      'fixed top-0 left-0 z-10 flex h-screen transition-transform duration-300 ease-in-out',
      isOpen
        ? 'translate-x-0'
        : '-translate-x-[50vw] sm:-translate-x-[30vw] md:-translate-x-[15vw]',
    ]"
  >
    <div
      class="flex flex-col gap-1 md:gap-3 h-full items-center text-center w-[50vw] sm-[30vw] md:w-[15vw] bg-radial from-[hsl(26,68%,97%)] to-[hsl(26,68%,90%)]"
    >
      <RouterLink
        to="/"
        class="py-3 w-full text-xl md:text-3xl font-bold cursor-pointer border-2 rounded-xl bg-[hsl(26,68%,95%)] hover:bg-[hsl(26,68%,92%)] border-[hsl(26,68%,92%)] inset-shadow-[0px_0px_15px_hsl(26,68%,75%)]"
        >Main Page
      </RouterLink>
      <div class="w-full bg-[hsl(26,68%,92%)]" />
      <RouterLink
        to="/button"
        class="py-3 w-full text-xl md:text-3xl font-semibold cursor-pointer border-2 rounded-xl bg-[hsl(26,68%,95%)] hover:bg-[hsl(26,68%,92%)] border-[hsl(26,68%,92%)] inset-shadow-[0px_0px_15px_hsl(26,68%,75%)]"
        >Button
      </RouterLink>
      <RouterLink
        to="/color"
        class="py-3 w-full text-xl md:text-3xl font-semibold cursor-pointer border-2 rounded-xl bg-[hsl(26,68%,95%)] hover:bg-[hsl(26,68%,92%)] border-[hsl(26,68%,92%)] inset-shadow-[0px_0px_15px_hsl(26,68%,75%)]"
        >Color
      </RouterLink>
    </div>

    <div
      @click="switchAside"
      class="flex items-center px-1 md:px-3 text-xl md:text-3xl cursor-pointer bg-[hsl(26,68%,90%)]"
    >
      <i :class="isOpen ? 'bx bx-caret-left' : 'bx bx-caret-right'" />
    </div>
  </div>
</template>
