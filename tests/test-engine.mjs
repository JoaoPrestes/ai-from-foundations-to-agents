import test from 'node:test';
import assert from 'node:assert';
import { SlideEngine } from '../js/engine.js';

test('SlideEngine handles navigation and bounds correctly', () => {
  const dummySlides = [
    { title: 'Slide 1', sectionBadge: '01' },
    { title: 'Slide 2', sectionBadge: '01' },
    { title: 'Slide 3', sectionBadge: '02' }
  ];
  const engine = new SlideEngine({ slides: dummySlides, autoInit: false });

  assert.strictEqual(engine.currentIndex, 0);
  engine.next();
  assert.strictEqual(engine.currentIndex, 1);
  engine.next();
  assert.strictEqual(engine.currentIndex, 2);
  engine.next(); // Limite superior
  assert.strictEqual(engine.currentIndex, 2);

  engine.prev();
  assert.strictEqual(engine.currentIndex, 1);
  engine.prev();
  assert.strictEqual(engine.currentIndex, 0);
  engine.prev(); // Limite inferior
  assert.strictEqual(engine.currentIndex, 0);

  engine.goTo(2);
  assert.strictEqual(engine.currentIndex, 2);
  engine.goTo(99); // Índice fora dos limites não altera
  assert.strictEqual(engine.currentIndex, 2);
  engine.goTo(-5);
  assert.strictEqual(engine.currentIndex, 2);
});

test('SlideEngine computes progress percentage accurately', () => {
  const dummySlides = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const engine = new SlideEngine({ slides: dummySlides, autoInit: false });

  assert.strictEqual(engine.getProgressPercent(), 20);
  engine.goTo(2); // 3rd slide (index 2) -> 3/5 = 60%
  assert.strictEqual(engine.getProgressPercent(), 60);
  engine.goTo(4); // 5th slide (index 4) -> 5/5 = 100%
  assert.strictEqual(engine.getProgressPercent(), 100);
});
