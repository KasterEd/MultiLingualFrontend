<!-- src/sections/cooperation/CasesGrid.vue -->
<template>
  <section>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <article v-for="c in coopCases" :key="c.id"
        class="rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition">
        <div class="aspect-[4/3] overflow-hidden">
          <img :src="c.image" :alt="c.title || 'case'"
               loading="lazy"
               class="w-full h-full object-cover group-hover:scale-[1.02] transition" />
        </div>
        <div class="px-4 py-3 text-sm text-gray-600">
          {{ c.title || '合作案例' }}
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { coopCases } from '@/data/cases'
</script>
