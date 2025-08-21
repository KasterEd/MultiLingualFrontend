export type LText = { zh:string; kz:string; ru:string }

export interface HomeSection {
  slug: 'gsjj' | 'dingzhi' | 'shehui' | 'hezuo'; // match keys in your about data
  label: LText;
  image: string;      // path to background image
}

export const homeSections: HomeSection[] = [
  {
    slug: 'gsjj',
    label: { zh:'公司简介', kz:'...', ru:'...' },
    image: '/src/assets/home/intro.jpg'
  },
  {
    slug: 'dingzhi',
    label: { zh:'定制服务', kz:'...', ru:'...' },
    image: '/src/assets/home/custom.jpg'
  },
  {
    slug: 'shezeren',
    label: { zh:'社会责任', kz:'...', ru:'...' },
    image: '/src/assets/home/responsibility.jpg'
  },
  {
    slug: 'cooperation',
    label: { zh:'合作企业', kz:'...', ru:'...' },
    image: '/src/assets/home/partners.jpg'
  },
];
