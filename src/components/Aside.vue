<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref<boolean>(true);

const switchAside = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    :class="[
      'fixed top-0 left-0 z-10 flex h-screen transition-transform duration-300 ease-in-out text-font-color ',
      isOpen
        ? 'translate-x-0'
        : '-translate-x-[50vw] sm:-translate-x-[30vw] md:-translate-x-[15vw]',
    ]"
  >
    <div
      id="asideContainer"
      class="flex flex-col h-full items-center text-center w-[50vw] sm-[30vw] md:w-[15vw]"
    >
      <RouterLink
        to="/"
        class="py-3 w-full text-xl md:text-3xl font-bold cursor-pointer bg-radial from-[hsl(26,18%,50%)] to-[hsl(26,18%,45%)] hover:text-[hsl(26,68%,10%)] transition duration-100"
        >Main Page
      </RouterLink>
      <div class="w-full bg-[hsl(26,68%,92%)]" />
      <RouterLink
        to="/button"
        class="py-3 w-full text-xl md:text-3xl font-semibold cursor-pointer bg-radial from-[hsl(26,18%,55%)] to-[hsl(26,18%,50%)] hover:text-[hsl(26,68%,10%)] transition duration-100"
        >Button
      </RouterLink>
      <RouterLink
        to="/color"
        class="py-3 w-full text-xl md:text-3xl font-semibold cursor-pointer bg-radial from-[hsl(26,18%,55%)] to-[hsl(26,18%,50%)] hover:text-[hsl(26,68%,10%)] transition duration-100"
        >Color
      </RouterLink>
    </div>

    <div
      @click="switchAside"
      class="flex items-center text-xl md:text-3xl cursor-pointer bg-gradient-to-l from-[hsl(26,18%,55%)] to-[hsl(26,18%,45%)]"
    >
      <i :class="isOpen ? 'bx bx-caret-left' : 'bx bx-caret-right'" />
    </div>
  </div>
</template>
<style scoped>
.router-link-active {
  color: hsl(26, 68%, 10%);
}
</style>
