/**
 * @jest-environment jsdom
 */

describe('Test scripts', () => {
  beforeAll(() => {
    jest.mock('https://www.adobe.com/libs/utils/utils.js', () => {
      return {
        loadArea: jest.fn(),
        loadDelayed: jest.fn(),
        loadScript: jest.fn(),
        loadLana: jest.fn(),
        getLocale: jest.fn().mockImplementation(() => ({ ietf: 'en-US' })),
        setConfig: jest.fn(),
        getMetadata: jest.fn().mockReturnValue("123"),
      };
    });
    jest.mock(
      'https://main--milo--adobecom.hlx.page/libs/utils/utils.js',
      () => {
        return {
          loadArea: jest.fn(),
          loadDelayed: jest.fn(),
          loadScript: jest.fn(),
          loadLana: jest.fn(),
          getLocale: jest.fn().mockImplementation(() => ({ ietf: 'en-US' })),
          setConfig: jest.fn(),
          getMetadata: jest.fn().mockReturnValue("123"),
        };
      }
    );
    jest.mock('/libs/utils/utils.js', () => {
      return {
        loadArea: jest.fn(),
        loadDelayed: jest.fn(),
        loadScript: jest.fn(),
        loadLana: jest.fn(),
        getLocale: jest.fn().mockImplementation(() => ({ ietf: 'en-US' })),
        setConfig: jest.fn(),
        getMetadata: jest.fn().mockReturnValue("123"),
      };
    });
    window.adobeIMS = {
      initialized: true,
    };
    window.dc_hosted = true;
    window.bowser = true;
    jest.useFakeTimers();
  });

  beforeEach(() => {
    jest.resetModules();
    document.head.innerHTML =
      '<meta name="promotion" content="abc"/><meta name="dc-widget-version" content="123"/>';
    document.body.innerHTML = '<main><div class="dc-converter-widget"/></main>';
  });

  describe('Test prod', () => {
    it('uses prod milolibs', async () => {
      delete window.location;
      window.location = new URL(
        'https://www.adobe.com/acrobate/online/ppt-to-pdf'
      );
      await require('../../acrobat/scripts/scripts');
      jest.advanceTimersByTime(2000);
      expect(window.bowser).toBe(true);
    });
  });

  describe('Test stage', () => {
    it('uses stage milolibs', async () => {
      delete window.location;
      window.location = new URL(
        'https://www.stage.adobe.com/acrobate/online/ppt-to-pdf'
      );
      await require('../../acrobat/scripts/scripts');
      jest.advanceTimersByTime(2000);
      expect(window.bowser).toBe(true);      
    });
  });

  describe('Test local', () => {
    it('uses local milolib', async () => {
      delete window.location;
      window.location = new URL(
        'https://www.stage.adobe.com/acrobate/online/ppt-to-pdf?milolibs=local'
      );
      await require('../../acrobat/scripts/scripts');
      jest.advanceTimersByTime(2000);
      expect(window.bowser).toBe(true);      
    });
  });
});
