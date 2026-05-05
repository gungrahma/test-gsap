<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import Navigation from './components/Navigation.vue'
import gsap from 'gsap'

const onLeave = (el: HTMLElement, done: () => void) => {
  const tl = gsap.timeline({ onComplete: done });

  tl.to(el, {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(10px)',
    duration: 0.4,
    ease: 'power2.inOut'
  });

  tl.to('#flash-overlay', {
    opacity: 1,
    duration: 0.3,
    ease: 'power2.in'
  }, '-=0.2');
}

const onEnter = (el: HTMLElement, done: () => void) => {
  window.scrollTo(0, 0);

  // Force hide flash overlay immediately
  gsap.set('#flash-overlay', { opacity: 0 })

  const tl = gsap.timeline({ onComplete: done });

  gsap.set(el, {
    opacity: 0,
    scale: 1.02,
    filter: 'blur(4px)'
  });

  tl.to(el, {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    duration: 0.5,
    ease: 'expo.out'
  });
}
</script>

<template>
  <div class="app-wrapper bg-[#0a0a0a] min-h-screen text-[#e5e5e5] font-sans selection:bg-[#e2ff00] selection:text-black">
    <Navigation />
    <main>
      <router-view v-slot="{ Component }">
        <transition 
          @leave="onLeave" 
          @enter="onEnter" 
          :css="false"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Flash Overlay for Transitions -->
    <div id="flash-overlay" class="fixed inset-0 bg-white z-[100] pointer-events-none opacity-0"></div>
    
    <!-- Footer -->
    <footer class="bg-[#080808] w-full py-24 px-8 md:px-16 border-t border-white/5 mt-32">
      <div class="flex flex-col md:flex-row justify-between items-start gap-12 max-w-7xl mx-auto">
        <div class="space-y-6">
          <p class="font-serif text-2xl tracking-tighter">
            MNCrew<span class="text-primary">.</span>
          </p>
          <p class="text-xs tracking-[0.2em] uppercase text-neutral-500">
            精進 — 絶え間ない改善への追求。
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
          <div class="space-y-4">
            <span class="text-[10px] tracking-[0.3em] text-neutral-600 uppercase">Explore</span>
            <div class="flex flex-col gap-2">
              <RouterLink to="/" class="text-xs uppercase tracking-widest hover:text-primary transition-colors">Home</RouterLink>
              <RouterLink to="/works" class="text-xs uppercase tracking-widest hover:text-primary transition-colors">Works</RouterLink>
              <RouterLink to="/about" class="text-xs uppercase tracking-widest hover:text-primary transition-colors">About</RouterLink>
            </div>
          </div>
          <div class="space-y-4">
            <span class="text-[10px] tracking-[0.3em] text-neutral-600 uppercase">Connect</span>
            <div class="flex flex-col gap-2">
              <a href="#" class="text-xs uppercase tracking-widest hover:text-primary transition-colors">Instagram</a>
              <a href="#" class="text-xs uppercase tracking-widest hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" class="text-xs uppercase tracking-widest hover:text-primary transition-colors">Twitter</a>
            </div>
          </div>
          <div class="space-y-4 col-span-2 md:col-span-1">
            <span class="text-[10px] tracking-[0.3em] text-neutral-600 uppercase">Legal</span>
            <p class="text-[10px] tracking-widest text-neutral-700 leading-relaxed uppercase">
              © 2024 TAKUMI DESIGN STUDIO.<br />ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>

    <!-- Custom Cursor -->
    <div id="custom-cursor" class="fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"></div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Outfit:wght@300;400;600&display=swap');

:root {
  --font-sans: 'Inter', sans-serif;
  --font-display: 'Outfit', sans-serif;
}

body {
  margin: 0;
  overflow-x: hidden;
  background-color: #0a0a0a;
}

#custom-cursor {
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
}

.hovered #custom-cursor {
  width: 60px;
  height: 60px;
  background-color: rgba(235, 47, 6, 0.1);
  border: 1px solid #EB2F06;
}
</style>
