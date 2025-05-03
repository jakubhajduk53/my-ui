<script setup lang="ts">
import CodeDisplay from "../components/CodeDisplay.vue";
import Table from "../components/Table.vue";

const codeDisplay = `<CodeDisplay :text="Your text" />`;

const data = [
  {
    name: "Text",
    description: "Paste your code there",
    type: "string",
    default: "",
  },
];
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center gap-10">
      <p class="text-3xl md:text-5xl font-bold">Code Display</p>
      <p class="text-base md:text-xl w-[35em] max-w-[80vw] text-center">
        Allows easy showcasing of component source code with syntax
        highlighting.<br />
        Supports copy-to-clipboard functionality and customizable code block
        styles.
      </p>
      <CodeDisplay :text="codeDisplay" />
    </div>
  </div>
  <Table :rows="data" />
</template>

<style scoped></style>
