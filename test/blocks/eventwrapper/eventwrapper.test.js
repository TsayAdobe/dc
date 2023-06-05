import * as sinon from 'sinon';
import { expect } from '@esm-bundle/chai';

import { readFile } from '@web/test-runner-commands';
import Sinon from 'sinon';

document.head.innerHTML = await readFile({ path: './mocks/head.html' });
document.body.innerHTML = await readFile({ path: './mocks/body.html' });
const { default: init } = await import(
  '../../../acrobat/blocks/eventwrapper/eventwrapper'
);

describe('eventwrapper block', () => {
  before(() => {
    window.bowser = {
      getParser: () => ({
        getBrowserName: () => 'Chrome',
        parsedResult: {
          platform: {
            type: 'desktop',
          },
        },
      }),
    };
    window.dc_hosted = {
      events: [],
      listeners: [],
      addEventListener: function (fn) {
        window.dc_hosted.listeners.push(fn);
        window.dc_hosted.events.forEach(function (e) {
          try {
            fn(e.event, e.data);
          } catch (ex) {
            console.error('Error in addEventListener: ', ex, ex.stack);
          }
        });
      },
      dispatchEvent: function (event, data) {
        window.dc_hosted.events.push({ event: event, data: data });
        window.dc_hosted.listeners.forEach(function (fn) {
          try {
            fn(event, data);
          } catch (e) {
            console.error('Error in dispatchEvent: ', e, e.stack);
          }
        });
      },
    };
    const blocks = document.body.querySelectorAll('.eventwrapper');
    blocks.forEach((x) => init(x));
  });

  it('handles Bowser:Ready', async function () {
    this.timeout(5000);
    window.dispatchEvent(new CustomEvent('Bowser:Ready'));
  });

  it('handles DC_Hosted:Ready', async function () {
    this.timeout(5000);
    const blocks = document.body.querySelectorAll('.eventwrapper');
    window.dispatchEvent(new CustomEvent('DC_Hosted:Ready'));
    expect(window.dc_hosted.listeners).to.have.lengthOf(blocks.length);
  });

  it('inits the eventwrapper', async function () {
    const block = document.body.querySelector('.eventwrapper');
    expect(block.dataset.eventName).to.be.equal('onload');
  });

  it('handles file-upload-start', async function () {
    window.dc_hosted.dispatchEvent('file-upload-start', {});
  });

  it('handles processing-start', async function () {
    window.dc_hosted.dispatchEvent('processing-start', {});
  });

  it('handles file-upload-complete', async function () {
    window.dc_hosted.dispatchEvent('file-upload-complete', {});
  });

  it('handles processing-cancelled', async function () {
    window.dc_hosted.dispatchEvent('processing-cancelled', {});
  });

  it('handles processing-complete', async function () {
    window.dc_hosted.dispatchEvent('processing-complete', {});
  });

  it('handles download-start', async function () {
    window.dc_hosted.dispatchEvent('download-start', {});
  });

  it('handles conversion-complete', async function () {
    window.dc_hosted.dispatchEvent('conversion-complete', {});
  });

  it('handles preview-generating', async function () {
    window.dc_hosted.dispatchEvent('preview-generating', {});
  });

  it('handles dropzone-displayed', async function () {
    window.dc_hosted.dispatchEvent('dropzone-displayed', {});
  });

  it('handles preview-displayed', async function () {
    window.dc_hosted.dispatchEvent('preview-displayed', {});
  });

  it('handles try-another-file-start', async function () {
    window.dc_hosted.dispatchEvent('try-another-file-start', {});
  });
});
