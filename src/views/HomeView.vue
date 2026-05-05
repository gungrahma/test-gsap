<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from 'vue-router'

const router = useRouter()

const heroImage = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSubtitle = ref<HTMLElement | null>(null)
const nextSection = ref<HTMLElement | null>(null)
const nextText = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // Hero background zoom in animation
  gsap.from(heroImage.value, {
    scale: 1.3,
    duration: 2,
    ease: 'power3.out'
  })

  // Split text into characters and animate
  const splitChars = (el: HTMLElement | null) => {
    if (!el) return []
    const text = el.textContent || ''
    el.innerHTML = text.split('').map(char =>
      char === ' ' ? ' ' : `<span class="char">${char}</span>`
    ).join('')
    return el.querySelectorAll('.char')
  }

  const titleChars = splitChars(heroTitle.value)
  const subtitleChars = splitChars(heroSubtitle.value)

  gsap.from(titleChars, {
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power3.out',
    delay: 1.5
  })

  gsap.from(subtitleChars, {
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.04,
    ease: 'power3.out',
    delay: 1.8
  })

  gsap.utils.toArray('.reveal').forEach((el: any) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
  })

  gsap.to('.marquee-content', {
    xPercent: -100,
    repeat: -1,
    duration: 30,
    ease: 'none'
  })

  // NEXT scroll transition
  ScrollTrigger.create({
    trigger: nextSection.value,
    start: 'top center',
    onEnter: () => {
      const transitionTl = gsap.timeline({
        onComplete: () => {
          ScrollTrigger.killAll()
          router.push('/works')
        }
      })

      transitionTl.to(nextText.value, {
        scale: 2.5,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.inOut'
      })

      transitionTl.to('#flash-overlay', {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.in'
      }, '-=0.3')
    },
    once: true
  })
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full min-h-screen flex flex-col justify-end pb-32 overflow-hidden px-8 md:px-16">
      <div class="absolute inset-0 z-0">
        <img ref="heroImage" alt="Project Hero" class="w-full h-full object-cover grayscale mix-blend-luminosity brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjClmNRghc9YuGdOKpFz7v8N1MlIijBLOOGMnV9jyGvWNI4A8BjZU4MNAnq0DZ1dtyP7gNSXKQjtxTUYVZYIphM8rWXu0gYL7nGlyBbSy0cBDPt7vE2f3G6kL5OaOS377kJ_NSTv3S_QNz3qc1lWI4EkRnrZQtGCt-Dhn05ImOiJ7RdXPkFpgxW2cJZiPAXtkFITOEVhVKBj9Ldzxdv1otlQFbzhd-s5PNFyMyXMxHonfOxdSQrRfR3hZyVXuvDoC1d9OnrLtqfABZ"/>
        <div class="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
      </div>
      
      <div class="relative z-10 hero-content max-w-7xl mx-auto w-full">
        <span ref="heroSubtitle" class="text-xs tracking-[0.4em] text-primary uppercase block mb-6">WebDev, ML (AI), Mobile / 2026 </span>
        <h1 ref="heroTitle" class="font-serif text-7xl md:text-[5vw] leading-[1.1] tracking-tighter">
          革新的 <br /> 機械学習インターンシップ
        </h1>
      </div>
    </section>

    <!-- Narrative Section -->
    <section class="py-32 px-8 md:px-16 bg-[#0c0c0c]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div class="md:col-span-5 md:col-start-2 reveal">
          <h2 class="font-serif text-5xl md:text-6xl leading-tight">
            自己紹介
          </h2>
        </div>
        <div class="md:col-span-5 reveal">
          <div class="space-y-8 text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
            <p>私は機械学習と人工知能について学ぶのが好きな、大学6年生です。現在、ディープラーニング、ウェブサイトのアニメーション（GSAP + Lenis.JS + Barba.JS）、およびVueについて学習しています。</p>
            <p>暇な時間には、実験をするのが好きです。特に、YOLOv8のような物体検出に関する実験や、ローカルAIに関する実験を好んで行います。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-8 md:px-16 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div class="md:col-span-4 reveal">
          <h2 class="text-4xl font-display font-medium mb-8">私の技術スタックとスキル</h2>
          <div class="w-12 h-[1px] bg-neutral-800"></div>
        </div>
        <div class="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div class="reveal bg-[#111] p-10 border border-white/5 hover:border-primary/20 transition-colors">
            <h3 class="text-2xl font-display mb-4">Director</h3>
            <p class="text-neutral-400 font-light leading-relaxed">複雑なアニメーションシーケンスの制御。スクロールトリガーによるシームレスな要素の出現と、パララックス効果の実装。</p>
          </div>
          <div class="reveal bg-[#111] p-10 border border-white/5 hover:border-primary/20 transition-colors">
            <h3 class="text-2xl font-display mb-4">Editor</h3>
            <p class="text-neutral-400 font-light leading-relaxed">非同期ページ遷移。カスタムトランジションコンポーネント（グローバルマスク）との連携による、映画のような画面切り替え。</p>
          </div>
          <div class="reveal bg-[#111] p-10 border border-white/5 hover:border-primary/20 transition-colors">
            <h3 class="text-2xl font-display mb-4">Tailwind CSS</h3>
            <p class="text-neutral-400 font-light leading-relaxed">厳格なデザインシステムの適用。デザイントークンに基づく一貫したカラースキームとタイポグラフィの実現。</p>
          </div>
          <div class="reveal bg-[#111] p-10 border border-white/5 hover:border-primary/20 transition-colors">
            <h3 class="text-2xl font-display mb-4">Tailwind CSS</h3>
            <p class="text-neutral-400 font-light leading-relaxed">厳格なデザインシステムの適用。デザイントークンに基づく一貫したカラースキームとタイポグラフィの実現。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Marquee Section -->
    <section class="py-24 overflow-hidden border-t border-b border-white/5 bg-black">
      <div class="marquee-container flex whitespace-nowrap">
        <div class="marquee-content flex gap-16 text-3xl md:text-5xl font-serif uppercase tracking-widest text-white/80 leading-none">
          <span>Clean design</span>
          <span class="text-primary">/</span>
          <span>Minimalism</span>
          <span class="text-primary">/</span>
          <span>Innovation</span>
          <span class="text-primary">/</span>
          <span>Web Craft</span>
          <span class="text-primary">/</span>
        </div>
        <div class="marquee-content flex gap-16 text-3xl md:text-5xl font-serif uppercase tracking-widest text-white/80 leading-none ml-16">
          <span>Design Clean</span>
          <span class="text-primary">/</span>
          <span>Minimalism</span>
          <span class="text-primary">/</span>
          <span>Innovation</span>
          <span class="text-primary">/</span>
          <span>Web Craft</span>
          <span class="text-primary">/</span>
        </div>
      </div>
    </section>

    <!-- NEXT Transition Section -->
    <section ref="nextSection" class="h-screen flex items-center justify-center bg-[#0a0a0a]">
      <span ref="nextText" class="font-serif text-8xl md:text-[10vw] opacity-0 text-white">NEXT</span>
    </section>
  </div>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
