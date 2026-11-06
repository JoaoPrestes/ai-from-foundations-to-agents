import test from 'node:test';
import assert from 'node:assert';
import { DIAGRAMS } from '../js/diagrams.js';

test('DIAGRAMS contains all 10 required technical visual generators', () => {
  const expectedGenerators = [
    'renderAiComparison',
    'renderNlpPipeline',
    'renderEmbeddingsVectorSpace',
    'renderTransformerArchitecture',
    'renderTrainingGradientLoop',
    'renderLoraQloraMatrices',
    'renderRagPipeline',
    'renderLangchainPipeline',
    'renderAgentArchitecture',
    'renderLangGraphState'
  ];

  for (const name of expectedGenerators) {
    assert.strictEqual(typeof DIAGRAMS[name], 'function', `${name} must be a function`);
    const svg = DIAGRAMS[name]();
    assert.ok(svg.includes('<svg') && svg.includes('</svg>'), `${name} must return valid SVG markup`);
  }
});
