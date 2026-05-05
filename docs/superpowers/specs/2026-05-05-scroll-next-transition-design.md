# Scroll-to-NEXT Transition Animation

## Overview

Animasi scroll-driven yang trigger transisi ke halaman Works ketika user scroll ke element "NEXT" di bottom homepage.

## Sequence

1. User scrolls to bottom of homepage
2. "NEXT" text element enters viewport center → ScrollTrigger fires
3. Text scales from `1 → 2.5` while opacity `0 → 1` over `800ms` (`power3.inOut`)
4. At scale threshold (2.0), white overlay fades in (`opacity 0 → 1`, `400ms`)
5. On complete → `router.push('/works')`
6. ScrollTrigger killed after transition (one-time only)

## Location

Bottom of `HomeView.vue`, before the footer section.

## Implementation

### HomeView.vue

```vue
<section ref="nextSection" class="h-screen flex items-center justify-center">
  <span ref="nextText" class="next-text font-serif text-8xl md:text-[10vw]">NEXT</span>
</section>
```

### Animation Logic

```ts
// In onMounted
ScrollTrigger.create({
  trigger: nextSection.value,
  start: 'top center',
  onTrigger: () => {
    const tl = gsap.timeline({
      onComplete: () => router.push('/works')
    })

    tl.to(nextText.value, {
      scale: 2.5,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.inOut'
    })

    tl.to('#flash-overlay', {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.in'
    }, '-=0.3')
  },
  once: true
})
```

### Styling

- Centered in viewport
- Font: serif, large scale (8xl mobile, 10vw desktop)
- Color: white with neutral-600 secondary text

## Constraints

- One-time trigger only (no re-trigger on revisit)
- Uses existing `#flash-overlay` element from App.vue
- Requires GSAP ScrollTrigger plugin registration