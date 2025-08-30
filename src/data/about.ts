// src/data/about.ts
import GsjjPage from '@/pages/about/GsjjPage.vue'
import QywhPage from '@/pages/about/QywhPage.vue'
import QyzizhiPage from '@/pages/about/QyzizhiPage.vue'
import ShezerenPage from '@/pages/about/ShezerenPage.vue'
import ShfwPage from '@/pages/about/ShfwPage.vue'
import ZiliaoxiazaiPage from '@/pages/about/ZiliaoxiazaiPage.vue'

export type LocalizedText = { zh: string; kz: string; ru: string }

// export interface AboutPage {
//   slug: string
//   /** Prefer labelKey to fetch from i18n JSON; or provide inline label if you like */
//   labelKey?: string
//   label?: LocalizedText | string
// }

export interface AboutContentEntry {
  title: LocalizedText
  /** Optional short intro paragraphs */
  content?: LocalizedText[] | LocalizedText
  component?: any
}

/** Sub‑nav: using i18n keys so you can translate in zh/kz/ru JSON files */
// src/data/about.ts (excerpt)

export interface AboutPage {
  slug: string
  label: { zh: string; kz: string; ru: string }
}

export const aboutPages: AboutPage[] = [
  {
    slug: 'gsjj',
    label: { zh: '公司简介', kz: 'Компания туралы', ru: 'О компании' }
  },
  {
    slug: 'qywh',
    label: { zh: '企业文化', kz: 'Корпоративтік мәдениет', ru: 'Корпоративная культура' }
  },
  {
    slug: 'qyzizhi',
    label: { zh: '企业资质', kz: 'Кәсіпорын біліктілігі', ru: 'Квалификация предприятия' }
  },
  {
    slug: 'shezeren',
    label: { zh: '社会责任', kz: 'Әлеуметтік жауапкершілік', ru: 'Социальная ответственность' }
  },
  {
    slug: 'shfw',
    label: { zh: '售后服务', kz: 'Сатудан кейінгі қызмет', ru: 'Послепродажное обслуживание' }
  },
  {
    slug: 'ziliao-xiazai',
    label: { zh: '资料下载', kz: 'Материалдарды жүктеу', ru: 'Загрузка материалов' }
  }
]

/**
 * Page meta + component mapping.
 * Titles (and optional blurbs) are LocalizedText so About/Home can show localized snippets directly.
 * Feel free to expand/adjust the kz/ru strings.
 * L(aboutContent[sec.slug]?.title
 */
// export const aboutContent: Record<string, AboutContentEntry> = {
//   gsjj: {
//     title: {
//       zh: '企业简介',
//       kz: 'Компания туралы',
//       ru: 'О компании'
//     },
//     content: [
//       {
//         zh: '复临开泰设备租赁有限公司于 2021 年 11 月 17 日成立，主营应急折叠保障房、单层房、二层房、定制尺寸一体房等。',
//         kz: 'Fulin Kaitai 2021-11-17 құрылған. Негізгі өнімдер: жиналмалы тұрғын модульдер, бір қабатты, екі қабатты үйлер, тапсырыс өлшемді блоктар.',
//         ru: 'Основана 17.11.2021. Основные продукты: складные модули, одно- и двухэтажные блок‑дома, модули нестандартных размеров.'
//       }
//     ],
//     component: GsjjPage
//   },
//   qywh: {
//     title: {
//       zh: '企业文化',
//       kz: 'Компания мәдениеті',
//       ru: 'Корпоративная культура'
//     },
//     component: QywhPage
//   },
//   qyzizhi: {
//     title: {
//       zh: '企业资质',
//       kz: 'Компанияның біліктіліктері',
//       ru: 'Сертификаты и квалификации'
//     },
//     component: QyzizhiPage
//   },
//   shezeren: {
//     title: {
//       zh: '社会责任',
//       kz: 'Әлеуметтік жауапкершілік',
//       ru: 'Социальная ответственность'
//     },
//     component: ShezerenPage
//   },
//   shfw: {
//     title: {
//       zh: '售后服务',
//       kz: 'Кепілдік және сервис',
//       ru: 'Сервисное обслуживание'
//     },
//     component: ShfwPage
//   },
//   'ziliao-xiazai': {
//     title: {
//       zh: '资料下载',
//       kz: 'Материалдарды жүктеп алу',
//       ru: 'Загрузка материалов'
//     },
//     component: ZiliaoxiazaiPage
//   }
// }
// // src/data/about.ts
export type LText = { zh: string; kz: string; ru: string }
//
export interface AboutSection {
  title: LText
  content?: LText[]          // paragraphs
  bullets?: LText[]          // optional bullet list
  images?: string[]          // optional image urls
}

export type AboutContent = Record<
  'gsjj' | 'qywh' | 'qyzizhi' | 'shezeren' | 'shfw' | 'zlxz',
  AboutSection
>

export const aboutContent: AboutContent = {
  /** 公司简介 */
  gsjj: {
    title: { zh: '公司简介', kz: 'Компания туралы', ru: 'О компании' },
    content: [
      {
        zh: 'Sinomodx是一家专注模块化建筑与临建系统解决方案的企业，集研发、生产、销售与服务于一体。',
        kz: 'Sinomodx — модульді құрылыс және уақытша нысандар шешімдеріне маманданған, ҒЗТКЖ, өндіріс, сату және сервисті біріктіретін компания.',
        ru: 'Sinomodx — компания, специализирующаяся на модульном строительстве и временных объектах, объединяющая R&D, производство, продажи и сервис.',
      },
      {
        zh: '核心产品包括折叠式活动房、打包箱、装配式集装箱等，广泛应用于工地营地、应急安置、文旅营地与临时办公等场景。',
        kz: 'Негізгі өнімдер: жиналмалы үйлер, блок‑контейнерлер, құрастырмалы контейнерлер; құрылыс лагерьлері, ТЖ орналастыру, туризм лагерьлері және уақытша кеңселерге қолданылады.',
        ru: 'Ключевые продукты: складные модульные дома, блок‑контейнеры и сборные контейнеры; применяются в лагерях на стройке, ЧС‑размещении, глэмпингах и временных офисах.',
      },
    ],
  },

  /** 企业文化 */
  qywh: {
    title: { zh: '企业文化', kz: 'Корпоративтік мәдениет', ru: 'Корпоративная культура' },
    bullets: [
      { zh: '质量求生存', kz: 'Сапамен өміршеңдік', ru: 'Качество — основа' },
      { zh: '信誉求发展', kz: 'Абыроймен даму', ru: 'Репутация — развитие' },
      { zh: '科技求创新', kz: 'Технология — инновация', ru: 'Технологии — инновации' },
      { zh: '精益求精',   kz: 'Үздіксіз жетілдіру', ru: 'Непрерывное улучшение' },
    ],
    content: [
      {
        zh: '以客户需求为导向，构建敏捷交付体系与全周期服务能力。',
        kz: 'Клиент сұранысына бағытталып, икемді жеткізу және толық цикл қызметті дамытамыз.',
        ru: 'Ориентируемся на потребности клиентов, развиваем гибкие поставки и сервис полного цикла.',
      },
    ],
  },

  /** 资质证书 */
  qyzizhi: {
    title: { zh: '资质证书', kz: 'Сертификаттар', ru: 'Сертификаты и допуски' },
    content: [
      {
        zh: '公司通过多项质量与安全体系认证，核心材料可提供合格检验报告与溯源文件。',
        kz: 'Компания сапа және қауіпсіздік жүйелері бойынша бірқатар сертификатқа ие; негізгі материалдарға сәйкестік және қадағалау құжаттары беріледі.',
        ru: 'Компания имеет ряд сертификатов по качеству и безопасности; на материалы предоставляются протоколы и трассируемость.',
      },
    ],
    // 可在页面中以网格展示证书图
    images: [
      new URL(new URL('../assets/about/cert-iso.jpg', import.meta.url).href, import.meta.url).href,
      new URL(new URL('../assets/about/cert-product.jpg', import.meta.url).href, import.meta.url).href,
    ],
  },

  /** 社会责任 */
  shezeren: {
    title: { zh: '社会责任', kz: 'Әлеуметтік жауапкершілік', ru: 'Социальная ответственность' },
    content: [
      {
        zh: '在应急安置、灾后重建与民生保障项目中积极参与，以标准化模块快速响应。',
        kz: 'ТЖ орналастыру, апаттан кейін қалпына келтіру және әлеуметтік жобаларда стандартталған модульдермен жедел әрекет етеміз.',
        ru: 'Активно участвуем в проектах ЧС‑размещения, восстановления и соцобеспечения, быстро реагируя стандартизованными модулями.',
      },
    ],
  },

  /** 售后服务 */
  shfw: {
    title: { zh: '售后与服务保障', kz: 'Кепілдік және сервис', ru: 'Гарантия и сервис' },
    bullets: [
      { zh: '质保与备件支持', kz: 'Кепілдік және қосалқы бөлшектер', ru: 'Гарантия и запчасти' },
      { zh: '标准化安装指导', kz: 'Стандартты монтаж нұсқаулығы', ru: 'Стандартизированные инструкции монтажа' },
      { zh: '多地仓储与快速响应', kz: 'Аймақтық қоймалар және жедел жауап', ru: 'Склады в регионах и быстрый отклик' },
    ],
    content: [
      {
        zh: '提供安装指导、视频教程与远程支持，根据项目需求可安排到场服务。',
        kz: 'Орнату нұсқаулығы, бейне‑сабақтар және қашықтан қолдау бар; жобаға қарай现场 қызмет көрсетіледі.',
        ru: 'Предоставляем инструкции по монтажу, видео‑уроки и удалённую поддержку; при необходимости — выездные работы.',
      },
    ],
  },

  /** 资料下载 */
  zlxz: {
    title: { zh: '资料下载', kz: 'Материалдар жүктеу', ru: 'Загрузка материалов' },
    content: [
      {
        zh: '下载产品手册、尺寸表与安装说明，获取最新版本请联系销售顾问。',
        kz: 'Өнім буклеттері, өлшем кестелері және монтаж нұсқаулықтарын жүктеңіз; соңғы нұсқа үшін сатушыға хабарласыңыз.',
        ru: 'Скачайте каталоги, габариты и инструкции по монтажу; за последними версиями обратитесь к менеджеру.',
      },
    ],
  },
}
