<script setup lang="ts">
import Button from "../components/Button.vue";
</script>

<template>
  <div
    class="flex flex-col gap-10 items-center justify-center text-center -translate-y-25"
  >
    <p class="text-3xl md:text-5xl font-bold">Welcome to MyUI</p>
    <p class="text-base md:text-xl w-[30em] max-w-[80vw]">
      Build beautiful, responsive interfaces with ease.<br />
      Designed for speed, clarity, and creativity
    </p>
    <RouterLink to="/button">
      <Button
        color="transparent"
        text="Get Started"
        size="large"
        class="bg-[hsl(26,28%,40%)] hover:bg-[hsl(26,28%,35%)]"
      />
    </RouterLink>
  </div>
</template>

<style scoped></style>
