<script setup lang="ts">
import { computed } from "vue";
import type { ButtonInterface } from "../interfaces";

const props = defineProps<ButtonInterface>();

const buttonColor = computed(() => {
  switch (props.color) {
    case "primary":
      return "bg-primary hover:bg-primary-dark";
    case "secondary":
      return "bg-secondary hover:bg-secondary-dark";
    case "tertiary":
      return "bg-tertiary hover:bg-tertiary-dark";
    case "warning":
      return "bg-warning hover:bg-warning-dark";
    case "danger":
      return "bg-danger hover:bg-danger-dark";
    case "info":
      return "bg-info hover:bg-info-dark";
    case "success":
      return "bg-success hover:bg-success-dark";
    case "transparent":
      return "";
    default:
      return "bg-secondary hover:bg-secondary-dark";
  }
});

const buttonSize = computed(() => {
  switch (props.size) {
    case "small":
      return "min-w-16 h-8 px-1 text-sm";
    case "default":
      return "min-w-20 h-10 px-3";
    case "large":
      return "min-w-25 h-12 px-5 text-lg";
    default:
      return "min-w-20 h-10 px-3";
  }
});

const borderClasses = computed(() => {
  return props.rounded ? "rounded-full" : "rounded-lg";
});
</script>

<template>
  <button
    :class="[
      buttonColor,
      borderClasses,
      buttonSize,
      'text-font-color cursor-pointer border-black/40 border-2 inset-shadow-[0px_0px_5px_hsla(0,0%,0%,50%)] duration-100',
    ]"
  >
    {{ props.text }}
  </button>
</template>

<style scoped></style>
