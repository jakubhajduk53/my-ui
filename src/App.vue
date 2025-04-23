<script setup lang="ts">
import { RouterView } from "vue-router";
import Aside from "./components/Aside.vue";
</script>

<template>
  <div class="flex items-center justify-center w-full h-full">
    <Aside />
    <div class="flex-1">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
