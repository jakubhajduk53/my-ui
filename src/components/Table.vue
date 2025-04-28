<script setup lang="ts">
import { defineProps, computed } from "vue";

interface TableRow {
  [key: string]: string;
}

const props = defineProps<{
  rows: TableRow[];
}>();

const columns = computed(() => {
  return props.rows.length > 0 ? Object.keys(props.rows[0]) : [];
});
</script>

<template>
  <div
    class="flex flex-col h-full w-full gap-5 items-center justify-center my-10 bg-[hsl(26,68%,97%)] self-end"
  >
    <hr class="w-full" />
    <div class="text-center">
      <table class="border">
        <thead>
          <tr>
            <th
              v-for="column in columns"
              :key="column"
              class="p-3 font-semibold"
            >
              {{
                column[0].toLocaleUpperCase() + column.slice(1, column.length)
              }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td v-for="column in columns" :key="column" class="p-3 border">
              {{ row[column] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
