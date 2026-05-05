# Loading Experience - Minimal Line Loader

## Overview

Full-screen loading overlay dengan minimal horizontal line animation yang mencerminkan brand aesthetic portfolio.

## Visual Design

**Loader Overlay:**
- Full viewport coverage, `bg-[#0a0a0a]` matching app background
- Centered vertically and horizontally

**Line Element:**
- Width: `200px`, Height: `1px`
- Color: `#e5e5e5` (matches text color)
- No visible container or border

**Animation Sequence:**
1. Line grows `0% → 100%` width over `1.2s` with `power2.inOut` easing
2. Hold at `100%` for `300ms`
3. Fade out overlay over `400ms`

## Behavior

- Shows immediately on app mount (before Vue router ready)
- Hides when router is ready OR after animation completes (whichever comes first)
- One-time only - doesn't show again on subsequent navigation

## Implementation

### Files

- `src/components/LoadingScreen.vue` - Loader component
- `src/main.ts` - Mount loader before app

### LoadingScreen.vue

```vue
<template>
  <div ref="loaderEl" class="fixed inset-0 bg-[#0a0a0a] z-[200] flex items-center justify-center pointer-events-none">
    <div ref="lineEl" class="w-0 h-px bg-[#e5e5e5]"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const loaderEl = ref<HTMLElement | null>(null)
const lineEl = ref<HTMLElement | null>(null)

const emit = defineEmits<{ complete: [] }>()

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => emit('complete')
  })

  tl.to(lineEl.value, {
    width: '200px',
    duration: 1.2,
    ease: 'power2.inOut'
  })
  tl.to(loaderEl.value, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.out'
  }, '+=0.3')
})
</script>
```

### main.ts Integration

```ts
// Before createApp
import LoadingScreen from './components/LoadingScreen.vue'

const loadingScreen = createApp(LoadingScreen)
loadingScreen.mount('#loading-screen')

// App continues loading normally
const app = createApp(App)
app.use(router)
app.mount('#app')

// Hide loader when router ready
router.isReady().then(() => {
  // Loader completes on its own timeline
})
```

## Constraints

- Must match existing `bg-[#0a0a0a]` to blend seamlessly
- Uses GSAP for consistent animation with rest of portfolio
- Z-index `200` ensures it's above all content including flash overlay
- Pointer-events-none so it doesn't block interaction if somehow visible too long