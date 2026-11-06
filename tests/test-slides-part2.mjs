import test from 'node:test';
import assert from 'node:assert';
import { SLIDES_DATA } from '../js/slides-data.js';

test('SLIDES_DATA contains slides 15 to 31 covering Blocks 4 and 5', () => {
  assert.ok(SLIDES_DATA.length >= 32);
  // Transição 04
  assert.ok(SLIDES_DATA.find(s => s.type === 'transition' && s.sectionNumber === '04'));
  // Transformer
  const transformerSlide = SLIDES_DATA.find(s => s.id === '4.3');
  assert.ok(transformerSlide);
  assert.strictEqual(transformerSlide.diagramKey, 'renderTransformerArchitecture');
  // Transição 05
  assert.ok(SLIDES_DATA.find(s => s.type === 'transition' && s.sectionNumber === '05'));
  // Gradientes
  const gradSlide = SLIDES_DATA.find(s => s.id === '5.3');
  assert.ok(gradSlide);
  assert.strictEqual(gradSlide.diagramKey, 'renderTrainingGradientLoop');
  // LoRA / QLoRA
  const loraSlide = SLIDES_DATA.find(s => s.id === '5.4');
  assert.ok(loraSlide);
  assert.strictEqual(loraSlide.diagramKey, 'renderLoraQloraMatrices');
  // Quantização
  assert.ok(SLIDES_DATA.find(s => s.id === '5.5'));
  // Prediction vs Classification
  assert.ok(SLIDES_DATA.find(s => s.id === '5.8'));
});
