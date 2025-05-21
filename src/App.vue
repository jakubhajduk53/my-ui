<script setup lang="ts">
import { RouterView } from "vue-router";
import Aside from "./components/Aside.vue";
</script>

<template>
  <div class="flex w-full min-h-screen items-center justify-center">
    <Aside />
    <div class="flex flex-1 flex-col mt-10 z-0">
      <Transition name="fade-slide" mode="in-out">
        <RouterView />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  transition-delay: 0.1s;
}
.fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transition-delay: 0s;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
