import fs from 'node:fs';
import path from 'node:path';

// Lê os arquivos modulares
const css = fs.readFileSync('css/styles.css', 'utf8');
const diagramsJs = fs.readFileSync('js/diagrams.js', 'utf8')
  .replace(/export\s*\{[^}]+\};?/g, ''); // remove export para browser inline
const slidesDataJs = fs.readFileSync('js/slides-data.js', 'utf8')
  .replace(/export\s*\{[^}]+\};?/g, '');
const engineJs = fs.readFileSync('js/engine.js', 'utf8')
  .replace(/export\s*\{[^}]+\};?/g, '');

const indexTemplate = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inteligência Artificial: do Fundamento à Aplicação</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
${css}
  </style>
</head>
<body class="bg-dark text-slate">

  <!-- Main Presentation App Shell -->
  <div id="presentation-app" class="presentation-shell" role="region" aria-label="Apresentação de Inteligência Artificial">
    
    <!-- Top Progress Bar -->
    <div class="progress-track" aria-hidden="true">
      <div id="progress-bar" class="progress-fill" style="width: 0%;"></div>
    </div>

    <!-- Top Header Bar with Contextual Section Badge -->
    <header class="app-header">
      <div id="section-badge" class="section-badge">00 · CAPA</div>
      <div class="header-actions">
        <button id="btn-shortcuts" class="btn-icon" title="Atalhos de teclado (?)" aria-label="Atalhos">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        </button>
        <button id="btn-overview" class="btn-icon" title="Visão Geral (O / Esc)" aria-label="Visão Geral dos Slides">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        </button>
        <button id="btn-fullscreen" class="btn-icon" title="Tela Cheia (F)" aria-label="Alternar Tela Cheia">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
        </button>
      </div>
    </header>

    <!-- Slide Stage: Auto-scaled 16:9 Presentation Viewport -->
    <main class="viewport-wrapper">
      <div id="slide-stage" class="slide-stage" aria-live="polite">
        <!-- Slide content dynamically rendered here -->
      </div>
    </main>

    <!-- Floating Navigation and Counter Footer -->
    <footer class="app-footer">
      <div class="footer-left">
        <span id="slide-counter" class="slide-counter">01 / 61</span>
      </div>
      <div class="footer-center">
        <span class="slide-subhint">Navegue com as setas ← → ou espaço · [F] Tela Cheia · [O] Visão Geral</span>
      </div>
      <div class="footer-right">
        <button id="btn-prev" class="btn-nav" title="Slide Anterior (←)" aria-label="Anterior">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button id="btn-next" class="btn-nav btn-nav-primary" title="Próximo Slide (→)" aria-label="Próximo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </footer>

    <!-- Overview Modal (Thumbnail Grid) -->
    <div id="overview-modal" class="overview-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Grade de Slides">
      <div class="overview-backdrop"></div>
      <div class="overview-container">
        <div class="overview-header">
          <div class="overview-title-group">
            <h2>Visão Geral da Apresentação (61 Slides)</h2>
            <span class="overview-subtitle">Selecione qualquer slide para saltar diretamente</span>
          </div>
          <button id="btn-close-overview" class="btn-icon" aria-label="Fechar Visão Geral">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div id="overview-grid" class="overview-grid">
          <!-- Miniaturas injetadas dinamicamente -->
        </div>
      </div>
    </div>

    <!-- Keyboard Shortcuts Help Modal -->
    <div id="shortcuts-modal" class="shortcuts-modal" aria-hidden="true" role="dialog" aria-modal="true">
      <div class="shortcuts-backdrop"></div>
      <div class="shortcuts-card card-glass">
        <div class="shortcuts-header">
          <h3>Atalhos de Teclado</h3>
          <button id="btn-close-shortcuts" class="btn-icon" aria-label="Fechar Atalhos">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="shortcuts-list">
          <div class="shortcut-item"><kbd>→</kbd> ou <kbd>Espaço</kbd> <span>Próximo slide</span></div>
          <div class="shortcut-item"><kbd>←</kbd> <span>Slide anterior</span></div>
          <div class="shortcut-item"><kbd>F</kbd> <span>Alternar Tela Cheia</span></div>
          <div class="shortcut-item"><kbd>O</kbd> ou <kbd>Esc</kbd> <span>Grade de Visão Geral</span></div>
          <div class="shortcut-item"><kbd>Home</kbd> / <kbd>End</kbd> <span>Primeiro / Último slide</span></div>
          <div class="shortcut-item"><kbd>?</kbd> <span>Abrir esta ajuda</span></div>
        </div>
      </div>
    </div>

  </div>

  <!-- Scripts Inlined for 100% Offline Portability & Instant Zero-CORS Loading -->
  <script>
${diagramsJs}
${slidesDataJs}
${engineJs}

// Auto-inicialização imediata com verificação segura de readyState
const initPresentation = () => {
  if (!window.presentation) {
    window.presentation = new SlideEngine({
      slides: window.SLIDES_DATA,
      diagrams: window.DIAGRAMS
    });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPresentation);
} else {
  initPresentation();
}
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', indexTemplate, 'utf8');
console.log('Build complete: index.html is self-contained and ready for instant offline execution!');

