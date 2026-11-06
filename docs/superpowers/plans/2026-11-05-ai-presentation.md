# Apresentação Web Interativa: Inteligência Artificial (do Fundamento à Aplicação) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir uma aplicação web de apresentação técnica de altíssimo padrão, interativa, fluida e dinâmica, cobrindo integralmente o roteiro de IA, GenAI, PLN, LLMs, Treinamento, RAG, Frameworks, Agentes e Conclusão, com a identidade visual da referência Gamma.

**Architecture:** Aplicação web modular em Vanilla JS moderno (ES6+), CSS3 com aceleração de GPU e SVGs interativos vetoriais sem necessidade de compilação ou dependências externas obrigatórias (100% offline-ready). O motor gerencia transições, teclado, toque, modo tela cheia e uma grade de visão geral com miniaturas.

**Tech Stack:** HTML5 semântico, CSS3 moderno (Custom Properties, Flexbox/Grid, Glassmorphism, Neon Glows), Vanilla JavaScript (ES6 Modules/Classes), SVG animado/interativo, Node.js test runner (`node:test`, `node:assert`).

**Spec:** [`docs/superpowers/specs/2026-11-05-ai-presentation-design.md`](file:///c:/Users/João%20Otavio%20Gamer/Desktop/Projetos%20Antigravity/Slides%20-%20Apresentacao/docs/superpowers/specs/2026-11-05-ai-presentation-design.md)

## Global Constraints

- Fundo escuro azul-marinho profundo (`#050814` a `#0A1128`) com acentos em azul elétrico (`#2563EB`, `#3B82F6`) e ciano neon (`#00F0FF`, `#38BDF8`).
- Todos os 62 slides acordados na especificação devem existir e conter conteúdo técnico didático, claro e objetivo sem pular nenhum tópico do roteiro.
- Zero dependências de build (`npm run build` não é obrigatório para visualização; `index.html` deve funcionar diretamente).
- Navegação fluida por teclado (`ArrowRight`, `ArrowLeft`, `Space`, `f`, `o`, `Escape`, `Home`, `End`), suporte a toque e redimensionamento responsivo preservando aspecto 16:9.

## Review Focus

1. **Navegação além dos limites:** Pressionar `ArrowRight` no último slide ou `ArrowLeft` no primeiro slide não deve travar nem gerar erros de índice no console.
2. **Histórico e URL Hash:** Modificar o hash da URL (ex: `#slide-15`) ou recarregar a página deve abrir diretamente o slide correto.
3. **Modal de Visão Geral:** Abrir a grade de visão geral com tecla `O` ou `Esc` deve focar no slide atual e permitir clicar em qualquer miniatura para saltar instantaneamente para ele.
4. **Escala em Telas Variadas:** Em monitores widescreen, notebooks ou resoluções móveis, o slide deve manter o aspecto 16:9 nítido sem cortes de texto ou quebras de layout.
5. **Diagramas SVG:** Todos os 10 diagramas específicos devem renderizar perfeitamente vetoriais sem fontes quebradas ou distorções de escala.

---

### Task 1: Scaffolding do Projeto e Estrutura Base HTML

**Files:**
- Create: `index.html`
- Create: `package.json` (para scripts de teste automatizado via `node --test`)
- Create: `tests/test-scaffolding.mjs`

**Interfaces:**
- Produces: Elementos DOM `#presentation-app`, `#slide-stage`, `#progress-bar`, `#slide-counter`, `#section-badge`, `#overview-modal`.

- [ ] **Step 1: Escrever teste de validação de estrutura base HTML**

```javascript
// tests/test-scaffolding.mjs
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('index.html contains all critical presentation containers', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  assert.match(html, /id=["']presentation-app["']/);
  assert.match(html, /id=["']slide-stage["']/);
  assert.match(html, /id=["']progress-bar["']/);
  assert.match(html, /id=["']slide-counter["']/);
  assert.match(html, /id=["']section-badge["']/);
  assert.match(html, /id=["']overview-modal["']/);
});
```

- [ ] **Step 2: Executar teste para verificar falha inicial**

Run: `node tests/test-scaffolding.mjs`  
Expected: FAIL (arquivo não encontrado)

- [ ] **Step 3: Criar `package.json` e `index.html` com a estrutura semântica**

Criar `package.json` com `"type": "module"` e script `"test": "node --test tests/*.mjs"`.  
Criar `index.html` com os nós essenciais, links para `css/styles.css` e scripts `js/slides-data.js`, `js/diagrams.js` e `js/engine.js`.

- [ ] **Step 4: Executar teste para verificar aprovação**

Run: `node tests/test-scaffolding.mjs`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add package.json index.html tests/test-scaffolding.mjs
git commit -m "feat: add project scaffolding and index.html shell"
```

---

### Task 2: Design System e Estilos CSS (Tema Gamma Escuro & Neon)

**Files:**
- Create: `css/styles.css`
- Create: `tests/test-styles.mjs`

**Interfaces:**
- Produces: Variáveis CSS globais (`--bg-dark`, `--card-bg`, `--accent-blue`, `--accent-cyan`, `--text-main`, `--text-muted`), classes de layout (`.slide-container`, `.slide-header`, `.badge`, `.card-glass`, `.grid-2col`, `.grid-3col`, `.timeline-step`, `.overview-grid`).

- [ ] **Step 1: Escrever teste de validação de regras do Design System**

```javascript
// tests/test-styles.mjs
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('css/styles.css defines required color tokens and key classes', () => {
  const css = fs.readFileSync('css/styles.css', 'utf8');
  assert.match(css, /--bg-dark:\s*#0[5a]0[8f]/i);
  assert.match(css, /--accent-blue:/i);
  assert.match(css, /--accent-cyan:/i);
  assert.match(css, /\.card-glass/);
  assert.match(css, /\.slide-transition/);
  assert.match(css, /\.overview-modal/);
});
```

- [ ] **Step 2: Executar teste para verificar falha**

Run: `node tests/test-styles.mjs`  
Expected: FAIL

- [ ] **Step 3: Criar `css/styles.css` com paleta Gamma, tipografia e animações**

Definir:
- Variáveis CSS de cores (azul-marinho escuro `#050814`, `#0A1128`, azul elétrico `#2563EB`, `#3B82F6`, ciano neon `#00F0FF`, cinza slate `#94A3B8`, branco `#F8FAFC`).
- Aspect ratio 16:9 com centralização dinâmica e container fluido.
- Estilos para slides de transição (números gigantes `01`, `02` com gradiente ciano, tipografia marcante).
- Cartões com visual glassmorphism (`backdrop-filter: blur`, bordas translúcidas iluminadas).
- Estilo da barra de progresso no topo, botões de controle flutuantes e modal de visão geral com grid de miniaturas.

- [ ] **Step 4: Executar teste para verificar aprovação**

Run: `node tests/test-styles.mjs`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add css/styles.css tests/test-styles.mjs
git commit -m "feat: implement gamma dark theme and design system in styles.css"
```

---

### Task 3: Motor de Apresentação e Interatividade (`js/engine.js`)

**Files:**
- Create: `js/engine.js`
- Create: `tests/test-engine.mjs`

**Interfaces:**
- Consumes: Array global `SLIDES_DATA` ou injeção de slides.
- Produces: Classe `SlideEngine` com métodos: `goTo(index)`, `next()`, `prev()`, `toggleFullscreen()`, `toggleOverview()`, `bindKeys()`, `bindTouch()`.

- [ ] **Step 1: Escrever testes unitários para a máquina de estados do `SlideEngine`**

```javascript
// tests/test-engine.mjs
import test from 'node:test';
import assert from 'node:assert';
import { SlideEngine } from '../js/engine.js';

test('SlideEngine handles navigation and bounds correctly', () => {
  const dummySlides = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];
  const engine = new SlideEngine({ slides: dummySlides, autoInit: false });

  assert.strictEqual(engine.currentIndex, 0);
  engine.next();
  assert.strictEqual(engine.currentIndex, 1);
  engine.next();
  assert.strictEqual(engine.currentIndex, 2);
  engine.next(); // Não deve ultrapassar o limite máximo
  assert.strictEqual(engine.currentIndex, 2);

  engine.prev();
  assert.strictEqual(engine.currentIndex, 1);
  engine.prev();
  assert.strictEqual(engine.currentIndex, 0);
  engine.prev(); // Não deve ficar negativo
  assert.strictEqual(engine.currentIndex, 0);

  engine.goTo(2);
  assert.strictEqual(engine.currentIndex, 2);
});
```

- [ ] **Step 2: Executar teste para verificar falha**

Run: `node tests/test-engine.mjs`  
Expected: FAIL

- [ ] **Step 3: Implementar `SlideEngine` em `js/engine.js`**

Implementar:
- Navegação entre slides com controle de limites.
- Atualização do hash na URL (`#slide-1`, `#slide-2`...).
- Gerenciamento de eventos de teclado (`ArrowRight`, `ArrowLeft`, `Space`, `f`, `o`, `Escape`, `Home`, `End`).
- Suporte a swipe de toque (touch events).
- Abertura e fechamento do modal de visão geral (grid com miniaturas clicáveis).
- Atualização da barra de progresso e contador (ex: `12 / 62`).

- [ ] **Step 4: Executar teste para verificar aprovação**

Run: `node tests/test-engine.mjs`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add js/engine.js tests/test-engine.mjs
git commit -m "feat: implement presentation engine with state management and shortcuts"
```

---

### Task 4: Biblioteca de Diagramas SVG e Visualizações Técnicas (`js/diagrams.js`)

**Files:**
- Create: `js/diagrams.js`
- Create: `tests/test-diagrams.mjs`

**Interfaces:**
- Produces: Objeto `DIAGRAMS` com funções geradoras de SVG vetoriais detalhadas:
  1. `renderAiComparison()`: IA Tradicional vs Generativa
  2. `renderNlpPipeline()`: Fluxo de processamento de texto PLN
  3. `renderEmbeddingsVectorSpace()`: Projeção 2D de embeddings e similaridade
  4. `renderTransformerArchitecture()`: Arquitetura Transformer com Attention
  5. `renderTrainingGradientLoop()`: Ciclo de Backprop, Loss e atualização de pesos
  6. `renderLoraQloraMatrices()`: Matrizes de baixo rank e quantização 4-bit
  7. `renderRagPipeline()`: Arquitetura completa ponta a ponta RAG
  8. `renderLangchainPipeline()`: Orquestração LangChain
  9. `renderAgentArchitecture()`: Sensores, Raciocínio, Memória e Atuadores
  10. `renderLangGraphState()`: Grafo cíclico com checkpoints

- [ ] **Step 1: Escrever teste de validação dos geradores SVG**

```javascript
// tests/test-diagrams.mjs
import test from 'node:test';
import assert from 'node:assert';
import { DIAGRAMS } from '../js/diagrams.js';

test('DIAGRAMS contains all 10 required technical visual generators', () => {
  const expectedGenerators = [
    'renderAiComparison',
    'renderNlpPipeline',
    'renderEmbeddingsVectorSpace',
    'renderTransformerArchitecture',
    'renderTrainingGradientLoop',
    'renderLoraQloraMatrices',
    'renderRagPipeline',
    'renderLangchainPipeline',
    'renderAgentArchitecture',
    'renderLangGraphState'
  ];

  for (const name of expectedGenerators) {
    assert.strictEqual(typeof DIAGRAMS[name], 'function', `${name} must be a function`);
    const svg = DIAGRAMS[name]();
    assert.ok(svg.includes('<svg') && svg.includes('</svg>'), `${name} must return valid SVG markup`);
  }
});
```

- [ ] **Step 2: Executar teste para verificar falha**

Run: `node tests/test-diagrams.mjs`  
Expected: FAIL

- [ ] **Step 3: Implementar geradores de SVG em `js/diagrams.js` com estética Gamma**

Desenhar os 10 diagramas técnicos com paleta azul/ciano, linhas neon, caixas modulares, setas de fluxo, labels claros e ícones em SVG.

- [ ] **Step 4: Executar teste para verificar aprovação**

Run: `node tests/test-diagrams.mjs`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add js/diagrams.js tests/test-diagrams.mjs
git commit -m "feat: implement 10 responsive technical SVG diagrams"
```

---

### Task 5: Banco de Dados de Conteúdo: Parte 1 — Capa, Bloco 1, Bloco 2 e Bloco 3 (Slides 0 a 14)

**Files:**
- Create: `js/slides-data.js` (iniciar arquivo)
- Create: `tests/test-slides-part1.mjs`

**Interfaces:**
- Produces: Exportação de slides 0 a 14 com textos didáticos, tags de categoria, layouts modulares e integração com diagramas.

- [ ] **Step 1: Escrever teste para validação dos slides 0 a 14**

```javascript
// tests/test-slides-part1.mjs
import test from 'node:test';
import assert from 'node:assert';
import { SLIDES_DATA } from '../js/slides-data.js';

test('SLIDES_DATA contains slides 0 to 14 covering Blocks 1, 2, and 3', () => {
  assert.ok(SLIDES_DATA.length >= 15);
  // Capa
  assert.strictEqual(SLIDES_DATA[0].type, 'cover');
  // Transição 01
  assert.strictEqual(SLIDES_DATA[1].type, 'transition');
  assert.strictEqual(SLIDES_DATA[1].sectionNumber, '01');
  // Comparativo IA
  const tradGenSlide = SLIDES_DATA.find(s => s.id === '1.2');
  assert.ok(tradGenSlide);
  // Transição 02 e Tokenização
  assert.ok(SLIDES_DATA.find(s => s.id === '3.3'));
});
```

- [ ] **Step 2: Executar teste para verificar falha**

Run: `node tests/test-slides-part1.mjs`  
Expected: FAIL

- [ ] **Step 3: Implementar slides 0 a 14 em `js/slides-data.js`**

Redigir de forma didática, técnica e concisa:
- Slide 0: Capa ("Inteligência Artificial: do Fundamento à Aplicação")
- Slide 1: Transição 01 (Fundamentos de IA)
- Slide 2: O que é IA (Definição, dados $\rightarrow$ decisões)
- Slide 3: IA Tradicional vs IA Generativa (com diagrama comparativo)
- Slide 4: Principais Aplicações da IA
- Slide 5: Transição 02 (IA Generativa)
- Slide 6: O que é IA Generativa
- Slide 7: Como Funciona a Geração de Conteúdo
- Slide 8: Tipos de Conteúdo Gerado
- Slide 9: Modelos Generativos e Aplicações
- Slide 10: Transição 03 (Processamento de Linguagem Natural)
- Slide 11: O que é PLN
- Slide 12: Sentiment Analysis (com visualizador prático de polaridade)
- Slide 13: Tokenização (com visualizador de subwords/BPE)
- Slide 14: Embeddings e Representação Vetorial (com projeção vetorial)

- [ ] **Step 4: Executar teste para verificar aprovação**

Run: `node tests/test-slides-part1.mjs`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add js/slides-data.js tests/test-slides-part1.mjs
git commit -m "feat: add slide deck data for Blocks 1, 2, and 3 (slides 0-14)"
```

---

### Task 6: Banco de Dados de Conteúdo: Parte 2 — Bloco 4 (LLMs) e Bloco 5 (Treinamento e Adaptação) (Slides 15 a 31)

**Files:**
- Modify: `js/slides-data.js`
- Create: `tests/test-slides-part2.mjs`

**Interfaces:**
- Produces: Adição de slides 15 a 31 cobrindo integralmente LLMs, Transformers, Treinamento, SFT, LoRA/QLoRA, Quantização, Overfitting e Métricas.

- [ ] **Step 1: Escrever teste para validação dos slides 15 a 31**

```javascript
// tests/test-slides-part2.mjs
import test from 'node:test';
import assert from 'node:assert';
import { SLIDES_DATA } from '../js/slides-data.js';

test('SLIDES_DATA contains slides 15 to 31 covering Blocks 4 and 5', () => {
  assert.ok(SLIDES_DATA.length >= 32);
  // Transição 04
  assert.ok(SLIDES_DATA.find(s => s.type === 'transition' && s.sectionNumber === '04'));
  // Transformer
  assert.ok(SLIDES_DATA.find(s => s.id === '4.3'));
  // LoRA / QLoRA
  assert.ok(SLIDES_DATA.find(s => s.id === '5.4'));
  // Quantização
  assert.ok(SLIDES_DATA.find(s => s.id === '5.5'));
  // Prediction vs Classification
  assert.ok(SLIDES_DATA.find(s => s.id === '5.8'));
});
```

- [ ] **Step 2: Executar teste para verificar falha**

Run: `node tests/test-slides-part2.mjs`  
Expected: FAIL

- [ ] **Step 3: Implementar slides 15 a 31 em `js/slides-data.js`**

Redigir com rigor didático:
- Bloco 4: Transição 04, O que são LLMs, Como funcionam, Arquitetura Transformer (diagrama interativo), Tokens e Janela de Contexto, Parâmetros/Pesos/Biases, Treinamento, Fine-Tuning.
- Bloco 5: Transição 05, Transfer Learning, Supervised Fine-Tuning (SFT), Gradientes e Backpropagation (diagrama de ciclo), PEFT (LoRA e QLoRA com diagrama de matrizes), Quantização (FP32 $\rightarrow$ NF4), Overfitting/Underfitting/Epochs, Avaliação (ROUGE, BLEU, Perplexidade), Prediction vs Classification.

- [ ] **Step 4: Executar teste para verificar aprovação**

Run: `node tests/test-slides-part2.mjs`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add js/slides-data.js tests/test-slides-part2.mjs
git commit -m "feat: add slide deck data for Blocks 4 and 5 (slides 15-31)"
```

---

### Task 7: Banco de Dados de Conteúdo: Parte 3 — Bloco 6 (RAG), Bloco 7 (Frameworks), Bloco 8 (Agentes) e Bloco 9 (Conclusão) (Slides 32 a 62)

**Files:**
- Modify: `js/slides-data.js`
- Create: `tests/test-slides-part3.mjs`

**Interfaces:**
- Produces: Array completo de 63 slides (0 a 62), contemplando todos os requisitos do usuário e fechamento com no mínimo 3 slides de conclusão.

- [ ] **Step 1: Escrever teste para validação dos slides 32 a 62**

```javascript
// tests/test-slides-part3.mjs
import test from 'node:test';
import assert from 'node:assert';
import { SLIDES_DATA } from '../js/slides-data.js';

test('SLIDES_DATA contains all 63 slides through Block 9', () => {
  assert.strictEqual(SLIDES_DATA.length, 63);
  // RAG ponta a ponta
  assert.ok(SLIDES_DATA.find(s => s.id === '6.3'));
  // Similaridade de Cosseno
  assert.ok(SLIDES_DATA.find(s => s.id === '6.6'));
  // LangChain
  assert.ok(SLIDES_DATA.find(s => s.id === '7.1'));
  // Multi-Agentes e LangGraph
  assert.ok(SLIDES_DATA.find(s => s.id === '8.9'));
  assert.ok(SLIDES_DATA.find(s => s.id === '9.0'));
  // Conclusão (mínimo 3 slides)
  assert.ok(SLIDES_DATA.find(s => s.id === '9.1'));
  assert.ok(SLIDES_DATA.find(s => s.id === '9.2'));
  assert.ok(SLIDES_DATA.find(s => s.id === '9.3'));
});
```

- [ ] **Step 2: Executar teste para verificar falha**

Run: `node tests/test-slides-part3.mjs`  
Expected: FAIL

- [ ] **Step 3: Implementar slides 32 a 62 em `js/slides-data.js`**

Redigir com didática e precisão:
- Bloco 6 (RAG): Transição 06, O que é RAG, RAG vs Fine-tuning, Arquitetura RAG Ponta a Ponta, Embeddings e Bancos Vetoriais, Chunking, Métricas (Cosseno, Euclidiana, Produto Escalar), MMR e Reranking, Geração com Contexto Recuperado.
- Bloco 7 (Frameworks): Transição 07, O que é LangChain, Prompt Templates, Memory, Loaders e Scraping, APIs de LLMs, Pipeline de Construção.
- Bloco 8 (Agentes): Transição 08, O que são Agentes, Chatbot vs Agente, Arquitetura de Agente, Componentes (Sensores/Processadores/Atuadores), Tools, Ciclo ReAct, LAMs, Aplicações Reais, Multi-Agentes, LangGraph.
- Bloco 9 (Conclusão): Transição 09, Síntese dos Conhecimentos Adquiridos, Matriz de Interconexão (GenAI + PLN + LLMs), Tridente de Potencialização (RAG + Fine-Tuning + Agentes no mundo real).

- [ ] **Step 4: Executar teste para verificar aprovação**

Run: `node tests/test-slides-part3.mjs`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add js/slides-data.js tests/test-slides-part3.mjs
git commit -m "feat: complete entire 63-slide deck covering RAG, LangChain, Agents, and Conclusion"
```

---

### Task 8: Integração Final, Testes de Ponta a Ponta e Validação Offline

**Files:**
- Modify: `index.html` (vincular módulos e inicialização)
- Modify: `js/engine.js` (garantir renderização de miniaturas e shortcuts modal)
- Create: `tests/test-integration.mjs`

**Interfaces:**
- Produces: Aplicação 100% pronta para uso imediato pelo usuário via duplo clique no `index.html`.

- [ ] **Step 1: Escrever teste de integração ponta a ponta**

```javascript
// tests/test-integration.mjs
import test from 'node:test';
import assert from 'node:assert';
import { SLIDES_DATA } from '../js/slides-data.js';
import { DIAGRAMS } from '../js/diagrams.js';
import { SlideEngine } from '../js/engine.js';

test('Full presentation integrity and diagram linkages', () => {
  assert.strictEqual(SLIDES_DATA.length, 63);

  // Verificar que todos os slides que exigem diagramas têm geradores associados
  const slidesWithDiagrams = SLIDES_DATA.filter(s => s.diagramKey);
  assert.ok(slidesWithDiagrams.length >= 10);
  for (const slide of slidesWithDiagrams) {
    assert.strictEqual(typeof DIAGRAMS[slide.diagramKey], 'function');
  }

  // Verificar inicialização do motor
  const engine = new SlideEngine({ slides: SLIDES_DATA, autoInit: false });
  assert.strictEqual(engine.slides.length, 63);
});
```

- [ ] **Step 2: Executar teste de integração**

Run: `node tests/test-integration.mjs`  
Expected: PASS

- [ ] **Step 3: Validação de interface, atalhos, modo tela cheia e miniaturas**

Verificar renderização de todos os slides no container, formatação de tags, transições suaves, responsividade 16:9, e funcionalidade offline.

- [ ] **Step 4: Executar suíte completa de testes**

Run: `npm test`  
Expected: All tests pass (0 failures).

- [ ] **Step 5: Commit**

```bash
git add index.html js/engine.js tests/test-integration.mjs
git commit -m "feat: finalize presentation app integration, overview modal, and offline readiness"
```
