export interface Project {
  id: number
  title: string
  tags: string[]
  desc: string
  image: string
  offset?: boolean
  aspect?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    tags: ['GSAP', 'THREE.JS'],
    desc: 'High-performance architectural overhaul featuring seamless WebGL transitions and a brutalist design system.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXj-iC9E9FOh6JBnd9D...',
    offset: true
  },
  {
    id: 2,
    title: 'Corporate Brand Site',
    tags: ['BARBA.JS', 'TAILWIND'],
    desc: 'A cinematic digital presence for a fintech startup, utilizing fluid page transitions and high-contrast typography.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrEaBHHsQg7-ita4Sz0Cf3wb7O6oi49VJkrnbZGO98BNGM7RIU2V2gYcbx8XsQxXhziMfFQUStOii6sQ3GHEzDSRvZm7sA7dA3TaqMg_sny3P8p7LmZZIvVMnxsLxUKbSbkk9fOjuNqeLciqA6E9hFSYWoONZUDHLT9jeVnJgKtNuE1QIkuK5zuB_m8uKRiqai7A8smdP7U3eXQABHeRUMiYGcHqwUhjpkyWD4F69moZM3pCeQ-r_TNzwzm_mf4JAitFeBk7oUI6LU'
  },
  {
    id: 3,
    title: 'Interactive Exhibition',
    tags: ['REACT', 'FRAMER MOTION'],
    desc: 'A virtual gallery experience designed with staggered reveals and intense typographical hierarchy.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9KNglR_9KJHyDoWJBQCzxIxJIbol_Yx4UOQcanqmlUMZJFM1BDK2N2-A2_5N3CWzwzHjD8SFbJnkk9JSTUq9QnvHEsVpMkspBxL1lzpimB_6QWvtpK9bdjA_tJHQlja8nthBydVhDbNgb395Qzs1g-W_fe_8CvZ_nOfTcx0aU2dqYdewt3MkkJp4--gCpfIKT1xNKeZu8mvsTaV6Woxq58ZuvdTUAXltwEyjXn3rYWaS5uHhJzDa0x9Z9vclzzCsrBpnks_ST4V09',
    offset: true,
    aspect: 'aspect-[3/4]'
  },
  {
    id: 4,
    title: 'Editorial Platform',
    tags: ['NEXT.JS', 'WEBGL'],
    desc: "A reading experience focusing on negative space, 'Ma', and traditional Japanese editorial layout translated for the web.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLQblEGaDzabKQUGojR5egXRexpPmGt811ncgAcbjdFN37kGzf8yFRXPhIhD7ocXZOPMqgulstnrl7PzyT3FrGBW55G641on4HCYBZBxRoBaq4B3qfJ7ieFsoosJJBeBZeKYW-ESV2oFjgzjfnc0GshhpXO7-Y8NqZtYP8n2fz0aYfkx9BsUXibnx94flH7XyHntpgq8CQTnoaFhq8XWFwWgFbynb0NTUQvjIzd4XGTGXKmDQiLWeOOVR8Vrw37iofWvtGit9uo8IT'
  },
  {
    id: 5,
    title: 'Data Visualization App',
    tags: ['VUE', 'GSAP SCROLLTRIGGER'],
    desc: 'Complex datasets simplified through minimalist dashboards and cinematic data storytelling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGTIXj7_bhIzayMGAnQrgBHvYYiSn_QnC5VTvv47SOxIJYXS2fZBy0Z3KtsAxK32s7oRECwmMQmSNXrxYeismLRNIjJlsrQZqFJp82-TslcuP7XgjhNWVqCKNKavi2lyMX_IqEoP6GZCVyO32qkJ0LyqF5hd6TrzkCZzFTari1un6eaH8qUW6e0A9mOquS2JsWRr4tDZPg01rSFCjCRGl8n_nCFPFN7ueiLuV1I6WZ4YakjtiEDBj9W4Pq0MP7WCFbs_-Zh-g5vHP8',
    offset: true
  },
  {
    id: 6,
    title: 'Creative Portfolio',
    tags: ['SVELTE', 'CSS GRID'],
    desc: 'An asymmetric showcase for a high-end fashion label, relying on extreme grid layouts and staggered loading states.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCobMaPQThdZ6igijUeyBbNuo8wEJweu1U5BAELI8Yv_Zgpou6Re4H59Uo6vCzF9wyMOs8MvrpDUYZmrfJPN7mDKWHB0fpjVcBcZ_K-fA85QMEWkY94XFxqlkgidYJ2wd0l5tNy_IdGoJNqTLXRJe2acf7CtIgrU_ZlN1mxl4-BfGeuSOXb1sIHI34sAJ_j2iIVrZYel44UoCBwBOKv9B194G37Czwl9K1x_LZv1IyTpod8gWwJYjLYOGaxlMijI7v40pM8NUDu5hKo',
    aspect: 'aspect-[3/4]'
  }
]