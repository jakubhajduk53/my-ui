<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({ text: String });

const showCode = ref<boolean>(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.text as string);
  } catch (err) {
    console.error(err);
  }
};
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
      class="whitespace-pre text-[hsl(26,68%,97%)] bg-[hsl(26,38%,20%)] max-w-[80vw] overflow-x-auto rounded-xl p-3 md:p-5 inset-shadow-[0px_0px_5px_hsla(0,0%,0%,50%)]"
      v-if="showCode"
      >{{ text }}<br />
      <hr class="my-1 md:my-3 opacity-50" />
      <div
        @click="copyToClipboard"
        class="text-center underline underline-offset-8 cursor-pointer text-[hsl(26,68%,97%)]"
      >
        Copy to clipboard
      </div>
    </code>
  </div>
</template>

<style scoped></style>
