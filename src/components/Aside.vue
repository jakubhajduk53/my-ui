<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col items-center text-center w-[20em] h-full bg-[hsl(26,68%,98%)] shadow-[0px_0px_15px_hsl(26,15%,50%)]"
  >
    <RouterLink
      to="/"
      class="py-3 w-full text-xl md:text-3xl cursor-pointer border-2 bg-[hsl(26,68%,90%)] border-[hsl(26,68%,85%)]"
      >Main Page
    </RouterLink>
    <div class="h-10 w-full bg-[hsl(26,68%,85%)]" />
    <RouterLink
      to="/button"
      class="py-3 w-full text-xl md:text-3xl cursor-pointer border-2 bg-[hsl(26,68%,90%)] border-[hsl(26,68%,85%)]"
      >Button
    </RouterLink>
    <RouterLink
      to="/input"
      class="py-3 w-full text-xl md:text-3xl cursor-pointer border-2 bg-[hsl(26,68%,90%)] border-[hsl(26,68%,85%)]"
      >Input
    </RouterLink>
    <RouterLink
      to="/1"
      class="py-3 w-full text-xl md:text-3xl cursor-pointer border-2 bg-[hsl(26,68%,90%)] border-[hsl(26,68%,85%)]"
      >1
    </RouterLink>
    <RouterLink
      to="/2"
      class="py-3 w-full text-xl md:text-3xl cursor-pointer border-2 bg-[hsl(26,68%,90%)] border-[hsl(26,68%,85%)]"
      >2
    </RouterLink>
    <RouterLink
      to="/3"
      class="py-3 w-full text-xl md:text-3xl cursor-pointer border-2 bg-[hsl(26,68%,90%)] border-[hsl(26,68%,85%)]"
      >3
    </RouterLink>
  </div>
</template>

<style scoped></style>
