// If you already have these types elsewhere, import them instead to avoid duplicates:
// import type { LText } from '@/types/localized'
// export interface ProductCategory { ... }
// export interface Product { ... }

export type LText = { zh: string; kz: string; ru: string }

export interface ProductCategory {
  slug: string
  name: LText
  image: string
}

export interface Product {
  slug: string
  category: string
  title: LText
  excerpt?: LText
  cover?: string
  bullets?: LText[]
  gallery?: string[]
}

// --- Categories --------------------------------------------------------------
export const productCategories: ProductCategory[] = [
  { slug: 'folding-house',          image: new URL(new URL('../assets/products/1.jpg', import.meta.url).href, import.meta.url).href, name: { zh:'折叠式活动房', kz:'Жиналмалы үй', ru:'Складной модульный дом' } },
  { slug: 'packaged-box',           image: new URL(new URL('../assets/products/2.jpg', import.meta.url).href, import.meta.url).href, name: { zh:'打包箱',       kz:'Жиналмалы қорап', ru:'Блок-контейнер (упаковочный)' } },
  { slug: 'assembled-container',    image: new URL(new URL('../assets/products/3.jpg', import.meta.url).href, import.meta.url).href, name: { zh:'装配式集装箱', kz:'Жиналмалы контейнер', ru:'Сборный контейнер' } },
  { slug: 'three-floor-house',      image: new URL(new URL('../assets/products/4.jpg', import.meta.url).href, import.meta.url).href, name: { zh:'三层组合活动房', kz:'Үш қабатты құрастырмалы үй', ru:'Трёхэтажный модульный дом' } },
  { slug: 'quake-proof-container',  image: new URL(new URL('../assets/products/5.jpg', import.meta.url).href, import.meta.url).href, name: { zh:'抗震集装箱',   kz:'Сейсмотұрақты контейнер', ru:'Сейсмоустойчивый контейнер' } },
  { slug: 'rental-products',        image: new URL(new URL('../assets/products/6.jpg', import.meta.url).href, import.meta.url).href, name: { zh:'租赁产品',     kz:'Жалға берілетін өнімдер', ru:'Арендные продукты' } },
  { slug: 'foldable-splicing-room', image: new URL(new URL('../assets/products/7.jpg', import.meta.url).href, import.meta.url).href, name: { zh:'折叠共拼箱',   kz:'Жиналмалы біріктірілетін бөлме', ru:'Складной модуль для стыковки' } },
  { slug: 'equipment-box',          image: new URL(new URL('../assets/products/8.jpg', import.meta.url).href, import.meta.url).href, name: { zh:'设备箱',       kz:'Жабдық қорабы', ru:'Оборудовательный ящик' } },
  { slug: 'dual-extension-box',     image: new URL(new URL('../assets/products/9.jpg', import.meta.url).href, import.meta.url).href, name: { zh:'双翼扩展箱',   kz:'Қос қанатты кеңейтілетін қорап', ru:'Контейнер с двойным расширением' } },
]

// --- Category copy (used by ProductsCategory + fallback in ProductDetail) ----
export const productContent: Record<string, { title: LText; content: LText[] }> = {
  'folding-house': {
    title: { zh:'折叠式活动房', kz:'Жиналмалы үй', ru:'Складной модульный дом' },
    content: [
      { zh:'采用冷轧钢与复合夹芯板，整体验收快，3 分钟内完成展开与固定。', kz:'Суықтай илектелген болат және сэндвич-панельдерден жасалады, 3 минут ішінде жайылып бекітіледі.', ru:'Из холоднокатаной стали и сэндвич‑панелей; разворачивается и фиксируется примерно за 3 минуты.' },
      { zh:'适用于工地宿舍、应急安置与临时办公等多种场景。', kz:'Құрылыс жатақханалары, жедел орналастыру және уақытша кеңселер үшін қолайлы.', ru:'Подходит для общежитий на стройке, аварийного размещения и временных офисов.' },
    ],
  },
  'packaged-box': {
    title: { zh:'打包箱', kz:'Жиналмалы қорап', ru:'Блок‑контейнер (упаковочный)' },
    content: [
      { zh:'标准化模块，运输堆叠与仓储占地小，便于快速部署。', kz:'Стандартталған модуль: тасымалдау/қоймада аз орын алып, тез енгізіледі.', ru:'Стандартизованный модуль; компактный при транспортировке и хранении, быстрый развёртыванием.' },
      { zh:'常用规格可定制：2.2×4.8×2.3m 等。', kz:'Жиі қолданылатын өлшемдер тапсырыспен: 2.2×4.8×2.3 м және т.б.', ru:'Типовые размеры на заказ: 2.2×4.8×2.3 м и др.' },
    ],
  },
  'assembled-container': {
    title: { zh:'装配式集装箱', kz:'Жиналмалы контейнер', ru:'Сборный контейнер' },
    content: [
      { zh:'模块化设计，现场装配快，抗风抗震性能稳定。', kz:'Модульдік дизайн; алаңда тез құрастырылады, жел/сейсмикаға төзімді.', ru:'Модульная конструкция; быстрая сборка на месте, стабильная ветро- и сейсмостойкость.' },
      { zh:'适用于野外办公、指挥中心、临时展馆等。', kz:'Дала кеңсесі, командалық пункт, уақытша көрме үшін.', ru:'Подходит для полевых офисов, командных пунктов и временных павильонов.' },
    ],
  },
  'three-floor-house': {
    title: { zh:'三层组合活动房', kz:'Үш қабатты құрастырмалы үй', ru:'Трёхэтажный модульный дом' },
    content: [
      { zh:'支持三层及以上堆叠，轻钢龙骨框架承载强。', kz:'Үш қабаттан жоғары жинақтауға болады; жеңіл болат қаңқаның көтергіштігі жоғары.', ru:'Допускает трёх и более этажей; лёгкий стальной каркас с высокой несущей способностью.' },
      { zh:'用于密集宿舍与办公园区，满足消防通道与安全规范。', kz:'Тығыз жатақхана/офистік аймақтарға; өрт және қауіпсіздік нормаларына сай.', ru:'Для плотной жилой/офисной застройки; соответствует нормам пожарной и общей безопасности.' },
    ],
  },
  'quake-proof-container': {
    title: { zh:'抗震集装箱', kz:'Сейсмотұрақты контейнер', ru:'Сейсмоустойчивый контейнер' },
    content: [
      { zh:'适配高地震烈度地区，结构加强，防倾覆与抗剪设计。', kz:'Жоғары сейсмикалық аймақтарға бейімделген; нығайтылған құрылым, аударылуға қарсы.', ru:'Адаптирован к сейсмоопасным зонам; усиленная конструкция, защита от опрокидывания.' },
      { zh:'用于应急安置、野外作业营地等。', kz:'Жедел орналастыруға, дала лагерьлеріне.', ru:'Подходит для аварийного размещения и полевых лагерей.' },
    ],
  },
  'rental-products': {
    title: { zh:'租赁产品', kz:'Жалға берілетін өнімдер', ru:'Арендные продукты' },
    content: [
      { zh:'灵活租期（短租/长租），快速交付，降低一次性投入成本。', kz:'Икемді жалға алу (қысқа/ұзақ), жедел жеткізу, бастапқы шығынды азайту.', ru:'Гибкие сроки аренды (кратко/долгосрочно), быстрая поставка, снижение капитальных затрат.' },
      { zh:'多地仓储与备货，满足临时扩容与峰值需求。', kz:'Елдің әр өңірінде қоймалар; уақытша кеңею мен шың сұранысқа дайын.', ru:'Склады в разных регионах; покрытие пиковых и временных потребностей.' },
    ],
  },
  'foldable-splicing-room': {
    title: { zh:'折叠共拼箱', kz:'Жиналмалы біріктірілетін бөлме', ru:'Складной модуль для стыковки' },
    content: [
      { zh:'单箱多用，可拼接组合为更大空间，适配多种布局。', kz:'Бір модуль көп мақсатты; біріктіріп үлкен кеңістік жасауға болады.', ru:'Один модуль — многозадачный; стыкуется в большие пространства и разные планировки.' },
      { zh:'拆装快捷，适于工地与临时办公。', kz:'Жинау/бөлшектеу жылдам; құрылыс алаңы мен уақытша кеңсе үшін.', ru:'Быстрый монтаж/демонтаж; стройплощадки и временные офисы.' },
    ],
  },
  'equipment-box': {
    title: { zh:'设备箱', kz:'Жабдық қорабы', ru:'Оборудовательный ящик' },
    content: [
      { zh:'为水电、消防、医疗等设备定制，防护等级高。', kz:'Су, электр, өртке қарсы және мед. жабдыққа арнайы; қорғаныс деңгейі жоғары.', ru:'Под конкретное водо-, электро-, пожарное и медоборудование; высокий уровень защиты.' },
      { zh:'密封防水并具抗腐蚀涂层，户外长期使用可靠。', kz:'Герметикалық, су өтпейді, коррозияға қарсы қабатымен; далада ұзаққа шыдамды.', ru:'Герметичен, водонепроницаем, антикоррозийное покрытие; надёжен при длительной эксплуатации на улице.' },
    ],
  },
  'dual-extension-box': {
    title: { zh:'双翼扩展箱', kz:'Қос қанатты кеңейтілетін қорап', ru:'Контейнер с двойным расширением' },
    content: [
      { zh:'两翼同步展开，室内净空快速翻倍，空间利用率高。', kz:'Екі қанаты қатар ашылады; пайдалы кеңістік тез ұлғаяды, тиімділігі жоғары.', ru:'Две раскрывающиеся секции; полезное пространство быстро увеличивается, высокая эффективность.' },
      { zh:'适用临时会议室、指挥舱与展示接待等。', kz:'Уақытша жиналыс бөлмесі, басқару пункті, көрме/қабылдау үшін.', ru:'Для временных переговорных, командных пунктов и экспозиционно‑приёмных зон.' },
    ],
  },
}

// --- Minimal demo SKUs so ProductDetail can render now -----------------------
export const products: Product[] = [
  {
    slug: 'fh-01',
    category: 'folding-house',
    title: { zh:'折叠房 FH‑01', kz:'Жиналмалы үй FH‑01', ru:'Складной дом FH‑01' },
    excerpt: { zh:'3 分钟展开，适配工地/应急/临时办公。', kz:'3 минутта жайылады; құрылыс/жедел/уақытша кеңсе.', ru:'Разворачивание за ~3 мин; стройка/ЧС/временный офис.' },
    cover: new URL(new URL('../assets/products/1.jpg', import.meta.url).href, import.meta.url).href,
    bullets: [
      { zh:'冷轧钢框架＋夹芯板', kz:'Болат қаңқа + сэндвич‑панель', ru:'Стальной каркас + сэндвич‑панели' },
      { zh:'运输堆叠，周转快', kz:'Тасымалдау/қоймада жинақы', ru:'Компактная логистика и хранение' },
    ],
    gallery: [new URL(new URL('../assets/products/fh-01-1.jpg', import.meta.url).href, import.meta.url).href, new URL(new URL('../assets/products/fh-01-2.jpg', import.meta.url).href, import.meta.url).href],
  },
  {
    slug: 'pb-01',
    category: 'packaged-box',
    title: { zh:'打包箱 PB‑01', kz:'Жиналмалы қорап PB‑01', ru:'Блок‑контейнер PB‑01' },
    excerpt: { zh:'标准化模块，快速交付与安装。', kz:'Стандарт модуль, жедел жеткізу/монтаж.', ru:'Стандартизованный модуль, быстрая поставка/монтаж.' },
    cover: new URL(new URL('../assets/products/2.jpg', import.meta.url).href, import.meta.url).href,
  },
  {
    slug: 'ac-01',
    category: 'assembled-container',
    title: { zh:'装配式集装箱 AC‑01', kz:'Жиналмалы контейнер AC‑01', ru:'Сборный контейнер AC‑01' },
    excerpt: { zh:'模块化拼装，稳固抗风震。', kz:'Модульдік құрастыру, жел/сейсмикаға төзімді.', ru:'Модульная сборка, ветро‑/сейсмостойкость.' },
    cover: new URL(new URL('../assets/products/3.jpg', import.meta.url).href, import.meta.url).href,
  },
  // …add more real SKUs per category as you get assets
    {
  slug: 'tfh-01',
  category: 'three-floor-house',
  title: { zh: '三层一体房 TFH-01', kz: 'Үш қабатты блок-үй TFH-01', ru: 'Трёхэтажный модуль TFH-01' },
  excerpt: { zh: '整体框架＋楼梯平台，快捷装配成型。', kz: 'Біріктірілген қаңқа, баспалдақпен тез құралады.', ru: 'Интегрированная рама и лестничные марши — быстрая сборка.' },
  cover: new URL(new URL('../assets/products/4.jpg', import.meta.url).href, import.meta.url).href,
},
{
  slug: 'qpc-01',
  category: 'quake-proof-container',
  title: { zh: '抗震箱房 QPC-01', kz: 'Сейсмотұрақты контейнер QPC-01', ru: 'Антисейсмический контейнер QPC-01' },
  excerpt: { zh: '抗震节点与斜撑设计，满足抗震场景。', kz: 'Сейсмикалық тораптар мен керме — жоғары тұрақтылық.', ru: 'Усиленные узлы и раскосы для сейсмо-зон.' },
  cover: new URL(new URL('../assets/products/5.jpg', import.meta.url).href, import.meta.url).href,
},
{
  slug: 'rent-01',
  category: 'rental-products',
  title: { zh: '租赁产品 RENT-01', kz: 'Жалға берілетін өнім RENT-01', ru: 'Арендный модуль RENT-01' },
  excerpt: { zh: '标准配置现货，按需调配、即租即用。', kz: 'Дайын стандарт, қажетке сай жеткізу — бірден қолдану.', ru: 'Готовая комплектация — быстрый ввод в эксплуатацию.' },
  cover: new URL(new URL('../assets/products/6.jpg', import.meta.url).href, import.meta.url).href,
},
{
  slug: 'fsr-01',
  category: 'foldable-splicing-room',
  title: { zh: '折叠拼接房 FSR-01', kz: 'Бүктелетін қосылатын бөлме FSR-01', ru: 'Складной стыкуемый модуль FSR-01' },
  excerpt: { zh: '折叠展开＋模块拼接，灵活扩容。', kz: 'Жиналып-жайылып, модульмен жалғанады — икемді кеңейту.', ru: 'Складное раскрытие и стыковка блоков для гибкого расширения.' },
  cover: new URL(new URL('../assets/products/7.jpg', import.meta.url).href, import.meta.url).href,
},
{
  slug: 'eqb-01',
  category: 'equipment-box',
  title: { zh: '设备箱 EQB-01', kz: 'Жабдық қорабы EQB-01', ru: 'Оборудовательный бокс EQB-01' },
  excerpt: { zh: '适配电力/水务/暖通设备，防雨防盗。', kz: 'Электр/су/ЖЖЖ жабдықтарына лайық — су өтпес, қорғалған.', ru: 'Под энергетику/водоснабжение/HVAC; защита от осадков и взлома.' },
  cover: new URL(new URL('../assets/products/8.jpg', import.meta.url).href, import.meta.url).href,
},
{
  slug: 'deb-01',
  category: 'dual-extension-box',
  title: { zh: '双拓展箱 DEB-01', kz: 'Екі жаққа кеңейетін бокс DEB-01', ru: 'Двусторонний расширяемый бокс DEB-01' },
  excerpt: { zh: '左右侧滑出拓展，面积瞬时翻倍。', kz: 'Екі бүйірден сырғу-кеңею — алаң бірден ұлғаяды.', ru: 'Выдвижные секции слева/справа — площадь увеличивается вдвое.' },
  cover: new URL(new URL('../assets/products/9.jpg', import.meta.url).href, import.meta.url).href,
}

]
