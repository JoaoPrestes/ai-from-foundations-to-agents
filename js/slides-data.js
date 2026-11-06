/**
 * SLIDES_DATA — Base de Dados Completa da Apresentação
 * Organização rigorosa em blocos e slides temáticos.
 */

const SLIDES_DATA = [
  // =========================================================================
  // SLIDE 0: CAPA DA APRESENTAÇÃO
  // =========================================================================
  {
    id: '0.0',
    type: 'cover',
    sectionBadge: '00 · CAPA',
    category: 'FUNDAMENTOS · APLICAÇÃO',
    titleHtml: 'Inteligência<br><span>Artificial:</span><br>do fundamento à aplicação',
    description: 'Uma jornada didática e aprofundada por IA Generativa, Processamento de Linguagem Natural (PLN), Large Language Models (LLMs), Treinamento & PEFT, RAG e Sistemas Agênticos Autônomos.',
  },

  // =========================================================================
  // BLOCO 1: INTRODUÇÃO À INTELIGÊNCIA ARTIFICIAL
  // =========================================================================
  {
    id: 'trans-01',
    type: 'transition',
    sectionNumber: '01',
    sectionBadge: '01 · INTRODUÇÃO À IA',
    title: 'Fundamentos de Inteligência Artificial',
    description: 'Como sistemas computacionais transformam dados brutos em decisões inteligentes e por que diferentes classes de problemas exigem arquiteturas específicas.',
  },
  {
    id: '1.1',
    type: 'content',
    sectionBadge: '01 · INTRODUÇÃO À IA',
    tag: 'FUNDAMENTOS',
    title: 'O que é Inteligência Artificial?',
    subtitle: 'A ciência e engenharia de criar máquinas capazes de simular a cognição humana.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            Percepção e Dados
          </div>
          <p class="card-text">Capacidade de absorver sinais do ambiente — dados tabulares, textos, imagens, áudios e sensores físicos — transformando-os em representações matemáticas computáveis.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            Reconhecimento de Padrões
          </div>
          <p class="card-text">Algoritmos de aprendizado de máquina ajustam parâmetros internos para encontrar correlações complexas e regras implícitas sem depender de programação estática manual.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Decisão e Ação
          </div>
          <p class="card-text">Execução de previsões, inferências ou gerações otimizadas para maximizar uma métrica de sucesso, desde classificar um diagnóstico médico até guiar um veículo.</p>
        </div>
      </div>
      <div class="callout-banner">
        <strong>Conceito Chave:</strong> A IA moderna não segue regras rígidas "se/então" (if/else), mas aprende distribuições probabilísticas a partir da exposição a grandes volumes de dados.
      </div>
    `
  },
  {
    id: '1.2',
    type: 'content',
    sectionBadge: '01 · INTRODUÇÃO À IA',
    tag: 'COMPARATIVO ARQUITETURAL',
    title: 'IA Tradicional vs. IA Generativa',
    subtitle: 'Dois paradigmas fundamentais para a resolução de problemas computacionais.',
    diagramKey: 'renderAiComparison',
    bodyHtml: `
      <!-- O diagrama renderAiComparison é injetado diretamente -->
    `
  },
  {
    id: '1.3',
    type: 'content',
    sectionBadge: '01 · INTRODUÇÃO À IA',
    tag: 'PANORAMA DE MERCADO',
    title: 'Principais Aplicações da IA Atualmente',
    subtitle: 'Como a IA permeia os setores mais críticos da economia global.',
    bodyHtml: `
      <div class="steps-row">
        <div class="step-card">
          <div class="step-number">01</div>
          <div class="step-title">Saúde & Bioengenharia</div>
          <div class="step-desc">Predição de dobramento de proteínas (AlphaFold), diagnóstico por imagem tomográfica e triagem preditiva de pacientes críticos.</div>
        </div>
        <div class="step-card">
          <div class="step-number">02</div>
          <div class="step-title">Finanças & Risco</div>
          <div class="step-desc">Detecção de transações fraudulentas em milissegundos, concessão de crédito automatizada e modelos de precificação dinâmica de risco.</div>
        </div>
        <div class="step-card">
          <div class="step-number">03</div>
          <div class="step-title">Engenharia de Software</div>
          <div class="step-desc">Geração autônoma de código, autocompletar contextual (Copilots), testes automatizados e refatoração de sistemas legados.</div>
        </div>
        <div class="step-card">
          <div class="step-number">04</div>
          <div class="step-title">Operações & Atendimento</div>
          <div class="step-desc">Copilotos de suporte empresarial, automação de processos repetitivos (RPA inteligente) e extração de insights de documentos não estruturados.</div>
        </div>
      </div>
      <div class="callout-banner">
        <strong>Impacto Global:</strong> A IA transitou de uma tecnologia de suporte experimental para a infraestrutura operacional primária das empresas contemporâneas.
      </div>
    `
  },

  // =========================================================================
  // BLOCO 2: INTELIGÊNCIA ARTIFICIAL GENERATIVA
  // =========================================================================
  {
    id: 'trans-02',
    type: 'transition',
    sectionNumber: '02',
    sectionBadge: '02 · IA GENERATIVA',
    title: 'Inteligência Artificial Generativa',
    description: 'Como modelos aprendem a representação latente do mundo e combinam padrões para sintetizar conteúdos originais com alta fidelidade semântica.',
  },
  {
    id: '2.1',
    type: 'content',
    sectionBadge: '02 · IA GENERATIVA',
    tag: 'CONCEITO CENTRAL',
    title: 'O que é IA Generativa?',
    subtitle: 'A transição de modelos discriminativos para modelos probabilísticos de síntese.',
    bodyHtml: `
      <div class="grid-2col">
        <div class="card-glass">
          <div class="card-title">Aprendizado de Distribuições</div>
          <p class="card-text">Diferente de um banco de dados que apenas copia e cola registros existentes, a IA Generativa modela a <strong>distribuição de probabilidade conjunta P(X)</strong> dos dados de treinamento.</p>
          <ul class="card-list">
            <li>Identifica estruturas gramaticais, estilos visuais e lógica de raciocínio.</li>
            <li>Consegue interpolar entre conceitos nunca vistos juntos na natureza.</li>
            <li>Gera novas amostras indistinguíveis daquelas criadas por humanos.</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Probabilidade Condicional P(X | Contexto)</div>
          <p class="card-text">A geração ocorre condicionada a um estímulo inicial (o prompt). O modelo avalia:</p>
          <div class="code-box" style="margin: 10px 0;">
            P(próximo_elemento | elementos_anteriores, instrução)
          </div>
          <p class="card-text">Essa formulação matemática unifica a geração de texto, síntese de imagens fotorrealistas, composição musical e geração de código executável.</p>
        </div>
      </div>
    `
  },
  {
    id: '2.2',
    type: 'content',
    sectionBadge: '02 · IA GENERATIVA',
    tag: 'PIPELINE OPERACIONAL',
    title: 'Como Funciona a Geração de Conteúdo?',
    subtitle: 'Do input do usuário à síntese do artefato final.',
    bodyHtml: `
      <div class="steps-row">
        <div class="step-card">
          <div class="step-number">01</div>
          <div class="step-title">Instrução (Prompt)</div>
          <div class="step-desc">O usuário fornece o comando e objetivos. O sistema normaliza e injeta metadados e restrições de sistema (system prompt).</div>
        </div>
        <div class="step-card">
          <div class="step-number">02</div>
          <div class="step-title">Contexto & Atenção</div>
          <div class="step-desc">O modelo mapeia a intenção, recupera conexões semânticas na memória e pondera pesos de relevância em cada termo.</div>
        </div>
        <div class="step-card">
          <div class="step-number">03</div>
          <div class="step-title">Amostragem Probabilística</div>
          <div class="step-desc">Cálculo de logits com temperatura e Top-P para selecionar os próximos elementos candidatos com equilíbrio entre precisão e criatividade.</div>
        </div>
        <div class="step-card">
          <div class="step-number">04</div>
          <div class="step-title">Síntese e Validação</div>
          <div class="step-desc">O conteúdo é emitido token por token (ou etapa de difusão por etapa) até que um marcador de parada (EOS) encerre a geração.</div>
        </div>
      </div>
      <div class="callout-banner">
        <strong>Propriedade Emergente:</strong> O modelo não possui "consciência", mas sim uma capacidade de compressão de conhecimento com generalização combinatorial.
      </div>
    `
  },
  {
    id: '2.3',
    type: 'content',
    sectionBadge: '02 · IA GENERATIVA',
    tag: 'MODALIDADES DE DADOS',
    title: 'Tipos de Conteúdo Gerado',
    subtitle: 'A expansão multimodal que redefiniu a interação homem-máquina.',
    bodyHtml: `
      <div class="grid-4col">
        <div class="card-glass">
          <div class="card-title">📝 Texto & Linguagem</div>
          <p class="card-text">Artigos, relatórios técnicos, resumos, tradução multilíngue e respostas conversacionais com raciocínio encadeado.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">🎨 Imagem & Arte</div>
          <p class="card-text">Fotografias sintéticas, diagramas vetoriais, assets de jogos e protótipos de interfaces gerados por difusão latente.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">🎙️ Áudio & Voz</div>
          <p class="card-text">Text-to-Speech hiper-realista, clonagem de voz com entonação emocional, isolamento acústico e composição musical.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">🎬 Vídeo & Código</div>
          <p class="card-text">Simulações de vídeo temporalmente consistentes (Sora, Veo) e programação end-to-end de sistemas web e bancos de dados.</p>
        </div>
      </div>
      <div class="callout-banner" style="margin-top: 24px;">
        <strong>Convergência Multimodal:</strong> Modelos atuais nativos (ex: Gemini 1.5, GPT-4o) recebem áudio, imagem e vídeo diretamente no mesmo espaço de tokens, eliminando conversões separadas.
      </div>
    `
  },
  {
    id: '2.4',
    type: 'content',
    sectionBadge: '02 · IA GENERATIVA',
    tag: 'FAMÍLIAS DE MODELOS',
    title: 'Modelos Generativos e suas Aplicações',
    subtitle: 'As arquiteturas fundamentais que sustentam a revolução da IA moderna.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Transformers Autoregressivos</div>
          <p class="card-text">Base de modelos como GPT, Claude, LLaMA e Gemini. Especialistas em sequências temporais e texto através de mecanismos de autoatenção paralela.</p>
          <ul class="card-list">
            <li>Aplicações: Chatbots, copilotos de código, tradução e RAG.</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Modelos de Difusão (Diffusion)</div>
          <p class="card-text">Destroem gradualmente o ruído gaussiano para revelar imagens nítidas (Stable Diffusion, Midjourney, FLUX). Treinados com processo reverso de Wiener.</p>
          <ul class="card-list">
            <li>Aplicações: Criação de arte, design de produto e geração de vídeo.</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">VAEs e GANs</div>
          <p class="card-text">Variational Autoencoders mapeiam distribuições em espaços latentes contínuos. Redes Generativas Adversariais competem gerador vs. discriminador.</p>
          <ul class="card-list">
            <li>Aplicações: Aumento de resolução (Super Resolution), deepfakes e compressão.</li>
          </ul>
        </div>
      </div>
    `
  },

  // =========================================================================
  // BLOCO 3: PROCESSAMENTO DE LINGUAGEM NATURAL (PLN)
  // =========================================================================
  {
    id: 'trans-03',
    type: 'transition',
    sectionNumber: '03',
    sectionBadge: '03 · PROCESSAMENTO DE LINGUAGEM NATURAL',
    title: 'Processamento de Linguagem Natural (PLN)',
    description: 'Como computadores decodificam a ambiguidade, a gramática e a semântica da linguagem humana para transformá-la em sinais matemáticos manipuláveis.',
  },
  {
    id: '3.1',
    type: 'content',
    sectionBadge: '03 · PROCESSAMENTO DE LINGUAGEM NATURAL',
    tag: 'FLUXO END-TO-END',
    title: 'O que é PLN e seu Pipeline Estrutural',
    subtitle: 'A ponte entre símbolos linguísticos humanos e tensores matemáticos.',
    diagramKey: 'renderNlpPipeline',
    bodyHtml: `
      <!-- O diagrama renderNlpPipeline é injetado diretamente -->
    `
  },
  {
    id: '3.2',
    type: 'content',
    sectionBadge: '03 · PROCESSAMENTO DE LINGUAGEM NATURAL',
    tag: 'CASO CLÁSSICO DE APLICAÇÃO',
    title: 'Sentiment Analysis (Análise de Sentimento)',
    subtitle: 'Extração automatizada de polaridade, emoção e tom em linguagem natural.',
    bodyHtml: `
      <div class="grid-2col">
        <div class="card-glass">
          <div class="card-title">Objetivos & Níveis de Análise</div>
          <p class="card-text">Determina a atitude expressa em textos (avaliações de clientes, mídias sociais, suporte e pesquisas de mercado):</p>
          <ul class="card-list">
            <li><strong>Polaridade:</strong> Positivo, Neutro ou Negativo.</li>
            <li><strong>Intensidade:</strong> Score contínuo [-1.0 a +1.0].</li>
            <li><strong>Detecção de Subjetividade:</strong> Fatos objetivos vs. opiniões pessoais.</li>
            <li><strong>Baseada em Aspectos (ABSA):</strong> Identifica sentimento específico sobre partes de um produto (ex: "bateria excelente, mas tela frágil").</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Exemplo Prático de Inferência</div>
          <div class="code-box" style="margin-bottom: 12px;">
            Texto: "O atendimento demorou 40 minutos, mas o atendente resolveu o problema perfeitamente!"
          </div>
          <p class="card-text"><strong>Desafio Linguístico:</strong> A conjunção adversativa "mas" altera a ênfase da frase. Modelos ingênuos de contagem de palavras falham; modelos modernos com atenção contextual identificam que o sentimento predominante final é <em>positivo</em>.</p>
          <div class="callout-banner" style="margin-top: 10px;">
            Score do Modelo: <strong>+0.72 (Positivo)</strong> · Confiança: 96%
          </div>
        </div>
      </div>
    `
  },
  {
    id: '3.3',
    type: 'content',
    sectionBadge: '03 · PROCESSAMENTO DE LINGUAGEM NATURAL',
    tag: 'UNIDADES BÁSICAS',
    title: 'Tokenização: A Linguagem das Máquinas',
    subtitle: 'Como o texto contínuo é fragmentado em unidades atômicas (tokens).',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Abordagens de Tokenização</div>
          <ul class="card-list">
            <li><strong>Por Palavra:</strong> Vocabulário gigante, falha em palavras desconhecidas (OOV).</li>
            <li><strong>Por Caractere:</strong> Vocabulário minúsculo, mas sequências longas e perda semântica.</li>
            <li><strong>Subword (Padrão Moderno):</strong> Divide termos raros em pedaços conhecidos (ex: BPE, WordPiece, SentencePiece).</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Byte-Pair Encoding (BPE)</div>
          <p class="card-text">Algoritmo que mescla iterativamente os pares de bytes mais frequentes no corpus de treino até atingir o vocabulário desejado (ex: 32k a 128k tokens).</p>
          <div class="code-box" style="margin-top: 10px;">
            "Inteligência" → ["Intel", "igên", "cia"]<br>
            "Tokenização" → ["Token", "iza", "ção"]
          </div>
        </div>
        <div class="card-glass">
          <div class="card-title">Regra Prática de Proporção</div>
          <p class="card-text">Para o idioma português e inglês:</p>
          <div class="callout-banner" style="margin-top: 10px;">
            <strong>1 token ≈ 4 caracteres</strong><br>
            <strong>100 tokens ≈ 75 palavras</strong>
          </div>
          <p class="card-text" style="margin-top: 8px;">Pontuações, espaços e números também consomem tokens específicos do vocabulário.</p>
        </div>
      </div>
    `
  },
  {
    id: '3.4',
    type: 'content',
    sectionBadge: '03 · PROCESSAMENTO DE LINGUAGEM NATURAL',
    tag: 'GEOMETRIA SEMÂNTICA',
    title: 'Embeddings e Representação Vetorial',
    subtitle: 'Como converter significado textual em coordenadas em um espaço multidimensional.',
    diagramKey: 'renderEmbeddingsVectorSpace',
    bodyHtml: `
      <!-- O diagrama renderEmbeddingsVectorSpace é injetado diretamente -->
    `
  }
];

// Compatibilidade
if (typeof window !== 'undefined') {
  window.SLIDES_DATA = SLIDES_DATA;
}
export { SLIDES_DATA };
