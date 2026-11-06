import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('index.html contains all critical presentation containers', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  assert.match(html, /id=["']presentation-app["']/);
  assert.match(html, /id=["']slide-stage["']/);
  assert.match(html, /id=["']progress-bar["']/);
  assert.match(html, /id=["']slide-counter["']/);
  assert.match(html, /id=["']section-badge["']/);
  assert.match(html, /id=["']overview-modal["']/);
});
