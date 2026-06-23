/* ============================================================
   FoodLover - Animation Controllers (GSAP Integration)
   ============================================================ */

const AnimationController = {
  // Track initialized state
  initialized: false,

  init() {
    if (this.initialized) return;
    this.initialized = true;

    this.initFloatingDecorations();
    this.initScrollAnimations();
    this.initNavScroll();
    this.initTypewriter();
  },

  /* ========== FLOATING BACKGROUND DECORATIONS ========== */
  initFloatingDecorations() {
    const container = document.querySelector('.floating-decorations');
    if (!container) return;

    const items = ['💕', '✨', '🌸', '⭐', '🍜', '💖', '🌟', '🎀', '🍡', '💗', '🌺', '🧁'];
    const count = window.innerWidth < 768 ? 12 : 20;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.className = 'floating-item';
      el.textContent = items[Math.floor(Math.random() * items.length)];
      el.style.left = Math.random() * 100 + '%';
      el.style.fontSize = (0.8 + Math.random() * 1.5) + 'rem';
      el.style.animationDuration = (8 + Math.random() * 15) + 's';
      el.style.animationDelay = Math.random() * 10 + 's';
      container.appendChild(el);
    }
  },

  /* ========== SCROLL ANIMATIONS (GSAP) ========== */
  initScrollAnimations() {
    // Register ScrollTrigger plugin
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Welcome section entrance
      gsap.from('.welcome__mascot', {
        scale: 0,
        rotation: -20,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.3,
      });

      gsap.from('.welcome__title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5,
      });

      gsap.from('.welcome__subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.7,
      });

      gsap.from('.welcome__cta-group', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.9,
      });

      // Menu section
      gsap.from('.menu__header', {
        scrollTrigger: {
          trigger: '.menu__header',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Random picker section
      gsap.from('.random-picker__header', {
        scrollTrigger: {
          trigger: '.random-picker__header',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Confirm section
      gsap.from('.confirm__header', {
        scrollTrigger: {
          trigger: '.confirm__header',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }
  },

  /* ========== STAGGER FOOD CARDS ========== */
  animateFoodCards() {
    const cards = document.querySelectorAll('.food-card:not(.visible)');
    if (cards.length === 0) return;

    if (typeof gsap !== 'undefined') {
      // Use GSAP for smoother stagger
      gsap.fromTo(cards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out',
          onComplete: () => {
            cards.forEach(card => card.classList.add('visible'));
          }
        }
      );
    } else {
      // Fallback: CSS-only stagger
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('visible');
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        }, i * 60);
      });
    }
  },

  /* ========== NAV SCROLL EFFECT ========== */
  initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  },

  /* ========== TYPEWRITER EFFECT ========== */
  initTypewriter() {
    const el = document.querySelector('[data-typewriter]');
    if (!el) return;

    const text = el.getAttribute('data-typewriter');
    el.textContent = '';
    el.style.visibility = 'visible';

    let i = 0;
    const type = () => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80 + Math.random() * 40);
      }
    };

    // Start after a delay
    setTimeout(type, 800);
  },

  /* ========== WOBBLE ANIMATION ========== */
  wobble(element) {
    if (!element) return;
    element.classList.remove('food-card__heart--active');
    // Force reflow
    void element.offsetWidth;
    element.classList.add('food-card__heart--active');
  },

  /* ========== CONFETTI ========== */
  fireConfetti() {
    if (typeof confetti !== 'function') return;

    // Center burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFB5C2', '#E8D5F5', '#B8F0D8', '#FFCBA4', '#B8E4F0', '#FFE5A0'],
    });

    // Side cannons
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ['#FFB5C2', '#FF8FA3', '#E8D5F5'],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ['#B8F0D8', '#FFCBA4', '#B8E4F0'],
      });
    }, 200);
  },

  /* ========== CELEBRATION (Success Screen) ========== */
  fireCelebration() {
    if (typeof confetti !== 'function') return;

    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#FFB5C2', '#E8D5F5', '#FFE5A0'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#B8F0D8', '#FFCBA4', '#B8E4F0'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  },

  /* ========== FLOATING HEARTS (on send) ========== */
  floatHearts(container) {
    if (!container) return;

    const hearts = ['💕', '💖', '💗', '💘', '💝', '❤️'];
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement('span');
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.position = 'fixed';
      heart.style.left = (20 + Math.random() * 60) + '%';
      heart.style.bottom = '-20px';
      heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '999';
      heart.style.animation = `heart-float ${2 + Math.random() * 2}s ease-out forwards`;
      heart.style.animationDelay = (Math.random() * 1) + 's';
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    }
  },

  /* ========== SMOOTH SCROLL TO SECTION ========== */
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  },

  /* ========== SHAKE ANIMATION ========== */
  shake(element) {
    if (!element) return;
    element.style.animation = 'shake 0.5s ease-in-out';
    element.addEventListener('animationend', () => {
      element.style.animation = '';
    }, { once: true });
  },
};
