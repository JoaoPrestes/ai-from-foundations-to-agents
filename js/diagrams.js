/**
 * DIAGRAMS — Biblioteca de Diagramas Técnicos e Ilustrações SVG
 * Estética Gamma: Fundo escuro, linhas luminosas ciano/azul elétrico, visual tecnológico limpo.
 */

const DIAGRAMS = {
  // Arte Isométrica de Capa (Estilo Servidor Futurista com Fichas de Dados do Gamma)
  renderCoverArt() {
    return `
      <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
        <defs>
          <linearGradient id="cyberGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00F0FF" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#2563EB" stop-opacity="0.2"/>
          </linearGradient>
          <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#13234d"/>
            <stop offset="100%" stop-color="#070d1e"/>
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>

        <!-- Servidor Central Isométrico -->
        <g transform="translate(180, 80)">
          <!-- Face Superior Servidor -->
          <polygon points="120,20 220,70 120,120 20,70" fill="#1e3a7a" stroke="#00F0FF" stroke-width="1.5"/>
          <!-- Face Direita Servidor -->
          <polygon points="220,70 220,260 120,310 120,120" fill="#0c1736" stroke="#2563EB" stroke-width="1.5"/>
          <!-- Face Esquerda Servidor -->
          <polygon points="20,70 120,120 120,310 20,260" fill="#081026" stroke="#00F0FF" stroke-width="1.5"/>

          <!-- Ranhuras e Luzes Frontais -->
          <line x1="45" y1="120" x2="95" y2="145" stroke="#00F0FF" stroke-width="2" stroke-linecap="round"/>
          <line x1="45" y1="150" x2="95" y2="175" stroke="#00F0FF" stroke-width="2" stroke-linecap="round"/>
          <line x1="45" y1="180" x2="95" y2="205" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>
          <line x1="45" y1="210" x2="95" y2="235" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
          
          <!-- Núcleo Processador Luminoso -->
          <circle cx="70" cy="95" r="14" fill="#00F0FF" opacity="0.3" filter="url(#glowFilter)"/>
          <circle cx="70" cy="95" r="7" fill="#00F0FF"/>
        </g>

        <!-- Fichas de Dados / Tokens Flutuando -->
        <g transform="translate(40, 140)">
          <!-- Carta 1 -->
          <polygon points="70,140 130,110 170,130 110,160" fill="url(#serverGrad)" stroke="#00F0FF" stroke-width="1.5"/>
          <line x1="90" y1="135" x2="135" y2="122" stroke="#38BDF8" stroke-width="1.5"/>
          <!-- Carta 2 -->
          <polygon points="110,90 170,60 210,80 150,110" fill="url(#serverGrad)" stroke="#38BDF8" stroke-width="1.5"/>
          <line x1="130" y1="85" x2="175" y2="72" stroke="#00F0FF" stroke-width="1.5"/>
          <!-- Carta 3 -->
          <polygon points="150,40 210,10 250,30 190,60" fill="url(#serverGrad)" stroke="#60A5FA" stroke-width="1.5"/>
        </g>

        <!-- Linhas de Conexão Luminosas -->
        <path d="M120,290 Q200,280 250,220" stroke="#00F0FF" stroke-dasharray="4,4" stroke-width="1.5" opacity="0.8"/>
        <path d="M170,330 Q240,310 290,260" stroke="#3B82F6" stroke-dasharray="4,4" stroke-width="1.5" opacity="0.6"/>
      </svg>
    `;
  },

  // Arte Geométrica Holográfica das Transições (Pirâmide Wireframe Luminosa)
  renderSectionArt(num = '01') {
    return `
      <svg viewBox="0 0 380 340" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
        <defs>
          <filter id="prismGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>
        <!-- Prisma Wireframe 3D -->
        <g transform="translate(40, 20)">
          <!-- Pirâmide Externa -->
          <polygon points="150,20 280,240 20,240" fill="rgba(14, 28, 64, 0.35)" stroke="#00F0FF" stroke-width="2"/>
          <polygon points="150,20 280,240 180,280" fill="rgba(37, 99, 235, 0.2)" stroke="#38BDF8" stroke-width="1.5"/>
          <polygon points="150,20 20,240 180,280" fill="rgba(6, 12, 32, 0.5)" stroke="#2563EB" stroke-width="1.5"/>
          <line x1="20" y1="240" x2="180" y2="280" stroke="#00F0FF" stroke-width="2"/>
          <line x1="280" y1="240" x2="180" y2="280" stroke="#00F0FF" stroke-width="2"/>

          <!-- Estrutura Geométrica Interna -->
          <polygon points="150,90 220,210 80,210" stroke="rgba(0, 240, 255, 0.6)" stroke-dasharray="3,3" stroke-width="1.2"/>
          <circle cx="150" cy="20" r="5" fill="#00F0FF" filter="url(#prismGlow)"/>
          <circle cx="180" cy="280" r="4" fill="#38BDF8"/>
          <circle cx="280" cy="240" r="4" fill="#2563EB"/>
          <circle cx="20" cy="240" r="4" fill="#2563EB"/>

          <!-- Partículas Orbitais -->
          <circle cx="110" cy="110" r="2.5" fill="#00F0FF" opacity="0.8"/>
          <circle cx="200" cy="160" r="3" fill="#38BDF8" opacity="0.9"/>
          <circle cx="130" cy="190" r="2" fill="#93C5FD" opacity="0.7"/>
          <circle cx="230" cy="100" r="2" fill="#00F0FF" opacity="0.6"/>
        </g>
      </svg>
    `;
  },

  // 1. Diagrama Comparativo: IA Tradicional vs IA Generativa
  renderAiComparison() {
    return `
      <svg viewBox="0 0 940 340" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
        <!-- Painel IA Tradicional -->
        <rect x="20" y="20" width="430" height="300" rx="14" fill="rgba(11, 20, 48, 0.75)" stroke="rgba(59, 130, 246, 0.4)" stroke-width="1.5"/>
        <rect x="40" y="40" width="130" height="28" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6"/>
        <text x="50" y="58" fill="#60A5FA" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">IA TRADICIONAL</text>
        <text x="40" y="95" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700">Decide a partir de padrões</text>

        <!-- Fluxo Tradicional -->
        <g transform="translate(40, 120)">
          <!-- Passo 1 -->
          <rect x="0" y="0" width="110" height="70" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
          <text x="12" y="25" fill="#94A3B8" font-size="11" font-family="'JetBrains Mono'">ENTRADA</text>
          <text x="12" y="45" fill="#F8FAFC" font-size="12" font-weight="600">Dados tabular,</text>
          <text x="12" y="60" fill="#F8FAFC" font-size="12" font-weight="600">sinais, histórico</text>
          
          <line x1="115" y1="35" x2="135" y2="35" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrow)"/>
          
          <!-- Passo 2 -->
          <rect x="140" y="0" width="110" height="70" rx="8" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6"/>
          <text x="152" y="25" fill="#60A5FA" font-size="11" font-family="'JetBrains Mono'">MODELO</text>
          <text x="152" y="45" fill="#FFFFFF" font-size="12" font-weight="600">Classificação,</text>
          <text x="152" y="60" fill="#FFFFFF" font-size="12" font-weight="600">Regressão</text>

          <line x1="255" y1="35" x2="275" y2="35" stroke="#3B82F6" stroke-width="2"/>

          <!-- Passo 3 -->
          <rect x="280" y="0" width="110" height="70" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
          <text x="292" y="25" fill="#94A3B8" font-size="11" font-family="'JetBrains Mono'">SAÍDA</text>
          <text x="292" y="45" fill="#F8FAFC" font-size="12" font-weight="600">Rótulo / Score</text>
          <text x="292" y="60" fill="#38BDF8" font-size="11">Fraude: 98%</text>
        </g>
        <text x="40" y="240" fill="#94A3B8" font-size="13">Exemplos: Detecção de fraude bancária, previsão de churn, recomendação de filmes em catálogo.</text>

        <!-- Painel IA Generativa -->
        <rect x="490" y="20" width="430" height="300" rx="14" fill="rgba(11, 20, 48, 0.75)" stroke="rgba(0, 240, 255, 0.45)" stroke-width="1.5"/>
        <rect x="510" y="40" width="130" height="28" rx="6" fill="rgba(0, 240, 255, 0.15)" stroke="#00F0FF"/>
        <text x="522" y="58" fill="#00F0FF" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">IA GENERATIVA</text>
        <text x="510" y="95" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700">Cria novas saídas originais</text>

        <!-- Fluxo Generativo -->
        <g transform="translate(510, 120)">
          <!-- Passo 1 -->
          <rect x="0" y="0" width="110" height="70" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
          <text x="12" y="25" fill="#94A3B8" font-size="11" font-family="'JetBrains Mono'">PROMPT</text>
          <text x="12" y="45" fill="#F8FAFC" font-size="12" font-weight="600">Instrução,</text>
          <text x="12" y="60" fill="#F8FAFC" font-size="12" font-weight="600">Contexto multimodal</text>
          
          <line x1="115" y1="35" x2="135" y2="35" stroke="#00F0FF" stroke-width="2"/>
          
          <!-- Passo 2 -->
          <rect x="140" y="0" width="110" height="70" rx="8" fill="rgba(0, 240, 255, 0.18)" stroke="#00F0FF"/>
          <text x="152" y="25" fill="#00F0FF" font-size="11" font-family="'JetBrains Mono'">LLM / DIFUSÃO</text>
          <text x="152" y="45" fill="#FFFFFF" font-size="12" font-weight="600">Transformer,</text>
          <text x="152" y="60" fill="#FFFFFF" font-size="12" font-weight="600">Amostragem</text>

          <line x1="255" y1="35" x2="275" y2="35" stroke="#00F0FF" stroke-width="2"/>

          <!-- Passo 3 -->
          <rect x="280" y="0" width="110" height="70" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
          <text x="292" y="25" fill="#94A3B8" font-size="11" font-family="'JetBrains Mono'">CONTEÚDO</text>
          <text x="292" y="45" fill="#F8FAFC" font-size="12" font-weight="600">Texto, Código,</text>
          <text x="292" y="60" fill="#00F0FF" font-size="11">Imagem, Áudio</text>
        </g>
        <text x="510" y="240" fill="#94A3B8" font-size="13">Exemplos: Redigir relatórios técnicos, sintetizar código-fonte, criar ilustrações realistas, raciocínio em linguagem natural.</text>
      </svg>
    `;
  },

  // 2. Fluxo de Processamento de Texto em PLN
  renderNlpPipeline() {
    return `
      <svg viewBox="0 0 940 280" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
        <defs>
          <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2563EB"/>
            <stop offset="100%" stop-color="#00F0FF"/>
          </linearGradient>
        </defs>

        <!-- Linha de Fluxo Central -->
        <line x1="160" y1="130" x2="800" y2="130" stroke="url(#pipeGrad)" stroke-width="3" stroke-dasharray="6,4"/>

        <!-- Etapa 1: Texto Bruto -->
        <g transform="translate(40, 65)">
          <rect x="0" y="0" width="150" height="130" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="rgba(56, 189, 248, 0.2)"/>
          <circle cx="28" cy="28" r="14" fill="rgba(59, 130, 246, 0.2)"/>
          <text x="24" y="32" fill="#60A5FA" font-size="12" font-weight="bold">01</text>
          <text x="18" y="65" fill="#FFFFFF" font-size="14" font-weight="700">Texto Bruto</text>
          <text x="18" y="85" fill="#94A3B8" font-size="11">Frases humanas,</text>
          <text x="18" y="100" fill="#94A3B8" font-size="11">caracteres, pontuação</text>
          <rect x="18" y="112" width="114" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
        </g>

        <!-- Etapa 2: Tokenização -->
        <g transform="translate(235, 65)">
          <rect x="0" y="0" width="150" height="130" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="#38BDF8"/>
          <circle cx="28" cy="28" r="14" fill="rgba(0, 240, 255, 0.2)"/>
          <text x="24" y="32" fill="#00F0FF" font-size="12" font-weight="bold">02</text>
          <text x="18" y="65" fill="#FFFFFF" font-size="14" font-weight="700">Tokenização</text>
          <text x="18" y="85" fill="#94A3B8" font-size="11">Divisão em subwords,</text>
          <text x="18" y="100" fill="#00F0FF" font-size="11" font-family="'JetBrains Mono'">[Token_IDs]</text>
          <rect x="18" y="112" width="114" height="6" rx="3" fill="rgba(0, 240, 255, 0.3)"/>
        </g>

        <!-- Etapa 3: Embeddings -->
        <g transform="translate(430, 65)">
          <rect x="0" y="0" width="150" height="130" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="#00F0FF"/>
          <circle cx="28" cy="28" r="14" fill="rgba(0, 240, 255, 0.3)"/>
          <text x="24" y="32" fill="#00F0FF" font-size="12" font-weight="bold">03</text>
          <text x="18" y="65" fill="#FFFFFF" font-size="14" font-weight="700">Embeddings</text>
          <text x="18" y="85" fill="#94A3B8" font-size="11">Vetores numéricos</text>
          <text x="18" y="100" fill="#38BDF8" font-size="11" font-family="'JetBrains Mono'">[0.24, -0.81, ...]</text>
          <rect x="18" y="112" width="114" height="6" rx="3" fill="rgba(0, 240, 255, 0.6)"/>
        </g>

        <!-- Etapa 4: Camada de Tarefa -->
        <g transform="translate(625, 65)">
          <rect x="0" y="0" width="170" height="130" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="rgba(56, 189, 248, 0.4)"/>
          <circle cx="28" cy="28" r="14" fill="rgba(59, 130, 246, 0.3)"/>
          <text x="24" y="32" fill="#60A5FA" font-size="12" font-weight="bold">04</text>
          <text x="18" y="65" fill="#FFFFFF" font-size="14" font-weight="700">Aplicação Final</text>
          <text x="18" y="85" fill="#94A3B8" font-size="11">Sentiment Analysis,</text>
          <text x="18" y="100" fill="#94A3B8" font-size="11">Tradução, RAG, Geração</text>
          <rect x="18" y="112" width="134" height="6" rx="3" fill="rgba(59, 130, 246, 0.4)"/>
        </g>
      </svg>
    `;
  },

  // 3. Diagrama do Espaço Vetorial de Embeddings e Similaridade Semântica
  renderEmbeddingsVectorSpace() {
    return `
      <svg viewBox="0 0 940 320" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
        <!-- Eixos Cartesianos 2D -->
        <line x1="80" y1="280" x2="620" y2="280" stroke="#334155" stroke-width="2"/>
        <line x1="80" y1="280" x2="80" y2="30" stroke="#334155" stroke-width="2"/>
        <text x="600" y="300" fill="#64748B" font-size="12" font-family="'JetBrains Mono'">Dimensão 1 (Contexto Real)</text>
        <text x="30" y="40" fill="#64748B" font-size="12" font-family="'JetBrains Mono'" transform="rotate(-90 30,40)">Dimensão 2 (Gênero)</text>

        <!-- Grade Sutil -->
        <line x1="200" y1="280" x2="200" y2="30" stroke="rgba(255,255,255,0.03)" stroke-dasharray="2,2"/>
        <line x1="360" y1="280" x2="360" y2="30" stroke="rgba(255,255,255,0.03)" stroke-dasharray="2,2"/>
        <line x1="520" y1="280" x2="520" y2="30" stroke="rgba(255,255,255,0.03)" stroke-dasharray="2,2"/>

        <!-- Cluster 1: Realeza -->
        <circle cx="480" cy="80" r="7" fill="#00F0FF"/>
        <text x="495" y="85" fill="#FFFFFF" font-size="13" font-weight="700">Rei</text>
        <text x="495" y="100" fill="#00F0FF" font-size="10" font-family="'JetBrains Mono'">[0.82, 0.74]</text>

        <circle cx="460" cy="170" r="7" fill="#00F0FF"/>
        <text x="475" y="175" fill="#FFFFFF" font-size="13" font-weight="700">Rainha</text>
        <text x="475" y="190" fill="#00F0FF" font-size="10" font-family="'JetBrains Mono'">[0.79, 0.18]</text>

        <!-- Vetor de Translação de Gênero -->
        <line x1="480" y1="80" x2="460" y2="170" stroke="#00F0FF" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="490" y="130" fill="#38BDF8" font-size="11" font-style="italic">- Gênero</text>

        <!-- Cluster 2: Pessoas Comuns -->
        <circle cx="240" cy="90" r="7" fill="#3B82F6"/>
        <text x="255" y="95" fill="#FFFFFF" font-size="13" font-weight="700">Homem</text>
        <text x="255" y="110" fill="#60A5FA" font-size="10" font-family="'JetBrains Mono'">[0.18, 0.72]</text>

        <circle cx="220" cy="180" r="7" fill="#3B82F6"/>
        <text x="235" y="185" fill="#FFFFFF" font-size="13" font-weight="700">Mulher</text>
        <text x="235" y="200" fill="#60A5FA" font-size="10" font-family="'JetBrains Mono'">[0.15, 0.16]</text>

        <line x1="240" y1="90" x2="220" y2="180" stroke="#3B82F6" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="250" y="140" fill="#60A5FA" font-size="11" font-style="italic">- Gênero</text>

        <!-- Relação Semântica Linear -->
        <line x1="240" y1="90" x2="480" y2="80" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="3,3"/>
        <line x1="220" y1="180" x2="460" y2="170" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="3,3"/>

        <!-- Painel Explicativo Lateral -->
        <rect x="660" y="30" width="260" height="250" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="rgba(56, 189, 248, 0.2)"/>
        <text x="680" y="60" fill="#00F0FF" font-size="13" font-weight="700" font-family="'JetBrains Mono'">ÁLGEBRA VETORIAL</text>
        <text x="680" y="95" fill="#FFFFFF" font-size="14" font-weight="600">Rei - Homem + Mulher</text>
        <text x="680" y="115" fill="#00F0FF" font-size="16" font-weight="700">≈ Rainha</text>
        <text x="680" y="150" fill="#94A3B8" font-size="12" line-height="1.5">Modelos de embedding mapeiam palavras com significados semelhantes para pontos próximos no espaço multidimensional.</text>
        <rect x="680" y="210" width="220" height="40" rx="6" fill="rgba(0, 240, 255, 0.1)" stroke="rgba(0, 240, 255, 0.3)"/>
        <text x="692" y="235" fill="#38BDF8" font-size="11" font-weight="bold">Similaridade Cosseno: cos(θ) ≈ 0.94</text>
      </svg>
    `;
  },

  // 4. Arquitetura Transformer Simplificada (Multi-Head Attention, Add&Norm, FFN)
  renderTransformerArchitecture() {
    return `
      <svg viewBox="0 0 940 330" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
        <!-- Bloco de Entrada -->
        <g transform="translate(40, 110)">
          <rect x="0" y="0" width="160" height="90" rx="8" fill="rgba(13, 25, 54, 0.85)" stroke="rgba(56, 189, 248, 0.3)"/>
          <text x="16" y="30" fill="#38BDF8" font-size="11" font-family="'JetBrains Mono'">INPUTS</text>
          <text x="16" y="52" fill="#FFFFFF" font-size="13" font-weight="700">Input Tokens</text>
          <text x="16" y="72" fill="#94A3B8" font-size="11">+ Positional Encoding</text>
        </g>

        <!-- Seta -->
        <line x1="205" y1="155" x2="250" y2="155" stroke="#00F0FF" stroke-width="2"/>

        <!-- Bloco Central: Camada do Transformer -->
        <g transform="translate(255, 20)">
          <rect x="0" y="0" width="410" height="280" rx="14" fill="rgba(9, 17, 40, 0.9)" stroke="rgba(0, 240, 255, 0.4)" stroke-width="1.5"/>
          <text x="20" y="32" fill="#00F0FF" font-family="'JetBrains Mono'" font-size="12" font-weight="700">BLOCO TRANSFORMER (Nx)</text>

          <!-- Subbloco 1: Multi-Head Attention -->
          <rect x="20" y="48" width="370" height="70" rx="8" fill="rgba(37, 99, 235, 0.2)" stroke="#2563EB"/>
          <text x="35" y="74" fill="#FFFFFF" font-size="14" font-weight="700">Multi-Head Self-Attention</text>
          <text x="35" y="94" fill="#93C5FD" font-size="11">Cálculo de atenção paralela: Q (Query), K (Key), V (Value)</text>

          <!-- Conexão Residual 1 -->
          <path d="M5,83 L15,83" stroke="#38BDF8" stroke-width="2"/>

          <!-- Subbloco Add & Norm -->
          <rect x="110" y="128" width="190" height="28" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)"/>
          <text x="155" y="146" fill="#F8FAFC" font-size="11" font-weight="600">Add & LayerNorm</text>

          <!-- Subbloco 2: Feed Forward -->
          <rect x="20" y="166" width="370" height="65" rx="8" fill="rgba(0, 240, 255, 0.15)" stroke="#00F0FF"/>
          <text x="35" y="192" fill="#FFFFFF" font-size="14" font-weight="700">Feed-Forward Neural Network</text>
          <text x="35" y="212" fill="#38BDF8" font-size="11">Projeção linear não-linear densa (ReLU/GELU/SwiGLU)</text>

          <!-- Subbloco Add & Norm 2 -->
          <rect x="110" y="240" width="190" height="26" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)"/>
          <text x="155" y="258" fill="#F8FAFC" font-size="11" font-weight="600">Add & LayerNorm</text>
        </g>

        <!-- Seta -->
        <line x1="670" y1="155" x2="715" y2="155" stroke="#00F0FF" stroke-width="2"/>

        <!-- Bloco de Saída -->
        <g transform="translate(720, 100)">
          <rect x="0" y="0" width="180" height="110" rx="8" fill="rgba(13, 25, 54, 0.85)" stroke="rgba(56, 189, 248, 0.3)"/>
          <text x="16" y="28" fill="#38BDF8" font-size="11" font-family="'JetBrains Mono'">OUTPUTS</text>
          <text x="16" y="52" fill="#FFFFFF" font-size="13" font-weight="700">Linear + Softmax</text>
          <text x="16" y="72" fill="#00F0FF" font-size="12" font-family="'JetBrains Mono'">Probabilidades</text>
          <text x="16" y="90" fill="#94A3B8" font-size="11">Predição do Próximo Token</text>
        </g>
      </svg>
    `;
  },

  // 5. Ciclo de Treinamento, Função de Perda (Loss) e Backpropagation
  renderTrainingGradientLoop() {
    return `
      <svg viewBox="0 0 940 310" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
        <!-- Nó 1: Forward Pass -->
        <g transform="translate(60, 110)">
          <rect x="0" y="0" width="170" height="90" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="#3B82F6"/>
          <text x="16" y="28" fill="#60A5FA" font-size="11" font-family="'JetBrains Mono'">PASSO 1</text>
          <text x="16" y="52" fill="#FFFFFF" font-size="14" font-weight="700">Forward Pass</text>
          <text x="16" y="72" fill="#94A3B8" font-size="11">Dados passam pela rede</text>
        </g>

        <!-- Seta Forward -->
        <path d="M235,155 L285,155" stroke="#3B82F6" stroke-width="2.5"/>

        <!-- Nó 2: Loss Function -->
        <g transform="translate(290, 110)">
          <rect x="0" y="0" width="170" height="90" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="#F59E0B"/>
          <text x="16" y="28" fill="#FBBF24" font-size="11" font-family="'JetBrains Mono'">PASSO 2</text>
          <text x="16" y="52" fill="#FFFFFF" font-size="14" font-weight="700">Cálculo de Perda</text>
          <text x="16" y="72" fill="#FBBF24" font-size="11" font-family="'JetBrains Mono'">Loss = L(ŷ, y)</text>
        </g>

        <!-- Seta Loss para Backprop -->
        <path d="M465,155 L515,155" stroke="#F59E0B" stroke-width="2.5"/>

        <!-- Nó 3: Backpropagation & Gradientes -->
        <g transform="translate(520, 110)">
          <rect x="0" y="0" width="180" height="90" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="#00F0FF"/>
          <text x="16" y="28" fill="#00F0FF" font-size="11" font-family="'JetBrains Mono'">PASSO 3</text>
          <text x="16" y="52" fill="#FFFFFF" font-size="14" font-weight="700">Backpropagation</text>
          <text x="16" y="72" fill="#00F0FF" font-size="11" font-family="'JetBrains Mono'">Gradiente: ∇W = ∂L/∂W</text>
        </g>

        <!-- Seta Backprop para Otimizador -->
        <path d="M705,155 L745,155" stroke="#00F0FF" stroke-width="2.5"/>

        <!-- Nó 4: Atualização de Pesos -->
        <g transform="translate(750, 110)">
          <rect x="0" y="0" width="160" height="90" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="#10B981"/>
          <text x="16" y="28" fill="#34D399" font-size="11" font-family="'JetBrains Mono'">PASSO 4</text>
          <text x="16" y="52" fill="#FFFFFF" font-size="14" font-weight="700">Atualização</text>
          <text x="16" y="72" fill="#34D399" font-size="10" font-family="'JetBrains Mono'">W_novo = W - η·∇W</text>
        </g>

        <!-- Loop de Feedback / Retorno -->
        <path d="M830,205 C830,270 145,270 145,205" stroke="#00F0FF" stroke-width="2" stroke-dasharray="6,4"/>
        <text x="440" y="285" fill="#38BDF8" font-size="12" font-family="'JetBrains Mono'" text-anchor="middle">Próxima Época / Batch (Loop Iterativo de Aprendizado)</text>
      </svg>
    `;
  },

  // 6. Matrizes PEFT: LoRA e QLoRA (Decomposição de Baixo Rank e Quantização 4-bit)
  renderLoraQloraMatrices() {
    return `
      <svg viewBox="0 0 940 320" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
        <!-- Matriz Base Congelada (W0) -->
        <g transform="translate(60, 40)">
          <rect x="0" y="0" width="160" height="220" rx="8" fill="rgba(255, 255, 255, 0.04)" stroke="#64748B" stroke-width="2"/>
          <text x="80" y="105" fill="#FFFFFF" font-size="22" font-weight="800" text-anchor="middle">W₀</text>
          <text x="80" y="130" fill="#94A3B8" font-size="12" text-anchor="middle">d × k</text>
          <rect x="25" y="160" width="110" height="24" rx="4" fill="rgba(100, 116, 139, 0.2)"/>
          <text x="80" y="176" fill="#CBD5E1" font-size="11" text-anchor="middle" font-family="'JetBrains Mono'">CONGELADA ❄️</text>
          <text x="80" y="210" fill="#38BDF8" font-size="10" text-anchor="middle" font-family="'JetBrains Mono'">QLoRA: NF4 (4-bit)</text>
        </g>

        <!-- Sinal de Soma -->
        <text x="270" y="160" fill="#00F0FF" font-size="32" font-weight="700">+</text>

        <!-- Matrizes de Baixo Rank (Adapters Treináveis) -->
        <!-- Matriz B -->
        <g transform="translate(340, 40)">
          <rect x="0" y="0" width="55" height="220" rx="6" fill="rgba(0, 240, 255, 0.15)" stroke="#00F0FF" stroke-width="2"/>
          <text x="27" y="105" fill="#00F0FF" font-size="20" font-weight="800" text-anchor="middle">B</text>
          <text x="27" y="130" fill="#38BDF8" font-size="11" text-anchor="middle">d × r</text>
          <text x="27" y="200" fill="#38BDF8" font-size="9" text-anchor="middle" font-family="'JetBrains Mono'">Treinável</text>
        </g>

        <!-- Multiplicação -->
        <text x="435" y="160" fill="#00F0FF" font-size="24" font-weight="700">×</text>

        <!-- Matriz A -->
        <g transform="translate(480, 120)">
          <rect x="0" y="0" width="160" height="55" rx="6" fill="rgba(37, 99, 235, 0.2)" stroke="#3B82F6" stroke-width="2"/>
          <text x="80" y="32" fill="#60A5FA" font-size="20" font-weight="800" text-anchor="middle">A</text>
          <text x="80" y="47" fill="#93C5FD" font-size="11" text-anchor="middle">r × k</text>
        </g>

        <!-- Painel de Comparação e Fórmulas à Direita -->
        <g transform="translate(680, 40)">
          <rect x="0" y="0" width="230" height="220" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="rgba(56, 189, 248, 0.3)"/>
          <text x="18" y="30" fill="#00F0FF" font-size="12" font-weight="700" font-family="'JetBrains Mono'">EQUAÇÃO FUNDAMENTAL</text>
          <text x="18" y="60" fill="#FFFFFF" font-size="15" font-weight="700">h = W₀·x + ΔW·x</text>
          <text x="18" y="85" fill="#38BDF8" font-size="14" font-weight="600">ΔW = B × A</text>

          <line x1="18" y1="105" x2="212" y2="105" stroke="rgba(255,255,255,0.08)"/>

          <text x="18" y="130" fill="#94A3B8" font-size="11">Rank r ≪ min(d, k) (ex: r=8, 16)</text>
          <text x="18" y="150" fill="#34D399" font-size="12" font-weight="bold">✓ Redução de VRAM em até 80%</text>
          <text x="18" y="170" fill="#34D399" font-size="12" font-weight="bold">✓ Treina modelos 70B em 1 GPU</text>
          <text x="18" y="195" fill="#CBD5E1" font-size="11">Zero perda de performance!</text>
        </g>
      </svg>
    `;
  },

  // 7. Arquitetura RAG Ponta a Ponta (Offline vs Online)
  renderRagPipeline() {
    return `
      <svg viewBox="0 0 940 330" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
        <!-- Bloco Fase Offline (Indexação) -->
        <rect x="20" y="20" width="900" height="120" rx="10" fill="rgba(13, 25, 54, 0.55)" stroke="rgba(59, 130, 246, 0.3)"/>
        <text x="35" y="42" fill="#60A5FA" font-size="11" font-weight="700" font-family="'JetBrains Mono'">FASE 1: INGESTÃO E INDEXAÇÃO (OFFLINE)</text>

        <g transform="translate(40, 55)">
          <rect x="0" y="0" width="130" height="60" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
          <text x="12" y="25" fill="#FFFFFF" font-size="12" font-weight="bold">Documentos</text>
          <text x="12" y="45" fill="#94A3B8" font-size="10">PDFs, Docs, Web</text>

          <line x1="135" y1="30" x2="165" y2="30" stroke="#3B82F6" stroke-width="2"/>

          <rect x="170" y="0" width="130" height="60" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
          <text x="12" y="25" fill="#FFFFFF" font-size="12" font-weight="bold" transform="translate(170,0)">Chunking</text>
          <text x="12" y="45" fill="#94A3B8" font-size="10" transform="translate(170,0)">Divisão em blocos</text>

          <line x1="305" y1="30" x2="335" y2="30" stroke="#3B82F6" stroke-width="2"/>

          <rect x="340" y="0" width="150" height="60" rx="6" fill="rgba(0, 240, 255, 0.1)" stroke="#00F0FF"/>
          <text x="12" y="25" fill="#00F0FF" font-size="12" font-weight="bold" transform="translate(340,0)">Embedding Model</text>
          <text x="12" y="45" fill="#38BDF8" font-size="10" transform="translate(340,0)">Gera vetores densos</text>

          <line x1="495" y1="30" x2="525" y2="30" stroke="#00F0FF" stroke-width="2"/>

          <rect x="530" y="0" width="170" height="60" rx="6" fill="rgba(37, 99, 235, 0.25)" stroke="#3B82F6"/>
          <text x="12" y="25" fill="#FFFFFF" font-size="12" font-weight="bold" transform="translate(530,0)">Vector Database</text>
          <text x="12" y="45" fill="#93C5FD" font-size="10" transform="translate(530,0)">Pinecone, Chroma, Qdrant</text>
        </g>

        <!-- Bloco Fase Online (Consulta e Recuperação) -->
        <rect x="20" y="160" width="900" height="150" rx="10" fill="rgba(13, 25, 54, 0.75)" stroke="rgba(0, 240, 255, 0.4)"/>
        <text x="35" y="182" fill="#00F0FF" font-size="11" font-weight="700" font-family="'JetBrains Mono'">FASE 2: RECUPERAÇÃO E GERAÇÃO (ONLINE / RUNTIME)</text>

        <g transform="translate(40, 195)">
          <rect x="0" y="0" width="130" height="80" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
          <text x="12" y="25" fill="#FFFFFF" font-size="12" font-weight="bold">Pergunta Usuário</text>
          <text x="12" y="45" fill="#94A3B8" font-size="10">"Qual o prazo de</text>
          <text x="12" y="60" fill="#94A3B8" font-size="10">garantia do produto?"</text>

          <line x1="135" y1="40" x2="165" y2="40" stroke="#00F0FF" stroke-width="2"/>

          <rect x="170" y="0" width="140" height="80" rx="6" fill="rgba(0, 240, 255, 0.12)" stroke="#00F0FF"/>
          <text x="12" y="25" fill="#00F0FF" font-size="12" font-weight="bold" transform="translate(170,0)">Busca Vetorial</text>
          <text x="12" y="45" fill="#38BDF8" font-size="10" transform="translate(170,0)">Cosine Similarity,</text>
          <text x="12" y="60" fill="#38BDF8" font-size="10" transform="translate(170,0)">MMR, Reranking</text>

          <line x1="315" y1="40" x2="345" y2="40" stroke="#00F0FF" stroke-width="2"/>

          <rect x="350" y="0" width="160" height="80" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
          <text x="12" y="25" fill="#FFFFFF" font-size="12" font-weight="bold" transform="translate(350,0)">Prompt Aumentado</text>
          <text x="12" y="45" fill="#CBD5E1" font-size="10" transform="translate(350,0)">[Contexto dos Chunks]</text>
          <text x="12" y="60" fill="#94A3B8" font-size="10" transform="translate(350,0)">+ Instrução original</text>

          <line x1="515" y1="40" x2="545" y2="40" stroke="#00F0FF" stroke-width="2"/>

          <rect x="550" y="0" width="140" height="80" rx="6" fill="rgba(37, 99, 235, 0.3)" stroke="#2563EB"/>
          <text x="12" y="25" fill="#FFFFFF" font-size="12" font-weight="bold" transform="translate(550,0)">LLM (Geração)</text>
          <text x="12" y="45" fill="#93C5FD" font-size="10" transform="translate(550,0)">Gera resposta com</text>
          <text x="12" y="60" fill="#93C5FD" font-size="10" transform="translate(550,0)">grounding preciso</text>

          <line x1="695" y1="40" x2="725" y2="40" stroke="#00F0FF" stroke-width="2"/>

          <rect x="730" y="0" width="130" height="80" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981"/>
          <text x="12" y="25" fill="#34D399" font-size="12" font-weight="bold" transform="translate(730,0)">Resposta Final</text>
          <text x="12" y="45" fill="#FFFFFF" font-size="10" transform="translate(730,0)">Sem alucinação,</text>
          <text x="12" y="60" fill="#CBD5E1" font-size="10" transform="translate(730,0)">com fontes citadas</text>
        </g>
      </svg>
    `;
  },

  // 8. Pipeline LangChain
  renderLangchainPipeline() {
    return `
      <svg viewBox="0 0 940 300" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
        <!-- Componente 1: PromptTemplate -->
        <g transform="translate(40, 80)">
          <rect x="0" y="0" width="160" height="110" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="#3B82F6"/>
          <text x="14" y="28" fill="#60A5FA" font-size="10" font-family="'JetBrains Mono'">PROMPT TEMPLATE</text>
          <text x="14" y="52" fill="#FFFFFF" font-size="13" font-weight="700">Variáveis e Regras</text>
          <text x="14" y="75" fill="#94A3B8" font-size="11">system_message</text>
          <text x="14" y="92" fill="#94A3B8" font-size="11">{input_query}</text>
        </g>

        <!-- Seta Pipe LCEL -->
        <g transform="translate(205, 125)">
          <line x1="0" y1="10" x2="45" y2="10" stroke="#00F0FF" stroke-width="2"/>
          <text x="22" y="0" fill="#00F0FF" font-size="14" font-weight="bold" text-anchor="middle">|</text>
        </g>

        <!-- Componente 2: ChatModel / LLM -->
        <g transform="translate(260, 80)">
          <rect x="0" y="0" width="170" height="110" rx="10" fill="rgba(0, 240, 255, 0.12)" stroke="#00F0FF" stroke-width="2"/>
          <text x="14" y="28" fill="#00F0FF" font-size="10" font-family="'JetBrains Mono'">CHAT MODEL</text>
          <text x="14" y="52" fill="#FFFFFF" font-size="13" font-weight="700">OpenAI / Gemini</text>
          <text x="14" y="75" fill="#38BDF8" font-size="11">Invocação de API</text>
          <text x="14" y="92" fill="#38BDF8" font-size="11">temperature=0.2</text>
        </g>

        <!-- Seta Pipe LCEL -->
        <g transform="translate(435, 125)">
          <line x1="0" y1="10" x2="45" y2="10" stroke="#00F0FF" stroke-width="2"/>
          <text x="22" y="0" fill="#00F0FF" font-size="14" font-weight="bold" text-anchor="middle">|</text>
        </g>

        <!-- Componente 3: OutputParser -->
        <g transform="translate(490, 80)">
          <rect x="0" y="0" width="160" height="110" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="#10B981"/>
          <text x="14" y="28" fill="#34D399" font-size="10" font-family="'JetBrains Mono'">OUTPUT PARSER</text>
          <text x="14" y="52" fill="#FFFFFF" font-size="13" font-weight="700">Estruturação</text>
          <text x="14" y="75" fill="#94A3B8" font-size="11">JSON / Pydantic</text>
          <text x="14" y="92" fill="#94A3B8" font-size="11">StrOutputParser</text>
        </g>

        <!-- Conexões de Suporte: Memory e Tools -->
        <g transform="translate(260, 215)">
          <rect x="0" y="0" width="170" height="55" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)"/>
          <text x="14" y="24" fill="#E2E8F0" font-size="11" font-weight="700">🧠 Memory & Context</text>
          <text x="14" y="42" fill="#94A3B8" font-size="10">Buffer, VectorStoreMemory</text>
          <line x1="85" y1="0" x2="85" y2="-25" stroke="#64748B" stroke-dasharray="3,3"/>
        </g>

        <!-- Painel Resumo LCEL -->
        <g transform="translate(680, 80)">
          <rect x="0" y="0" width="220" height="190" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="rgba(56, 189, 248, 0.25)"/>
          <text x="16" y="28" fill="#00F0FF" font-size="11" font-weight="700" font-family="'JetBrains Mono'">LANGCHAIN LCEL</text>
          <text x="16" y="55" fill="#FFFFFF" font-size="13" font-weight="600">Sintaxe Declarativa:</text>
          <rect x="16" y="70" width="188" height="50" rx="4" fill="rgba(4,9,23,0.8)"/>
          <text x="24" y="92" fill="#7DD3FC" font-size="11" font-family="'JetBrains Mono'">chain = prompt</text>
          <text x="24" y="108" fill="#7DD3FC" font-size="11" font-family="'JetBrains Mono'">  | model | parser</text>
          <text x="16" y="145" fill="#94A3B8" font-size="11">Orquestração modular de chamadas a LLMs, memória, conectores e ferramentas externas.</text>
        </g>
      </svg>
    `;
  },

  // 9. Arquitetura de um Agente de IA: Percepção, Raciocínio, Memória e Ação
  renderAgentArchitecture() {
    return `
      <svg viewBox="0 0 940 330" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
        <!-- Ambiente Externo (Esquerda) -->
        <g transform="translate(40, 95)">
          <rect x="0" y="0" width="130" height="140" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)"/>
          <text x="16" y="30" fill="#94A3B8" font-size="11" font-family="'JetBrains Mono'">AMBIENTE</text>
          <text x="16" y="55" fill="#FFFFFF" font-size="14" font-weight="700">Mundo Real</text>
          <text x="16" y="80" fill="#CBD5E1" font-size="11">• Usuário / Web</text>
          <text x="16" y="100" fill="#CBD5E1" font-size="11">• APIs e Bancos</text>
          <text x="16" y="120" fill="#CBD5E1" font-size="11">• Sistemas SO</text>
        </g>

        <!-- Seta Sensores (Percepção) -->
        <line x1="175" y1="135" x2="235" y2="135" stroke="#00F0FF" stroke-width="2"/>
        <text x="205" y="125" fill="#00F0FF" font-size="10" text-anchor="middle">Sensores</text>

        <!-- Núcleo do Agente (Caixa Central) -->
        <rect x="240" y="30" width="450" height="270" rx="14" fill="rgba(9, 17, 40, 0.9)" stroke="rgba(0, 240, 255, 0.4)" stroke-width="1.5"/>
        <text x="260" y="55" fill="#00F0FF" font-family="'JetBrains Mono'" font-size="12" font-weight="700">AGENTE DE IA: CICLO COGNITIVO</text>

        <!-- Submódulo 1: Raciocínio (LLM / ReAct Planner) -->
        <rect x="260" y="75" width="250" height="130" rx="8" fill="rgba(37, 99, 235, 0.2)" stroke="#2563EB"/>
        <text x="275" y="100" fill="#FFFFFF" font-size="14" font-weight="700">Raciocínio & Planejamento</text>
        <text x="275" y="125" fill="#38BDF8" font-size="11" font-family="'JetBrains Mono'">Thought: "Preciso checar X"</text>
        <text x="275" y="145" fill="#38BDF8" font-size="11" font-family="'JetBrains Mono'">Action: search_database()</text>
        <text x="275" y="165" fill="#38BDF8" font-size="11" font-family="'JetBrains Mono'">Observation: "Retornou Y"</text>
        <text x="275" y="185" fill="#38BDF8" font-size="11" font-family="'JetBrains Mono'">Reflection: "Objetivo atingido"</text>

        <!-- Submódulo 2: Memória -->
        <rect x="525" y="75" width="145" height="130" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)"/>
        <text x="540" y="100" fill="#FFFFFF" font-size="13" font-weight="700">Memória</text>
        <text x="540" y="125" fill="#94A3B8" font-size="11">• Curto Prazo</text>
        <text x="540" y="142" fill="#64748B" font-size="10">(Chat History)</text>
        <text x="540" y="165" fill="#94A3B8" font-size="11">• Longo Prazo</text>
        <text x="540" y="182" fill="#64748B" font-size="10">(Vector DB)</text>

        <!-- Submódulo 3: Ferramentas / Tools (Atuadores) -->
        <rect x="260" y="220" width="410" height="65" rx="8" fill="rgba(0, 240, 255, 0.12)" stroke="#00F0FF"/>
        <text x="275" y="244" fill="#00F0FF" font-size="12" font-weight="700">FERRAMENTAS (TOOLS / FUNCTION CALLING)</text>
        <text x="275" y="265" fill="#CBD5E1" font-size="11">Calculadora · Interpretador Python · Consulta SQL · Web Browser · APIs REST</text>

        <!-- Seta Atuadores de volta ao Ambiente -->
        <path d="M260,255 L105,255 L105,240" stroke="#00F0FF" stroke-width="2"/>
        <text x="180" y="272" fill="#00F0FF" font-size="10" text-anchor="middle">Atuadores / Ações</text>

        <!-- Painel Lateral: Chatbot vs Agente -->
        <g transform="translate(710, 30)">
          <rect x="0" y="0" width="200" height="270" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="rgba(56, 189, 248, 0.25)"/>
          <text x="16" y="30" fill="#38BDF8" font-size="11" font-weight="700" font-family="'JetBrains Mono'">DIFERENÇA CHAVE</text>
          
          <text x="16" y="60" fill="#94A3B8" font-size="11" font-weight="bold">CHATBOT:</text>
          <text x="16" y="80" fill="#CBD5E1" font-size="11">Passivo. Responde apenas o que foi perguntado em uma única interação.</text>

          <line x1="16" y1="105" x2="184" y2="105" stroke="rgba(255,255,255,0.08)"/>

          <text x="16" y="130" fill="#00F0FF" font-size="11" font-weight="bold">AGENTE:</text>
          <text x="16" y="150" fill="#CBD5E1" font-size="11">Autônomo e proativo. Quebra metas complexas em subtarefas, chama ferramentas e corrige erros até concluir o objetivo.</text>
        </g>
      </svg>
    `;
  },

  // 10. LangGraph: Orquestração de Grafos Cíclicos com Estado e Checkpoints
  renderLangGraphState() {
    return `
      <svg viewBox="0 0 940 310" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
        <!-- Ponto de Entrada START -->
        <circle cx="90" cy="155" r="28" fill="rgba(37, 99, 235, 0.25)" stroke="#3B82F6" stroke-width="2"/>
        <text x="90" y="160" fill="#60A5FA" font-size="11" font-weight="800" text-anchor="middle" font-family="'JetBrains Mono'">START</text>

        <!-- Seta -->
        <line x1="120" y1="155" x2="190" y2="155" stroke="#3B82F6" stroke-width="2"/>

        <!-- Nó do Agente (Node: Agent) -->
        <g transform="translate(195, 105)">
          <rect x="0" y="0" width="180" height="100" rx="10" fill="rgba(0, 240, 255, 0.15)" stroke="#00F0FF" stroke-width="2"/>
          <text x="16" y="30" fill="#00F0FF" font-size="10" font-family="'JetBrains Mono'">NODE: AGENT</text>
          <text x="16" y="55" fill="#FFFFFF" font-size="14" font-weight="700">Decisor Central</text>
          <text x="16" y="78" fill="#38BDF8" font-size="11">Gera pensamento e</text>
          <text x="16" y="93" fill="#38BDF8" font-size="11">decide próxima ação</text>
        </g>

        <!-- Aresta Condicional (Diamond / Decisão) -->
        <g transform="translate(425, 120)">
          <polygon points="35,0 70,35 35,70 0,35" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1.5"/>
          <text x="35" y="39" fill="#FBBF24" font-size="10" font-weight="bold" text-anchor="middle">Tool?</text>
        </g>
        <line x1="380" y1="155" x2="425" y2="155" stroke="#00F0FF" stroke-width="2"/>

        <!-- Ramo 1: Execução de Tools (Ciclo) -->
        <path d="M460,120 L460,65 L570,65" stroke="#F59E0B" stroke-width="2"/>
        <text x="475" y="55" fill="#FBBF24" font-size="10">Sim (chamar tool)</text>

        <g transform="translate(575, 25)">
          <rect x="0" y="0" width="160" height="80" rx="8" fill="rgba(13, 25, 54, 0.85)" stroke="#F59E0B"/>
          <text x="14" y="25" fill="#FBBF24" font-size="10" font-family="'JetBrains Mono'">NODE: TOOLS</text>
          <text x="14" y="48" fill="#FFFFFF" font-size="12" font-weight="bold">Executa Ferramenta</text>
          <text x="14" y="66" fill="#94A3B8" font-size="10">Atualiza Estado (State)</text>
        </g>

        <!-- Retorno do Nó de Tools para o Agente (Ciclo Fechado) -->
        <path d="M655,105 L655,125 C655,135 645,135 635,135 L400,135 C380,135 380,125 380,120" stroke="#00F0FF" stroke-width="1.5" stroke-dasharray="4,4"/>
        <path d="M575,65 C520,65 300,65 300,105" stroke="#00F0FF" stroke-width="1.5" stroke-dasharray="4,4"/>

        <!-- Ramo 2: Fim (END) -->
        <path d="M495,155 L580,155" stroke="#10B981" stroke-width="2"/>
        <text x="515" y="145" fill="#34D399" font-size="10">Não (resposta final)</text>

        <!-- Nó END -->
        <circle cx="620" cy="155" r="28" fill="rgba(16, 185, 129, 0.25)" stroke="#10B981" stroke-width="2"/>
        <text x="620" y="160" fill="#34D399" font-size="11" font-weight="800" text-anchor="middle" font-family="'JetBrains Mono'">END</text>

        <!-- Painel Lateral: Recursos de Destaque do LangGraph -->
        <g transform="translate(700, 45)">
          <rect x="0" y="0" width="210" height="220" rx="10" fill="rgba(13, 25, 54, 0.85)" stroke="rgba(56, 189, 248, 0.25)"/>
          <text x="16" y="28" fill="#00F0FF" font-size="11" font-weight="700" font-family="'JetBrains Mono'">POR QUE LANGGRAPH?</text>
          
          <text x="16" y="60" fill="#38BDF8" font-size="12" font-weight="bold">1. Suporte a Ciclos:</text>
          <text x="16" y="78" fill="#CBD5E1" font-size="11">Diferente de DAGs rígidas, agentes precisam iterar até resolver.</text>

          <text x="16" y="115" fill="#38BDF8" font-size="12" font-weight="bold">2. Estado Centralizado:</text>
          <text x="16" y="133" fill="#CBD5E1" font-size="11">Schema compartilhado e tipado entre todos os nós.</text>

          <text x="16" y="170" fill="#38BDF8" font-size="12" font-weight="bold">3. Checkpointing:</text>
          <text x="16" y="188" fill="#CBD5E1" font-size="11">Pausa para aprovação humana (Human-in-the-loop) e volta no tempo.</text>
        </g>
      </svg>
    `;
  }
};

// Suporte Browser e Node/ESM
if (typeof window !== 'undefined') {
  window.DIAGRAMS = DIAGRAMS;
}
export { DIAGRAMS };
