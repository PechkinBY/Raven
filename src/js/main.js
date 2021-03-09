const swiperTestimonials = new Swiper('.slider-testimonials', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
const swiperProjects = new Swiper('.slider-projects', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 18,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 5,
    },
    1281: {
      slidesPerView: 6,
    },
  },
});

const burgerMenu = document.querySelector('.menu__burger');
const searchBtn = document.querySelector("#menu__search");

function checkForNull (obj) {
  if (obj.value) {
    obj.style.borderColor = '#868686';
    return true
  }
  else {
    obj.style.borderColor = '#ff0000';
  }
}

// BURGER
const navSlide = () => {
  const nav = document.querySelector('.menu__nav');
  const burgerBtn = document.querySelector('.menu__burger-line');
  
  burgerBtn.classList.toggle('menu__burger-line_active');
  nav.classList.toggle('menu__nav_active');
}
burgerMenu.addEventListener('click', navSlide);

// SEARCH
const openSearch = () => {
  const searchInput = document.querySelector("#menu__search-input");
  searchBtn.addEventListener('click', () => {
    searchInput.style.display = "block";
    searchInput.focus();
  })
  searchBtn.addEventListener('focusout', () => {
    searchInput.style.display = "none";
  })
}
searchBtn.addEventListener('click', openSearch);