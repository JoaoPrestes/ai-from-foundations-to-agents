/**
 * SlideEngine — Motor de Apresentação Fluida e Dinâmica
 * Suporta navegação por teclado, toque, hash na URL, visão geral e fullscreen.
 */

class SlideEngine {
  constructor(options = {}) {
    this.slides = options.slides || (typeof window !== 'undefined' && window.SLIDES_DATA ? window.SLIDES_DATA : []);
    this.diagrams = options.diagrams || (typeof window !== 'undefined' && window.DIAGRAMS ? window.DIAGRAMS : {});
    this.currentIndex = 0;
    this.isOverviewOpen = false;
    this.isShortcutsOpen = false;

    if (options.autoInit !== false && typeof window !== 'undefined') {
      this.init();
    }
  }

  init() {
    this.stageEl = document.getElementById('slide-stage');
    this.progressBarEl = document.getElementById('progress-bar');
    this.counterEl = document.getElementById('slide-counter');
    this.sectionBadgeEl = document.getElementById('section-badge');
    this.overviewModalEl = document.getElementById('overview-modal');
    this.overviewGridEl = document.getElementById('overview-grid');
    this.shortcutsModalEl = document.getElementById('shortcuts-modal');

    // Inicializar slide a partir do hash se presente
    const initialSlide = this.readHash();
    if (initialSlide >= 0 && initialSlide < this.slides.length) {
      this.currentIndex = initialSlide;
    }

    this.bindEvents();
    this.renderCurrentSlide();
    this.renderOverviewGrid();
    this.updateUI();
  }

  bindEvents() {
    if (typeof window === 'undefined') return;

    // Teclado
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));

    // Botões de Navegação
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnFullscreen = document.getElementById('btn-fullscreen');
    const btnOverview = document.getElementById('btn-overview');
    const btnCloseOverview = document.getElementById('btn-close-overview');
    const btnShortcuts = document.getElementById('btn-shortcuts');
    const btnCloseShortcuts = document.getElementById('btn-close-shortcuts');

    if (btnPrev) btnPrev.addEventListener('click', () => this.prev());
    if (btnNext) btnNext.addEventListener('click', () => this.next());
    if (btnFullscreen) btnFullscreen.addEventListener('click', () => this.toggleFullscreen());
    if (btnOverview) btnOverview.addEventListener('click', () => this.toggleOverview());
    if (btnCloseOverview) btnCloseOverview.addEventListener('click', () => this.toggleOverview(false));
    if (btnShortcuts) btnShortcuts.addEventListener('click', () => this.toggleShortcuts());
    if (btnCloseShortcuts) btnCloseShortcuts.addEventListener('click', () => this.toggleShortcuts(false));

    // Fechar modais ao clicar no backdrop
    const overviewBackdrop = document.querySelector('.overview-backdrop');
    if (overviewBackdrop) {
      overviewBackdrop.addEventListener('click', () => this.toggleOverview(false));
    }
    const shortcutsBackdrop = document.querySelector('.shortcuts-backdrop');
    if (shortcutsBackdrop) {
      shortcutsBackdrop.addEventListener('click', () => this.toggleShortcuts(false));
    }

    // Suporte a Toque (Swipe)
    this.bindTouch();

    // Histórico Hash
    window.addEventListener('hashchange', () => {
      const idx = this.readHash();
      if (idx >= 0 && idx < this.slides.length && idx !== this.currentIndex) {
        this.goTo(idx, false);
      }
    });
  }

  handleKeyDown(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    // Se visão geral estiver aberta, ESC, O ou G fecha
    if (this.isOverviewOpen) {
      if (e.key === 'Escape' || e.key.toLowerCase() === 'o' || e.key.toLowerCase() === 'g') {
        e.preventDefault();
        this.toggleOverview(false);
      }
      return;
    }

    // Se atalhos estiverem abertos, ESC fecha
    if (this.isShortcutsOpen) {
      if (e.key === 'Escape' || e.key === '?') {
        e.preventDefault();
        this.toggleShortcuts(false);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
        e.preventDefault();
        this.next();
        break;
      case 'ArrowLeft':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        this.prev();
        break;
      case 'Home':
        e.preventDefault();
        this.first();
        break;
      case 'End':
        e.preventDefault();
        this.last();
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        this.toggleFullscreen();
        break;
      case 'o':
      case 'O':
      case 'g':
      case 'G':
        e.preventDefault();
        this.toggleOverview(true);
        break;
      case '?':
        e.preventDefault();
        this.toggleShortcuts(true);
        break;
      case 'Escape':
        this.toggleOverview(false);
        this.toggleShortcuts(false);
        break;
    }
  }

  bindTouch() {
    if (typeof window === 'undefined') return;
    let touchStartX = 0;
    let touchStartY = 0;

    window.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      const diffX = e.changedTouches[0].screenX - touchStartX;
      const diffY = e.changedTouches[0].screenY - touchStartY;

      // Detecta swipe horizontal predominante
      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    }, { passive: true });
  }

  goTo(index, updateHash = true) {
    if (index < 0 || index >= this.slides.length) return;
    this.currentIndex = index;
    if (typeof window !== 'undefined') {
      this.renderCurrentSlide();
      this.updateUI();
      if (updateHash) {
        this.updateHash();
      }
    }
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.goTo(this.currentIndex + 1);
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.goTo(this.currentIndex - 1);
    }
  }

  first() {
    this.goTo(0);
  }

  last() {
    this.goTo(this.slides.length - 1);
  }

  getProgressPercent() {
    if (!this.slides || this.slides.length === 0) return 0;
    return Math.round(((this.currentIndex + 1) / this.slides.length) * 100);
  }

  updateUI() {
    if (typeof window === 'undefined') return;

    // Barra de progresso
    if (this.progressBarEl) {
      this.progressBarEl.style.width = `${this.getProgressPercent()}%`;
    }

    // Contador
    if (this.counterEl) {
      const currentFormatted = String(this.currentIndex + 1).padStart(2, '0');
      const totalFormatted = String(this.slides.length).padStart(2, '0');
      this.counterEl.textContent = `${currentFormatted} / ${totalFormatted}`;
    }

    // Badge de Seção
    if (this.sectionBadgeEl && this.slides[this.currentIndex]) {
      const slide = this.slides[this.currentIndex];
      this.sectionBadgeEl.textContent = slide.sectionBadge || 'INTELIGÊNCIA ARTIFICIAL';
    }

    // Atualiza destaque no grid de visão geral
    if (this.overviewGridEl) {
      const thumbs = this.overviewGridEl.querySelectorAll('.thumb-card');
      thumbs.forEach((thumb, idx) => {
        if (idx === this.currentIndex) {
          thumb.classList.add('active-thumb');
          if (this.isOverviewOpen) {
            thumb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }
        } else {
          thumb.classList.remove('active-thumb');
        }
      });
    }
  }

  updateHash() {
    if (typeof window === 'undefined') return;
    window.location.hash = `slide-${this.currentIndex + 1}`;
  }

  readHash() {
    if (typeof window === 'undefined') return 0;
    const match = window.location.hash.match(/#slide-(\d+)/);
    if (match && match[1]) {
      return parseInt(match[1], 10) - 1;
    }
    return 0;
  }

  toggleFullscreen() {
    if (typeof document === 'undefined') return;
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  toggleOverview(force) {
    if (!this.overviewModalEl) return;
    this.isOverviewOpen = force !== undefined ? force : !this.isOverviewOpen;
    if (this.isOverviewOpen) {
      this.overviewModalEl.classList.add('active');
      this.overviewModalEl.setAttribute('aria-hidden', 'false');
      this.updateUI();
    } else {
      this.overviewModalEl.classList.remove('active');
      this.overviewModalEl.setAttribute('aria-hidden', 'true');
    }
  }

  toggleShortcuts(force) {
    if (!this.shortcutsModalEl) return;
    this.isShortcutsOpen = force !== undefined ? force : !this.isShortcutsOpen;
    if (this.isShortcutsOpen) {
      this.shortcutsModalEl.classList.add('active');
      this.shortcutsModalEl.setAttribute('aria-hidden', 'false');
    } else {
      this.shortcutsModalEl.classList.remove('active');
      this.shortcutsModalEl.setAttribute('aria-hidden', 'true');
    }
  }

  renderCurrentSlide() {
    if (!this.stageEl || !this.slides[this.currentIndex]) return;
    const slide = this.slides[this.currentIndex];

    let html = '';
    if (slide.type === 'cover') {
      html = this.renderCoverSlide(slide);
    } else if (slide.type === 'transition') {
      html = this.renderTransitionSlide(slide);
    } else {
      html = this.renderContentSlide(slide);
    }

    this.stageEl.innerHTML = `<div class="slide-transition" style="width: 100%; height: 100%;">${html}</div>`;

    // Se o slide tiver pós-renderização dinâmica (ex: interatividade em canvas ou botões de teste)
    if (typeof slide.onMounted === 'function') {
      slide.onMounted(this.stageEl);
    }
  }

  renderCoverSlide(slide) {
    const artSvg = slide.artSvg || (this.diagrams && this.diagrams.renderCoverArt ? this.diagrams.renderCoverArt() : '');
    return `
      <div class="slide-cover">
        <div class="cover-left">
          <div class="cover-category">${slide.category || 'FUNDAMENTOS · APLICAÇÃO'}</div>
          <h1 class="cover-title">${slide.titleHtml || 'Inteligência <span>Artificial:</span><br>do fundamento à aplicação'}</h1>
          <p class="cover-description">${slide.description || 'Uma jornada por IA Generativa, PLN, LLMs, RAG, frameworks e agentes de IA.'}</p>
          <div class="cover-meta">
            <span class="cover-meta-pill">Guia Técnico Completo</span>
            <span class="cover-meta-pill">65 Slides Didáticos</span>
            <span class="cover-meta-pill">Aplicações Reais</span>
          </div>
        </div>
        <div class="cover-art-container">
          ${artSvg}
        </div>
      </div>
    `;
  }

  renderTransitionSlide(slide) {
    const artSvg = slide.artSvg || (this.diagrams && this.diagrams.renderSectionArt ? this.diagrams.renderSectionArt(slide.sectionNumber) : '');
    return `
      <div class="slide-section-divider">
        <div class="divider-left">
          <div class="divider-num">${slide.sectionNumber || '01'}</div>
          <h2 class="divider-title">${slide.title || 'Título da Seção'}</h2>
          <p class="divider-desc">${slide.description || 'Descrição detalhada do bloco de tópicos abordados nesta seção.'}</p>
        </div>
        <div class="divider-art">
          ${artSvg}
        </div>
      </div>
    `;
  }

  renderContentSlide(slide) {
    let diagramHtml = '';
    if (slide.diagramKey && this.diagrams && typeof this.diagrams[slide.diagramKey] === 'function') {
      diagramHtml = `<div class="diagram-stage">${this.diagrams[slide.diagramKey]()}</div>`;
    }

    return `
      <div class="slide-content-wrap">
        <div class="content-header">
          <span class="content-tag">${slide.tag || 'CONCEITO'}</span>
          <h2 class="content-title">${slide.title || ''}</h2>
          ${slide.subtitle ? `<p class="content-subtitle">${slide.subtitle}</p>` : ''}
        </div>
        <div class="content-body">
          ${slide.bodyHtml || ''}
          ${diagramHtml}
        </div>
      </div>
    `;
  }

  renderOverviewGrid() {
    if (!this.overviewGridEl) return;
    this.overviewGridEl.innerHTML = this.slides.map((s, idx) => {
      const num = String(idx + 1).padStart(2, '0');
      const title = s.title || (s.type === 'cover' ? 'Capa da Apresentação' : `Slide ${num}`);
      const tag = s.tag || s.category || (s.type === 'transition' ? `BLOCO ${s.sectionNumber}` : 'SLIDE');
      return `
        <div class="thumb-card ${idx === this.currentIndex ? 'active-thumb' : ''}" data-index="${idx}">
          <div class="thumb-num">${num}</div>
          <div class="thumb-tag">${tag}</div>
          <div class="thumb-title">${title}</div>
        </div>
      `;
    }).join('');

    // Listener para clique nos cards de miniatura
    const cards = this.overviewGridEl.querySelectorAll('.thumb-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const index = parseInt(card.getAttribute('data-index'), 10);
        this.goTo(index);
        this.toggleOverview(false);
      });
    });
  }
}

// Compatibilidade Browser e Node/ESM
if (typeof window !== 'undefined') {
  window.SlideEngine = SlideEngine;
}
export { SlideEngine };
