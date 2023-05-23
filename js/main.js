document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("burger").addEventListener("click", function (e) {
    document.querySelector(".top-menu__nav").classList.toggle("open"),
      document.querySelector(".body").classList.toggle("noscroll"),
      document.querySelector(".top-content").classList.toggle("content-hide")
  })

  document.addEventListener("click", function (e) {
    let menu = document.querySelector(".top-menu__nav");
    let list = document.querySelector(".top-menu__list")
    let burger = document.getElementById("burger");
    if (!menu.contains(e.target) && e.target !== burger || list.contains(e.target)) {
      menu.classList.remove("open");
      document.querySelector(".body").classList.remove("noscroll");
      document.querySelector(".top-content").classList.remove("content-hide");
    }
  });

let phoneInput = document.getElementById("formPhone");
let nameInput = document.getElementById("formName");

const phoneMask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
});

nameInput.addEventListener("input", nameInputHandler);
function nameInputHandler() {
  if (nameInput.value.length < 2 ) {
    nameInput.style.border = '2px solid #ce3f2c';
    console.log(true);
  } else {
    nameInput.style.border = '2px solid #93C76a';
    console.log(false);
  }
}

phoneInput.addEventListener("input", phoneInputHandler);
function phoneInputHandler() {
  if (phoneMask.masked.isComplete) {
    document.querySelector(".top-content__form-btn").classList.add("top-content__form-btn--active");
    phoneInput.style.border = '2px solid #93C76a';
  } else {
    document.querySelector(".top-content__form-btn").classList.remove("top-content__form-btn--active");
    phoneInput.style.border = '2px solid #ce3f2c';
  }
}

  var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    loopAdditionalSlides: 1,
    loopedSlides: 3,
    breakpoints: {
      1023: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const servicesWrapper = document.querySelectorAll('.services__list');
  const servicesSlide = document.querySelectorAll('.services__item');
  const wrapper = document.querySelector('.wrapper');
  const next = document.querySelectorAll('.services-wrapper .swiper-button-next');
  const prev = document.querySelectorAll('.services-wrapper .swiper-button-prev');

  mobileView();

  window.addEventListener('resize', mobileView);

  function mobileView() {
    if (document.documentElement.clientWidth <= 1023) {
      var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        loopAdditionalSlides: 0,
        loopedSlides: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      servicesWrapper.forEach(function (n) {
        n.classList.remove('services__list')
        n.classList.add('services__list-mobile')
      });
      servicesSlide.forEach(function (n) {
        n.classList.add('swiper-slide')
      });
      next.forEach(function (n) {
        n.style.display = 'flex';
        n.style.top = '190px';
      });
      prev.forEach(function (n) {
        n.style.display = 'flex';
        n.style.top = '190px';
      });
    } else {
      var swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        loop: true,
        loopAdditionalSlides: 1,
        loopedSlides: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      servicesWrapper.forEach(function (n) {
        n.classList.add('services__list')
        n.classList.remove('services__list-mobile')
      });
      servicesSlide.forEach(function (n) {
        n.classList.remove('swiper-slide')
      });
      next.forEach(function (n) {
        n.style.display = 'none';
      });
      prev.forEach(function (n) {
        n.style.display = 'none';
      });
    }
  }
});
