import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Custom Cursor Logic
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
  if (cursor) {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: 'power2.out'
    });
  }
});

document.addEventListener('mouseover', (e) => {
  const target = e.target as HTMLElement;
  if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('.cursor-pointer')) {
    document.body.classList.add('hovered');
  } else {
    document.body.classList.remove('hovered');
  }
});

// App initialization
const app = createApp(App);
app.use(router);
app.mount('#app');
