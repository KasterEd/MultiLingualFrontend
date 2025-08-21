// src/data/partners.ts
export interface Partner {
  id: string
  logo: string      // path to image
  i18nKey: string   // under cooperation.caption.*
  tag?: string      // optional small label under the logo
}

export const partners: Partner[] = [
  { id: "crec",       logo: "/assets/partners/crec.png",       i18nKey: "cooperation.caption.crec", tag: "中铁系统" },
  { id: "powerchina", logo: "/assets/partners/powerchina.png", i18nKey: "cooperation.caption.powerchina", tag: "电建系统" },
  { id: "crcc",       logo: "/assets/partners/crcc.png",       i18nKey: "cooperation.caption.crcc", tag: "交建系统" },
  { id: "cscec",      logo: "/assets/partners/cscec.png",      i18nKey: "cooperation.caption.cscec", tag: "中建系" },
  { id: "beixin",     logo: "/assets/partners/beixin.png",     i18nKey: "cooperation.caption.beixin", tag: "北新系统" },
  { id: "sinomach",   logo: "/assets/partners/sinomach.png",   i18nKey: "cooperation.caption.sinomach", tag: "国机集团" },
  // …add the rest as needed
]
