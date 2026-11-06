# Design Spec — Apresentação Web Interativa: Inteligência Artificial (do Fundamento à Aplicação)

**Data:** 2026-11-05  
**Status:** Aprovado para Planejamento  
**Abordagem Selecionada:** Opção 2 — Standalone Web App (Vanilla JS Moderno, CSS3 Otimizado, SVGs Interativos, Zero Dependências Externas Obrigatórias, 100% Offline-capable).

---

## 1. Visão Geral e Objetivos

O objetivo deste projeto é construir uma aplicação web de apresentação técnica de altíssimo nível, didática, fluida e dinâmica, cobrindo os pilares modernos de Inteligência Artificial:
1. Fundamentos de IA
2. IA Generativa
3. Processamento de Linguagem Natural (PLN)
4. Large Language Models (LLMs)
5. Treinamento e Adaptação de Modelos (SFT, PEFT, LoRA/QLoRA, Quantização)
6. RAG (Retrieval-Augmented Generation)
7. Frameworks & Construção de Aplicações (LangChain, Prompts, Memory, APIs)
8. Agentes de Inteligência Artificial (Arquitetura, ReAct, Tools, Multi-Agentes, LangGraph)
9. Conclusão & Síntese Aplicada (Conexão holística, Tridente de Potencialização, Aplicações Reais)

A apresentação deve espelhar fielmente a identidade visual da referência fornecida (Gamma), com estética minimalista e tecnológica, fundo azul-marinho escuro, acentos em ciano e azul elétrico, tipografia limpa e diagramas técnicos altamente explicativos.

---

## 2. Identidade Visual e Estética (Tema Gamma)

- **Cores Principais:**
  - Background Base: `#050814` a `#0A1128` (gradiente radial sutil escuro).
  - Superfícies / Cards: `#0D1936` com transparência (`rgba(13, 25, 54, 0.7)`), `backdrop-filter: blur(12px)`.
  - Bordas de Destaque: `rgba(59, 130, 246, 0.3)` com efeito hover brilhante (`#38bdf8` / `#00f0ff`).
  - Azul Elétrico: `#2563EB`, `#3B82F6`.
  - Ciano / Neon Glow: `#00F0FF`, `#38BDF8`.
  - Tipografia: Texto principal em `#F8FAFC` (Slate 50), secundário em `#94A3B8` (Slate 400), badges em tom ciano translúcido.
- **Tipografia:**
  - Títulos: Fonte geométrica moderna sans-serif (`Outfit`, `Plus Jakarta Sans`, ou fallback nativo moderno `system-ui, -apple-system, sans-serif`).
  - Código / Conceitos Técnicos: `Fira Code`, `JetBrains Mono` ou monospace legível.
- **Estrutura de Layout dos Slides:**
  - **Slide de Capa:** Título monumental, subtítulo límpido, badge de categoria e elemento visual 3D/geométrico luminoso.
  - **Slides de Transição de Seção:** Número da seção gigante (`01`, `02`, `03`...), título impactante, subtítulo contextualizador e arte geométrica luminosa em SVG à direita (espelhando a referência Gamma).
  - **Slides de Conteúdo Didático:** Cabeçalho com tag da seção (ex: `04 · LARGE LANGUAGE MODELS`), título conceitual direto, grid de cartões informativos ou diagrama centralizado com steps explicativos (`01`, `02`, `03`, `04`).

---

## 3. Arquitetura Técnica e Desempenho

A aplicação é 100% autossuficiente e funciona abrindo o arquivo `index.html` em qualquer navegador:
- `index.html`: Container principal, layout responsivo em formato 16:9 cinematográfico com auto-escala (`transform: scale(...)` ou `viewBox` flexível para qualquer resolução).
- `css/styles.css`: Sistema de design completo, utilitários, animações de transição (`fade`, `slide`, `zoom`), estilo dos cards, badges, barras de controle e grid de visão geral.
- `js/slides-data.js`: Objeto estruturado com todos os 48 slides rigorosamente ordenados conforme o roteiro aprovado pelo usuário.
- `js/diagrams.js`: Biblioteca de SVGs vetoriais interativos e animados para cada diagrama solicitado.
- `js/engine.js`: Motor de apresentação (controles de teclado, barra de progresso, tela cheia, modal de miniaturas, navegação por toque, histórico hash `#slide-X`).

### Especificação dos Atalhos de Teclado
- `→` / `Espaço` / `PageDown`: Próximo slide.
- `←` / `Backspace` / `PageUp`: Slide anterior.
- `Home` / `End`: Primeiro / Último slide.
- `F`: Alternar modo tela cheia (Fullscreen).
- `O` / `Esc` / `G`: Abrir/fechar gaveta ou modal de Visão Geral (Grid de miniaturas de todos os slides).
- `?`: Exibir guia de atalhos.

---

## 4. Estrutura Rigorosa de Conteúdo dos Slides

A apresentação conterá exatamente a sequência acordada com o usuário:

1. **Slide 0: Capa** — *"Inteligência Artificial: do Fundamento à Aplicação"*
2. **Bloco 1: Introdução à IA**
   - Slide 1: *Transição 01 — Fundamentos de Inteligência Artificial*
   - Slide 2: *Slide 1.1 — O que é Inteligência Artificial?* (Conceito, dados $\rightarrow$ decisões, percepção de padrões)
   - Slide 3: *Slide 1.2 — IA Tradicional vs. IA Generativa* (Quadro Comparativo Visual Interativo: entradas, processos, saídas)
   - Slide 4: *Slide 1.3 — Principais Aplicações da IA Atualmente* (Visão geral de impacto na sociedade e indústria)
3. **Bloco 2: Inteligência Artificial Generativa**
   - Slide 5: *Transição 02 — Inteligência Artificial Generativa*
   - Slide 6: *Slide 2.1 — O que é IA Generativa?* (Padrões estatísticos, probabilidade condicional)
   - Slide 7: *Slide 2.2 — Como Funciona a Geração de Conteúdo?* (Pipeline: Instrução $\rightarrow$ Contexto $\rightarrow$ Padrões/Amostragem $\rightarrow$ Saída)
   - Slide 8: *Slide 2.3 — Tipos de Conteúdo Gerado* (Linguagem, Imagem, Áudio, Vídeo, Código, Multimodalidade)
   - Slide 9: *Slide 2.4 — Modelos Generativos e suas Aplicações no Mercado* (LLMs, Diffusion Models, VAEs, GANs)
4. **Bloco 3: Processamento de Linguagem Natural (PLN)**
   - Slide 10: *Transição 03 — Processamento de Linguagem Natural*
   - Slide 11: *Slide 3.1 — O que é PLN?* (Sinais processáveis, sintaxe vs semântica, desafios)
   - Slide 12: *Slide 3.2 — Sentiment Analysis* (Classificação de sentimento, polaridade, detecção de tom)
   - Slide 13: *Slide 3.3 — Tokenização* (Palavras, subwords, BPE, bytes, visualizador de tokens)
   - Slide 14: *Slide 3.4 — Embeddings e Representação Vetorial* (Espaço vetorial semântico, vetores densos, clustering)
5. **Bloco 4: Large Language Models (LLMs)**
   - Slide 15: *Transição 04 — Large Language Models*
   - Slide 16: *Slide 4.1 — O que são LLMs?* (Escala massiva, leis de escala / scaling laws, capacidades emergentes)
   - Slide 17: *Slide 4.2 — Como os LLMs Funcionam na Prática?* (Predição autorregressiva do próximo token, logits, softmax, temperatura)
   - Slide 18: *Slide 4.3 — Arquitetura Transformer* (Diagrama: Autoatenção, Processamento Paralelo, Semântica Contextual)
   - Slide 19: *Slide 4.4 — Tokens e Janela de Contexto* (Atenção quadrática $O(N^2)$, janelas de 4k a 2M tokens)
   - Slide 20: *Slide 4.5 — Parâmetros, Pesos e Biases* (Anatomia do modelo, o que são 7B, 70B, 405B de parâmetros)
   - Slide 21: *Slide 4.6 — Treinamento dos Modelos* (Fase de Pré-treinamento auto-supervisionado em trilhões de tokens)
   - Slide 22: *Slide 4.7 — Fine-Tuning e Aprendizado de Máquina* (Transição do conhecimento geral para o específico)
6. **Bloco 5: Treinamento e Adaptação de Modelos**
   - Slide 23: *Transição 05 — Treinamento e Adaptação de Modelos*
   - Slide 24: *Slide 5.1 — Transfer Learning e Transfer Rate* (Aproveitamento de representações prévias e taxa de transferência)
   - Slide 25: *Slide 5.2 — Supervised Fine-Tuning (SFT)* (Alinhamento por instrução, pares prompt-resposta)
   - Slide 26: *Slide 5.3 — Gradientes e Atualização de Pesos* (Diagrama: Forward $\rightarrow$ Loss $\rightarrow$ Backpropagation $\rightarrow$ Gradient Descent)
   - Slide 27: *Slide 5.4 — PEFT: LoRA e QLoRA* (Adaptação eficiente de parâmetros: matrizes de baixo rank $W_0 + B \times A$)
   - Slide 28: *Slide 5.5 — Quantização de Modelos* (FP32 $\rightarrow$ FP16 $\rightarrow$ INT8 $\rightarrow$ INT4 / NormalFloat 4)
   - Slide 29: *Slide 5.6 — Overfitting, Underfitting, Generalization e Epochs* (Curvas de loss de treino vs validação)
   - Slide 30: *Slide 5.7 — Avaliação de Modelos: ROUGE e Outras Métricas* (ROUGE-1, ROUGE-2, ROUGE-L, BLEU, Perplexidade, LLM-as-a-Judge)
   - Slide 31: *Slide 5.8 — Prediction vs. Classification* (Diferença entre prever sequência contínua vs rotular categorias discretas)
7. **Bloco 6: RAG (Retrieval-Augmented Generation)**
   - Slide 32: *Transição 06 — RAG (Retrieval-Augmented Generation)*
   - Slide 33: *Slide 6.1 — O que é RAG e Por que Utilizá-lo?* (Grounding, redução de alucinações, dados privados e dinâmicos)
   - Slide 34: *Slide 6.2 — Diferença entre RAG e Fine-Tuning* (Tabela comparativa estratégica: custo, latência, atualização, casos de uso)
   - Slide 35: *Slide 6.3 — Arquitetura RAG Ponta a Ponta* (Diagrama interativo: Ingestão $\rightarrow$ Chunking $\rightarrow$ Embeddings $\rightarrow$ Vector DB $\rightarrow$ Retrieval $\rightarrow$ Augmentation $\rightarrow$ LLM)
   - Slide 36: *Slide 6.4 — Embeddings e Bancos de Dados Vetoriais* (Pinecone, Chroma, Milvus, Qdrant, índices HNSW e IVFFlat)
   - Slide 37: *Slide 6.5 — Chunking e Estratégias de Recuperação* (Fixed-size, sentence-level, recursive, semantic chunking e overlap)
   - Slide 38: *Slide 6.6 — Métricas de Similaridade Vetorial* (Visualizador de Similaridade de Cosseno, Distância Euclidiana e Produto Escalar)
   - Slide 39: *Slide 6.7 — Técnicas Avançadas: MMR e Reranking* (Maximal Marginal Relevance para diversidade e Cross-Encoders para precisão)
   - Slide 40: *Slide 6.8 — Geração de Respostas com Contexto Recuperado* (Construção do prompt aumentado, citações de fontes e grounding)
8. **Bloco 7: Frameworks e Construção de Aplicações com IA**
   - Slide 41: *Transição 07 — Frameworks e Construção de Aplicações*
   - Slide 42: *Slide 7.1 — O que é LangChain?* (Framework modular, abstrações de modelos, cadeias e ecossistema)
   - Slide 43: *Slide 7.2 — Prompt Templates e Engenharia de Prompt* (Zero-shot, Few-shot, Chain-of-Thought, variáveis de template)
   - Slide 44: *Slide 7.3 — Memory e Gerenciamento de Contexto* (ConversationBuffer, ConversationSummary, VectorStoreMemory)
   - Slide 45: *Slide 7.4 — Loaders, Document Transformers e Web Scraping* (Ingestão de PDFs, websites, Notion, GitHub)
   - Slide 46: *Slide 7.5 — Integração com APIs de LLMs* (OpenAI, Anthropic, Google Gemini, Ollama / Open Source local)
   - Slide 47: *Slide 7.6 — Pipeline de Construção de Aplicações Modernas com IA* (Arquitetura em camadas: UI $\rightarrow$ Orquestrador $\rightarrow$ RAG/Cache $\rightarrow$ LLM)
9. **Bloco 8: Agentes de Inteligência Artificial**
   - Slide 48: *Transição 08 — Agentes de Inteligência Artificial*
   - Slide 49: *Slide 8.1 — O que são Agentes de IA?* (Autonomia, tomada de decisão deliberativa, objetivos de alto nível)
   - Slide 50: *Slide 8.2 — Chatbot Convencional vs. Agente Autônomo* (Quadro comparativo de passividade vs proatividade e ação)
   - Slide 51: *Slide 8.3 — Arquitetura Completa de um Agente de IA* (Diagrama: Percepção, Raciocínio, Memória e Execução)
   - Slide 52: *Slide 8.4 — Componentes Fundamentais: Sensores, Processadores e Atuadores* (Decomposição técnica dos módulos)
   - Slide 53: *Slide 8.5 — Ferramentas (Tools) e Function Calling* (Execução de código, consultas SQL, APIs externas, navegação web)
   - Slide 54: *Slide 8.6 — Ciclo de Execução de um Agente (ReAct)* (Thought $\rightarrow$ Action $\rightarrow$ Observation $\rightarrow$ Reflection)
   - Slide 55: *Slide 8.7 — LAMs (Large Action Models)* (Modelos treinados para interagir diretamente com UIs e automações)
   - Slide 56: *Slide 8.8 — Aplicações Reais de Agentes Autônomos* (Engenharia de software, atendimento resolutivo, finanças e pesquisa autônoma)
   - Slide 57: *Slide 8.9 — Sistemas Multi-Agentes* (Especialização de papéis, colaboração, debate, padrões hierárquicos e sequenciais)
   - Slide 58: *Slide 9.0 — LangGraph: Orquestração Baseada em Grafos de Estado* (Nós, arestas condicionais, ciclos, persistência e checkpoints)
10. **Bloco 9: Conclusão e Síntese Aplicada (3 Slides)**
    - Slide 59: *Transição 09 — Conclusão e Síntese*
    - Slide 60: *Slide 9.1 — Síntese dos Principais Conhecimentos Adquiridos* (A jornada evolutiva: do processamento estatístico de texto aos sistemas cognitivos autônomos)
    - Slide 61: *Slide 9.2 — A Matriz de Interconexão: Como GenAI, PLN e LLMs se Fundem* (Diagrama unificador demonstrando a simbiose entre as camadas conceituais)
    - Slide 62: *Slide 9.3 — O Tridente de Potencialização: RAG, Fine-Tuning e Agentes no Mundo Real* (Como combinar as 3 técnicas para construir aplicações de impacto na indústria)

---

## 5. Recursos Visuais e Diagramas Técnicos

Todos os diagramas serão construídos em SVG nativo responsivo, com design visual de ponta:
1. **IA Tradicional vs IA Generativa:** Comparação side-by-side com painéis luminosos.
2. **Pipeline de PLN:** Linha do tempo horizontal modularizada com steps nítidos.
3. **Embeddings & Espaço Vetorial:** Gráfico cartesiano ilustrando semântica vetorial e clusterização de palavras.
4. **Arquitetura Transformer:** Esquema elegante de camadas: Multi-Head Attention, Feed-Forward, Positional Encoding e conexões residuais.
5. **Ciclo de Treinamento e Gradientes:** Circuito fechado interativo de Forward Pass, Cálculo de Loss, Backprop e Otimização AdamW.
6. **Matrizes PEFT (LoRA / QLoRA):** Esquema visual demonstrando $W_0$ congelado em 4 bits somado à decomposição $B \times A$ de baixo rank.
7. **RAG End-to-End:** Fluxo completo em duas vias (offline ingestion vs online query pipeline) com indicação de Vector DB e Grounding.
8. **LangChain Chain / Pipeline:** Visualização de componentes desacoplados conectando dados a modelos.
9. **Ciclo Perceptivo-Motor do Agente & ReAct:** Loop visual de Percepção $\rightarrow$ Raciocínio (Thought) $\rightarrow$ Ação (Tool Call) $\rightarrow$ Observação $\rightarrow$ Saída.
10. **Grafo LangGraph:** Diagrama de nós e arestas condicionais ilustrando controle de fluxo com ciclos e checkpoints.

---

## 6. Verificação e Critérios de Aceite

1. **Roteiro e Tópicos:** Todos os tópicos e subtópicos solicitados estão integralmente cobertos, sem nenhuma omissão.
2. **Visual & Estilo:** Fundo azul escuro profundo, tipografia geométrica, contrastes perfeitos, cartões translúcidos e acentos luminosos cianos/azuis inspirados no Gamma.
3. **Navegação & Interatividade:** Teclas funcionais ($\leftarrow$, $\rightarrow$, Espaço, F para tela cheia, O para visão geral em grid), transições fluidas e rápidas.
4. **Desempenho & Portabilidade:** Zero dependências externas para rodar, carregamento instantâneo, 60fps em animações.

