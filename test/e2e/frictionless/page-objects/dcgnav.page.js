import { GnavPage } from "@amwp/platform-ui-lib-adobe/lib/common/page-objects/gnav.page";

export class DcGnavPage extends GnavPage {
  constructor(urlPath, options) {
    let locUrlPath = urlPath;
    // if locale is specified, add to the path
    if (global.config.profile.locale) {
      locUrlPath = locUrlPath.replace(/^\/*|\/*$/g, '');
      if (global.config.profile.locale === 'us') {
        locUrlPath = `/${locUrlPath}`;
      } else {
        locUrlPath = `/${global.config.profile.locale}/${locUrlPath}`;
      }
    }
    super(locUrlPath, options);
    // Classes start with "feds" are the new gnav. Classes start with "gnav" are the old one.
    // US uses the new gnav. Other locales use the old one.
    // Same in SubMenu()
    this.buildProps({
      buyNow: '.feds-cta-wrapper a, .gnav-cta a >> visible=true',
      fedsPopup: '.feds-popup, .gnav-navitem-menu.large-Variant, .gnav-navitem-menu.small-Variant >> visible=true',
      footerPromoHeading: '[data-path^="/dc-shared/fragments/footer-promos"] .heading-l',
      footerPromoBullets: '[data-path^="/dc-shared/fragments/footer-promos"] ul'
    });
  }

  SubMenu(menu) {
    let selector;
    if (typeof menu === 'number') {
      selector = `.feds-nav .feds-navItem:nth-child(${menu + 1}) button[aria-haspopup="true"], ` +
                 `.gnav-mainnav .gnav-navitem.has-menu:nth-child(${menu + 1}) a[aria-controls*="navmenu"]`;
    } else if (typeof menu === 'string') {
      selector = `.feds-navItem a[daa-ll*="${menuDaa}"][aria-haspopup="true"]`;
    }
  
    return this.native.locator(selector);
  }

  async openSubMenu(menu) {
    if (await this.SubMenu(menu).getAttribute('aria-expanded') === 'false') {
      await this.SubMenu(menu).click();
    }
  }

  async closeSubMenu(menu) {
    if (await this.SubMenu(menu).getAttribute('aria-expanded') === 'true') {
      await this.SubMenu(menu).click();
    }
  }

  async selectFedsPopupItem(menu) {
    const items = await this.fedsPopup.locator('a').all();
    if (typeof menu === 'number') {
      await items[menu < 0 ? items.length + menu : menu].click({position: {x: 5, y: 5}});
    } else if (typeof menu === 'string') {
      const selected = items.filter(x => x.textContent.trim() === menu);
      if (selected.length === 1) {
        await selected[0].click();
      }
    }
  }   
}
