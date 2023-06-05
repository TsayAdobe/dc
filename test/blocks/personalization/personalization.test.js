import { readFile } from '@web/test-runner-commands';
import { expect } from '@esm-bundle/chai';
import * as sinon from 'sinon';
import { waitForElement, delay } from '../../helpers/waitfor.js';

let head = await readFile({ path: './mocks/head.html' });
let body = await readFile({ path: './mocks/body.html' });
await import('../../../acrobat/scripts/scripts');
const { default: init } = await import(
  '../../../acrobat/blocks/personalization/personalization'
);

describe('personalization block', () => {
  beforeEach(() => {
    document.head.innerHTML = head;
  });

  afterEach(() => {
    sinon.restore();
  });

  it('creates a personalization block', async () => {
    window.doccloudPersonalization = {
      download: {
        canDownload: true,
      },
      export_pdf: {
        can_process: true,
        has_processed: false,
        upload: {
          can_upload: true,
        },
      },
      isUpsellDisplayed: {
        export_pdf: false
      }
    };
    document.body.innerHTML = body;
    const block = await waitForElement('.personalization');
    await init(block);
    window.dispatchEvent(new CustomEvent('Personalization:Ready'));
    const defaultBlock = await waitForElement('.personalization div[data-tag="default"]');
    const secondConvBlock = await waitForElement('.personalization div[data-tag="2nd conversion"]');    
    expect(defaultBlock).to.be.exist;
    expect(secondConvBlock).to.be.exist;
  });
});
