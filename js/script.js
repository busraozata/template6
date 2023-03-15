const menuToggle = document.querySelector(".show-button");
const navigation = document.querySelector(".navigation");
const closeToggle = document.querySelector(".close-button");

menuToggle.onclick = function () {
  menuToggle.classList.add("active");
  navigation.classList.add("active");
};

closeToggle.onclick = function () {
  navigation.classList.remove("active");
  closeToggle.classList.remove("active");
};

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

//Preloader

$("#preloader")
  .delay(1500)
  .fadeOut("slow", function () {
    $(this).remove();
  });

var swiper = new Swiper(".mySwiper", {
  /*  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
});

var swiper = new Swiper(".mySwiperDoctors", {
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".mySwiperCurrentBlogs", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".mySwiperOpinions", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".mySwiperLastBlog", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 45,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 85,
    },
  },
});

var galleryTop = new Swiper(".mySwiperText", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  loopedSlides: 4,
});

var swiperTest = new Swiper(".mySwiperList", {
  spaceBetween: 10,
  /* centeredSlides: true, */
  slidesPerView: "auto",
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  /*   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 45,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
  },
});

galleryTop.controller.control = swiperTest;
swiperTest.controller.control = galleryTop;
