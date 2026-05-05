<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import gsap from 'gsap'
import { projects } from '../data/projects'

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  const id = Number(route.params.id)
  return projects.find(p => p.id === id)
})

onMounted(() => {
  gsap.from('.detail-hero *', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out'
  })
})

const goBack = () => router.push('/works')
</script>

<template>
  <div v-if="project" class="pt-32 pb-32 px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Back button -->
      <button @click="goBack" class="mb-12 text-sm text-neutral-500 hover:text-white transition-colors">
        ← Back
      </button>

      <!-- Hero Image -->
      <div class="overflow-hidden mb-12" :class="project.aspect || 'aspect-[16/9]'">
        <img :src="project.image" :alt="project.title"
             class="w-full h-full object-cover" />
      </div>

      <!-- Metadata -->
      <div class="detail-hero">
        <h1 class="font-serif text-6xl tracking-tight mb-6">{{ project.title }}</h1>
        <div class="flex gap-4 mb-6 flex-wrap">
          <span v-for="tag in project.tags" :key="tag"
                class="text-[9px] tracking-[0.3em] font-display border border-white/10 px-3 py-1 text-neutral-500">
            {{ tag }}
          </span>
        </div>
        <p class="text-neutral-500 font-light max-w-2xl leading-relaxed mb-4">{{ project.desc }}</p>
        <span class="text-neutral-600 text-sm">Project #{{ project.id }}</span>
      </div>
    </div>
  </div>

  <!-- 404 state -->
  <div v-else class="pt-32 pb-32 px-8 text-center">
    <h1 class="font-serif text-5xl mb-4">Project not found</h1>
    <button @click="goBack" class="text-primary hover:underline">← Back to works</button>
  </div>
</template>