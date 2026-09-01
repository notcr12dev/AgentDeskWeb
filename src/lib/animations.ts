export const animations = {
  pageEnter: { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" },
  pageExit: { opacity: 0, y: -20, duration: 0.3, ease: "power2.in" },
  scrollReveal: { opacity: 0, y: 30, duration: 0.8, ease: "power2.out" },
  hero: {
    headline: { opacity: 0, y: 40, duration: 1, ease: "power3.out" },
    subtext: { opacity: 0, y: 30, duration: 0.8, ease: "power3.out", delay: 0.2 },
    cta: { opacity: 0, scale: 0.95, duration: 0.6, ease: "back.out(1.7)", delay: 0.4 },
    visual: { opacity: 0, x: 50, duration: 1.2, ease: "power3.out", delay: 0.3 },
  },
  buttonHover: { scale: 1.02, duration: 0.15, ease: "power2.out" },
  buttonTap: { scale: 0.98, duration: 0.1, ease: "power2.in" },
  cardHover: { y: -4, duration: 0.3, ease: "power2.out" },
  linkUnderline: { scaleX: 1, duration: 0.3, ease: "power2.out" },
};

export const scrollDefaults = {
  trigger: ".reveal",
  start: "top 85%",
  end: "bottom 20%",
  toggleActions: "play none none reverse" as const,
};

export const reducedMotionDefaults = {
  duration: 0.001,
  ease: "none",
};