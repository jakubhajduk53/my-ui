<script setup lang="ts">
interface TableRow {
  name: string;
  description: string;
  type: string;
  default: string;
  enumTooltip?: string;
}

const props = defineProps<{
  rows: TableRow[];
}>();

const columns: (keyof TableRow)[] = ["name", "description", "type", "default"];
</script>

<template>
  <div
    class="flex flex-col h-full w-full gap-5 items-center justify-center my-10 bg-[hsl(26,68%,97%)]"
  >
    <hr class="w-full" />
    <div class="text-center max-w-[80vw]">
      <table class="border">
        <thead>
          <tr>
            <th
              v-for="column in columns"
              :key="column"
              class="p-1 md:p-3 font-bold"
            >
              {{ column[0].toUpperCase() + column.slice(1) }}
            </th>
          </tr>
        </thead>
        <tbody class="max-w-[80vw]">
          <tr v-for="(row, rowIndex) in props.rows" :key="rowIndex">
            <td
              v-for="column in columns"
              :key="column"
              class="p-1 md:p-3 border text-wrap"
            >
              <template v-if="column === 'type' && row.type === 'enum'">
                <div class="relative group">
                  <span
                    class="flex items-baseline cursor-pointer underline underline-offset-4 decoration-dotted"
                  >
                    enum<i class="bx bx-info-circle"></i>
                  </span>
                  <div
                    class="absolute hidden group-hover:block bg-[hsl(0,0%,93%)] shadow-lg rounded p-1 md:p-3 -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10"
                  >
                    {{ row.enumTooltip }}
                  </div>
                </div>
              </template>

              <template v-else>
                <div
                  class="max-w-[25vw] break-words"
                  :class="[column === 'name' ? 'font-semibold' : '']"
                >
                  {{ row[column] }}
                </div>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
