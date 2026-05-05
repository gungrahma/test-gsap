<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.from('.work-header *', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })

  gsap.utils.toArray('.work-card').forEach((card: any, i: number) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      delay: i % 2 === 0 ? 0 : 0.2,
      ease: 'power3.out'
    })
  })
})

const projects = [
  { 
    id: 1, 
    title: 'E-commerce Redesign', 
    tags: ['GSAP', 'THREE.JS'], 
    desc: 'High-performance architectural overhaul featuring seamless WebGL transitions and a brutalist design system.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXj-iC9E9FOh6JBnd9DXgoErf5ivKAfhgK2sIp1mQqlJlKA6snwMHhhlJeHuFJPqG97ecArDIEILvmM4hiUCgN9p5EtbeIzfRd1-Q6g2qZxwipW-AZrY5BmfmAmqNkevj6A8tVFUa1MVtw11bFlYcb95kU0Sr-WEf6KSnmAle0__8F1jnMTzFPhuhSuyZ-QxRaxkTgxyvLf2wbgNo_hRSATI1CYKhgRR-1EM9ZxqR50h2Yoqyb9jalkVWrqJAAs-MlQL6WoYqtl2lm',
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
</script>

<template>
  <div class="pt-32 pb-32 px-8 overflow-hidden">
    <header class="work-header mb-32 max-w-7xl mx-auto">
      <h1 class="font-serif text-8xl md:text-[10vw] leading-tight mb-8">
        作品一覧 <span class="text-neutral-600">/ WORKS</span>
      </h1>
      <p class="text-xl text-neutral-400 max-w-2xl font-light">
        A collection of digital experiences, blending meticulous engineering with cinematic aesthetic principles. Each project represents a pursuit of technological craft and visual restraint.
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-48 max-w-7xl mx-auto items-start">
      <article v-for="p in projects" :key="p.id" 
               class="work-card group cursor-pointer relative"
               :class="{'md:mt-32': p.offset}">
        <div class="absolute -top-12 -left-12 text-[10vw] font-serif opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
          0{{ p.id }}
        </div>
        <div class="overflow-hidden bg-neutral-900 border border-white/5 relative" :class="p.aspect || 'aspect-[4/3]'">
          <img :src="p.image" :alt="p.title" class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" />
          <div class="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
              <span class="text-xs uppercase">View</span>
            </div>
          </div>
        </div>
        <div class="mt-8 relative z-10">
          <div class="flex gap-4 mb-4 flex-wrap">
            <span v-for="tag in p.tags" :key="tag" class="text-[9px] tracking-[0.3em] font-display border border-white/10 px-3 py-1 text-neutral-500 group-hover:text-primary group-hover:border-primary/30 transition-all">
              {{ tag }}
            </span>
          </div>
          <h2 class="text-5xl font-serif tracking-tight mb-4">{{ p.title }}</h2>
          <p class="text-neutral-500 font-light max-w-sm leading-relaxed">{{ p.desc }}</p>
        </div>
      </article>
    </div>
  </div>
</template>
