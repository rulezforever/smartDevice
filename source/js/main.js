(function () {

  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var pageContainer = document.querySelector('.page-container');
  var pageBody = document.querySelector('.page-body');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.remove('main-nav--opened');
  pageContainer.classList.remove('page-container--menu-opened');
  pageContainer.classList.remove('page-container--nojs');

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-nav--opened');
    pageContainer.classList.toggle('page-container--menu-opened');
    pageContainer.classList.toggle('page-container--nojs');
    if (navMain.classList.contains('main-nav--opened')) {
      pageBody.style.overflow = "hidden";
    } else {
      pageBody.style.overflow = "auto";
    }
  });

  // slow scroll for links

  const anchors = document.querySelectorAll('.main-nav__list a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }


  //--- input validation

  const inputElement = document.querySelector('.promo__input--phone');
  const symbolsPattern = /(?:\(?\+\d{2}\)?\s*)?\d+(?:[ -]*\d+)*$/;

  const checkValidation = () => {
    const value = inputElement.value
    if (!symbolsPattern.test(value)) {
      inputElement.setCustomValidity('Нельзя вводить буквы - введите числа!');
    } else {
      inputElement.setCustomValidity('');
    }
    inputElement.reportValidity();
  }

  inputElement.addEventListener('input', checkValidation);

})();
