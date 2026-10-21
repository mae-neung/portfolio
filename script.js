const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const header = document.querySelector('[data-header]');
const motionStage = document.querySelector('[data-motion-stage]');
const motionReplay = document.querySelector('[data-motion-replay]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function getSavedTheme() {
  try {
    return localStorage.getItem('portfolio-theme');
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem('portfolio-theme', theme);
  } catch {
    // Storage can be unavailable in privacy-restricted browsing contexts.
  }
}

const preferredTheme = getSavedTheme();
const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
const initialTheme = preferredTheme || systemTheme;

function setTheme(theme) {
  root.dataset.theme = theme;
  saveTheme(theme);
  const nextTheme = theme === 'dark' ? '라이트' : '다크';
  themeToggle?.setAttribute('aria-label', `${nextTheme} 모드로 전환`);
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content',
    theme === 'dark' ? '#0b0f18' : '#f5f6fa',
  );
}

setTheme(initialTheme);

themeToggle?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

function playIntro() {
  if (!motionStage || reduceMotion.matches) return;
  if (motionReplay) motionReplay.disabled = true;
  motionStage.classList.remove('is-complete', 'is-playing');
  void motionStage.offsetWidth;
  motionStage.classList.add('is-playing');
  window.setTimeout(() => {
    motionStage.classList.remove('is-playing');
    motionStage.classList.add('is-complete');
    if (motionReplay) motionReplay.disabled = false;
  }, 7600);
}

if (reduceMotion.matches) {
  motionStage?.classList.remove('is-playing');
  motionStage?.classList.add('is-complete');
} else {
  playIntro();
}

motionReplay?.addEventListener('click', playIntro);

window.addEventListener(
  'scroll',
  () => header?.classList.toggle('is-scrolled', window.scrollY > 20),
  { passive: true },
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll('.reveal-on-scroll').forEach((element) => observer.observe(element));
document.querySelector('[data-year]').textContent = new Date().getFullYear();

