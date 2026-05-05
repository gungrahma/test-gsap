<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.from('.hero-content *', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
    ease: 'expo.out'
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

  // Marquee Animation
  gsap.to('.marquee-content', {
    xPercent: -100,
    repeat: -1,
    duration: 30,
    ease: 'none'
  })
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full min-h-screen flex flex-col justify-end pb-32 overflow-hidden px-8 md:px-16">
      <div class="absolute inset-0 z-0">
        <img alt="Project Hero" class="w-full h-full object-cover grayscale mix-blend-luminosity brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjClmNRghc9YuGdOKpFz7v8N1MlIijBLOOGMnV9jyGvWNI4A8BjZU4MNAnq0DZ1dtyP7gNSXKQjtxTUYVZYIphM8rWXu0gYL7nGlyBbSy0cBDPt7vE2f3G6kL5OaOS377kJ_NSTv3S_QNz3qc1lWI4EkRnrZQtGCt-Dhn05ImOiJ7RdXPkFpgxW2cJZiPAXtkFITOEVhVKBj9Ldzxdv1otlQFbzhd-s5PNFyMyXMxHonfOxdSQrRfR3hZyVXuvDoC1d9OnrLtqfABZ"/>
        <div class="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
      </div>
      
      <div class="relative z-10 hero-content max-w-7xl mx-auto w-full">
        <span class="text-xs tracking-[0.4em] text-primary uppercase block mb-6">Web Experience / 2024</span>
        <h1 class="font-serif text-7xl md:text-[8vw] leading-[1.1] tracking-tighter">
          次世代<br />ポートフォリオサイト
        </h1>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="py-64 px-8 md:px-16 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div class="md:col-span-4 reveal">
          <h2 class="text-4xl font-display font-medium mb-8">Technologies</h2>
          <div class="w-12 h-[1px] bg-neutral-800"></div>
        </div>
        <div class="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div class="reveal bg-[#111] p-10 border border-white/5 hover:border-primary/20 transition-colors">
            <h3 class="text-2xl font-display mb-4">GSAP</h3>
            <p class="text-neutral-400 font-light leading-relaxed">複雑なアニメーションシーケンスの制御。スクロールトリガーによるシームレスな要素の出現と、パララックス効果の実装。</p>
          </div>
          <div class="reveal bg-[#111] p-10 border border-white/5 hover:border-primary/20 transition-colors">
            <h3 class="text-2xl font-display mb-4">Barba.js</h3>
            <p class="text-neutral-400 font-light leading-relaxed">非同期ページ遷移。カスタムトランジションコンポーネント（グローバルマスク）との連携による、映画のような画面切り替え。</p>
          </div>
          <div class="reveal bg-[#111] p-10 border border-white/5 hover:border-primary/20 transition-colors">
            <h3 class="text-2xl font-display mb-4">Tailwind CSS</h3>
            <p class="text-neutral-400 font-light leading-relaxed">厳格なデザインシステムの適用。デザイントークンに基づく一貫したカラースキームとタイポグラフィの実現。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Narrative Section -->
    <section class="py-64 px-8 md:px-16 bg-[#0c0c0c]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div class="md:col-span-5 md:col-start-2 reveal">
          <h2 class="font-serif text-5xl md:text-6xl leading-tight">
            余白の美学と<br />動的な没入感
          </h2>
        </div>
        <div class="md:col-span-5 reveal">
          <div class="space-y-8 text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
            <p>伝統的な日本のエディトリアルデザインが持つ「間」の概念を、現代のウェブテクノロジーを用いて再解釈しました。情報は意図的に制限され、ユーザーのスクロールという行為自体が、物語を紐解くトリガーとなります。</p>
            <p>最大の課題は、豊かなアニメーションとパフォーマンスの両立でした。GSAPによる高度な制御と、Barba.jsを用いたSPA的な遷移を組み合わせることで、再描画のコストを抑えつつ、シームレスなユーザー体験を実現しています。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Marquee Section -->
    <section class="py-24 overflow-hidden border-t border-b border-white/5 bg-black">
      <div class="marquee-container flex whitespace-nowrap">
        <div class="marquee-content flex gap-16 text-3xl md:text-5xl font-serif uppercase tracking-widest text-white/80 leading-none">
          <span>Design Clean</span>
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
  </div>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
