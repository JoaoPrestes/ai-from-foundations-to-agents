import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import { SLIDES_DATA } from '../js/slides-data.js';
import { DIAGRAMS } from '../js/diagrams.js';
import { SlideEngine } from '../js/engine.js';

test('Full presentation integrity and diagram linkages', () => {
  assert.strictEqual(SLIDES_DATA.length, 62);

  // Verificar que todos os slides que exigem diagramas têm geradores associados
  const slidesWithDiagrams = SLIDES_DATA.filter(s => s.diagramKey);
  assert.ok(slidesWithDiagrams.length >= 10);
  for (const slide of slidesWithDiagrams) {
    assert.strictEqual(typeof DIAGRAMS[slide.diagramKey], 'function', `Diagram generator ${slide.diagramKey} must exist`);
    const svg = DIAGRAMS[slide.diagramKey]();
    assert.ok(svg.length > 50, `SVG for ${slide.diagramKey} should be populated`);
  }

  // Verificar inicialização do motor
  const engine = new SlideEngine({ slides: SLIDES_DATA, diagrams: DIAGRAMS, autoInit: false });
  assert.strictEqual(engine.slides.length, 62);

  // Testar renderização de cada tipo de slide (cover, transition, content)
  for (let i = 0; i < SLIDES_DATA.length; i++) {
    engine.goTo(i);
    assert.strictEqual(engine.currentIndex, i);
  }
});

test('Roteiro topics coverage completeness check', () => {
  // 1. Introdução à IA
  assert.ok(SLIDES_DATA.find(s => s.id === '1.1'));
  assert.ok(SLIDES_DATA.find(s => s.id === '1.2'));
  assert.ok(SLIDES_DATA.find(s => s.id === '1.3'));

  // 2. IA Generativa
  assert.ok(SLIDES_DATA.find(s => s.id === '2.1'));
  assert.ok(SLIDES_DATA.find(s => s.id === '2.3'));
  assert.ok(SLIDES_DATA.find(s => s.id === '2.4'));

  // 3. PLN
  assert.ok(SLIDES_DATA.find(s => s.id === '3.1'));
  assert.ok(SLIDES_DATA.find(s => s.id === '3.2'));
  assert.ok(SLIDES_DATA.find(s => s.id === '3.3'));
  assert.ok(SLIDES_DATA.find(s => s.id === '3.4'));

  // 4. LLMs
  assert.ok(SLIDES_DATA.find(s => s.id === '4.1'));
  assert.ok(SLIDES_DATA.find(s => s.id === '4.2'));
  assert.ok(SLIDES_DATA.find(s => s.id === '4.3'));
  assert.ok(SLIDES_DATA.find(s => s.id === '4.4'));
  assert.ok(SLIDES_DATA.find(s => s.id === '4.5'));
  assert.ok(SLIDES_DATA.find(s => s.id === '4.6'));
  assert.ok(SLIDES_DATA.find(s => s.id === '4.7'));

  // 5. Treinamento e Adaptação
  assert.ok(SLIDES_DATA.find(s => s.id === '5.1'));
  assert.ok(SLIDES_DATA.find(s => s.id === '5.2'));
  assert.ok(SLIDES_DATA.find(s => s.id === '5.3'));
  assert.ok(SLIDES_DATA.find(s => s.id === '5.4'));
  assert.ok(SLIDES_DATA.find(s => s.id === '5.5'));
  assert.ok(SLIDES_DATA.find(s => s.id === '5.6'));
  assert.ok(SLIDES_DATA.find(s => s.id === '5.7'));
  assert.ok(SLIDES_DATA.find(s => s.id === '5.8'));

  // 6. RAG
  assert.ok(SLIDES_DATA.find(s => s.id === '6.1'));
  assert.ok(SLIDES_DATA.find(s => s.id === '6.2'));
  assert.ok(SLIDES_DATA.find(s => s.id === '6.3'));
  assert.ok(SLIDES_DATA.find(s => s.id === '6.4'));
  assert.ok(SLIDES_DATA.find(s => s.id === '6.5'));
  assert.ok(SLIDES_DATA.find(s => s.id === '6.6'));
  assert.ok(SLIDES_DATA.find(s => s.id === '6.7'));
  assert.ok(SLIDES_DATA.find(s => s.id === '6.8'));

  // 7. Frameworks
  assert.ok(SLIDES_DATA.find(s => s.id === '7.1'));
  assert.ok(SLIDES_DATA.find(s => s.id === '7.2'));
  assert.ok(SLIDES_DATA.find(s => s.id === '7.3'));
  assert.ok(SLIDES_DATA.find(s => s.id === '7.4'));
  assert.ok(SLIDES_DATA.find(s => s.id === '7.5'));
  assert.ok(SLIDES_DATA.find(s => s.id === '7.6'));

  // 8. Agentes
  assert.ok(SLIDES_DATA.find(s => s.id === '8.1'));
  assert.ok(SLIDES_DATA.find(s => s.id === '8.2'));
  assert.ok(SLIDES_DATA.find(s => s.id === '8.3'));
  assert.ok(SLIDES_DATA.find(s => s.id === '8.4'));
  assert.ok(SLIDES_DATA.find(s => s.id === '8.5'));
  assert.ok(SLIDES_DATA.find(s => s.id === '8.6'));
  assert.ok(SLIDES_DATA.find(s => s.id === '8.7'));
  assert.ok(SLIDES_DATA.find(s => s.id === '8.8'));
  assert.ok(SLIDES_DATA.find(s => s.id === '8.9'));
  assert.ok(SLIDES_DATA.find(s => s.id === '9.0'));

  // 9. Conclusão (mínimo 3 slides)
  assert.ok(SLIDES_DATA.find(s => s.id === '9.1'));
  assert.ok(SLIDES_DATA.find(s => s.id === '9.2'));
  assert.ok(SLIDES_DATA.find(s => s.id === '9.3'));
});

test('index.html build artifact is synchronized with full slide dataset', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  assert.match(html, /id:\s*['"]9\.3['"]/);
  assert.match(html, /O Tridente de Potencialização/);
  assert.match(html, /62 Slides/);
});


