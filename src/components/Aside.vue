<script setup lang="ts"></script>

<template>
  <div class="w-[300px]" />
  <div
    class="flex flex-col fixed top-0 left-0 h-screen items-center text-center w-[300px] max-w-[30%] bg-[hsl(26,68%,97%)] shadow-[0px_0px_5px_hsl(26,15%,50%)]"
  >
    <RouterLink
      to="/"
      class="py-3 w-full text-xl md:text-3xl cursor-pointer border-2 hover:bg-[hsl(26,68%,80%)] bg-[hsl(26,68%,90%)] border-[hsl(26,68%,85%)]"
      >Main Page
    </RouterLink>
    <div class="h-10 w-full bg-[hsl(26,68%,85%)]" />
    <RouterLink
      to="/button"
      class="py-3 w-full text-xl md:text-3xl cursor-pointer border-2 hover:bg-[hsl(26,68%,80%)] bg-[hsl(26,68%,90%)] border-[hsl(26,68%,85%)]"
      >Button
    </RouterLink>
    <RouterLink
      to="/input"
      class="py-3 w-full text-xl md:text-3xl cursor-pointer border-2 hover:bg-[hsl(26,68%,80%)] bg-[hsl(26,68%,90%)] border-[hsl(26,68%,85%)]"
      >Input
    </RouterLink>
  </div>
</template>

<style scoped></style>
