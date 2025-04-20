<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<ButtonInterface>();

interface ButtonInterface {
  color?: "primary" | "warning" | "info";
}

const buttonColor = computed(() => {
  switch (props.color) {
    case "primary":
      return "bg-primary";
    case "warning":
      return "bg-warning";
    case "info":
      return "bg-info";
  }
});
</script>

<template>
  <button :class="[buttonColor, 'w-20 h-10 rounded-lg cursor-pointer']">
    123
  </button>
</template>

<style scoped></style>
