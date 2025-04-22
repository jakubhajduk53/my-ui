<script setup lang="ts">
import Button from "../components/Button.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <p class="text-3xl md:text-5xl font-bold">Buttons</p>
    <div class="flex flex-col items-center justify-center gap-5">
      <p class="text-xl md:text-3xl font-semibold">Basic themes</p>
      <p class="text-base md:text-xl">Default</p>
      <div class="flex gap-5">
        <Button color="primary" text="primary" />
        <Button color="secondary" text="secondary" />
        <Button color="tertiary" text="tertiary" />
      </div>
      <p class="text-base md:text-xl">Rounded</p>
      <div class="flex gap-5">
        <Button rounded color="primary" text="primary" />
        <Button rounded color="secondary" text="secondary" />
        <Button rounded color="tertiary" text="tertiary" />
      </div>
      <p class="text-xl md:text-3xl font-semibold mt-5">Situational themes</p>
      <p class="text-base md:text-xl">Default</p>
      <div class="flex gap-5">
        <Button color="success" text="success" />
        <Button color="warning" text="warning" />
        <Button color="danger" text="danger" />
        <Button color="info" text="info" />
      </div>
      <p class="text-base md:text-xl">Rounded</p>
      <div class="flex gap-5">
        <Button rounded color="success" text="success" />
        <Button rounded color="warning" text="warning" />
        <Button rounded color="danger" text="danger" />
        <Button rounded color="info" text="info" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
