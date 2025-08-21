<!-- src/pages/CooperationPage.vue -->
<template>
  <div class="w-full">
    <!-- Banner (use your existing banner component if you have one) -->
    <section class="relative h-40 sm:h-56 md:h-64 bg-center bg-cover"
             style="background-image:url('/assets/banners/cooperation.jpg')">
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 h-full flex items-end">
        <div class="container mx-auto px-4 pb-4 text-white">
          <h1 class="text-2xl sm:text-3xl font-semibold">{{ t('cooperation.title') }}</h1>
          <div class="text-xs opacity-90 mt-1">
            <RouterLink class="hover:underline" to="/">{{ t('cooperation.breadcrumbHome') }}</RouterLink>
            <span class="mx-1"> / </span>{{ t('cooperation.title') }}
          </div>
        </div>
      </div>
    </section>

    <!-- Tabs -->
    <div class="container mx-auto px-4">
      <div class="flex gap-2 sm:gap-4 mt-6 border-b">
        <button
          class="px-3 py-2 text-sm sm:text-base -mb-px border-b-2"
          :class="tabComputed==='partners' ? 'border-primary font-medium' : 'border-transparent text-gray-500'"
          @click="goTab('partners')">
          {{ t('cooperation.tab.partners') }}
        </button>
        <button
          class="px-3 py-2 text-sm sm:text-base -mb-px border-b-2"
          :class="tabComputed==='cases' ? 'border-primary font-medium' : 'border-transparent text-gray-500'"
          @click="goTab('cases')">
          {{ t('cooperation.tab.cases') }}
        </button>
      </div>

      <PartnersGrid v-if="tabComputed==='partners'" class="mt-6" />
      <CasesGrid v-else class="mt-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import PartnersGrid from '@/pages/cooperation/PartnersGrid.vue'
import CasesGrid from '@/pages/cooperation/CasesGrid.vue'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const tabComputed = computed(() =>
  (route.query.tab as string) === 'cases' ? 'cases' : 'partners'
)

function goTab(tab: 'partners'|'cases') {
  router.replace({ name: 'cooperation', query: { tab } })
}
</script>

<style scoped>
/* Tailwind handles most styles; define your primary color in tailwind config */
</style>
