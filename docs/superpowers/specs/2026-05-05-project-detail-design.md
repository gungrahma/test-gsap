# Project Detail Page Design

**Date:** 2026-05-05
**Author:** Agung Rahma

## Overview

Create a dedicated detail page for each project in the portfolio. The page is navigated via `/works/:id` route and displays full project information.

## Architecture

### Data Layer
- **File:** `src/data/projects.ts`
- Shared project array extracted from `WorksView.vue`
- TypeScript interface for `Project` type

### Routing
- **New route:** `/works/:id` → `ProjectDetailView.vue`
- Dynamic route parameter for project ID lookup
- 404 handling for invalid IDs

### Component
- **File:** `src/views/ProjectDetailView.vue`
- Receives project ID from route params
- Looks up project from shared data file
- Renders image hero + metadata

## Page Structure

```
┌─────────────────────────────────────┐
│           [Full-width Image]         │
│           aspect 16/9 or 4/3         │
│           grayscale → color on hover │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  ← Back                             │
│                                     │
│  TITLE                              │
│  [tag1] [tag2]                      │
│                                     │
│  Description text                   │
│  Year: 2024                         │
└─────────────────────────────────────┘
```

## Design Details

### Image Hero
- Full-width, aspect-ratio 16/9 (or 4/3 for projects with `aspect: 'aspect-[3/4]'`)
- Grayscale with brightness-50 by default
- On hover: full color, slight scale (1.02), transition 1000ms
- Object-cover for responsive sizing

### Metadata Section
- Back button: small text link, navigates to `/works`
- Title: font-serif, text-5xl, tracking-tight
- Tags: small border pills, tracking-[0.3em], font-display
- Description: text-neutral-500, font-light, max-w-sm
- Year: text-neutral-600

### Animations
- GSAP: hero image fade-in
- GSAP: staggered text reveal (title → tags → description → year)
- Custom easing: power3.out

## Files to Create/Modify

1. **Create:** `src/data/projects.ts` — shared project data
2. **Create:** `src/views/ProjectDetailView.vue` — detail page component
3. **Modify:** `src/router/index.ts` — add new route
4. **Modify:** `src/views/WorksView.vue` — import from shared data file

## Acceptance Criteria

- [ ] Route `/works/1` renders project with id=1
- [ ] Invalid ID shows 404-style message or redirects
- [ ] Back button navigates to `/works`
- [ ] Animations play on page load
- [ ] No duplicate data — WorksView imports from projects.ts
