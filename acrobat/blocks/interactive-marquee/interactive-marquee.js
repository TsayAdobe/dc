/*
 * Marquee - v6.0
 */

import { setLibs } from '../../scripts/utils.js';

const miloLibs = setLibs('/libs');
const { decorateButtons, getBlockSize, decorateBlockBg } = await import(`${miloLibs}/utils/decorate.js`);
const { createTag } = await import(`${miloLibs}/utils/utils.js`);

// [headingSize, bodySize, detailSize]
const blockTypeSizes = {
  marquee: {
    small: ['xl', 'm', 'm'],
    medium: ['xl', 'm', 'm'],
    large: ['xxl', 'xl', 'l'],
    xlarge: ['xxl', 'xl', 'l'],
  },
};

function decorateText(el, size) {
  const headings = el.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const heading = headings[headings.length - 1];
  const config = blockTypeSizes.marquee[size];
  const decorate = (headingEl, typeSize) => {
    headingEl.classList.add(`heading-${typeSize[0]}`);
    headingEl.nextElementSibling?.classList.add(`body-${typeSize[1]}`);
    const sib = headingEl.previousElementSibling;
    if (sib) {
      const className = sib.querySelector('img, .icon') ? 'icon-area' : `detail-${typeSize[2]}`;
      sib.classList.add(className);
      sib.previousElementSibling?.classList.add('icon-area');
    }
  };
  decorate(heading, config);
}

function decorateMultipleIconArea(iconArea) {
  iconArea.querySelectorAll(':scope > picture').forEach((picture) => {
    const src = picture.querySelector('img')?.getAttribute('src');
    const a = picture.nextElementSibling;
    if (src?.endsWith('.svg') || a?.tagName !== 'A') return;
    if (!a.querySelector('img')) {
      a.innerHTML = '';
      a.className = '';
      a.appendChild(picture);
    }
  });
  if (iconArea.childElementCount > 1) iconArea.classList.add('icon-area-multiple');
}

function extendButtonsClass(text) {
  const buttons = text?.querySelectorAll('.con-button');
  if (buttons?.length === 0) return;
  buttons?.forEach((button) => { button.classList.add('button-justified-mobile'); });
}

const decorateImage = (media) => {
  media.classList.add('image');

  const imageLink = media.querySelector('a');
  const picture = media.querySelector('picture');

  if (imageLink && picture && !imageLink.parentElement.classList.contains('modal-img-link')) {
    imageLink.textContent = '';
    imageLink.append(picture);
  }
};

function goToSlide(slide, tabs, deck) {
  const activeTab = tabs.querySelector('.active');
  const activeSlide = deck.querySelector('.active');
  activeTab?.classList.remove('active');
  activeSlide?.classList.remove('active');
  tabs.querySelector(`[data-index="${slide}"]`).classList.add('active');
  const deckSlide = deck.querySelector(`:nth-child(${slide + 1})`);
  deckSlide.classList.add('active');
}

function handleChangingSlides(tabs, deck) {
  [...tabs.querySelectorAll('li')].forEach((li) => {
    li.addEventListener('click', (event) => {
      const slide = parseInt(event.currentTarget.dataset.index, 10);
      goToSlide(slide, tabs, deck);
    });
  });
}

function getTitle(title) {
  const titleContainer = createTag('div', { class: 'slider-title-container' });
  const text = createTag('p', { class: 'slider-title heading-l' }, title.text);
  const icon = createTag('img', { src: `${title.icon}` });
  const iconContainer = createTag('div', { class: 'slider-arrow' });
  iconContainer.append(icon);
  titleContainer.append(iconContainer, text);
  return titleContainer;
}
function getTabs(slides) {
  const tabArray = [];
  const tabsContainer = createTag('ul', { class: 'slider-tabs', role: 'tablist' });
  for (let i = 0; i < slides.length; i += 1) {
    const li = createTag('li', {
      class: 'slider-tab',
      role: 'tab',
      tabindex: -1,
      'data-index': i,
      'aria-selected': false,
      'aria-labelledby': `Viewing ${slides[i].label}`,
    }, slides[i].icon);
    const tabLabel = createTag('p', { class: 'slider-label' }, slides[i].label);
    li.append(tabLabel);

    // Set inital active state
    if (i === 0) {
      li.classList.add('active');
      li.setAttribute('tabindex', 0);
    }
    tabArray.push(li);
  }
  tabsContainer.append(...tabArray);
  return tabsContainer;
}
function getSlides(slides) {
  const deck = createTag('div', { class: 'slider-deck' });
  for (let i = 0; i < slides.length; i += 1) {
    const slide = createTag('div', { class: 'slide' });
    if (typeof slides[i].video === 'object' ? slide.append(...slides[i].video) : slide.append(slides[i].video));
    deck.append(slide);
  }
  deck.firstChild.classList.add('active');
  return deck;
}

export default async function init(el) {
  const excDark = ['light', 'quiet'];
  if (!excDark.some((s) => el.classList.contains(s))) el.classList.add('dark');
  const children = el.querySelectorAll(':scope > div');
  const foreground = children[children.length - 1];
  if (children.length > 1) {
    children[0].classList.add('background');
    decorateBlockBg(el, children[0], { useHandleFocalpoint: true });
  }
  foreground.classList.add('foreground', 'container');

  if (el.classList.contains('video-switcher')) {
    const slides = []; // Initialize the slides array
    const background = children[0].classList.contains('background') ? children[0] : null;
    const title = {};
    for (const child of children) {
      if (child !== foreground && child !== background) {
        const info = child.querySelectorAll('div');
        if ((info[0]?.innerHTML === 'Title')) {
          title.text = info[1].innerHTML;
          title.icon = info[2].innerHTML;
        } else {
          const data = {
            icon: info[0],
            label: info[1].innerHTML,
            video: info[2].querySelectorAll('a'),
          };
          child.classList.add('slide');
          data.icon = child.querySelector('.icon');
          slides.push(data); // Add the child to the slides array
        }
        child.remove(); // Remove the child from the DOM
      }
    }
    if (slides.length > 0) {
      const videoSwitcher = createTag('div', { class: 'slider' });
      const text = getTitle(title);
      const tabs = getTabs(slides);
      const deck = getSlides(slides);
      if (text) videoSwitcher.append(text);
      videoSwitcher.append(deck, tabs);
      handleChangingSlides(tabs, deck);
      foreground.append(videoSwitcher);
    }
  }
  const headline = foreground.querySelector('h1, h2, h3, h4, h5, h6');
  const text = headline?.closest('div');
  text?.classList.add('text');
  const media = foreground.querySelector(':scope > div:not([class])');

  if (media) {
    media.classList.add('asset');
    if (!media.querySelector('video, a[href*=".mp4"]')) decorateImage(media);
  }

  const firstDivInForeground = foreground.querySelector(':scope > div');
  if (firstDivInForeground?.classList.contains('asset')) el.classList.add('row-reversed');

  const size = getBlockSize(el);
  decorateButtons(text, size === 'large' ? 'button-xl' : 'button-l');
  decorateText(text, size);
  const iconArea = text?.querySelector('.icon-area');
  iconArea.classList.add('heading-l');
  if (iconArea?.childElementCount > 1) decorateMultipleIconArea(iconArea);
  extendButtonsClass(text);
  if (el.classList.contains('split')) {
    if (foreground && media) {
      media.classList.add('bleed');
      foreground.insertAdjacentElement('beforebegin', media);
    }

    let mediaCreditInner;
    const txtContent = media?.lastChild?.textContent?.trim();
    if (txtContent) {
      mediaCreditInner = createTag('p', { class: 'body-s' }, txtContent);
    } else if (media?.lastElementChild?.tagName !== 'PICTURE') {
      mediaCreditInner = media?.lastElementChild;
    }

    if (mediaCreditInner) {
      const mediaCredit = createTag('div', { class: 'media-credit container' }, mediaCreditInner);
      el.appendChild(mediaCredit);
      el.classList.add('has-credit');
      media?.lastChild.remove();
    }
  }
}
