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
  font: {
    light: "bg-[hsl(26,68%,20%)] text-font-color",
    dark: "bg-font-color text-[hsl(26,68%,20%)]",
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
    <div class="flex flex-col gap-5 md:gap-10 max-w-[80vw]">
      <div class="flex flex-col items-center gap-3 md:gap-5">
        <p class="text-xl md:text-3xl">Light</p>
        <div
          class="flex flex-wrap justify-center text-center text-[hsl(26,68%,97%)]"
        >
          <div
            v-for="(className, name) in colors.light"
            :key="name"
            class="p-5 w-[150px]"
            :class="className"
          >
            {{ name }}
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-3 md:gap-5">
        <p class="text-xl md:text-3xl">Dark</p>
        <div
          class="flex flex-wrap text-center justify-center text-[hsl(26,68%,97%)]"
        >
          <div
            v-for="(className, name) in colors.dark"
            :key="name"
            class="p-5 w-[150px]"
            :class="className"
          >
            {{ name }}
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-3 md:gap-5">
        <p class="text-xl md:text-3xl">Font color</p>
        <div
          class="flex flex-wrap justify-center text-center text-[hsl(26,68%,97%)]"
        >
          <div
            v-for="(className, name) in colors.font"
            :key="name"
            class="p-5 w-[150px] text-xl md:text-3xl border border-[hsl(26,68%,20%)]"
            :class="className"
          >
            {{ name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
