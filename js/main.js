//=======================//
//===// Loading DOM //===//
//=======================//

// - img for load status
const img = document.querySelector('img');

// - page transition
const transitionElement = document.querySelector('.transition');

// - hamburger
const hamburger = document.querySelector('.hamburger');
const navCloseArea = document.querySelector('.nav-close');
const nav = document.querySelector('.nav__list');

// - scrollUp
const scrollUp = document.querySelector('#scrollUp');
const rootElement = document.documentElement;

// - scrollTo
const scrollTo = document.querySelectorAll('#scrollTo');

// - clock
const clock = document.querySelector('.prop__clock');

// - img change on christmas
const logo = document.querySelector('.hero__img');
const backpack = document.querySelector('.prop__backpack');

// - images array
const newItems = ['backpack.gif', 'wrench.png'];
const newItemsDesc = ['Plecak podróżnika, w sam raz na długą wyprawę.', 'Budowanie mechanizmów będzie prostsze dzięki kluczowi do obracania.'];

const craftings = [
  'torch.gif',
  'chain.png',
  'chain_recycle.gif',
  'beacon.png',
  'crying_obsidian.png',
  'enchanting_table.png',
  'eye_of_ender.png',
  'ender_chest.png',
  'shield.gif',
  'rotten_flesh_drying.gif',
  'dispenser.gif',
  'horse_armor.gif',
  'slimeball.png',
];

const structures = [];

//=================================//
//===// Loading DOM variables //===//
//=================================//

// Defining variables array
const durationsArray = [];
const varArray = ['--transition-static'];

// Defining const for global variables source and quantity of variable array
const varGlobal = getComputedStyle(document.body);

// Inserting all time durations into durations array
for (let i = 0; i < varArray.length; i++) {
  durationsArray[i] = varGlobal.getPropertyValue(varArray[i]);
}

//================================//
//====// Variables formating //===//
//================================//

// Subtracting `s` letter from loaded string
for (let i = 0; i < varArray.length; i++) {
  durationsArray[i] = durationsArray[i].substring(0, durationsArray[i].length - 1);
}

// Setting own variable for timeout
const timeTransitionStatic = durationsArray[0] * 1000;

//====================//
//===// Scripts //===//
//===================//

//===// Page display after image load //===//

const imagesLoaded = window.addEventListener('load', () => {
  if (img.complete && img.naturalHeight !== 0) {
    setTimeout(() => {
      //===// Scroll to top //===//
      scrolling();

      //===// Page transition //===//
      transitionElement.classList.remove('transition--active');
    }, timeTransitionStatic);
  }
});

//===// Hamburger //===//

//===// Nav toggle on hamburger event //===//

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('nav__list--visibility');
  navCloseArea.classList.toggle('nav-close--visibility');
  rootElement.scrollTop / (rootElement.scrollHeight - rootElement.clientHeight) > 0.02 && !nav.classList.contains('nav__list--visibility')
    ? hamburger.classList.add('hamburger--visibility')
    : hamburger.classList.remove('hamburger--visibility');
});

const navClose = () => {
  hamburger.classList.remove('hamburger--active');
  if (rootElement.scrollTop / (rootElement.scrollHeight - rootElement.clientHeight) > 0.02) {
    hamburger.classList.add('hamburger--visibility');
  }
  nav.classList.remove('nav__list--visibility');
};

//===// Nav close on hamburger background event //===//

navCloseArea.addEventListener('click', () => {
  navClose();
});

//===// Nav close on hamburger escape key press //===//

document.addEventListener('keydown', (e) => {
  if (e.which === 27 && hamburger.classList.contains('hamburger--active')) {
    navClose();
  }
});

//===// Scroll //===//

//===// Scroll up button show && Hamburger background visibility //===//

document.addEventListener('scroll', () => {
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  rootElement.scrollTop / scrollTotal > 0.1 ? scrollUp.classList.add('scrollUp--active') : scrollUp.classList.remove('scrollUp--active');

  rootElement.scrollTop / scrollTotal > 0.02 && !hamburger.classList.contains('hamburger--active')
    ? hamburger.classList.add('hamburger--visibility')
    : hamburger.classList.remove('hamburger--visibility');
});

//===// Scroll to the top of page button //===//

const scrolling = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

//===// Scroll to top //===//

scrollUp.addEventListener('click', () => {
  scrolling();
});

//===// Scroll to section //===//

scrollTo.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const targetSection = document.getElementById(item.getAttribute('href'));

    targetSection != null ? (targetSection.scrollIntoView({ behavior: 'smooth' }), navClose()) : alert('No scroll target');
  });
});

//===// Time functions //===//

//===// Clock time //===//

clock.addEventListener('mouseover', () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  clock.title = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
});

//===// Change logo //===//

window.onload = () => {
  const date = new Date();
  const today = `${date.getDate()}.${date.getMonth() + 1}`;

  if (today === ('24.21' || '25.12' || '26.12')) {
    logo.src = '../img/logo_hat.png';
    backpack.src = '../img/props/backpack/red.png';
  }

  if (today === ('31.12' || '1.1')) {
    logo.src = '../img/logo_firework.png';
    backpack.src = '../img/props/backpack/rainbow.png';
  }
};

//===// Images insert //===//

const imgInsert = (array, box, desc) => {
  array.forEach((item, index) => {
    const div = document.createElement('div');
    const img = document.createElement('img');

    img.src = `../img/craftings/${item}`;
    img.title = item.charAt(0).toUpperCase() + item.substr(1, item.length - 5).replaceAll('_', ' ');
    div.append(img);

    if (desc) {
      const text = document.createElement('p');
      text.innerText = desc[index];
      text.classList.add('server__box-desc');
      div.append(text);
    }

    document.querySelector(box).appendChild(div);
  });
};

// New items
imgInsert(newItems, '.server__items-box', newItemsDesc);

// Changed craftings
imgInsert(craftings, '.server__craftings-box');

// New structures
imgInsert(structures, '.server__structures-box');
