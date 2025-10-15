// public/i18n.js
window.i18n = {
  // Configuración de traducciones
  translations: {},
  
  // Configuración DE LOS ARCHIVOS PDF (CRUCIAL)
  PDFs: {
    en: {
      food: '/docs/Menu-Food-English.pdf',
      drink: '/docs/Menu-Drink-English.pdf'
    },
    es: {
      food: '/docs/Menu-Food-Spanish.pdf',
      drink: '/docs/Menu-Drink-Spanish.pdf'
    }
  },
  
  // Detecta el idioma del dispositivo
  detectLanguage() {
    const stored = localStorage.getItem('preferredLang');
    if (stored) return stored;
    const lang = navigator.language.split('-')[0].toLowerCase();
    return lang === 'es' ? 'es' : 'en';
  },

  // Carga traducciones desde JSON
  async loadTranslations(lang) {
    try {
      const response = await fetch(`/locales/${lang}.json`);
      this.translations = await response.json();
      this.applyTranslations();
      document.documentElement.lang = lang;
      localStorage.setItem('preferredLang', lang);
    } catch (error) {
      console.error(`Error loading ${lang} translations`, error);
    }
  },

  // Aplica traducciones a elementos con data-i18n
  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (this.translations[key] !== undefined) {
        el.textContent = this.translations[key];
      }
    });
  },

  // Cambia el idioma y recarga traducciones
  setLanguage(lang) {
    this.loadTranslations(lang);
  }
};

// Inicializa al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const lang = window.i18n.detectLanguage();
  window.i18n.loadTranslations(lang);
});