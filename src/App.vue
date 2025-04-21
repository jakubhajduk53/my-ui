<script setup lang="ts">
import Button from "./components/Button.vue";
import Input from "./components/Input.vue";
</script>

<template>
  <div class="flex gap-5">
    <Button color="primary" text="primary" />
    <Button color="secondary" text="secondary" />
    <Button color="tertiary" text="tertiary" />
    <Button color="warning" text="warning" />
    <Button color="danger" text="danger" />
    <Button color="info" text="info" />
    <Button color="success" text="success" />
  </div>
  <Input />
</template>

<style scoped></style>
