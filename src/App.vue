<script setup lang="ts">
import Aside from "./components/Aside.vue";
import ButtonView from "./views/ButtonView.vue";
</script>

<template>
  <div class="flex items-center justify-center w-full h-full">
    <Aside />
    <div class="flex-1">
      <ButtonView />
    </div>
  </div>
</template>

<style scoped></style>
