<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { projects } from '../data/projects'

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
</script>

<template>
  <div class="pt-32 pb-32 px-8 overflow-hidden">
    <header class="work-header mb-32 max-w-7xl mx-auto">
      <h1 class="font-serif text-8xl md:text-[10vw] leading-tight mb-8">
        作品一覧 <span class="text-neutral-600">/ WORKS</span>
      </h1>
      <p class="text-xl text-neutral-400 max-w-2xl font-light">
        Collection of digital experiences, blending meticulous engineering with cinematic aesthetic principles. Each project represents a pursuit of technological craft and visual restraint.
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
