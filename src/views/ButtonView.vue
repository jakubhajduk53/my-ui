<script setup lang="ts">
import Button from "../components/Button.vue";
import Table from "../components/Table.vue";
import CodeDisplay from "../components/CodeDisplay.vue";

const data = [
  {
    name: "Color",
    description: "",
    type: "enum",
    enumTooltip:
      "primary | secondary | tertiary | success | warning | danger | info",
    default: "secondary",
  },
  { name: "Text", description: "", type: "string", default: "" },
  { name: "Rounded", description: "", type: "boolean", default: "default" },
  {
    name: "Size",
    description: "",
    type: "enum",
    enumTooltip: "small | default | large",
    default: "default",
  },
];

const themesDisplay = `<Button color="primary" text="primary" /> 
<Button color="secondary" text="secondary" />
<Button color="tertiary" text="tertiary" />
<Button color="success" text="success" />
<Button color="warning" text="warning" />
<Button color="danger" text="danger" />
<Button color="info" text="info" />`;

const radiusDisplay = `<Button color="primary" text="default" />
<Button rounded color="primary" text="rounded" />`;

const sizeDisplay = `<Button size="small" color="secondary" text="small" />
<Button size="default" color="secondary" text="default" />
<Button size="large" color="secondary" text="large" />`;
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-10">
    <p class="text-3xl md:text-5xl font-bold">Buttons</p>
    <div class="flex flex-col items-center justify-center gap-10">
      <div class="flex flex-col items-center gap-3">
        <p class="text-xl md:text-3xl">Themes</p>
        <div class="flex gap-5">
          <Button color="primary" text="primary" />
          <Button color="secondary" text="secondary" />
          <Button color="tertiary" text="tertiary" />
          <Button color="success" text="success" />
          <Button color="warning" text="warning" />
          <Button color="danger" text="danger" />
          <Button color="info" text="info" />
        </div>
        <CodeDisplay :text="themesDisplay" />
      </div>
      <div class="flex flex-col items-center gap-3">
        <p class="text-xl md:text-3xl">Border radius</p>
        <div class="flex gap-5">
          <Button color="primary" text="default" />
          <Button rounded color="primary" text="rounded" />
        </div>
        <CodeDisplay :text="radiusDisplay" />
      </div>
      <div class="flex flex-col items-center gap-3">
        <p class="text-xl md:text-3xl">Size</p>
        <div class="flex gap-5 items-baseline">
          <Button size="small" color="secondary" text="small" />
          <Button size="default" color="secondary" text="default" />
          <Button size="large" color="secondary" text="large" />
        </div>
        <CodeDisplay :text="sizeDisplay" />
      </div>
    </div>
  </div>
  <Table :rows="data" />
</template>

<style scoped></style>
