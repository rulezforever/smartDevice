(function () {

  const  callButton = document.querySelector('.main-nav__button');
  const modalClose = document.querySelector('.modal__close');
  const  modal = document.querySelector('.modal');
  const nameInput = document.querySelector('.modal__input--name');


  var isStorageSupport = true;
  const storageName = '';
  const storagePhone = '';
  const storageQuestion = '';

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
    modal.classList.add('modal--opened');
    nameInput.focus();
  });

  const modalCloseHandler =(evt) => {
    evt.preventDefault();
    modal.classList.remove('modal--opened');
  }

  modalClose.addEventListener('click', modalCloseHandler);

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
const siteContainer = document.querySelector('.page-footer__site-container');
const officeContainer = document.querySelector('.page-footer__office-container');
const siteButton = document.querySelector('.page-footer__text-btn');
const officeButton = document.querySelector('.page-footer__office-btn');

site.classList.remove('page-footer__site--opened');
office.classList.remove('page-footer__office--opened');

siteButton.addEventListener('click', function() {
  office.classList.remove('page-footer__office--opened');
  site.classList.toggle('page-footer__site--opened');
});

officeButton.addEventListener('click', function() {
  site.classList.remove('page-footer__site--opened');
  office.classList.toggle('page-footer__office--opened');
});

var phoneMask = IMask(
  document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00'
  });

})();
