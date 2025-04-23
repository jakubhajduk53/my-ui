<script setup lang="ts">
import Button from "../components/Button.vue";
</script>

<template>
  <div
    class="flex flex-col gap-10 items-center justify-center text-center -translate-y-25 h-full w-full"
  >
    <p class="text-3xl md:text-5xl font-bold">Welcome to MyUI</p>
    <p class="text-xl md:text-3xl w-[30em]">
      Build beautiful, responsive interfaces with ease.<br />
      Designed for speed, clarity, and creativity
    </p>
    <RouterLink to="/button">
      <Button color="primary" size="large" text="Get Started" />
    </RouterLink>
  </div>
</template>

<style scoped></style>
