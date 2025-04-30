<script setup lang="ts">
import Button from "../components/Button.vue";
</script>

<template>
  <div
    class="flex flex-col gap-10 items-center justify-center text-center -translate-y-25"
  >
    <p class="text-3xl md:text-5xl font-bold">Welcome to MyUI</p>
    <p class="text-xl md:text-3xl w-[30em] max-w-[80vw]">
      Build beautiful, responsive interfaces with ease.<br />
      Designed for speed, clarity, and creativity
    </p>
    <RouterLink to="/button">
      <Button
        color="primary"
        text="Get Started"
        class="shadow-[0px_0px_5px_hsla(0,0%,0%,50%)] font-semibold min-w-20 h-10 px-3 md:min-w-25 md:h-12 md:px-5 md:text-lg"
      />
    </RouterLink>
  </div>
</template>

<style scoped></style>
