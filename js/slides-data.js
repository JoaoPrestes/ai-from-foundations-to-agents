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
          <div class="card-title">Como ela aprende?</div>
          <p class="card-text">Não funciona como uma base de dados que apenas copia e cola ficheiros existentes. A IA estuda exemplos reais para compreender como as coisas se constroem.</p>
          <ul class="card-list">
            <li>Compreende regras e estilos: capta estruturas de texto, padrões visuais e raciocínio lógico.</li>
            <li>Combina ideias: junta conceitos diferentes de formas nunca antes vistas.</li>
            <li>Cria resultados originais: produz conteúdos novos que se assemelham aos feitos por humanos.</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Como ela constrói a resposta?</div>
          <p class="card-text">Tudo começa com o seu pedido (prompt). A partir daí, o modelo avalia o contexto e calcula o que faz mais sentido a seguir.</p>
          <div class="code-box" style="margin: 10px 0;">
            P(próximo_elemento | elementos_anteriores, instrução)
          </div>
          <p class="card-text">Esta mesma lógica serve para escrever textos, gerar imagens realistas, compor músicas ou programar código..</p>
        </div>
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
            <li><strong> Por Pedaços de Palavra (Padrão Atual): </strong> divide palavras comuns ou complexas em sílabas e fragmentos conhecidos.</li>
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
    tag: 'MECÂNICA NA PRÁTICA',
    title: 'Como os LLMs Funcionam na Prática?',
    subtitle: 'Tudo se resume a uma única tarefa: prever a próxima palavra.',
    bodyHtml: `
      <div class="grid-2col" style="align-items: stretch;">
        <!-- Cartão 1 (Esquerda): Construção Passo a Passo -->
        <div class="card-glass" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="card-title">Construção Passo a Passo</div>
            <p class="card-text" style="color: var(--text-slate); line-height: 1.6; margin-bottom: 16px;">
              A IA não gera o texto inteiro de uma vez. Ela prevê um pedaço (token) por vez e junta à conversa para definir o próximo.
            </p>

            <!-- Bloco de fluxo visual em destaque -->
            <div style="background: rgba(4, 9, 23, 0.75); border: 1px solid rgba(0, 240, 255, 0.25); border-radius: var(--radius-sm); padding: 16px; margin: 18px 0; font-family: var(--font-mono); font-size: 0.86rem; display: flex; flex-direction: column; gap: 12px; box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.4);">
              <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                <span style="background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.45); color: #93c5fd; padding: 4px 10px; border-radius: 4px; font-weight: 600;">[ Entrada ]</span>
                <span style="color: var(--accent-cyan); font-weight: bold; font-size: 1.1rem;">→</span>
                <span style="color: #ffffff; font-weight: 600; letter-spacing: 0.02em;">Gera palavra 1</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                <span style="background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.45); color: #93c5fd; padding: 4px 10px; border-radius: 4px; font-weight: 600;">[ Entrada + palavra 1 ]</span>
                <span style="color: var(--accent-cyan); font-weight: bold; font-size: 1.1rem;">→</span>
                <span style="color: #ffffff; font-weight: 600; letter-spacing: 0.02em;">Gera palavra 2</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                <span style="background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.45); color: #93c5fd; padding: 4px 10px; border-radius: 4px; font-weight: 600;">[ Entrada + palavra 1 + palavra 2 ]</span>
                <span style="color: var(--accent-cyan); font-weight: bold; font-size: 1.1rem;">→</span>
                <span style="color: #ffffff; font-weight: 600; letter-spacing: 0.02em;">Gera palavra 3...</span>
              </div>
            </div>
          </div>

          <!-- Rodapé do Cartão 1 -->
          <div style="margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(255, 255, 255, 0.1); color: var(--text-slate); font-size: 0.88rem; line-height: 1.5; display: flex; align-items: flex-start; gap: 8px;">
            <span style="color: var(--accent-cyan); font-size: 1rem; line-height: 1;">✦</span>
            <span>Toda resposta complexa e código gerado nascem dessa repetição sequencial.</span>
          </div>
        </div>

        <!-- Cartão 2 (Direita): Controle de Criatividade e Foco -->
        <div class="card-glass" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="card-title">Controle de Criatividade e Foco</div>
            <p class="card-text" style="color: var(--text-slate); line-height: 1.6; margin-bottom: 16px;">
              A IA calcula a chance de cada palavra e usa parâmetros para decidir o que falar:
            </p>

            <!-- Itens de Parâmetros -->
            <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 18px;">
              <!-- Item 1: Temperature -->
              <div style="background: rgba(4, 9, 23, 0.65); border: 1px solid rgba(59, 130, 246, 0.3); border-left: 3px solid var(--accent-blue-light); border-radius: var(--radius-sm); padding: 14px 16px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                  <strong style="font-family: var(--font-mono); font-size: 0.95rem; color: #ffffff; letter-spacing: 0.02em;">Temperature</strong>
                  <span style="font-size: 0.72rem; font-family: var(--font-mono); background: rgba(59, 130, 246, 0.2); color: #60a5fa; padding: 2px 8px; border-radius: 4px; border: 1px solid rgba(59, 130, 246, 0.4);">Parâmetro 01</span>
                </div>
                <p style="color: var(--text-slate); font-size: 0.88rem; line-height: 1.55; margin: 0;">
                  Controla a criatividade. Valores baixos dão respostas diretas e precisas; valores altos estimulam variações criativas.
                </p>
              </div>

              <!-- Item 2: Top-P -->
              <div style="background: rgba(4, 9, 23, 0.65); border: 1px solid rgba(0, 240, 255, 0.3); border-left: 3px solid var(--accent-cyan); border-radius: var(--radius-sm); padding: 14px 16px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                  <strong style="font-family: var(--font-mono); font-size: 0.95rem; color: #ffffff; letter-spacing: 0.02em;">Top-P</strong>
                  <span style="font-size: 0.72rem; font-family: var(--font-mono); background: rgba(0, 240, 255, 0.15); color: var(--accent-cyan); padding: 2px 8px; border-radius: 4px; border: 1px solid rgba(0, 240, 255, 0.4);">Parâmetro 02</span>
                </div>
                <p style="color: var(--text-slate); font-size: 0.88rem; line-height: 1.55; margin: 0;">
                  Filtro de relevância. Elimina opções absurdas e considera apenas as palavras mais prováveis.
                </p>
              </div>
            </div>
          </div>
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
  },

  // =========================================================================
  // BLOCO 6: RAG (RETRIEVAL-AUGMENTED GENERATION)
  // =========================================================================
  {
    id: 'trans-06',
    type: 'transition',
    sectionNumber: '06',
    sectionBadge: '06 · RAG',
    title: 'RAG (Retrieval-Augmented Generation)',
    description: 'Como conectar LLMs a bases de dados dinâmicas e privadas, eliminando alucinações e garantindo respostas precisas e rastreáveis.',
  },
  {
    id: '6.1',
    type: 'content',
    sectionBadge: '06 · RAG',
    tag: 'FUNDAMENTOS DE RAG',
    title: 'O que é RAG e Por que Utilizá-lo?',
    subtitle: 'A solução definitiva para o corte temporal de conhecimento e dados corporativos privados.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Mitigação de Alucinações</div>
          <p class="card-text">LLMs são modelos estatísticos que podem inventar fatos convincentes. O RAG "ancora" (Grounding) a resposta estritamente nos trechos de documentos reais recuperados.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Dados Privados & Segredos</div>
          <p class="card-text">Permite que o modelo responda sobre manuais internos, contratos confidenciais e dados de ERP sem precisar retreinar a rede nem expor dados sensíveis ao treinamento público.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Atualização em Tempo Real</div>
          <p class="card-text">Enquanto retreinar um LLM leva semanas ou meses, atualizar uma base RAG é instantâneo: basta indexar novos documentos ou deletar arquivos obsoletos no banco vetorial.</p>
        </div>
      </div>
      <div class="callout-banner">
        <strong>Princípio do Livro Aberto:</strong> Sem RAG, o LLM faz uma prova consultando apenas a memória da cabeça (pesos). Com RAG, o LLM faz uma prova com consulta a livros e manuais específicos abertos à sua frente.
      </div>
    `
  },
  {
    id: '6.2',
    type: 'content',
    sectionBadge: '06 · RAG',
    tag: 'DECISÃO ESTRATÉGICA',
    title: 'RAG vs. Fine-Tuning: Quando Usar Cada Um?',
    subtitle: 'Compreendendo os papéis complementares de recuperação de fatos vs. mudança de comportamento.',
    bodyHtml: `
      <div class="grid-2col">
        <div class="comparison-card highlight">
          <span class="comparison-tag tag-gen">RAG (RECUPERAÇÃO DE CONTEXTO)</span>
          <div class="card-title">Foco: O QUE o modelo sabe (Fatos & Dados)</div>
          <ul class="card-list">
            <li><strong>Dinâmica:</strong> Dados mudam diariamente ou por segundo.</li>
            <li><strong>Rastreabilidade:</strong> Cita explicitamente a fonte e a página consultada.</li>
            <li><strong>Custo & Hardware:</strong> Baixo custo computacional; não exige GPUs potentes de treino.</li>
            <li><strong>Casos de Uso:</strong> Suporte ao cliente, busca jurídica, consulta a políticas internas, documentação técnica.</li>
          </ul>
        </div>
        <div class="comparison-card">
          <span class="comparison-tag tag-trad">FINE-TUNING (ADAPTAÇÃO DE PESOS)</span>
          <div class="card-title">Foco: COMO o modelo se comporta (Estilo & Formato)</div>
          <ul class="card-list">
            <li><strong>Dinâmica:</strong> Padrões estáveis de escrita e sintaxe especializada.</li>
            <li><strong>Rastreabilidade:</strong> Black-box estatística; não cita fontes específicas.</li>
            <li><strong>Custo & Hardware:</strong> Requer pipelines de curadoria, treino supervisionado e GPUs.</li>
            <li><strong>Casos de Uso:</strong> Ensinar jargões médicos estritos, forçar respostas em JSON rigoroso, clonar o tom de voz de uma marca.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: '6.3',
    type: 'content',
    sectionBadge: '06 · RAG',
    tag: 'FLUXO DE SISTEMA',
    title: 'Arquitetura RAG Ponta a Ponta',
    subtitle: 'A separação entre a fase offline de ingestão/indexação e a fase online de consulta e geração.',
    diagramKey: 'renderRagPipeline',
    bodyHtml: `
      <!-- O diagrama renderRagPipeline é injetado diretamente -->
    `
  },
  {
    id: '6.4',
    type: 'content',
    sectionBadge: '06 · RAG',
    tag: 'INFRAESTRUTURA DE DADOS',
    title: 'Embeddings e Bancos de Dados Vetoriais',
    subtitle: 'Armazenando e consultando bilhões de vetores em milissegundos.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Por que Bancos Tradicionais Falham?</div>
          <p class="card-text">Bancos relacionais (SQL) buscam correspondências exatas por palavras-chave (WHERE texto LIKE '%termo%'). Falham com sinônimos, erros de digitação e conceitos abstratos.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Vector Databases Modernos</div>
          <p class="card-text">Otimizados para cálculo de vizinhos mais próximos (Approximate Nearest Neighbors - ANN) em espaços de alta dimensão (768 a 3.072 dimensões).</p>
          <ul class="card-list">
            <li>Managed Cloud: Pinecone, Weaviate</li>
            <li>Open-Source: Chroma, Qdrant, Milvus</li>
            <li>Extensões SQL: PostgreSQL com pgvector</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Algoritmos de Indexação (HNSW)</div>
          <p class="card-text">Hierarchical Navigable Small World (HNSW) cria uma estrutura de grafos multinível que encontra os vetores mais similares em tempo logarítmico O(log N), evitando comparar com todos os dados da base.</p>
        </div>
      </div>
    `
  },
  {
    id: '6.5',
    type: 'content',
    sectionBadge: '06 · RAG',
    tag: 'ENGENHARIA DE DADOS',
    title: 'Chunking e Estratégias de Recuperação',
    subtitle: 'Como fatiar documentos mantendo integridade semântica e contexto suficiente.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Fixed-Size com Overlap</div>
          <p class="card-text">Divide o texto em blocos fixos de tokens (ex: 500 tokens) com uma sobreposição (overlap de 50 tokens) para evitar que frases importantes sejam cortadas no meio.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Recursive Character Chunking</div>
          <p class="card-text">Algoritmo inteligente do LangChain que tenta quebrar primeiro por quebras de parágrafo (\n\n), depois por frases (\n ou ponto) e só em último caso por palavras ou caracteres.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Semantic Chunking</div>
          <p class="card-text">Calcula a similaridade de embedding entre sentenças consecutivas. O corte ocorre apenas quando a distância semântica ultrapassa um limiar (mudança de tópico).</p>
        </div>
      </div>
      <div class="callout-banner">
        <strong>O Trade-off de Ouro:</strong> Chunks muito pequenos perdem o contexto global da ideia; chunks muito grandes diluem a especificidade do embedding e estouram a janela de contexto.
      </div>
    `
  },
  {
    id: '6.6',
    type: 'content',
    sectionBadge: '06 · RAG',
    tag: 'MÉTRICAS MATEMÁTICAS',
    title: 'Métricas de Similaridade Vetorial',
    subtitle: 'Similaridade de Cosseno, Distância Euclidiana e Produto Escalar.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Similaridade de Cosseno</div>
          <div class="code-box" style="margin: 8px 0;">cos(θ) = (A · B) / (||A|| ||B||)</div>
          <p class="card-text">Mede o ângulo entre os dois vetores, normalizando pelo seu tamanho. Varia de -1 (opostos) a +1 (idênticos). <strong>É a métrica mais recomendada para PLN</strong>, pois independe do comprimento do texto.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Distância Euclidiana (L2)</div>
          <div class="code-box" style="margin: 8px 0;">d(A, B) = √Σ(A_i - B_i)²</div>
          <p class="card-text">Mede a distância geométrica em linha reta entre dois pontos. Quanto menor o valor, mais próximos são os vetores. Sensível à magnitude dos vetores (comprimento do documento).</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Produto Escalar (Dot Product)</div>
          <div class="code-box" style="margin: 8px 0;">A · B = Σ(A_i × B_i)</div>
          <p class="card-text">Multiplica e soma as coordenadas diretamente. Se os vetores já estiverem previamente normalizados (magnitude = 1), o produto escalar é matematicamente idêntico ao cosseno, com custo computacional menor.</p>
        </div>
      </div>
    `
  },
  {
    id: '6.7',
    type: 'content',
    sectionBadge: '06 · RAG',
    tag: 'TÉCNICAS AVANÇADAS',
    title: 'Técnicas Avançadas: MMR e Reranking',
    subtitle: 'Superando as limitações da busca vetorial ingênua.',
    bodyHtml: `
      <div class="grid-2col">
        <div class="card-glass">
          <div class="card-title">Maximal Marginal Relevance (MMR)</div>
          <p class="card-text">A busca pura traz frequentemente 3 ou 4 chunks quase idênticos que repetem a mesma informação. O MMR otimiza conjuntamente:</p>
          <ul class="card-list">
            <li><strong>Relevância:</strong> Quão próximo o chunk está da pergunta do usuário.</li>
            <li><strong>Diversidade:</strong> Quão diferente o chunk é dos chunks já selecionados anteriormente.</li>
          </ul>
          <p class="card-text" style="margin-top: 8px;">Garante que o LLM receba múltiplos pontos de vista e informações complementares no prompt.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Reranking com Cross-Encoders</div>
          <p class="card-text">Bi-encoders (bancos vetoriais normais) comparam vetores de forma rápida, mas superficial. O Reranking introduz uma segunda etapa de alta precisão:</p>
          <ul class="card-list">
            <li>1ª Etapa (Fast Retrieval): O Vector DB recupera os Top-50 candidatos em 10ms.</li>
            <li>2ª Etapa (Cross-Encoder): Um modelo de Rerank (ex: Cohere Rerank, BGE-Reranker) avalia conjuntamente a pergunta e o documento, reordenando com precisão cirúrgica e entregando apenas os Top-3 melhores ao LLM.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: '6.8',
    type: 'content',
    sectionBadge: '06 · RAG',
    tag: 'PROMPT AUGMENTATION',
    title: 'Geração de Respostas com Contexto Recuperado',
    subtitle: 'A síntese final fundamentada nos dados recuperados.',
    bodyHtml: `
      <div class="grid-2col">
        <div class="card-glass">
          <div class="card-title">Anatomia do Prompt Aumentado</div>
          <div class="code-box">
            SYSTEM: Você é um assistente técnico corporativo.<br>
            Responda APENAS com base nos fragmentos de contexto abaixo.<br>
            Se a resposta não constar no contexto, diga "Não possuo essa informação".<br><br>
            --- CONTEXTO RECUPERADO ---<br>
            [Doc 1 - Página 14]: A política de devolução é de até 30 dias corridos...<br>
            [Doc 2 - Página 22]: Para produtos da linha Pro, a garantia é estendida...<br><br>
            --- PERGUNTA DO USUÁRIO ---<br>
            {pergunta_do_usuario}
          </div>
        </div>
        <div class="card-glass">
          <div class="card-title">Benefícios Críticos para Produção</div>
          <ul class="card-list">
            <li><strong>Citação de Fontes:</strong> O modelo aponta com precisão o documento e parágrafo de onde extraiu o fato.</li>
            <li><strong>Controle de Acesso (RBAC):</strong> Usuários só recuperam chunks de documentos aos quais seus perfis corporativos têm permissão de leitura.</li>
            <li><strong>Governança e Auditoria:</strong> Toda resposta pode ser conferida por humanos auditores em segundos.</li>
          </ul>
        </div>
      </div>
    `
  },

  // =========================================================================
  // BLOCO 7: FRAMEWORKS E CONSTRUÇÃO DE APLICAÇÕES COM IA
  // =========================================================================
  {
    id: 'trans-07',
    type: 'transition',
    sectionNumber: '07',
    sectionBadge: '07 · FRAMEWORKS E APLICAÇÕES',
    title: 'Frameworks e Construção de Aplicações com IA',
    description: 'Como sair de chamadas de API isoladas para arquiteturas escaláveis e modulares com LangChain, templates, gerenciamento de memória e orquestração.',
  },
  {
    id: '7.1',
    type: 'content',
    sectionBadge: '07 · FRAMEWORKS E APLICAÇÕES',
    tag: 'ECOSSISTEMA LANGCHAIN',
    title: 'O que é LangChain?',
    subtitle: 'O framework de orquestração padrão da indústria para conectar dados, memória e modelos de linguagem.',
    diagramKey: 'renderLangchainPipeline',
    bodyHtml: `
      <!-- O diagrama renderLangchainPipeline é injetado diretamente -->
    `
  },
  {
    id: '7.2',
    type: 'content',
    sectionBadge: '07 · FRAMEWORKS E APLICAÇÕES',
    tag: 'ENGENHARIA DE PROMPTS',
    title: 'Prompt Templates e Engenharia de Prompt',
    subtitle: 'Estruturação parametrizável de instruções para garantir repetibilidade e robustez.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Prompt Templates</div>
          <p class="card-text">Evita concatenação insegura de strings. Permite reutilizar esquemas com validação de tipagem:</p>
          <div class="code-box" style="margin-top: 8px;">
            template = "Traduza de {origem} para {destino}: {texto}"
          </div>
        </div>
        <div class="card-glass">
          <div class="card-title">Técnicas: Zero-Shot vs Few-Shot</div>
          <p class="card-text"><strong>Zero-shot:</strong> O modelo executa a tarefa sem exemplos prévios.<br><strong>Few-shot:</strong> O prompt fornece 2 a 5 exemplos resolvidos (pares entrada $\rightarrow$ saída), calibrando o padrão de formatação desejado.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Chain-of-Thought (CoT)</div>
          <p class="card-text">Instruir o modelo a "pensar passo a passo antes de dar a resposta final". Isso ativa caminhos de raciocínio lógico no Transformer, aumentando a acurácia em tarefas complexas em até 40%.</p>
        </div>
      </div>
    `
  },
  {
    id: '7.3',
    type: 'content',
    sectionBadge: '07 · FRAMEWORKS E APLICAÇÕES',
    tag: 'GERENCIAMENTO DE ESTADO',
    title: 'Memory e Gerenciamento de Contexto',
    subtitle: 'Como dar continuidade a diálogos sem estourar limites de tokens e custos de inferência.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">ConversationBufferMemory</div>
          <p class="card-text">Guarda o histórico bruto de todas as mensagens. Simples e direto, mas perigoso em conversas longas pois estoura a janela de contexto rapidamente.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">ConversationSummaryMemory</div>
          <p class="card-text">Usa um LLM auxiliar rápido para resumir periodicamente o passado da conversa, preservando fatos cruciais em poucas linhas e mantendo a contagem de tokens estável.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">VectorStoreMemory</div>
          <p class="card-text">Armazena interações passadas em um banco vetorial. Diante de uma nova pergunta, recupera apenas os momentos do passado semanticamente relevantes para a resposta atual.</p>
        </div>
      </div>
    `
  },
  {
    id: '7.4',
    type: 'content',
    sectionBadge: '07 · FRAMEWORKS E APLICAÇÕES',
    tag: 'INGESTÃO UNIVERSAL',
    title: 'Document Loaders, Transformers e Web Scraping',
    subtitle: 'Conectores padronizados para alimentar sistemas de IA com dados de qualquer fonte.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Document Loaders</div>
          <p class="card-text">Mais de 100 conectores nativos:</p>
          <ul class="card-list">
            <li>PDFs (PyPDF, PDFMiner, Unstructured)</li>
            <li>Repositórios Git e Markdown</li>
            <li>Confluence, Notion, Google Drive e Slack</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Web Scraping Inteligente</div>
          <p class="card-text">Loaders modernos (Playwright, Selenium, Firecrawl) renderizam SPAs em JavaScript e extraem o conteúdo textual limpo, descartando automaticamente anúncios, headers e menus irrelevantes.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Document Transformers</div>
          <p class="card-text">Limpeza de HTML, tradução automática, remoção de dados pessoais identificáveis (PII/LGPD) e padronização de metadados antes da indexação vetorial.</p>
        </div>
      </div>
    `
  },
  {
    id: '7.5',
    type: 'content',
    sectionBadge: '07 · FRAMEWORKS E APLICAÇÕES',
    tag: 'DESACOPLAMENTO DE PROVEDORES',
    title: 'Integração com APIs de LLMs',
    subtitle: 'Flexibilidade para alternar entre provedores proprietários e modelos locais open-source.',
    bodyHtml: `
      <div class="grid-2col">
        <div class="card-glass">
          <div class="card-title">APIs Proprietárias em Nuvem</div>
          <p class="card-text">Modelos hospedados com garantia de SLA e capacidades de topo de linha:</p>
          <ul class="card-list">
            <li><strong>OpenAI:</strong> GPT-4o, GPT-4o-mini, o1 (raciocínio avançado).</li>
            <li><strong>Google:</strong> Gemini 1.5 Pro / Flash (janela de 2M tokens e multimodalidade).</li>
            <li><strong>Anthropic:</strong> Claude 3.5 Sonnet (referência em código e escrita natural).</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Modelos Open-Source & Locais</div>
          <p class="card-text">Privacidade total e controle absoluto sem envio de dados para servidores terceiros:</p>
          <ul class="card-list">
            <li><strong>Ollama / vLLM:</strong> Servidores locais de inferência com throughput altíssimo.</li>
            <li><strong>Modelos Fundacionais Livres:</strong> Meta LLaMA 3.1, Mistral / Mixtral, Qwen 2.5, DeepSeek.</li>
            <li><strong>Portabilidade LangChain:</strong> Basta trocar a classe <code>ChatOpenAI</code> por <code>ChatOllama</code> sem alterar uma única linha de lógica de negócio da aplicação!</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: '7.6',
    type: 'content',
    sectionBadge: '07 · FRAMEWORKS E APLICAÇÕES',
    tag: 'ARQUITETURA DE PRODUÇÃO',
    title: 'Pipeline de Construção de Aplicações com IA',
    subtitle: 'A anatomia de uma arquitetura empresarial completa em camadas.',
    bodyHtml: `
      <div class="steps-row">
        <div class="step-card">
          <div class="step-number">01</div>
          <div class="step-title">Camada de Interface (UI)</div>
          <div class="step-desc">Web apps (Next.js/React), chats corporativos (Teams, Slack) e fluxos assíncronos com feedback de streaming em tempo real.</div>
        </div>
        <div class="step-card">
          <div class="step-number">02</div>
          <div class="step-title">Gateway & Segurança</div>
          <div class="step-desc">Autenticação, rate limiting, controle de custos (token tracking), detecção de prompt injection e filtros de segurança (guardrails).</div>
        </div>
        <div class="step-card">
          <div class="step-number">03</div>
          <div class="step-title">Orquestrador & RAG</div>
          <div class="step-desc">LangChain / LlamaIndex roteando intenções, consultando cache semântico (Redis) e buscando contexto em bancos vetoriais.</div>
        </div>
        <div class="step-card">
          <div class="step-number">04</div>
          <div class="step-title">Modelos & Ferramentas</div>
          <div class="step-desc">LLMs executando raciocínio e function calling conectado a ERPs, CRMs, APIs bancárias e geradores de relatórios.</div>
        </div>
      </div>
    `
  },

  // =========================================================================
  // BLOCO 8: AGENTES DE INTELIGÊNCIA ARTIFICIAL
  // =========================================================================
  {
    id: 'trans-08',
    type: 'transition',
    sectionNumber: '08',
    sectionBadge: '08 · AGENTES DE IA',
    title: 'Agentes de Inteligência Artificial',
    subtitle: 'Da Geração de Texto à Autonomia Prática',
    description: 'A fronteira da IA contemporânea: sistemas capazes de perceber ambientes, raciocinar, planejar estratégias em múltiplos passos e executar ações no mundo real com ferramentas.',
  },
  {
    id: '8.1',
    type: 'content',
    sectionBadge: '08 · AGENTES DE IA',
    tag: 'O SALTO COGNITIVO',
    title: 'O que são Agentes de Inteligência Artificial?',
    subtitle: 'Entidades autônomas que perseguem metas em ambientes dinâmicos.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Autonomia Deliberativa</div>
          <p class="card-text">O agente não precisa que o humano especifique cada clique. Diante de um objetivo de alto nível ("Audite este relatório financeiro e gere um resumo em PDF"), o agente decide quais etapas seguir.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Tomada de Decisão em Loop</div>
          <p class="card-text">Executa ciclos contínuos de percepção $\rightarrow$ reflexão $\rightarrow$ ação $\rightarrow$ correção de rota até que o critério de sucesso do objetivo seja matematicamente satisfeito.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Interação com o Mundo</div>
          <p class="card-text">Equipado com ferramentas (tools), o agente lê e-mails, executa consultas SQL, roda scripts Python, navega na internet e aciona APIs corporativas externas.</p>
        </div>
      </div>
    `
  },
  {
    id: '8.2',
    type: 'content',
    sectionBadge: '08 · AGENTES DE IA',
    tag: 'MUDANÇA DE PARADIGMA',
    title: 'Chatbot Convencional vs. Agente Autônomo',
    subtitle: 'Compreendendo por que os agentes representam o próximo grande ciclo tecnológico.',
    bodyHtml: `
      <div class="grid-2col">
        <div class="comparison-card">
          <span class="comparison-tag tag-trad">CHATBOT CONVENCIONAL</span>
          <div class="card-title">Passivo e Reativo</div>
          <ul class="card-list">
            <li><strong>Fluxo:</strong> 1 Pergunta $\rightarrow$ 1 Resposta em texto.</li>
            <li><strong>Escopo:</strong> Limitado a sintetizar informações que já estão dentro do seu contexto.</li>
            <li><strong>Ação:</strong> Não possui braços operacionais; se uma API falhar, apenas reporta o erro ao usuário.</li>
            <li><strong>Exemplo:</strong> "Como posso cancelar minha passagem aérea?" $\rightarrow$ Responde explicando a regra.</li>
          </ul>
        </div>
        <div class="comparison-card highlight">
          <span class="comparison-tag tag-gen">AGENTE DE IA AUTÔNOMO</span>
          <div class="card-title">Proativo, Resolutivo e Orientado a Metas</div>
          <ul class="card-list">
            <li><strong>Fluxo:</strong> Meta $\rightarrow$ Decomposição em subtarefas $\rightarrow$ Múltiplas ações $\rightarrow$ Validação.</li>
            <li><strong>Escopo:</strong> Busca ativamente dados externos em tempo real e corrige os próprios erros.</li>
            <li><strong>Ação:</strong> Chama a API da companhia aérea, cancela a passagem e emite o comprovante.</li>
            <li><strong>Exemplo:</strong> "Cancele a passagem do voo 402 e peça reembolso" $\rightarrow$ <em>Executa a transação completa</em>.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: '8.3',
    type: 'content',
    sectionBadge: '08 · AGENTES DE IA',
    tag: 'ARQUITETURA COGNITIVA',
    title: 'Arquitetura Completa de um Agente de IA',
    subtitle: 'A simbiose entre Percepção, Raciocínio, Memória e Atuação.',
    diagramKey: 'renderAgentArchitecture',
    bodyHtml: `
      <!-- O diagrama renderAgentArchitecture é injetado diretamente -->
    `
  },
  {
    id: '8.4',
    type: 'content',
    sectionBadge: '08 · AGENTES DE IA',
    tag: 'DECOMPOSIÇÃO DE MÓDULOS',
    title: 'Componentes Fundamentais: Sensores, Processadores e Atuadores',
    subtitle: 'A tríade clássica da robótica adaptada aos sistemas cognitivos modernos.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">1. Sensores (Percepção)</div>
          <p class="card-text">Capturam o estado atual do ambiente:</p>
          <ul class="card-list">
            <li>Mensagens do usuário no chat</li>
            <li>Respostas de requisições HTTP e webhooks</li>
            <li>DOM de páginas web e capturas de tela (visão computacional)</li>
            <li>Logs e códigos de retorno de execução de terminal</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">2. Processadores (Cérebro)</div>
          <p class="card-text">O LLM atuando como motor de raciocínio lógico:</p>
          <ul class="card-list">
            <li>Interpreta a intenção e define a estratégia</li>
            <li>Planeja a decomposição da meta (Planner)</li>
            <li>Decide qual ferramenta chamar e com quais parâmetros</li>
            <li>Avalia se o resultado obtido foi suficiente (Self-reflection)</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">3. Atuadores (Ação)</div>
          <p class="card-text">Os mecanismos que modificam o ambiente:</p>
          <ul class="card-list">
            <li>Executores de código (sandbox Python, bash)</li>
            <li>Conectores de banco de dados (INSERT, UPDATE)</li>
            <li>Disparo de e-mails e mensagens de mensageria</li>
            <li>Navegadores headless (cliques e formulários)</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: '8.5',
    type: 'content',
    sectionBadge: '08 · AGENTES DE IA',
    tag: 'EXTENSIBILIDADE',
    title: 'Ferramentas (Tools) e Function Calling',
    subtitle: 'A interface estruturada que conecta a inteligência do modelo a qualquer software do mundo.',
    bodyHtml: `
      <div class="grid-2col">
        <div class="card-glass">
          <div class="card-title">O que é Function Calling?</div>
          <p class="card-text">É a capacidade nativa de LLMs modernos de analisar um esquema de funções em JSON/OpenAPI e, quando necessário, pausar a geração e emitir uma chamada estruturada com argumentos validados:</p>
          <div class="code-box" style="margin-top: 10px;">
            {<br>
            &nbsp;&nbsp;"name": "calcular_imposto",<br>
            &nbsp;&nbsp;"arguments": {"valor": 15000, "regime": "lucro_presumido"}<br>
            }
          </div>
        </div>
        <div class="card-glass">
          <div class="card-title">Exemplos Comuns de Ferramentas</div>
          <ul class="card-list">
            <li><strong>Calculadora / Python REPL:</strong> Elimina erros aritméticos e resolve álgebra complexa com precisão determinística.</li>
            <li><strong>SQL Tool:</strong> Converte perguntas em linguagem natural em queries SQL executadas contra o banco analítico.</li>
            <li><strong>Search API (Tavily, Google Serper):</strong> Recupera informações atualizadas em tempo real da internet aberta.</li>
            <li><strong>File System Tools:</strong> Lê, edita, compila e comita arquivos em repositórios de código.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: '8.6',
    type: 'content',
    sectionBadge: '08 · AGENTES DE IA',
    tag: 'FRAMEWORK DE RACIOCÍNIO',
    title: 'Ciclo de Execução de um Agente: ReAct',
    subtitle: 'Synergizing Reasoning and Acting in Language Models (Yao et al., 2022).',
    bodyHtml: `
      <div class="steps-row">
        <div class="step-card">
          <div class="step-number">01</div>
          <div class="step-title">Thought (Pensamento)</div>
          <div class="step-desc">O agente verbaliza explicitamente seu raciocínio: "Para responder qual empresa teve maior lucro, primeiro preciso buscar a receita da empresa A."</div>
        </div>
        <div class="step-card">
          <div class="step-number">02</div>
          <div class="step-title">Action (Ação)</div>
          <div class="step-desc">O agente escolhe e aciona uma ferramenta específica com parâmetros estruturados: <code>buscar_dados_financeiros(ticket="A")</code>.</div>
        </div>
        <div class="step-card">
          <div class="step-number">03</div>
          <div class="step-title">Observation (Observação)</div>
          <div class="step-desc">O ambiente retorna a resposta da ferramenta (ex: "Lucro líquido: R$ 2,4 bi"). O resultado é injetado no contexto do agente.</div>
        </div>
        <div class="step-card">
          <div class="step-number">04</div>
          <div class="step-title">Reflection & Resposta</div>
          <div class="step-desc">O agente avalia se já possui dados suficientes. Se sim, emite a resposta final ao usuário; se não, inicia um novo ciclo.</div>
        </div>
      </div>
      <div class="callout-banner">
        <strong>Vantagem do ReAct:</strong> O rastreamento explícito do pensamento (Thought) permite auditar exatamente por que o agente tomou cada decisão e facilita a autocorreção em caso de falhas de ferramentas.
      </div>
    `
  },
  {
    id: '8.7',
    type: 'content',
    sectionBadge: '08 · AGENTES DE IA',
    tag: 'AUTOMAÇÃO VISUAL',
    title: 'LAMs (Large Action Models)',
    subtitle: 'Modelos treinados especificamente para operar interfaces gráficas humanas (GUI).',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Além de APIs Padronizadas</div>
          <p class="card-text">Muitos softwares corporativos antigos não possuem APIs REST. Os LAMs operam diretamente na tela: enxergam botões, inputs, menus e popups usando visão computacional.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Mapeamento Visuo-Espacial</div>
          <p class="card-text">Traduzem comandos ("reserve o hotel mais barato") em sequências precisas de cliques do mouse (x, y), rolagem de página e digitação no teclado.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Exemplos e Tendência (OS Agents)</div>
          <p class="card-text">Claude Computer Use, Rabbit OS e sistemas de automação de navegador (Playwright agents) transformam qualquer computador ou aplicativo em um espaço operável pela IA.</p>
        </div>
      </div>
    `
  },
  {
    id: '8.8',
    type: 'content',
    sectionBadge: '08 · AGENTES DE IA',
    tag: 'CASOS REAIS',
    title: 'Aplicações Reais de Agentes Autônomos',
    subtitle: 'Como a autonomia prática está gerando valor mensurável na indústria.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Software Engineering Agents</div>
          <p class="card-text">Agentes como Devin, GitHub Copilot Workspace e assistentes autônomos que recebem uma issue do GitHub, clonam o repositório, escrevem o código, rodam os testes unitários, corrigem bugs e abrem o Pull Request prontos para revisão.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Operações & Atendimento Resolutivo</div>
          <p class="card-text">Em vez de apenas responder dúvidas frequentes, o agente altera cadastros, processa estornos bancários, atualiza cartões de crédito e renegocia contratos acessando o sistema central da empresa de forma segura.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Pesquisa Científica & Inteligência de Mercado</div>
          <p class="card-text">Agentes que passam horas navegando por dezenas de sites de concorrentes, baixam demonstrativos em PDF, extraem tabelas financeiras e compilam relatórios analíticos completos em minutos.</p>
        </div>
      </div>
    `
  },
  {
    id: '8.9',
    type: 'content',
    sectionBadge: '08 · AGENTES DE IA',
    tag: 'COLABORAÇÃO DISTRIBUÍDA',
    title: 'Sistemas Multi-Agentes (Multi-Agent Systems)',
    subtitle: 'Superando agentes individuais através da especialização, colaboração e debate.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">Especialização de Papéis</div>
          <p class="card-text">Assim como em uma equipe humana, dividir tarefas complexas entre agentes especialistas (ex: Pesquisador, Redator, Revisor de Código, Gerente de Projeto) gera resultados muito superiores a um único agente generalista sobrecarregado.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Padrões de Orquestração</div>
          <ul class="card-list">
            <li><strong>Sequencial (Pipeline):</strong> A saída do agente A é a entrada do agente B.</li>
            <li><strong>Hierárquico (Supervisor):</strong> Um agente líder delega tarefas e avalia entregas.</li>
            <li><strong>Debate / Consenso:</strong> Agentes com personas diferentes debatem até convergir na melhor solução.</li>
          </ul>
        </div>
        <div class="card-glass">
          <div class="card-title">Frameworks de Destaque</div>
          <p class="card-text">Ferramentas como CrewAI, AutoGen (Microsoft) e LangGraph tornam viável a criação de equipes autônomas coordenadas com facilidade.</p>
        </div>
      </div>
    `
  },
  {
    id: '9.0',
    type: 'content',
    sectionBadge: '08 · AGENTES DE IA',
    tag: 'ORQUESTRAÇÃO ROBUSTA',
    title: 'LangGraph: Orquestração Baseada em Grafos',
    subtitle: 'Controle fino de estado, ciclos adaptativos e checkpoints para fluxos agênticos profissionais.',
    diagramKey: 'renderLangGraphState',
    bodyHtml: `
      <!-- O diagrama renderLangGraphState é injetado diretamente -->
    `
  },

  // =========================================================================
  // BLOCO 9: CONCLUSÃO E SÍNTESE APLICADA
  // =========================================================================
  {
    id: 'trans-09',
    type: 'transition',
    sectionNumber: '09',
    sectionBadge: '09 · CONCLUSÃO',
    title: 'Conclusão e Síntese Aplicada',
    description: 'A visão holística conectando os fundamentos teóricos à criação de produtos e ecossistemas inteligentes de alto impacto no mundo real.',
  },
  {
    id: '9.1',
    type: 'content',
    sectionBadge: '09 · CONCLUSÃO',
    tag: 'SÍNTESE COGNITIVA',
    title: 'A Jornada Evolutiva da Inteligência Artificial',
    subtitle: 'Do processamento estatístico de caracteres à cognição autônoma com ferramentas.',
    bodyHtml: `
      <div class="steps-row">
        <div class="step-card">
          <div class="step-number">01</div>
          <div class="step-title">PLN Clássico & Tokens</div>
          <div class="step-desc">Aprendeu a transformar a ambiguidade da linguagem humana em representações vetoriais contínuas (embeddings).</div>
        </div>
        <div class="step-card">
          <div class="step-number">02</div>
          <div class="step-title">Transformers & LLMs</div>
          <div class="step-desc">A arquitetura de atenção permitiu modelar o contexto global e absorver conhecimento enciclopédico através de pré-treinamento massivo.</div>
        </div>
        <div class="step-card">
          <div class="step-number">03</div>
          <div class="step-title">Adaptação & Grounding</div>
          <div class="step-desc">PEFT (LoRA/QLoRA) e RAG resolveram as dores críticas de custo, privacidade, atualização contínua e alucinações.</div>
        </div>
        <div class="step-card">
          <div class="step-number">04</div>
          <div class="step-title">Agentes Autônomos</div>
          <div class="step-desc">Os LLMs deixaram de ser apenas geradores passivos de texto para se tornarem o motor cognitivo central de ação no mundo real.</div>
        </div>
      </div>
      <div class="callout-banner">
        <strong>Conclusão Central:</strong> Cada nova tecnologia não substituiu a anterior, mas construiu um degrau sobre ela. O sucesso na IA depende de dominar todos os elos dessa corrente.
      </div>
    `
  },
  {
    id: '9.2',
    type: 'content',
    sectionBadge: '09 · CONCLUSÃO',
    tag: 'MAPA HOLÍSTICO',
    title: 'A Matriz de Interconexão: Como GenAI, PLN e LLMs se Fundem',
    subtitle: 'A relação simbiótica entre as disciplinas que formam a moderna pilha de Inteligência Artificial.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">1. A Base: PLN e Embeddings</div>
          <p class="card-text">O Processamento de Linguagem Natural fornece os fundamentos matemáticos: tokenização, semântica vetorial e métricas de similaridade. Sem isso, os modelos não conseguem manipular texto.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">2. O Motor: LLMs e Transformers</div>
          <p class="card-text">Os Large Language Models são a manifestação máxima do PLN moderno em escala colossal, codificando gramática, bom senso, analogias e habilidades de raciocínio lógico.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">3. O Resultado: IA Generativa</div>
          <p class="card-text">A IA Generativa é o paradigma de aplicação final, onde o motor Transformer sintetiza novos artefatos (textos, códigos, imagens) a partir de instruções humanas.</p>
        </div>
      </div>
      <div class="callout-banner" style="margin-top: 20px;">
        <strong>Visão Sistêmica:</strong> O PLN é a linguagem matemática; o LLM é o processador cognitivo; e a IA Generativa é o meio criativo pelo qual humanos e máquinas colaboram.
      </div>
    `
  },
  {
    id: '9.3',
    type: 'content',
    sectionBadge: '09 · CONCLUSÃO',
    tag: 'FRAMEWORK DE PROJETOS',
    title: 'O Tridente de Potencialização: RAG, Fine-Tuning e Agentes',
    subtitle: 'Como orquestrar as três grandes técnicas para criar soluções corporativas de ponta.',
    bodyHtml: `
      <div class="grid-3col">
        <div class="card-glass">
          <div class="card-title">RAG: Conhecimento Factual</div>
          <p class="card-text">Conecta o sistema à verdade factual atualizada dos bancos de dados e documentos da empresa, garantindo confiabilidade absoluta e rastreabilidade com fontes citadas.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Fine-Tuning: Comportamento</div>
          <p class="card-text">Especializa o modelo em tarefas de altíssima precisão de formato, estilo e vocabulário técnico estrito, reduzindo o tamanho do prompt e latência de inferência.</p>
        </div>
        <div class="card-glass">
          <div class="card-title">Agentes: Execução e Ação</div>
          <p class="card-text">Dota o sistema de autonomia para chamar APIs, tomar decisões condicionais, consultar o RAG quando tiver dúvidas e resolver problemas ponta a ponta sem supervisão constante.</p>
        </div>
      </div>
      <div class="callout-banner" style="margin-top: 24px;">
        <strong>A Equação do Sucesso em Projetos Reais:</strong><br>
        <span style="color: #00f0ff; font-family: 'JetBrains Mono'; font-size: 1.05rem; font-weight: 700;">
          Aplicação de Alto Impacto = (Modelo Base Eficiente) + (RAG para Fatos) + (PEFT/LoRA para Estilo) + (Agente para Automação de Ações)
        </span>
      </div>
    `
  }
];

// Compatibilidade
if (typeof window !== 'undefined') {
  window.SLIDES_DATA = SLIDES_DATA;
}
export { SLIDES_DATA };
