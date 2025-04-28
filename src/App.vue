<script setup lang="ts">
import { RouterView } from "vue-router";
import Aside from "./components/Aside.vue";
</script>

<template>
  <div class="flex w-full min-h-screen items-center justify-center">
    <Aside />
    <div class="flex flex-1 flex-col mt-10">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
