<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-40 px-6 py-8 flex justify-between items-center mix-blend-difference">
    <RouterLink to="/" class="text-xl font-display font-semibold tracking-tighter hover:opacity-70 transition-opacity">
      TAKUMI<span class="text-primary">.</span>
    </RouterLink>
    
    <div class="hidden md:flex space-x-12">
      <RouterLink to="/works" class="group relative overflow-hidden text-sm uppercase tracking-widest font-serif">
        <span class="block transition-transform duration-500 group-hover:-translate-y-full">作品一覧</span>
        <span class="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full text-primary">作品一覧</span>
      </RouterLink>
      <RouterLink to="/about" class="group relative overflow-hidden text-sm uppercase tracking-widest font-serif">
        <span class="block transition-transform duration-500 group-hover:-translate-y-full">経歴</span>
        <span class="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full text-primary">経歴</span>
      </RouterLink>
      <RouterLink to="/contact" class="group relative overflow-hidden text-sm uppercase tracking-widest font-serif">
        <span class="block transition-transform duration-500 group-hover:-translate-y-full">お問い合わせ</span>
        <span class="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full text-primary">お問い合わせ</span>
      </RouterLink>
    </div>

    <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
      <Menu v-if="!isMenuOpen" :size="24" />
      <X v-else :size="24" />
    </button>
  </nav>

  <!-- Mobile Menu Overlay -->
  <Transition name="fade">
    <div v-if="isMenuOpen" class="fixed inset-0 bg-[#0a0a0a] z-30 flex flex-col items-center justify-center space-y-12 text-4xl font-display uppercase tracking-widest font-serif" @click="isMenuOpen = false">
      <RouterLink to="/works" class="hover:text-primary transition-colors">作品一覧</RouterLink>
      <RouterLink to="/about" class="hover:text-primary transition-colors">経歴</RouterLink>
      <RouterLink to="/contact" class="hover:text-primary transition-colors">お問い合わせ</RouterLink>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
