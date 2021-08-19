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

// document.querySelector('button#open').addEventListener('click', e => {
//   document.body.classList.add('modal-show')
// })

// document.querySelector('button#close').addEventListener('click', e => {
//   document.body.classList.remove('modal-show')
// })

// document.querySelector('.page-body__overlay').addEventListener('click', e => {
//   document.body.classList.remove('modal-show')
// })

// document.addEventListener(
//   "click",
//   function(event) {
//     // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
//     if (
//       event.target.matches(".modal__close") ||
//       !event.target.closest(".modal")
//     ) {
//       closeModal()
//     }
//   },
//   false
// )

// function closeModal() {
//   modal.classList.remove("modal--opened");
// }

// window.addEventListener("DOMContentLoaded", function() {
//   function setCursorPosition(pos, elem) {
//       elem.focus();
//       if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
//       else if (elem.createTextRange) {
//           var range = elem.createTextRange();
//           range.collapse(true);
//           range.moveEnd("character", pos);
//           range.moveStart("character", pos);
//           range.select()
//       }
//   }

//   function mask(event) {
//       var matrix = "+7 (___) ___ ____",
//           i = 0,
//           def = matrix.replace(/\D/g, ""),
//           val = this.value.replace(/\D/g, "");
//       if (def.length >= val.length) val = def;
//       this.value = matrix.replace(/./g, function(a) {
//           return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
//       });
//       if (event.type == "blur") {
//           if (this.value.length == 2) this.value = ""
//       } else setCursorPosition(this.value.length, this)
//   };
//       var input = document.querySelector("#tel");
//       input.addEventListener("input", mask, false);
//       input.addEventListener("focus", mask, false);
//       input.addEventListener("blur", mask, false);
//   });

  // https://stackoverflow.com/questions/65387690/closing-modal-on-window-vanilla-js
})();
