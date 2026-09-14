import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduced) {
  document.querySelectorAll<HTMLElement>('.reveal, [data-animate]').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
} else {
  gsap.registerPlugin(ScrollTrigger);

  const heroLines = document.querySelectorAll<HTMLElement>('[data-animate="hero-line"]');
  if (heroLines.length) {
    gsap.from(heroLines, {
      y: 28,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      delay: 0.05,
    });
  }

  document.querySelectorAll<HTMLElement>('[data-animate="image"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 36,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  document.querySelectorAll<HTMLElement>('[data-animate="section"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 28,
      duration: 0.85,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      },
    });
  });
}
