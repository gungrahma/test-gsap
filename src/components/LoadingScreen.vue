<template>
  <div ref="loaderEl" class="fixed inset-0 bg-[#0a0a0a] z-[200] flex items-center justify-center overflow-hidden pointer-events-none">
    <div ref="countEl" class="font-serif text-[15vw] text-[#e5e5e5] leading-none">0</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const loaderEl = ref<HTMLElement | null>(null)
const countEl = ref<HTMLElement | null>(null)

const emit = defineEmits<{ complete: [] }>()

onMounted(() => {
  const obj = { val: 0 }

  gsap.to(obj, {
    val: 100,
    duration: 1.5,
    ease: 'power1.out',
    onUpdate: () => {
      if (countEl.value) {
        countEl.value.textContent = Math.round(obj.val).toString()
      }
    },
    onComplete: () => {
      setTimeout(() => {
        gsap.to(loaderEl.value, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => emit('complete')
        })
      }, 200)
    }
  })
})
</script>