import { expect } from '@esm-bundle/chai';
import * as sinon from 'sinon';

const { default: init } = await import('../../../acrobat/scripts/alloy/reviewFeedback');

describe('Alloy reviewFeedback', () => {
  before(() => {
    window._satellite = {
      track: sinon.stub(),
    };
  });

  it('initiates Alloy browerExt', () => {
    init('pdf-to-ppt', 2, 'test comment');
  });
});