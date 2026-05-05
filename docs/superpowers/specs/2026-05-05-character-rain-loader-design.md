# Loading Experience - Character Rain

## Overview

Full-screen loading overlay dengan matrix-style character rain animation. Characters fall dari atas ke bawah dalam kolom, lalu resolve ke minimal line loader.

## Visual Design

**Background:**
- Full viewport `bg-[#0a0a0a]`
- Z-index 200, covers everything

**Character Rain:**
- 15-20 columns across screen width
- Each column: random Japanese/Chinese characters ( технические символы atau katakana)
- Characters fall from top → bottom dengan staggered timing
- Multiple layers (3-4 depths) dengan different opacity untuk parallax effect
- Fall speed: ~1.5s per column
- After all columns landed, hold 400ms then fade out entire rain

**Line Reveal:**
- Setelah character rain fade, line grows 0 → 200px over 1.2s
- Same as previous minimal line design

**Color Palette:**
- Characters: mix of `#e5e5e5` (bright) dan `#404040` (dim)
- Gives depth without being distracting

## Animation Sequence

1. **0ms** - Character rain appears, columns start falling
2. **0-1500ms** - All columns fall dengan staggered timing
3. **1900ms** - All characters in position, hold briefly
4. **2000ms** - Characters fade out together
5. **2400ms** - Line starts growing
6. **3600ms** - Line at 100%
7. **3900ms** - Line holds, overlay fade out complete

Total: ~4s total loader duration

## Implementation

### LoadingScreen.vue

```vue
<template>
  <div ref="loaderEl" class="fixed inset-0 bg-[#0a0a0a] z-[200] overflow-hidden">
    <!-- Character rain container -->
    <div class="character-rain absolute inset-0">
      <div
        v-for="col in columns"
        :key="col"
        class="column absolute top-0"
        :style="{ left: `${col * 5}%` }"
      >
        <span
          v-for="(char, i) in columnChars[col]"
          :key="i"
          class="char absolute text-xs"
          :style="{
            top: `${char.offset}px`,
            opacity: char.opacity,
            color: char.bright ? '#e5e5e5' : '#404040'
          }"
        >
          {{ char.char }}
        </span>
      </div>
    </div>

    <!-- Center line -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div ref="lineEl" class="w-0 h-px bg-[#e5e5e5]"></div>
    </div>
  </div>
</template>
```

### Animation Logic (GSAP)

```ts
// Phase 1: Character rain fall
columns.forEach((col, i) => {
  gsap.to(`.column-${i} .char`, {
    y: '100vh',
    duration: 1.5,
    delay: i * 0.08,
    ease: 'none',
    stagger: 0.05
  })
})

// Phase 2: Fade out rain, reveal line
tl.to('.character-rain', {
  opacity: 0,
  duration: 0.4
})

tl.to(lineEl.value, {
  width: '200px',
  duration: 1.2,
  ease: 'power2.inOut'
}, '-=0.2')

tl.to(loaderEl.value, {
  opacity: 0,
  duration: 0.4,
  onComplete: () => emit('complete')
}, '+=0.3')
```

## Characters

Use mix of:
- Japanese katakana: ア イ ウ エ オ カ キ ク ケ コ
- Technical symbols: ◉ ◯ ■ □ ▲ △
- Misc: ◆ ◇ ● ○

Randomized per column, 10-15 chars per column.

## Constraints

- Characters should feel like rain, not static
- Use requestAnimationFrame-friendly animation (GSAP handles this)
- Ensure characters don't overflow viewport horizontally
- Line should be perfectly centered both vertically and horizontally