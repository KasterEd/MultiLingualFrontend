<!-- src/pages/Contact.vue -->
<template>
  <section class="max-w-7xl mx-auto px-4 py-8">
    <!-- Breadcrumb -->
    <nav class="text-sm text-gray-500 mb-4 flex items-center gap-2">
      <RouterLink :to="localizedPath('/')" class="hover:text-blue-600">{{ L(TEXT.home) }}</RouterLink>
      <span>/</span>
      <span class="text-gray-700">{{ L(TEXT.contact) }}</span>
    </nav>

    <!-- Title -->
    <header class="mb-6">
      <h1 class="text-2xl sm:text-3xl font-semibold text-gray-900">
        {{ L(TEXT.contact) }}
      </h1>
      <p class="mt-2 text-gray-600">
        {{ L(TEXT.subtitle) }}
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Left: Contact info -->
      <div class="space-y-6">
        <div class="rounded-lg border bg-white p-5">
          <h2 class="text-lg font-semibold text-gray-900 mb-3">{{ L(TEXT.office) }}</h2>

          <div class="space-y-3 text-sm text-gray-700">
            <div class="flex gap-3">
              <span class="mt-0.5 text-gray-400">📍</span>
              <div>
                <div class="font-medium">{{ L(TEXT.addressLabel) }}</div>
                <div class="mt-0.5 whitespace-pre-line">{{ current.address }}</div>
              </div>
            </div>

            <div class="flex gap-3">
              <span class="mt-0.5 text-gray-400">⏰</span>
              <div>
                <div class="font-medium">{{ L(TEXT.hoursLabel) }}</div>
                <div class="mt-0.5 whitespace-pre-line">{{ current.hours }}</div>
              </div>
            </div>

            <div class="flex gap-3">
              <span class="mt-0.5 text-gray-400">☎️</span>
              <div>
                <div class="font-medium">{{ L(TEXT.phoneLabel) }}</div>
                <div class="mt-0.5">{{ current.phone }}</div>
              </div>
            </div>

            <div class="flex gap-3">
              <span class="mt-0.5 text-gray-400">✉️</span>
              <div>
                <div class="font-medium">Email</div>
                <div class="mt-0.5">
                  <a :href="`mailto:${current.email}`" class="text-blue-600 hover:underline">{{ current.email }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Map (optional: replace src with your real map URL or image) -->
        <div class="rounded-lg border overflow-hidden bg-white">
          <div class="aspect-[16/9]">
            <iframe
              class="w-full h-full"
              :title="L(TEXT.mapTitle)"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.0%2C39.0%2C110.0%2C50.0&layer=mapnik"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Right: Contact form -->
      <div class="rounded-lg border bg-white p-5">
        <h2 class="text-lg font-semibold text-gray-900 mb-3">{{ L(TEXT.formTitle) }}</h2>

        <form @submit.prevent="onSubmit" class="space-y-4">
          <div>
            <label class="block text-sm text-gray-700 mb-1">{{ L(TEXT.name) }}</label>
            <input
              v-model.trim="form.name"
              type="text"
              class="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              :placeholder="L(TEXT.placeholderName)"
              required
            />
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-1">Email</label>
            <input
              v-model.trim="form.email"
              type="email"
              class="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              :placeholder="L(TEXT.placeholderEmail)"
              required
            />
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-1">{{ L(TEXT.message) }}</label>
            <textarea
              v-model.trim="form.message"
              rows="5"
              class="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              :placeholder="L(TEXT.placeholderMessage)"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="inline-flex items-center gap-2 rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            {{ L(TEXT.submit) }}
          </button>

          <p v-if="submitted" class="text-green-700 text-sm mt-2">
            {{ L(TEXT.thanks) }}
          </p>
        </form>
      </div>
    </div>

    <!-- Bottom quick links -->
    <div class="mt-10 flex flex-wrap gap-3 text-sm">
      <RouterLink :to="localizedPath('/about/gsjj')" class="text-blue-600 hover:underline">
        {{ L(TEXT.linkAbout) }}
      </RouterLink>
      <RouterLink :to="localizedPath('/products')" class="text-blue-600 hover:underline">
        {{ L(TEXT.linkProducts) }}
      </RouterLink>
      <RouterLink :to="localizedPath('/news/company')" class="text-blue-600 hover:underline">
        {{ L(TEXT.linkNews) }}
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useL } from '@/composables/useL'

type LText = { zh: string; kz: string; ru: string }

const route = useRoute()
const { locale } = useI18n({ useScope: 'global' })
const { L } = useL()

/** UI text */
const TEXT = {
  home: { zh:'首页', kz:'Басты бет', ru:'Главная' } as LText,
  contact: { zh:'联系我们', kz:'Байланыс', ru:'Контакты' } as LText,
  subtitle: {
    zh:'欢迎与我们取得联系，我们将尽快回复您的咨询。',
    kz:'Бізбен байланысыңыз, сұрағыңызға тез ораламыз.',
    ru:'Свяжитесь с нами — мы ответим в ближайшее время.',
  } as LText,
  office: { zh:'办公信息', kz:'Кеңсе ақпараты', ru:'Офисная информация' } as LText,
  addressLabel: { zh:'地址', kz:'Мекенжай', ru:'Адрес' } as LText,
  hoursLabel: { zh:'工作时间', kz:'Жұмыс уақыты', ru:'Часы работы' } as LText,
  phoneLabel: { zh:'电话', kz:'Телефон', ru:'Телефон' } as LText,
  mapTitle: { zh:'位置地图', kz:'Карта', ru:'Карта' } as LText,

  formTitle: { zh:'在线留言', kz:'Онлайн хабарлама', ru:'Онлайн сообщение' } as LText,
  name: { zh:'姓名', kz:'Аты-жөні', ru:'Имя' } as LText,
  message: { zh:'留言', kz:'Хабарлама', ru:'Сообщение' } as LText,
  submit: { zh:'提交', kz:'Жіберу', ru:'Отправить' } as LText,

  placeholderName: { zh:'请输入您的姓名', kz:'Атыңызды жазыңыз', ru:'Введите ваше имя' } as LText,
  placeholderEmail: { zh:'请输入您的邮箱', kz:'Электрон поштаны жазыңыз', ru:'Введите ваш email' } as LText,
  placeholderMessage: { zh:'请描述您的需求或问题…', kz:'Сұрағыңызды/өтінішіңізді жазыңыз…', ru:'Опишите ваш вопрос или запрос…' } as LText,

  thanks: {
    zh:'感谢您的留言，我们会尽快联系您。',
    kz:'Хабарламаңызға рақмет! Жақын арада байланысамыз.',
    ru:'Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.',
  } as LText,

  linkAbout: { zh:'了解公司简介', kz:'Компания туралы', ru:'О компании' } as LText,
  linkProducts: { zh:'查看产品中心', kz:'Өнімдер', ru:'Продукция' } as LText,
  linkNews: { zh:'查看新闻中心', kz:'Жаңалықтар', ru:'Новости' } as LText,
} as const

/** Per-locale contact details (strings are intentionally *not* LText because they differ by language wording/format) */
const CONTACTS: Record<'zh'|'kz'|'ru', {
  address: string
  hours: string
  phone: string
  email: string
}> = {
  zh: {
    address: '阿拉木图市，卡拉塔耶夫街15号 / 第5号砖厂街15号',
    hours: '周一至周五 09:00–18:00',
    phone: '+7 (777) 168-60-67 (ZH), +7 (747) 866-48-20 (ZH,KZ,RU,EN)',
    email: 'arajlymzarkyn48@gmail.com',
  },
  kz: {
    address: 'Алматы қаласы, Қаратаев көшесі, 15 / 5-ші Кирпичнозаводская көше, 15',
    hours: 'Дс–Жм 09:00–18:00',
    phone: '+7 (777) 168-60-67 (ZH), +7 (747) 866-48-20 (ZH,KZ,RU,EN)',
    email: 'arajlymzarkyn48@gmail.com',
  },
  ru: {
    address: 'Алматы, Каратаевский район, 15 / 5-я Кирпичнозаводская улица, 15',
    hours: 'Пн–Пт 09:00–18:00',
    phone: '+7 (777) 168-60-67 (ZH), +7 (747) 866-48-20 (ZH,KZ,RU,EN)',
    email: 'arajlymzarkyn48@gmail.com',
  },
}

const current = computed(() => CONTACTS[(locale.value as 'zh'|'kz'|'ru') || 'zh'])

/** Simple form */
const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)
function onSubmit() {
  // TODO: integrate with your backend form endpoint if needed
  console.log('[contact] submit', { ...form, locale: locale.value })
  submitted.value = true
  setTimeout(() => (submitted.value = false), 4000)
  form.name = ''; form.email = ''; form.message = ''
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
</script>
