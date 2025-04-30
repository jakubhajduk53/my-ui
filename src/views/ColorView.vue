<script setup lang="ts">
const colors = {
  light: {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
    warning: "bg-warning",
    danger: "bg-danger",
    info: "bg-info",
    success: "bg-success",
  },
  dark: {
    "primary-dark": "bg-primary-dark",
    "secondary-dark": "bg-secondary-dark",
    "tertiary-dark": "bg-tertiary-dark",
    "warning-dark": "bg-warning-dark",
    "danger-dark": "bg-danger-dark",
    "info-dark": "bg-info-dark",
    "success-dark": "bg-success-dark",
  },
};
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-10">
    <p class="text-3xl md:text-5xl font-bold">Color</p>
    <p class="text-base md:text-xl w-[35em] max-w-[80vw] text-center">
      MyUI uses curated color palettes to ensure a consistent and cohesive
      design.<br />
      Uses the HSL model for flexible hue, saturation, and lightness control
    </p>
    <div class="flex text-[hsl(26,68%,97%)]">
      <div
        v-for="(className, name) in colors.light"
        :key="name"
        class="p-5"
        :class="className"
      >
        {{ name }}
      </div>
    </div>
    <div class="flex text-[hsl(26,68%,97%)]">
      <div
        v-for="(className, name) in colors.dark"
        :key="name"
        class="p-5"
        :class="className"
      >
        {{ name }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
