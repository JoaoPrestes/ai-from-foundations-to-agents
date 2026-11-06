import test from 'node:test';
import assert from 'node:assert';
import { SLIDES_DATA } from '../js/slides-data.js';

test('SLIDES_DATA contains all 65 slides through Block 9', () => {
  assert.strictEqual(SLIDES_DATA.length, 65);
  // RAG ponta a ponta
  const ragSlide = SLIDES_DATA.find(s => s.id === '6.3');
  assert.ok(ragSlide);
  assert.strictEqual(ragSlide.diagramKey, 'renderRagPipeline');
  // Similaridade de Cosseno
  assert.ok(SLIDES_DATA.find(s => s.id === '6.6'));
  // LangChain
  const langchainSlide = SLIDES_DATA.find(s => s.id === '7.1');
  assert.ok(langchainSlide);
  assert.strictEqual(langchainSlide.diagramKey, 'renderLangchainPipeline');
  // Agente Arquitetura
  const agentSlide = SLIDES_DATA.find(s => s.id === '8.3');
  assert.ok(agentSlide);
  assert.strictEqual(agentSlide.diagramKey, 'renderAgentArchitecture');
  // Multi-Agentes e LangGraph
  assert.ok(SLIDES_DATA.find(s => s.id === '8.9'));
  const langgraphSlide = SLIDES_DATA.find(s => s.id === '9.0');
  assert.ok(langgraphSlide);
  assert.strictEqual(langgraphSlide.diagramKey, 'renderLangGraphState');
  // Segurança e Governança
  assert.ok(SLIDES_DATA.find(s => s.id === '8.10'));
  // Conclusão (mínimo 3 slides)
  assert.ok(SLIDES_DATA.find(s => s.id === '9.1'));
  assert.ok(SLIDES_DATA.find(s => s.id === '9.2'));
  assert.ok(SLIDES_DATA.find(s => s.id === '9.3'));
});
