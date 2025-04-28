<script setup lang="ts">
import { ref } from "vue";

defineProps({ text: String });

const showCode = ref<boolean>(false);
</script>

<template>
  <div class="flex flex-col">
    <div
      class="p-3 w-full text-center text-base md:text-xl cursor-pointer select-none underline underline-offset-8"
      @click="
        () => {
          showCode = !showCode;
        }
      "
    >
      Show code &lt;/&gt;
    </div>
    <code
      class="whitespace-pre bg-radial from-[hsl(0,0%,93%)] to-[hsl(0,0%,80%)] rounded-xl p-5 inset-shadow-[0px_0px_5px_hsla(0,0%,0%,50%)]"
      v-if="showCode"
      >{{ text }}</code
    >
  </div>
</template>

<style scoped></style>
