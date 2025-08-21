<!-- src/sections/cooperation/PartnersGrid.vue -->
<template>
  <section>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
      <article v-for="p in partners" :key="p.id"
        class="group border rounded-xl p-4 bg-white shadow-sm hover:shadow transition">
        <div class="aspect-[4/3] flex items-center justify-center">
          <img :src="p.logo" :alt="t(p.i18nKey)"
               loading="lazy"
               class="max-h-16 sm:max-h-20 object-contain" />
        </div>
        <div class="mt-3">
          <p class="text-sm sm:text-base font-medium truncate">{{ t(p.i18nKey) }}</p>
          <p v-if="p.tag" class="text-xs text-gray-500 mt-1">{{ p.tag }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { partners } from '@/data/partners'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
