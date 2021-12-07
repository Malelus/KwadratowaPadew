//=======================//
//===// Loading DOM //===//
//=======================//

// - img for load status
const img = document.querySelector('img');

// - page reload
const pageReload = document.querySelector('[data-reload]');

// - page transition
const transitionElement = document.querySelector('.transition');

// - hamburger
const hamburger = document.querySelector('.hamburger');
const navCloseArea = document.querySelector('.nav-close');
const nav = document.querySelector('.nav__list');

// - scrollUp
const scrollUp = document.querySelector('#scrollUp');

// - section detector
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav__link');

// - scrollTo
const scrollTo = document.querySelectorAll('#scrollTo');

// - clock
const clock = document.querySelector('.prop__clock');

// - img change
const logo = document.querySelector('.hero__img');
const backpack = document.querySelector('.prop__backpack');

// - DOM structure
const rootElement = document.documentElement;

// - DOM variables
const varGlobal = getComputedStyle(document.body);

//====================//
//===// Variables//===//
//====================//

// - hamburger
const scrollBrakeHamburger = 0.006;

// - scrollUp
const scrollBrakeScrollUp = 0.015;

// - content arrays
import { newItems, craftings, tutorials, rules } from './content.js';

// - DOM variables
let varArray = ['--transition-static'];

//======================//
//===// Functions //===//
//=====================//

//=// scroll to top //=//
const scrolling = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

//=// DOM variables format //=//
varArray.forEach((variable, index) => {
  let tempVar = varGlobal.getPropertyValue(variable);
  tempVar = tempVar.substring(1, tempVar.length - 1);
  varArray[index] = tempVar *= 1000;
});

//=// hamburger visibility //=//
const hamburgerVisibility = () => {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  rootElement.scrollTop / scrollTotal > scrollBrakeHamburger && !hamburger.classList.contains('hamburger--active')
    ? hamburger.classList.add('hamburger--visibility')
    : hamburger.classList.remove('hamburger--visibility');
};

//=// navigation menu close //=//
const navClose = () => {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  if (rootElement.scrollTop / scrollTotal > scrollBrakeHamburger) {
    hamburger.classList.add('hamburger--visibility');
  }

  nav.classList.remove('nav__list--visibility');
  hamburger.classList.remove('hamburger--active');
};

//=// Images insert //=//
const contentInsertImg = (array, container, dir) => {
  array.forEach((item) => {
    const box = document.createElement('div');
    box.classList.add('server__container__box');

    const img = document.createElement('img');
    img.src = `./img/content/${dir}/${item[1]}`;
    img.alt = img.title = item[0];
    img.classList.add('server__element');
    box.append(img);

    if (item[2]) {
      const desc = document.createElement('p');
      desc.innerText = item[2];
      desc.classList.add('server__element-desc');
      box.append(desc);
    }

    document.querySelector(`.server__container${container}`).appendChild(box);
  });
};

//=// Tutorials insert //=//
const contentInsertTut = (array, container) => {
  array.forEach((item) => {
    const box = document.createElement('div');
    box.classList.add('tutorials__container__box');

    const header = document.createElement('h3');
    header.classList.add('tutorials__element');
    header.innerText = item[0];
    box.append(header);

    const desc = document.createElement('p');
    desc.classList.add('tutorials__element-desc');
    desc.innerText = item[1];
    box.append(desc);

    if (item[2]) {
      item[2].forEach((noteItem) => {
        const note = document.createElement('code');
        note.classList.add('tutorials__element-note');
        note.innerHTML = noteItem;
        box.append(note);
      });
    }

    document.querySelector(container).appendChild(box);
  });
};

//=// Rules insert //=//
const contentInsertRules = (array, container) => {
  array.forEach((item, index) => {
    const box = document.createElement('div');
    box.classList.add('info__rules__box');

    const header = document.createElement('h3');
    header.classList.add('info__rules-element');
    header.innerText = `§${index + 1} ${item[0]}`;
    box.append(header);

    if (item[1]) {
      const list = document.createElement('ol');
      list.classList.add('info__rules-element-list');

      item[1].forEach((rule) => {
        const item = document.createElement('li');
        item.classList.add('info__rules-element-rule');
        item.innerText = rule;
        list.append(item);
      });

      box.append(list);
    }

    document.querySelector(container).appendChild(box);
  });
};

//====================//
//===// Scripts //===//
//===================//

//===// Transition delay for images load //===//
window.addEventListener('load', () => {
  if (img.complete && img.naturalHeight !== 0) {
    setTimeout(() => {
      scrolling();

      transitionElement.classList.remove('transition--active');
    }, varArray[0]);
  }
});

//===// Page reload //===//
pageReload.addEventListener('dblclick', () => {
  location.reload();
});

//===// Navigation menu toggle on hamburger click //===//
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('nav__list--visibility');

  nav.classList.contains('nav__list--visibility')
    ? navCloseArea.classList.add('nav-close--visibility')
    : navCloseArea.classList.remove('nav-close--visibility');

  hamburgerVisibility();
});

//===// Navigation menu close on outside click //===//
navCloseArea.addEventListener('click', () => {
  navClose();
});

//===// Navigation menu on escape press //==//
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && hamburger.classList.contains('hamburger--active')) {
    navClose();
  }
});

//===// Scroll up button show && Hamburger background visibility //===//
document.addEventListener('scroll', () => {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  rootElement.scrollTop / scrollTotal > scrollBrakeScrollUp
    ? scrollUp.classList.add('scrollUp--active')
    : scrollUp.classList.remove('scrollUp--active');

  hamburgerVisibility();
});

//===// Scroll to top on scroll up button press //===//
scrollUp.addEventListener('click', () => {
  scrolling();
});

//===// Highlighting the menu button related to its section //===//
window.addEventListener('scroll', () => {
  let current = '';

  const offset = rootElement.scrollTop + window.innerHeight;
  const height = rootElement.offsetHeight;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (offset >= height) {
      current = 'contact';
    } else if (scrollY >= sectionTop - sectionHeight / 30) {
      current = '';
      current = section.getAttribute('id');
    }
  });

  links.forEach((link) => {
    link.classList.remove('nav__link--active');
    if (link.classList.contains(`scrollTo-${current}`)) {
      link.classList.add('nav__link--active');
    }
  });
});

//===// Scroll to section //===//
scrollTo.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const targetSection = document.getElementById(item.getAttribute('href'));

    targetSection != null ? (targetSection.scrollIntoView({ behavior: 'smooth' }), navClose()) : alert('No scroll target');
  });
});

//===// Clock time //===//
clock.addEventListener('mouseover', () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  clock.title = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
});

//===// Change hero images //===//
window.onload = () => {
  const date = new Date();
  let today = `${date.getDate()}.${date.getMonth() + 1}`;

  if (today === '24.12' || today === '25.12' || today === '26.12') {
    logo.src = './img/hero_hat.png';
    backpack.src = './img/props/backpack/red.png';
  }

  if (today === '31.12' || today === '1.1') {
    logo.src = './img/hero_firework.png';
    backpack.src = './img/props/backpack/rainbow.png';
  }
};

//===// Content insert //===//

//=// New items //=//
contentInsertImg(newItems, '--items', 'newItems');

//=// Changed craftings //=//
contentInsertImg(craftings, '--craftings', 'craftings');

//=// Tutorials //=//
contentInsertTut(tutorials, '.tutorials__container');

//=// Rules //=//
contentInsertRules(rules, '.info__rules');

//===// Additonal //===//

document.getElementById('noDownload').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Wkrótce!');
});
