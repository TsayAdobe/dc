import { expect } from '@esm-bundle/chai';
import * as sinon from 'sinon';
import { waitForElement, delay } from '../helpers/waitfor.js';

document.head.innerHTML = '<meta name="promotion" content="abc"/><meta name="dc-widget-version" content="123"/>';
document.body.innerHTML =
  '<main><div class="promotion"/><div class="dc-converter-widget"/></main>';

const { scripts } = await import('../../acrobat/scripts/scripts');

describe('Test scripts.js', () => {
  let clock;

  before(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  it('triggers events', async function () {
    this.timeout(5000);
    window.adobeIMS = {
      initialized: true,
    };
    window.dc_hosted = true;
    window.bowser = true;
    window._satellite = {
      track: sinon.spy(),
    };
    clock.tick(2000);
    //sinon.spy(window, 'dispatchEvent');
    //await delay(1100);
    //const calls = window.dispatchEvent.getCalls();
    //console.log(calls.length);
    //console.log(calls[0]);
    //console.log(calls[1]);
    //console.log(calls[2]);
  });
});
