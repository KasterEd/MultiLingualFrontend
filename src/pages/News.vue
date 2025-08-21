<!-- src/pages/news/News.vue -->
<template>
  <section class="max-w-7xl mx-auto px-4 py-6">
    <!-- Breadcrumb -->
    <nav class="text-sm text-gray-500 mb-4 flex items-center gap-2">
      <RouterLink :to="localizedPath('/')" class="hover:text-blue-600">{{ L(TEXT.home) }}</RouterLink>
      <span>/</span>
      <span class="text-gray-700">{{ L(TEXT.news) }}</span>
    </nav>

    <!-- Title -->
    <header class="mb-4">
      <h1 class="text-2xl sm:text-3xl font-semibold text-gray-900">
        {{ L(TEXT.news) }}
      </h1>
    </header>

    <!-- Category tabs -->
    <div class="border-b mb-6">
      <nav class="-mb-px flex flex-wrap gap-4">
        <RouterLink
          v-for="tab in tabs"
          :key="tab.key"
          :to="localizedPath(`/news/${tab.key}`)"
          class="whitespace-nowrap px-3 py-2 border-b-2 text-sm"
          :class="isActive(tab.key) ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-600'"
        >
          {{ L(tab.label) }}
        </RouterLink>

        <!-- If you keep FAQ as a separate top-level route, you can show it here too:
        <RouterLink :to="localizedPath('/faq')" class="whitespace-nowrap px-3 py-2 border-b-2 text-sm border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-600">
          {{ L(TEXT.faq) }}
        </RouterLink>
        -->
      </nav>
    </div>

    <!-- Child views (list or detail) -->
    <router-view />
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useL } from '@/composables/useL'
import type { LText } from '@/types/localized'

const route = useRoute()
const { L } = useL()

/** Tabs (company / industry) */
const tabs = [
  { key: 'company',  label: { zh:'公司新闻', kz:'Компания жаңалықтары', ru:'Новости компании' } as LText },
  { key: 'industry', label: { zh:'行业动态', kz:'Сала жаңалықтары',   ru:'Новости отрасли'  } as LText },
]

/** Active state helper */
function isActive(key: string) {
  return route.params.category === key
}

/** Keep current /zh|kz|ru prefix for links */
function localizedPath(target: string) {
  const m = route.fullPath.match(/^\/(zh|kz|ru)(\/|$)/)
  if (m) {
    const lang = m[1]
    const clean = target.startsWith('/') ? target : `/${target}`
    return `/${lang}${clean === '/' ? '' : clean}`
  }
  return target
}

/** Localized UI strings */
const TEXT = {
  home: { zh:'首页', kz:'Басты бет', ru:'Главная' } as LText,
  news: { zh:'新闻中心', kz:'Жаңалықтар', ru:'Новости' } as LText,
  // faq:  { zh:'常见问题', kz:'ЖҚС', ru:'Вопросы и ответы' } as LText,
}
</script>
