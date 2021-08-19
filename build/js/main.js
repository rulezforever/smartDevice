(function () {

  const SYMBOLS_PATTERN = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;

  const  callButton = document.querySelector('.main-nav__button');
  const modalClose = document.querySelector('.modal__close');
  const  modal = document.querySelector('.modal');
  const nameInput = document.querySelector('.modal__input--name');
  const phoneInput = document.querySelector('.modal__input--phone');


  const isStorageSupport = true;
  const storageName = "";
  const storagePhone = "";
  const storageQuestion = "";

  try {
    storage = localStorage.getItem("your_name");
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storage = localStorage.getItem("your_phone");
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storage = localStorage.getItem("your_question");
  } catch (err) {
    isStorageSupport = false;
  }

  callButton.addEventListener('click', function () {
    modal.classList.add('modal--opened');
    nameInput.focus();
  });

  const modalCloseHandler =(evt) => {
    evt.preventDefault();
    modal.classList.remove("modal--opened");
  }

  modalClose.addEventListener('click', modalCloseHandler);

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains("modal--opened")) {
        evt.preventDefault();
        modal.classList.remove("modal--opened");
      }
    }
  });

//  slow scroll for links
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

  // //--- input validation

  // const inputElement = document.querySelector('.promo__input--phone');
  // const symbolsPattern = /(?:\(?\+\d{2}\)?\s*)?\d+(?:[ -]*\d+)*$/;

  // const checkValidation = () => {
  //   const value = inputElement.value
  //   if (!symbolsPattern.test(value)) {
  //     inputElement.setCustomValidity('Нельзя вводить буквы - введите числа!');
  //   } else {
  //     inputElement.setCustomValidity('');
  //   }
  //   inputElement.reportValidity();
  // }

  // inputElement.addEventListener('input', checkValidation);
  // const onDocumentEscPress = (evt) => {
  //   onPressedKey(evt,ESCAPE,onCloseBtnClick);
  // }

  // // const onCloseBtnClick = () => {
  // //   hideElement(bigPictureElement);
  // //   closeBtnElement.removeEventListener('click', onCloseBtnClick);
  // //   bodyElement.classList.remove('modal-open');
  // //   document.removeEventListener('keydown',onDocumentEscPress);
  // // }

  // // const onPressedKey = (evt,code,callback) => {
  // //   if (evt.key === code) {
  // //     evt.preventDefault();
  // //     callback();
  // //   }

  // const onMessageCloseByEmptyClick = (evt) => {
  //   if (evt.target === document.querySelector('.modal')) {
  //     return
  //     // onSuccessBtnClick();
  //   } else {

  //   }
  //   if (evt.target === document.querySelector('.error')) {
  //     onErrorBtnClick();
  //   }
  // }
})();
