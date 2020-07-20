console.clear();

const body = document.body;
const childOfBody = document.querySelectorAll('body > *:not(header)');
const navC = document.querySelector('.nav-C');
const nav = document.querySelector('nav');
const fCT_navB = document.querySelector('#focusChgTrg-navBefore');
const fCT_navA = document.querySelector('#focusChgTrg-navAfter');
const navOpenBtn = document.querySelector('#navOpenBtn');
const navCloseBtn = document.querySelector('#navCloseBtn');
const navMask = document.querySelector('.nav-mask');
const navLastFocusTgt = document.querySelector('#navLastFocusTgt');

nav.addEventListener('click', (e) => {e.stopPropagation();});

function navOpen() {
  body.style.overflow = "hidden";
  for(let i = 0; i < childOfBody.length; i++) {
    childOfBody[i].setAttribute("aria-hidden", "true");
  }
  fCT_navB.setAttribute("tabindex", "0");
  fCT_navA.setAttribute("tabindex", "0");
  navC.classList.remove("nav-C");
  navMask.classList.add("nav-mask-appear");
  nav.classList.add("nav-open");
  navCloseBtn.focus();

  window.addEventListener('keydown', (e) => {
    if(e.keyCode === 27) {navClose();}
  });
}

function navClose() {
  body.removeAttribute('style');
  for(let i = 0; i < childOfBody.length; i++) {
    childOfBody[i].setAttribute("aria-hidden", "false");
  }
  fCT_navB.setAttribute("tabindex", "-1");
  fCT_navA.setAttribute("tabindex", "-1");
  navC.classList.add("nav-C");
  navMask.classList.remove("nav-mask-appear");
  nav.classList.remove("nav-open");
  navOpenBtn.focus();
}

navOpenBtn.addEventListener('click', navOpen);
navCloseBtn.addEventListener('click', navClose);
navMask.addEventListener('click', navClose);
fCT_navB.addEventListener('focus', () => {navLastFocusTgt.focus();})
fCT_navA.addEventListener('focus', () => {navCloseBtn.focus();})
