<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.from('.contact-header *', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })

  gsap.from('.contact-info > div', {
    x: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.5
  })
})
</script>

<template>
  <div class="pt-32 pb-32 px-8 md:px-16 overflow-hidden">
    <header class="contact-header mb-32 max-w-7xl mx-auto">
      <h1 class="font-serif text-7xl md:text-[10vw] leading-tight mb-8">
        お問い合わせ <span class="text-neutral-600 block md:inline">/ CONTACT</span>
      </h1>
      <p class="text-xl text-neutral-400 max-w-2xl font-light">
        新しいプロジェクトの相談、コラボレーション、または単なる挨拶でも構いません。お気軽にご連絡ください。
      </p>
    </header>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
      <div class="contact-info space-y-16">
        <div>
          <span class="text-xs tracking-[0.4em] text-neutral-500 uppercase block mb-6">EMAIL</span>
          <a href="mailto:hello@takumi.design" class="text-3xl md:text-5xl font-display hover:text-primary transition-colors duration-500">
            hello@takumi.design
          </a>
        </div>
        <div>
          <span class="text-xs tracking-[0.4em] text-neutral-500 uppercase block mb-6">SOCIAL</span>
          <div class="flex flex-wrap gap-8">
            <a v-for="s in ['Instagram', 'LinkedIn', 'Twitter', 'GitHub']" :key="s" href="#" class="text-xl font-display hover:text-primary transition-colors">
              {{ s }}
            </a>
          </div>
        </div>
        <div>
          <span class="text-xs tracking-[0.4em] text-neutral-500 uppercase block mb-6">LOCATION</span>
          <p class="text-2xl font-display uppercase tracking-wider">Tokyo, Japan</p>
        </div>
      </div>

      <div class="reveal-form bg-[#111] p-12 border border-white/5">
        <form @submit.prevent class="space-y-8">
          <div class="space-y-4">
            <label class="text-[10px] tracking-[0.3em] text-neutral-500 uppercase">お名前 / Name</label>
            <input type="text" class="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors font-light text-xl" />
          </div>
          <div class="space-y-4">
            <label class="text-[10px] tracking-[0.3em] text-neutral-500 uppercase">メールアドレス / Email</label>
            <input type="email" class="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors font-light text-xl" />
          </div>
          <div class="space-y-4">
            <label class="text-[10px] tracking-[0.3em] text-neutral-500 uppercase">メッセージ / Message</label>
            <textarea rows="4" class="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors font-light text-xl resize-none"></textarea>
          </div>
          <button class="group flex items-center gap-4 text-xs tracking-[0.4em] uppercase border border-white/10 px-8 py-4 hover:bg-primary hover:text-black transition-all">
            送信する <span class="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
