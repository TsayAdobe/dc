import * as sinon from 'sinon';
import { expect } from '@esm-bundle/chai';

import { readFile } from '@web/test-runner-commands';
import Sinon from 'sinon';

document.body.innerHTML = await readFile({ path: './mocks/body.html' });
const { default: init } = await import(
  '../../../acrobat/blocks/eventwrapper/eventwrapper'
);

describe('eventwrapper block', () => {
  before(() => {
    window.bowser = {
        getParser: () => ({
          getBrowserName: () => 'Chrome',
        }),
      };    
    window.dc_hosted = {
        addEventListener: sinon.stub() 
    }    
    const block = document.body.querySelector('.eventwrapper');
    init(block);
  });

  it('handles Bowser:Ready', async function () {
    this.timeout(5000); // default 2000ms
    window.dispatchEvent(new CustomEvent('Bowser:Ready'));
  });

  it('handles DC_Hosted:Ready', async function () {
    this.timeout(5000); // default 2000ms
    window.dispatchEvent(new CustomEvent('DC_Hosted:Ready'));
    expect(window.dc_hosted.addEventListener.calledOnce).to.be.true;
  });  
});
