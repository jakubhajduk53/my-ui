<script setup lang="ts">
import { ref } from "vue";

defineProps({ text: String });

const showCode = ref<boolean>(false);

const test = `<Button color="primary" text="primary" /> 
<Button color="secondary" text="secondary" />
<Button color="tertiary" text="tertiary" />
<Button color="success" text="success" />
<Button color="warning" text="warning" />
<Button color="danger" text="danger" />
<Button color="info" text="info" />`;
</script>

<template>
  <div class="flex flex-col">
    <div
      class="p-3 w-full text-center text-base md:text-xl cursor-pointer select-none"
      @click="
        () => {
          showCode = !showCode;
        }
      "
    >
      Show code &lt;/&gt;
    </div>
    <code class="whitespace-pre bg-[hsl(0,0%,93%)] p-5" v-if="showCode">{{
      test
    }}</code>
  </div>
</template>

<style scoped></style>
