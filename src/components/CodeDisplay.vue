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
      class="whitespace-pre text-[hsl(26,68%,97%)] bg-radial from-[hsl(0,0%,25%)] to-[hsl(0,0%,15%)] max-w-[80vw] overflow-x-auto rounded-xl p-3 md:p-5 inset-shadow-[0px_0px_5px_hsla(0,0%,0%,50%)]"
      v-if="showCode"
      >{{ text }}</code
    >
  </div>
</template>

<style scoped></style>
