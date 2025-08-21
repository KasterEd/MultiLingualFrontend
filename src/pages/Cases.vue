<template>
  <section class="max-w-screen-xl mx-auto px-6 py-12 space-y-8">
    <!-- Page Title & Intro -->
    <h1 class="text-3xl font-semibold">合作案例</h1>
    <p class="text-gray-700 leading-relaxed">
      企业主要项目：应急折叠保障房、单层房、二层房，订制各种尺寸的一体化活动板房，
      致力于为客户提供“质量第一，服务至上”的解决方案。
      以下是我们与多家行业领先企业的合作实例及项目展示。
    </p>

    <!-- Sub-navigation -->
    <nav class="flex space-x-6 border-b pb-4 text-sm font-medium">
      <router-link
        v-for="page in caseTabs"
        :key="page.slug"
        :to="`/cases/${page.slug}`"
        class="hover:text-blue-600"
        active-class="text-blue-600 border-b-2 border-blue-600 pb-1"
      >
        {{ page.label }}
      </router-link>
    </nav>

    <!-- Renders the selected sub-page -->
    <router-view />
  </section>
</template>

<script setup lang="ts">
import { caseTabs } from '@/data/cases'
</script>
