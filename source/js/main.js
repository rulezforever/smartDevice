// import 'vendors.js'
// import {IMask} from 'vendors.js'

(function () {

  const  callButton = document.querySelector('.main-nav__button');
  const modalClose = document.querySelector('.modal__close');
  const  modal = document.querySelector('.modal');
  const nameInput = document.getElementById('your_name');
  const overlay = document.querySelector('.page-body__overlay');
  const pageBody = document.querySelector('.page-body');


  var isStorageSupport = true;

  try {
    storage = localStorage.getItem('your_name');
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storage = localStorage.getItem('your_phone');
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storage = localStorage.getItem('your_question');
  } catch (err) {
    isStorageSupport = false;
  }

  callButton.addEventListener('click', function () {
    overlay.classList.add('page-body__overlay--view');
    modal.classList.add('modal--opened');
    nameInput.focus();
    if (modal.classList.contains('modal--opened')) {
      pageBody.style.overflow = "hidden";
    } else {
      pageBody.style.overflow = "auto";
    }
  });

  const modalCloseHandler =(evt) => {
    evt.preventDefault();
    overlay.classList.remove('page-body__overlay--view');
    modal.classList.remove('modal--opened');
    pageBody.style.overflow = "auto";
  }

  modalClose.addEventListener('click', modalCloseHandler);
  overlay.addEventListener('click', modalCloseHandler);

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains('modal--opened')) {
        evt.preventDefault();
        modal.classList.remove('modal--opened');
      }
    }
  });

//  ---------------slow scroll for links-----------------

const scroll = document.querySelector('.promo__scroll');
const promo = document.querySelector('.promo__button');

scroll.addEventListener('click', function (evt){
  evt.preventDefault();

  const benefits = scroll.getAttribute('href').substr(1);
  document.getElementById(benefits).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
});

promo.addEventListener('click', function (evt){
  evt.preventDefault();

  const form = promo.getAttribute('href').substr(1);
  document.getElementById(form).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
});

// ------------mobile menu---------------

const site = document.querySelector('.page-footer__site');
const office = document.querySelector('.page-footer__office');
const officeContainer = document.querySelector('.page-footer__office-container');
const siteContainer = document.querySelector('.page-footer__site-container');

site.classList.remove('page-footer__site--opened');
office.classList.remove('page-footer__office--opened');
site.classList.remove('page-footer__site--nojs');
office.classList.remove('page-footer__office--nojs');

siteContainer.addEventListener('click', function() {
  office.classList.remove('page-footer__office--opened');
  site.classList.toggle('page-footer__site--opened');
  office.classList.remove('page-footer__office--nojs');
  site.classList.toggle('page-footer__site--nojs');
});

officeContainer.addEventListener('click', function() {
  site.classList.remove('page-footer__site--opened');
  office.classList.toggle('page-footer__office--opened');
  site.classList.remove('page-footer__site--nojs');
  office.classList.toggle('page-footer__office--nojs');
});

var phoneMask = IMask(
  document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00'
  });

var phoneMaskModal = IMask(
  document.getElementById('your_phone'), {
    mask: '+{7}(000)000-00-00'
  });

})();
