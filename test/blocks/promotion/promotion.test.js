import { readFile } from '@web/test-runner-commands';
import { expect } from '@esm-bundle/chai';
import * as sinon from 'sinon';
import { waitForElement, delay } from '../../helpers/waitfor.js';

let meta = document.createElement('meta');
meta.name = 'promotion';
meta.content = 'ccx-acrobat-links1';
document.getElementsByTagName('head')[0].appendChild(meta);
document.body.innerHTML = await readFile({ path: './mocks/body.html' });
await import('../../../acrobat/scripts/scripts');
const { default: init } = await import(
  '../../../acrobat/blocks/promotion/promotion'
);

describe.skip('promotion block', () => {
  before(async () => {
    const block = await waitForElement('.promotion');
    const fetchText = await readFile({ path: './mocks/fetch.html' });
    sinon.stub(window, 'fetch');
    var res = new window.Response(fetchText, {
      status: 200
    });
    window.fetch.returns(Promise.resolve(res));
    await init(block);
  });

  after(() => {
    window.fetch.restore();
  });

  it('shoud creates a promotion block', async () => {
    const block = await waitForElement('.promotion');
    expect(block.textContent).to.contain('Do more with Adobe Creative Cloud.');
  });
});
