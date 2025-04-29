<script setup lang="ts"></script>

<template>
  <div class="w-[300px]" />
  <div
    class="flex flex-col fixed top-0 left-0 gap-1 md:gap-3 h-screen items-center text-center w-[300px] max-w-[30%] bg-radial from-[hsl(26,68%,97%)] to-[hsl(26,68%,90%)] shadow-[0px_0px_5px_hsl(26,15%,50%)]"
  >
    <RouterLink
      to="/"
      class="py-3 w-full text-xl md:text-3xl font-bold cursor-pointer border-2 rounded-xl bg-[hsl(26,68%,95%)] hover:bg-[hsl(26,68%,92%)] border-[hsl(26,68%,92%)] inset-shadow-[0px_0px_15px_hsl(26,68%,75%)]"
      >Main Page
    </RouterLink>
    <div class="w-full bg-[hsl(26,68%,92%)]" />
    <RouterLink
      to="/button"
      class="py-3 w-full text-xl md:text-3xl font-semibold cursor-pointer border-2 rounded-xl bg-[hsl(26,68%,95%)] hover:bg-[hsl(26,68%,92%)] border-[hsl(26,68%,92%)] inset-shadow-[0px_0px_15px_hsl(26,68%,75%)]"
      >Button
    </RouterLink>
    <RouterLink
      to="/input"
      class="py-3 w-full text-xl md:text-3xl font-semibold cursor-pointer border-2 rounded-xl bg-[hsl(26,68%,95%)] hover:bg-[hsl(26,68%,92%)] border-[hsl(26,68%,92%)] inset-shadow-[0px_0px_15px_hsl(26,68%,75%)]"
      >Input
    </RouterLink>
  </div>
</template>

<style scoped></style>
