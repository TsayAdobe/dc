/**
 * @jest-environment jsdom
 */
import path from 'path';
import fs from 'fs';
import init from '../../../acrobat/blocks/dc-converter-widget/dc-converter-widget';

describe('dc-converter-widget', () => {
  beforeEach(async () => {
    document.body.innerHTML = fs.readFileSync(
      path.resolve(__dirname, './mocks/body.html'),
      'utf8'
    );
    window.performance.mark = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loads widget from prod env', async () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        text: () =>
          Promise.resolve(fs.readFileSync(path.resolve(__dirname, './mocks/widget.html'))),
      })
    );    
    delete window.location;
    window.location = new URL('https://www.adobe.com');
    const block = document.querySelector('.dc-converter-widget');
    const widget = await init(block);
  });

  it('loads widget failed from prod env', async () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        status: 404
      })
    );    
    delete window.location;
    window.location = new URL('https://www.adobe.com');
    const block = document.querySelector('.dc-converter-widget');
    const widget = await init(block);
  });  
});
