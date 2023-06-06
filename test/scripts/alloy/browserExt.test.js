import { expect } from '@esm-bundle/chai';
import * as sinon from 'sinon';

const { default: init } = await import('../../../acrobat/scripts/alloy/browserExt');

describe('Alloy browserExt', () => {
  before(() => {
    window._satellite = {
      track: sinon.stub(),
    };
  });

  it('initiates Alloy browerExt', () => {
    init('modalClosed', 'Chrome');
  });
});
