// src/data/cases.ts

// Tabs (use i18n keys, not hardcoded text)
export interface casePage {
  slug: 'partners' | 'demo'
  labelKey: string         // e.g., 'cooperation.tab.partners'
}

export const caseTabs: casePage[] = [
  { slug: 'partners', labelKey: 'cooperation.tab.partners' }, // 合作客户
  { slug: 'demo',     labelKey: 'cooperation.tab.cases' },    // 合作案例
]

// Common item types
export interface PartnerItem {
  id: string
  img: string
  nameKey: string          // e.g., 'cooperation.caption.crec'
  tagKey?: string          // optional tiny label under logo
  link?: string
}

export interface CaseItem {
  id: string
  img: string
  titleKey: string         // e.g., 'cooperation.caseTitle.default'
  link?: string
}

// Partners (logos)
export const partners: PartnerItem[] = [
  { id: 'crec',       img: '/cases/partners/crec.png',       nameKey: 'cooperation.caption.crec',       tagKey: 'cooperation.filters.all' },
  { id: 'powerchina', img: '/cases/partners/powerchina.png', nameKey: 'cooperation.caption.powerchina' },
  { id: 'crcc',       img: '/cases/partners/crcc.png',       nameKey: 'cooperation.caption.crcc' },
  { id: 'cscec',      img: '/cases/partners/cscec.png',      nameKey: 'cooperation.caption.cscec' },
  { id: 'beixin',     img: '/cases/partners/beixin.png',     nameKey: 'cooperation.caption.beixin' },
  { id: 'sinomach',   img: '/cases/partners/sinomach.png',   nameKey: 'cooperation.caption.sinomach' },
  // …add the rest following the same pattern
]

// Cases (image cards)
export const coopCases: CaseItem[] = [
  { id: 'c1', img: '/cases/demo/demo1.jpg', titleKey: 'cooperation.caseTitle.default', link: '/cases/demo/1' },
  { id: 'c2', img: '/cases/demo/demo2.jpg', titleKey: 'cooperation.caseTitle.default', link: '/cases/demo/2' },
  { id: 'c3', img: '/cases/demo/demo3.jpg', titleKey: 'cooperation.caseTitle.default', link: '/cases/demo/3' },
  { id: 'c4', img: '/cases/demo/demo4.jpg', titleKey: 'cooperation.caseTitle.default', link: '/cases/demo/4' },
  { id: 'c5', img: '/cases/demo/demo5.jpg', titleKey: 'cooperation.caseTitle.default', link: '/cases/demo/5' },
  { id: 'c6', img: '/cases/demo/demo6.jpg', titleKey: 'cooperation.caseTitle.default', link: '/cases/demo/6' },
]

// Page content map (titles are also i18n keys)
export const caseContent: Record<
  string,
  { titleKey: string; items: (PartnerItem | CaseItem)[] }
> = {
  partners: {
    titleKey: 'cooperation.tab.partners', // 合作客户
    items: partners,
  },
  demo: {
    titleKey: 'cooperation.tab.cases',    // 合作案例
    items: coopCases,
  },
}
