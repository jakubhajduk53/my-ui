<script setup lang="ts">
import Button from "../components/Button.vue";
import Table from "../components/Table.vue";
import CodeDisplay from "../components/CodeDisplay.vue";

const data = [
  {
    name: "color",
    description: "Defines the component's color theme",
    type: "enum",
    enumTooltip:
      "primary | secondary | tertiary | success | warning | danger | info",
    default: "secondary",
  },
  {
    name: "text",
    description: "The text content displayed inside the component",
    type: "string",
    default: "",
  },
  {
    name: "rounded",
    description: "Applies rounded corners to the component",
    type: "boolean",
    default: "false",
  },
  {
    name: "size",
    description: "Controls the size of the component",
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
    <p class="text-3xl md:text-5xl font-bold">Button</p>
    <p class="text-base md:text-xl w-[35em] max-w-[80vw] text-center">
      Supports multiple color themes, sizes, and optional rounded corners.<br />
      Easily customizable for consistent design
    </p>
    <div class="flex flex-col items-center justify-center gap-10">
      <div class="flex flex-col items-center gap-3">
        <p class="text-xl md:text-3xl">Themes</p>
        <div class="flex flex-col sm:flex-row gap-5">
          <Button color="primary" text="primary" />
          <Button color="secondary" text="secondary" />
          <Button color="tertiary" text="tertiary" />
          <Button color="success" text="success" />
          <Button color="warning" text="warning" />
          <Button color="danger" text="danger" />
          <Button color="info" text="info" />
        </div>
        <CodeDisplay copyText :text="themesDisplay" />
      </div>
      <div class="flex flex-col items-center gap-3">
        <p class="text-xl md:text-3xl">Border radius</p>
        <div class="flex gap-5">
          <Button color="primary" text="default" />
          <Button rounded color="primary" text="rounded" />
        </div>
        <CodeDisplay copyText :text="radiusDisplay" />
      </div>
      <div class="flex flex-col items-center gap-3">
        <p class="text-xl md:text-3xl">Size</p>
        <div class="flex gap-5 items-baseline">
          <Button size="small" color="secondary" text="small" />
          <Button size="default" color="secondary" text="default" />
          <Button size="large" color="secondary" text="large" />
        </div>
        <CodeDisplay copyText :text="sizeDisplay" />
      </div>
    </div>
  </div>
  <Table :rows="data" />
</template>

<style scoped></style>
