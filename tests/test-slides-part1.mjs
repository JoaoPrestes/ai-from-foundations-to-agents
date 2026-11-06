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
  assert.strictEqual(tradGenSlide.diagramKey, 'renderAiComparison');
  // Transição 02 e Tokenização
  assert.ok(SLIDES_DATA.find(s => s.id === '3.3'));
  // Embeddings
  const embeddingsSlide = SLIDES_DATA.find(s => s.id === '3.4');
  assert.ok(embeddingsSlide);
  assert.strictEqual(embeddingsSlide.diagramKey, 'renderEmbeddingsVectorSpace');
});
