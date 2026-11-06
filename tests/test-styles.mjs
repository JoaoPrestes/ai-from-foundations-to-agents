import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('css/styles.css defines required color tokens and key classes', () => {
  const css = fs.readFileSync('css/styles.css', 'utf8');
  assert.match(css, /--bg-dark:\s*#0[5a]0[8f]/i);
  assert.match(css, /--accent-blue:/i);
  assert.match(css, /--accent-cyan:/i);
  assert.match(css, /\.card-glass/);
  assert.match(css, /\.slide-transition/);
  assert.match(css, /\.overview-modal/);
});
