<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.from('.reveal-header *', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out'
  })

  gsap.utils.toArray('.reveal-section').forEach((el: any) => {
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
})
</script>

<template>
  <div class="pt-32 px-8 md:px-16 overflow-hidden">
    <!-- About Hero -->
    <section class="mb-64 pt-32 reveal-header border-b border-white/10 pb-16">
      <div class="flex flex-col md:flex-row justify-between items-end gap-12">
        <h1 class="font-serif text-7xl md:text-[10vw] leading-[1.1]">
          経歴 <span class="text-neutral-700 block text-5xl md:text-[6vw] uppercase tracking-widest mt-4">/ ABOUT</span>
        </h1>
        <p class="text-xl md:text-2xl text-neutral-400 font-light max-w-sm ml-auto text-right">
          A disciplined approach to digital craftsmanship, balancing the aesthetics of minimalism with high-performance engineering.
        </p>
      </div>
    </section>

    <!-- Chapter 01 -->
    <section class="mb-64 reveal-section">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div class="md:col-span-4 border-t border-white/10 pt-8">
          <span class="text-xs tracking-[0.4em] text-neutral-500 uppercase block mb-4">CHAPTER 01</span>
          <h2 class="text-4xl font-display mb-8">ウェブ制作の旅</h2>
        </div>
        <div class="md:col-span-8 space-y-16">
          <div class="aspect-[21/9] overflow-hidden bg-neutral-900">
            <img src="https://i.pixiv.re/img-original/img/2025/11/01/01/36/58/136942773_p0.jpg" alt="Pixiv Image" class="w-full h-full object-cover" />
          </div>
          <div class="grid md:grid-cols-2 gap-12 text-lg text-neutral-400 font-light leading-relaxed">
            <p>
              私たちのデザインフィロソフィーは、極限まで無駄を削ぎ落とした「機能美」にあります。単に美しいものを作るのではなく、そこにあるべき論理的な必然性を追求します。
            </p>
            <p>
              情報の氾濫する現代において、「沈黙」は最も強いメッセージとなり得ます。余白をデザインすることは、ユーザーの思考にスペースを与えることと同義です。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Chapter 02 -->
    <section class="mb-16 reveal-section">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div class="md:col-span-4 border-t border-white/10 pt-8">
          <span class="text-xs tracking-[0.4em] text-neutral-500 uppercase block mb-4">CHAPTER 02</span>
          <h2 class="text-4xl font-display mb-8">技術領域</h2>
        </div>
        <div class="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-[#111] p-12 border border-white/5 flex flex-col justify-between h-80">
            <div>
              <h3 class="text-3xl font-display mb-4">Frontend</h3>
              <p class="text-neutral-500 font-light">堅牢なアーキテクチャと、コンポーネント指向の開発によるスケーラブルなUI構築。</p>
            </div>
            <div class="flex gap-2 flex-wrap text-[10px] tracking-widest text-neutral-400">
              <span class="border border-white/10 px-3 py-1">VUE.JS</span>
              <span class="border border-white/10 px-3 py-1">TAILWIND CSS</span>
              <span class="border border-white/10 px-3 py-1">TYPESCRIPT</span>
            </div>
          </div>
          <div class="bg-[#111] p-12 border border-white/5 flex flex-col justify-between h-80">
            <div>
              <h3 class="text-3xl font-display mb-4">Motion</h3>
              <p class="text-neutral-500 font-light">高度なタイムライン制御と、シームレスなページ遷移による映画的な体験の創造。</p>
            </div>
            <div class="flex gap-2 flex-wrap text-[10px] tracking-widest text-neutral-400">
              <span class="border border-white/10 px-3 py-1">GSAP</span>
              <span class="border border-white/10 px-3 py-1">LENIS</span>
              <span class="border border-white/10 px-3 py-1">BARBA.JS</span>
            </div>
          </div>
          <div class="md:col-span-2 bg-[#111] p-12 border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div class="md:w-1/2">
              <h3 class="text-3xl font-display mb-4">Design Tools</h3>
              <p class="text-neutral-500 font-light">デザインシステムに基づくプロトタイピングと、ピクセルパーフェクトな実装設計。</p>
            </div>
            <div class="flex gap-2 text-[10px] tracking-widest text-neutral-400">
              <span class="border border-white/10 px-4 py-2">FIGMA</span>
              <span class="border border-white/10 px-4 py-2">WEBFLOW</span>
            </div>
          </div>
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
