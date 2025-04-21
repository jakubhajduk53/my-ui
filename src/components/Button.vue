<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<ButtonInterface>();

interface ButtonInterface {
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "warning"
    | "danger"
    | "info"
    | "success";
  text?: string;
}

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
    default:
      return "bg-secondary hover:bg-secondary-dark";
  }
});
</script>

<template>
  <button
    :class="[
      buttonColor,
      'text-font-color w-20 h-10 rounded-lg cursor-pointer border-black/40 border-2 inset-shadow-[0px_0px_5px_hsla(0,0%,0%,50%)]',
    ]"
  >
    {{ props.text }}
  </button>
</template>

<style scoped></style>
