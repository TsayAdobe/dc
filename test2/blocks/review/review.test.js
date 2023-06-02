import { readFile } from '@web/test-runner-commands';
import { expect } from '@esm-bundle/chai';
import * as sinon from 'sinon';
import { waitForElement } from '../../helpers/waitfor.js';
import init from 'https://www.adobe.com/libs/blocks/review/review.js';
const { default: initWidget } = await import(
  '../../../acrobat/blocks/dc-converter-widget/dc-converter-widget'
);

describe('Review Blocks', () => {
  let clock;

  before(async () => {
    document.body.innerHTML = await readFile({ path: './mocks/body.html' });
    window.localStorage.setItem('/data/review', JSON.stringify({ rating: 5 }));
    window.s_adobe = { visitor: { getMarketingCloudVisitorID: () => 'abcd' } };
    window.adobeIMS = {
      isSignedInUser: () => false,
    };
    window._satellite = {
      track: sinon.stub(),
    };
    window.bowser = {
      getParser: () => ({
        getBrowserName: () => 'Chrome',
      }),
    };
  });

  it('could be initialized', async () => {
    let div = document.querySelector('.dc-converter-widget');
    await initWidget(div);
    div = document.querySelector('.review');
    await init(div);
    const review = await waitForElement('.hlx-ReviewWrapper');
    expect(review).to.exist;
    clock = sinon.useFakeTimers();
    window.dispatchEvent(new CustomEvent('IMS:Ready'));
    clock.tick(1100);
    debugger;
    expect(window._satellite.track.getCall(0).args[0]).to.eq('event');
    expect(window._satellite.track.getCall(0).args[1]).to.eql({
      documentUnloading: true,
      data: {
        eventType: 'web.webinteraction.linkClicks',
        web: {
          webInteraction: {
            linkClicks: {
              value: 1,
            },
            type: 'other',
            name: 'productRating',
          },
        },
        _adobe_corpnew: {
          digitalData: {
            primaryEvent: {
              eventInfo: {
                interaction: {
                  click: 'productRating',
                  iclick: 'true',
                },
                eventName: 'productRating',
              },
            },
          },
        },
      },
    });
  });

  after(() => {
    clock.restore();
    window._satellite.track.resetHistory();
  });
});
