import Lenis from 'lenis';

// Configuración global de Lenis
export function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
    autoRaf: true,
  });

  // Escuchar eventos de scroll para debugging
  lenis.on('scroll', (e) => {
    console.log('Lenis scroll:', {
      scroll: e.scroll,
      limit: e.limit,
      velocity: e.velocity,
      direction: e.direction,
      progress: e.progress,
    });
  });

  // Observador de intersección para animaciones
  const observeAnimations = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            console.log('Animating element:', entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
      }
    );

    animatedElements.forEach((el) => observer.observe(el));
  };

  // Inicializar observador cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAnimations);
  } else {
    observeAnimations();
  }

  return lenis;
}

// Funciones de utilidad para scroll
export function scrollTo(target: string | number, options?: any) {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(target, options);
  }
}

export function scrollToTop() {
  scrollTo(0, { duration: 2 });
}

export function scrollToSection(sectionId: string) {
  scrollTo(`#${sectionId}`, { duration: 1.5 });
}
