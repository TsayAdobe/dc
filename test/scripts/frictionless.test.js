import { readFile } from '@web/test-runner-commands';
import { expect } from '@esm-bundle/chai';
import * as sinon from 'sinon';
import { waitForElement, delay } from '../helpers/waitfor.js';

document.body.innerHTML = '<div class="review">' + 
'<form class="hlx-Review">' + 
'<input class="tooltip"/><input class="tooltip"/><input class="tooltip"/><input class="tooltip"/><input class="tooltip"/>' + 
'</form>' +
'</div>';

const { default: init } = await import('../../acrobat/scripts/frictionless');

describe('frictionless script', () => {
  let clock;

  before(async () => {
    clock = sinon.useFakeTimers();
    window._satellite = {
      track: sinon.spy(),
    };
    await init('pdf-to-ppt');
  });

  after(() => {
    clock.restore();
  });

  it('initiates frictionless page', async () => {});

  it('handles modal:open', async () => {
    window.bowser = {
        getParser: () => ({
          getBrowserName: () => 'Chrome',
        }),
      };        
    clock.tick(1100);
  });

  it('handles modal:open', async () => {
    window.dispatchEvent(new CustomEvent('modal:open'));
    clock.tick(1100);
  });
});
