<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({ text: String, copyText: Boolean });

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
  <div class="flex flex-col gap-3">
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
      class="whitespace-pre bg-radial to-[hsl(26,68%,93%)] shadow-[3px_3px_3px_hsla(26,68%,20%,25%)] max-w-[80vw] overflow-x-auto rounded-xl p-3 md:p-5"
      v-if="showCode"
      >{{ text }}<br />
      <div v-if="copyText">
        <hr class="my-1 md:my-3 opacity-50" />
        <div
          @click="copyToClipboard"
          class="text-center underline underline-offset-8 cursor-pointer"
        >
          Copy to clipboard
        </div>
      </div>
    </code>
  </div>
</template>

<style scoped></style>
