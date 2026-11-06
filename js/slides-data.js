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
  },

  // =========================================================================
  // BLOCO 4: LARGE LANGUAGE MODELS (LLMs)
  // =========================================================================
  {
    id: 'trans-04',
    type: 'transition',
    sectionNumber: '04',
    sectionBadge: '04 · LARGE LANGUAGE MODELS',
    title: 'Large Language Models (LLMs)',
    description: 'Como modelos massivos de linguagem aprenderam a codificar raciocínio, semântica contextual e conhecimentos enciclopédicos a partir da escala e da atenção.',
  },
  {
    id: '4.1',
    type: 'content',
    sectionBadge: '04 · LARGE LANGUAGE MODELS',
    tag: 'ESCALA E EMERGÊNCIA',
    title: 'O que são Large Language Models (LLMs)?',
    subtitle: 'Redes neurais profundas com dezenas a centenas de bilhões de parâmetros treinadas em corpora monumentais.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Escala Sem Precedentes</div>
          <p class="card-text">Modelos que contêm de 7 bilhões a mais de 400 bilhões de conexões numéricas (pesos), ingerindo trilhões de tokens de livros, artigos científicos, código e web.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Capacidades Emergentes</div>
          <p class="card-text">Ao cruzar certos limiares de escala (compute, dados e parâmetros), os modelos demonstram habilidades não programadas: raciocínio lógico, tradução zero-shot, analogias e resolução de problemas matemáticos.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Leis de Escala (Scaling Laws)</div>
          <p class="card-text">Descobertas empíricas (Kaplan et al., Chinchilla/DeepMind) comprovam que a performance preditiva dos LLMs segue uma lei de potência previsível à medida que aumentamos o poder computacional e o volume de dados limpos.</p>
        </div>
      </div>
      <div class="callout-banner">
        <strong>Fórmula de Sucesso:</strong> Grande volume de dados de alta qualidade + Arquitetura Transformer escalável + Clusters maciços de GPUs/TPUs = Modelo Fundacional.
      </div>
    `
  },
  {
    id: '4.2',
    type: 'content',
    sectionBadge: '04 · LARGE LANGUAGE MODELS',
    tag: 'MECÂNICA OPERACIONAL',
    title: 'Como os LLMs Funcionam na Prática?',
    subtitle: 'A elegância de uma tarefa única: previsão autorregressiva do próximo token.',
    bodyHtml: `
      <div class="grid-2col">
        <div class="card-glass">
          <div class="card-title">Geração Autorregressiva</div>
          <p class="card-text">O LLM prevê exatamente um token por vez. O token gerado é anexado ao final do texto e realimentado na rede para calcular o próximo token da cadeia:</p>
          <div class="code-box" style="margin: 12px 0;">
            x_1 → Gera x_2<br>
            [x_1, x_2] → Gera x_3<br>
            [x_1, x_2, x_3] → Gera x_4...
          </div>
          <p class="card-text">Todo o raciocínio complexo, geração de código e empatia textual é resultado desse processo iterativo de predição sequencial.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Logits, Softmax e Hiperparâmetros</div>
          <p class="card-text">A camada final emite um vetor de pontuações não normalizadas (<strong>Logits</strong>) para cada palavra do vocabulário. O <strong>Softmax</strong> converte em probabilidades que somam 100%.</p>
          <ul class="card-list">
            <li><strong>Temperature:</strong> Controla a aleatoriedade. Valores baixos (0.0 a 0.2) geram respostas focadas e determinísticas; valores altos (0.7 a 1.0) incentivam criatividade.</li>
            <li><strong>Top-P (Nucleus Sampling):</strong> Considera apenas o menor conjunto de tokens cuja soma de probabilidade atinge o limiar P (ex: 90%), eliminando opções absurdas.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: '4.3',
    type: 'content',
    sectionBadge: '04 · LARGE LANGUAGE MODELS',
    tag: 'ARQUITETURA CORE',
    title: 'A Revolução da Arquitetura Transformer',
    subtitle: 'Processamento paralelo, autoatenção (Self-Attention) e semântica contextual.',
    diagramKey: 'renderTransformerArchitecture',
    bodyHtml: `
      <!-- O diagrama renderTransformerArchitecture é injetado diretamente -->
    `
  },
  {
    id: '4.4',
    type: 'content',
    sectionBadge: '04 · LARGE LANGUAGE MODELS',
    tag: 'MEMÓRIA OPERACIONAL',
    title: 'Tokens e Janela de Contexto',
    subtitle: 'O limite de atenção imediata do modelo durante uma sessão de inferência.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Janela de Contexto (Context Window)</div>
          <p class="card-text">É a quantidade máxima de tokens que o modelo consegue "enxergar" simultaneamente na memória de trabalho (incluindo prompt do sistema, histórico e resposta).</p>
          <ul class="card-list">
            <li>GPT-3: 2.048 tokens</li>
            <li>GPT-4: 8k a 128k tokens</li>
            <li>Claude 3.5 / Gemini 1.5: 200k a 2.000.000+ tokens</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">O Custo Quadrático O(N²)</div>
          <p class="card-text">No mecanismo clássico de atenção, cada token calcula produto escalar com todos os outros tokens. Dobrar a janela quadruplica o consumo computacional e de VRAM na atenção padrão.</p>
          <p class="card-text" style="margin-top: 8px;">Inovações como FlashAttention, RoPE (Rotary Position Embeddings) e KV Cache tornaram possíveis janelas de milhões de tokens.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Atenção e "Lost in the Middle"</div>
          <p class="card-text">Mesmo com janelas de 1M de tokens, estudos mostram que modelos tendem a lembrar com mais precisão do início (primacy) e do fim (recency) do prompt, às vezes degradando a recuperação de dados no meio do texto.</p>
          <div class="callout-banner" style="margin-top: 10px;">
            Dica Prática: Coloque instruções críticas e esquemas de resposta no início ou no fim do prompt.
          </div>
        </div>
      </div>
    `
  },
  {
    id: '4.5',
    type: 'content',
    sectionBadge: '04 · LARGE LANGUAGE MODELS',
    tag: 'ANATOMIA INTERNA',
    title: 'Parâmetros, Pesos e Biases',
    subtitle: 'Os números fundamentais que armazenam o conhecimento adquirido pelo modelo.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">O que são Parâmetros?</div>
          <p class="card-text">São as variáveis matemáticas internas que a rede ajusta durante o treinamento. Quando dizemos que um modelo tem <strong>70B parâmetros</strong>, significa que ele possui 70 bilhões de coeficientes numéricos.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Pesos (Weights)</div>
          <p class="card-text">Representam a força de conexão e relevância entre neurônios de camadas sucessivas. São organizados em matrizes gigantescas (projeções de Query, Key, Value e camadas Feed-Forward).</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Biases (Vieses de Ativação)</div>
          <p class="card-text">Valores aditivos independentes do input que permitem deslocar a função de ativação, garantindo que o neurônio possa disparar mesmo quando as entradas ponderadas forem nulas.</p>
        </div>
      </div>
      <div class="callout-banner" style="margin-top: 20px;">
        <strong>Impacto em Memória (VRAM):</strong> Em precisão total (FP32), cada parâmetro consome 4 bytes. Um modelo de 70B requer 280 GB apenas para carregar os pesos na memória! Daí a necessidade vital de técnicas como quantização.
      </div>
    `
  },
  {
    id: '4.6',
    type: 'content',
    sectionBadge: '04 · LARGE LANGUAGE MODELS',
    tag: 'A FASE MAIS CUSTOSA',
    title: 'Treinamento dos Modelos: O Pré-treinamento',
    subtitle: 'A absorção auto-supervisionada da estrutura da linguagem humana.',
    bodyHtml: `
      <div class="grid-2col">
        <div class="card-glass">
          <div class="card-title">Pré-Treinamento (Pre-training)</div>
          <p class="card-text">O modelo recebe trilhões de palavras sem anotações manuais. O objetivo da função de perda é puramente prever a próxima palavra oculta (Causal Language Modeling - CLM):</p>
          <ul class="card-list">
            <li>Volume: 3 a 15 trilhões de tokens de alta curadoria.</li>
            <li>Infraestrutura: Milhares de GPUs conectadas via rede de altíssima velocidade (InfiniBand).</li>
            <li>Custo: Milhões de dólares em eletricidade e computação por rodada.</li>
            <li>Resultado: Um <strong>Base Model</strong> com vasto conhecimento do mundo, mas sem formato de assistente instruído.</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Exemplo de Comportamento do Base Model</div>
          <div class="code-box" style="margin-bottom: 10px;">
            Input: "Como fazer uma receita de bolo de cenoura?"<br><br>
            Base Model pode responder: "Como fazer uma receita de bolo de chocolate? Como fazer pudim?"
          </div>
          <p class="card-text">O Base Model apenas completa texto estatisticamente (como se fosse a página de um fórum com várias perguntas parecidas). Ele ainda não aprendeu a agir como um assistente que responde e ajuda o usuário.</p>
        </div>
      </div>
    `
  },
  {
    id: '4.7',
    type: 'content',
    sectionBadge: '04 · LARGE LANGUAGE MODELS',
    tag: 'ESPECIALIZAÇÃO E ALINHAMENTO',
    title: 'Fine-Tuning e Aprendizado de Máquina',
    subtitle: 'Transformando um modelo básico em um assistente útil, seguro e especialista.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Alinhamento de Instrução</div>
          <p class="card-text">O Fine-Tuning supervisionado expõe o modelo a milhares de pares curados de perguntas e respostas ideais, ensinando-o a seguir instruções, admitir incertezas e recusar comandos maliciosos.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Especialização de Domínio</div>
          <p class="card-text">Ajusta o vocabulário e a probabilidade condicional para áreas técnicas com jargões estritos: pareceres jurídicos, laudos médicos, sintaxe de linguagens proprietárias de programação.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">RLHF & DPO</div>
          <p class="card-text">Reinforcement Learning from Human Feedback (RLHF) e Direct Preference Optimization (DPO) refinam o comportamento do modelo com base no julgamento humano de utilidade e segurança.</p>
        </div>
      </div>
      <div class="callout-banner">
        <strong>Analogia Didática:</strong> O Pré-treinamento é a graduação geral (aprende a ler, escrever e raciocinar); o Fine-Tuning é a residência médica ou especialização técnica.
      </div>
    `
  },

  // =========================================================================
  // BLOCO 5: TREINAMENTO E ADAPTAÇÃO DE MODELOS
  // =========================================================================
  {
    id: 'trans-05',
    type: 'transition',
    sectionNumber: '05',
    sectionBadge: '05 · TREINAMENTO E ADAPTAÇÃO',
    title: 'Treinamento e Adaptação de Modelos',
    subtitle: 'Como ajustar pesos eficientemente: Transfer Learning, LoRA, QLoRA, Quantização e Métricas de Avaliação.',
    description: 'Técnicas de engenharia moderna para adaptar modelos bilionários em hardware acessível mantendo alta capacidade de generalização.',
  },
  {
    id: '5.1',
    type: 'content',
    sectionBadge: '05 · TREINAMENTO E ADAPTAÇÃO',
    tag: 'REAPROVEITAMENTO INTELIGENTE',
    title: 'Transfer Learning e Transfer Rate',
    subtitle: 'A base do aprendizado moderno: nunca comece a treinar do zero.',
    bodyHtml: `
      <div class="grid-2col">
        <div class="card-glass">
          <div class="card-title">Transfer Learning (Aprendizado por Transferência)</div>
          <p class="card-text">Em vez de inicializar pesos aleatoriamente (o que exigiria milhões de dólares), aproveitamos representações latentes profundas já aprendidas pelo modelo pré-treinado.</p>
          <ul class="card-list">
            <li>Camadas iniciais capturam sintaxe e relações gramaticais universais.</li>
            <li>Camadas intermediárias abstraem fatos e raciocínio lógico.</li>
            <li>Ajustamos prioritariamente as camadas superiores para a tarefa específica.</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Transfer Rate (Taxa de Transferência)</div>
          <p class="card-text">Mede a eficiência e a velocidade com que o conhecimento de uma tarefa de origem (fonte) é absorvido pela tarefa de destino:</p>
          <ul class="card-list">
            <li><strong>Transferência Positiva:</strong> Domínios correlatos aceleram o aprendizado e reduzem drasticamente o volume de dados rotulados necessários.</li>
            <li><strong>Transferência Negativa:</strong> Ocorre quando o domínio de origem introduz preconceitos ou ruídos incompatíveis com o novo objetivo.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: '5.2',
    type: 'content',
    sectionBadge: '05 · TREINAMENTO E ADAPTAÇÃO',
    tag: 'SFT',
    title: 'Supervised Fine-Tuning (SFT)',
    subtitle: 'Treinamento supervisionado com datasets de instrução de alta qualidade.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Estrutura dos Dados</div>
          <p class="card-text">Formato Instruction-Input-Output (ex: formato ChatML ou Alpaca):</p>
          <div class="code-box" style="margin-top: 8px;">
            {"instruction": "Resuma o texto...", "input": "...", "output": "..."}
          </div>
        </div>
        <div class="card-glass">
          <div class="card-title">Qualidade vs. Quantidade</div>
          <p class="card-text">Descobertas como o estudo LIMA (Less Is More for Alignment) provaram que 1.000 exemplos impecavelmente escritos produzem um alinhamento superior a 100.000 exemplos barulhentos.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Loss Masking</div>
          <p class="card-text">Durante o cálculo de perda no SFT, mascaramos os tokens da pergunta (prompt) e calculamos gradientes de perda <em>apenas sobre a resposta ideal gerada</em>, otimizando o modelo para responder.</p>
        </div>
      </div>
      <div class="callout-banner">
        <strong>Objetivo:</strong> Moldar a persona do assistente, o tom de voz, o formato de resposta e a aderência a restrições de formatação (JSON, markdown).
      </div>
    `
  },
  {
    id: '5.3',
    type: 'content',
    sectionBadge: '05 · TREINAMENTO E ADAPTAÇÃO',
    tag: 'MECÂNICA MATEMÁTICA',
    title: 'Gradientes e Atualização de Pesos',
    subtitle: 'O ciclo perpétuo de Forward Pass, Cálculo de Loss e Descida do Gradiente.',
    diagramKey: 'renderTrainingGradientLoop',
    bodyHtml: `
      <!-- O diagrama renderTrainingGradientLoop é injetado diretamente -->
    `
  },
  {
    id: '5.4',
    type: 'content',
    sectionBadge: '05 · TREINAMENTO E ADAPTAÇÃO',
    tag: 'PEFT EFICIENTE',
    title: 'PEFT: LoRA e QLoRA',
    subtitle: 'Adaptação Eficiente de Parâmetros com matrizes de baixo rank e quantização de 4 bits.',
    diagramKey: 'renderLoraQloraMatrices',
    bodyHtml: `
      <!-- O diagrama renderLoraQloraMatrices é injetado diretamente -->
    `
  },
  {
    id: '5.5',
    type: 'content',
    sectionBadge: '05 · TREINAMENTO E ADAPTAÇÃO',
    tag: 'COMPRESSÃO DE MODELOS',
    title: 'Quantização de Modelos: FP32 → NF4',
    subtitle: 'Reduzindo a precisão numérica para democratizar o uso de modelos de ponta.',
    bodyHtml: `
      <div class="grid-4col">
        <div class="card-glass">
          <div class="card-title">FP32 (32-bit Float)</div>
          <p class="card-text">4 bytes por peso. Precisão científica máxima. Raramente usado em inferência devido ao consumo absurdo de memória.</p>
          <div class="callout-banner" style="margin-top: 8px;"><strong>4 GB / 1B params</strong></div>
        </div>
        <div class="card-glass">
          <div class="card-title">FP16 / BF16 (16-bit)</div>
          <p class="card-text">2 bytes por peso. Bfloat16 mantém a faixa dinâmica de FP32. Padrão da indústria para treino e inferência nativa.</p>
          <div class="callout-banner" style="margin-top: 8px;"><strong>2 GB / 1B params</strong></div>
        </div>
        <div class="card-glass">
          <div class="card-title">INT8 (8-bit Integer)</div>
          <p class="card-text">1 byte por peso. Mapeia números contínuos em inteiros discretos [-128 a 127] usando escala e ponto zero com perda imperceptível.</p>
          <div class="callout-banner" style="margin-top: 8px;"><strong>1 GB / 1B params</strong></div>
        </div>
        <div class="card-glass">
          <div class="card-title">INT4 / NF4 (4-bit)</div>
          <p class="card-text">0.5 byte por peso. NormalFloat4 (QLoRA) distribui valores conforme uma curva gaussiana teórica ótima. Roda um modelo 70B em apenas 40 GB de VRAM!</p>
          <div class="callout-banner" style="margin-top: 8px;"><strong>0.5 GB / 1B params</strong></div>
        </div>
      </div>
    `
  },
  {
    id: '5.6',
    type: 'content',
    sectionBadge: '05 · TREINAMENTO E ADAPTAÇÃO',
    tag: 'GENERALIZAÇÃO E DIAGNÓSTICO',
    title: 'Overfitting, Underfitting, Generalization e Epochs',
    subtitle: 'O equilíbrio fino entre memorizar os dados de treino e aprender regras gerais.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Underfitting (Subajuste)</div>
          <p class="card-text">O modelo é simples demais ou treinado por poucas épocas. A perda permanece alta tanto nos dados de treino quanto nos dados de validação.</p>
          <div class="callout-banner" style="margin-top: 8px;">Ação: Aumentar épocas, capacidade do modelo ou learning rate.</div>
        </div>
        <div class="card-glass">
          <div class="card-title">Generalization (O Ponto Ideal)</div>
          <p class="card-text">O modelo captura a estrutura semântica implícita. As perdas de treino e validação diminuem em harmonia, garantindo excelente performance em dados inéditos.</p>
          <div class="callout-banner" style="margin-top: 8px;">Meta de ouro de qualquer projeto de Machine Learning.</div>
        </div>
        <div class="card-glass">
          <div class="card-title">Overfitting (Superajuste)</div>
          <p class="card-text">O modelo memorizou o dataset de treino (decorou ruídos e exceções). A perda de treino continua caindo, mas a perda de validação sobe acentuadamente.</p>
          <div class="callout-banner" style="margin-top: 8px;">Ação: Early Stopping, Dropout, Regularização L2 e mais dados.</div>
        </div>
      </div>
      <div class="callout-banner" style="margin-top: 20px;">
        <strong>Conceito de Época (Epoch):</strong> Uma época representa exatamente uma passagem completa de todo o conjunto de dados de treinamento pela rede neural. Em LLMs, devido ao volume colossal de dados, costuma-se treinar por poucas épocas (1 a 3 épocas no SFT).
      </div>
    `
  },
  {
    id: '5.7',
    type: 'content',
    sectionBadge: '05 · TREINAMENTO E ADAPTAÇÃO',
    tag: 'BENCHMARKS DE QUALIDADE',
    title: 'Avaliação de Modelos: ROUGE e Métricas Modernas',
    subtitle: 'Como medir quantitativamente o sucesso de um modelo gerador de texto.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Métricas Baseadas em N-Grams</div>
          <ul class="card-list">
            <li><strong>ROUGE-1:</strong> Sobreposição de unigramas (palavras individuais) entre o texto gerado e a referência humana.</li>
            <li><strong>ROUGE-2:</strong> Sobreposição de pares de palavras consecutivas (bigramas), avaliando fluidez sintática.</li>
            <li><strong>ROUGE-L:</strong> Maior subsequência comum (LCS), preservando a ordem natural do texto.</li>
            <li><strong>BLEU:</strong> Métrica clássica com foco em precisão, amplamente usada em tradução mecânica.</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Perplexidade (PPL)</div>
          <p class="card-text">Mede a incerteza do modelo ao prever o próximo token. É o exponencial da entropia cruzada média:</p>
          <div class="code-box" style="margin: 8px 0;">PPL = exp(CrossEntropyLoss)</div>
          <p class="card-text"><strong>Quanto menor a perplexidade, mais confiante e preciso</strong> é o modelo sobre a distribuição da língua.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">LLM-as-a-Judge (O Padrão Atual)</div>
          <p class="card-text">Métricas como ROUGE falham quando a resposta é ótima, mas escrita com sinônimos diferentes. Por isso, usa-se um modelo de ponta (ex: GPT-4) para avaliar:</p>
          <ul class="card-list">
            <li>Fidelidade e ausência de alucinação (Hallucination score).</li>
            <li>Aderência rigorosa à instrução solicitada.</li>
            <li>Completude e tom adequado.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: '5.8',
    type: 'content',
    sectionBadge: '05 · TREINAMENTO E ADAPTAÇÃO',
    tag: 'DISTINÇÃO TÉCNICA',
    title: 'Prediction vs. Classification em PLN',
    subtitle: 'Compreendendo os dois objetivos fundamentais de inferência em linguagem natural.',
    bodyHtml: `
      <div class="grid-2col">
        <div class="card-glass">
          <div class="card-title">Classification (Classificação)</div>
          <p class="card-text">O objetivo é atribuir uma entrada a uma ou mais categorias pré-definidas em um espaço discreto:</p>
          <ul class="card-list">
            <li><strong>Saída:</strong> Distribuição sobre classes fixas (ex: [Spam, Não-Spam] ou [Positivo, Neutro, Negativo]).</li>
            <li><strong>Métricas:</strong> Acurácia, Precision, Recall, F1-Score e Matriz de Confusão.</li>
            <li><strong>Arquitetura Típica:</strong> Encoders (BERT, RoBERTa) com um classificador Linear no topo do token [CLS].</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Prediction / Generation (Predição de Sequência)</div>
          <p class="card-text">O objetivo é gerar uma sequência aberta de novos elementos, continuando o contexto:</p>
          <ul class="card-list">
            <li><strong>Saída:</strong> Cadeia contínua de tokens no espaço aberto do vocabulário (ex: redação de e-mail, raciocínio em etapas).</li>
            <li><strong>Métricas:</strong> Perplexidade, ROUGE, BLEU, avaliação humana e LLM-as-a-Judge.</li>
            <li><strong>Arquitetura Típica:</strong> Decoders autoregressivos (GPT, LLaMA, Mistral).</li>
          </ul>
        </div>
      </div>
      <div class="callout-banner">
        <strong>Conexão Moderna:</strong> LLMs generativos atuais conseguem realizar tarefas de classificação apenas formulando a saída como texto estruturado (ex: responder em JSON {"categoria": "financeiro"}).
      </div>
    `
  }
];

// Compatibilidade
if (typeof window !== 'undefined') {
  window.SLIDES_DATA = SLIDES_DATA;
}
export { SLIDES_DATA };
