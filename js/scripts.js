/*- language -*/
document.addEventListener('DOMContentLoaded', function() {
  const topPanel = document.querySelector('.language__top-panel');
  const dropdown = document.querySelector('.language__dropdown');

  topPanel.addEventListener('click', function() {
    topPanel.classList.toggle('active');
    dropdown.classList.toggle('show');
  });
});

/*- hero-slider -*/
var swiper = new Swiper('.hero-slider', {
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  autoHeight: true,
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.hero-slider .swiper-button-next',
    prevEl: '.hero-slider .swiper-button-prev',
  },
});

/*- counter -*/
let counted = 0;

window.addEventListener('scroll', function() {
  const counter = document.querySelector('.statistics');

  if (counter) {
    const oTop = counter.getBoundingClientRect().top + window.pageYOffset - window.innerHeight;

    if (counted === 0 && window.pageYOffset > oTop) {
      const elements = document.querySelectorAll('.statistics__number span');
      elements.forEach(function(element) {
        const countTo = parseInt(element.getAttribute('data-count'), 10);
        const startNum = parseInt(element.textContent, 10);
        const duration = 2000;
        const startTime = performance.now();

        const easeOutQuad = function(t) {
          return t * (2 - t);
        };

        const animateCount = function(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const easedProgress = easeOutQuad(progress);
          const currentNum = Math.floor(easedProgress * (countTo - startNum) + startNum);

          element.textContent = currentNum;

          if (progress < 1) {
            requestAnimationFrame(animateCount);
          } else {
            element.textContent = countTo;
          }
        };

        requestAnimationFrame(animateCount);
      });

      counted = 1;
    }
  }
});


/*- services-slider -*/
var swiper = new Swiper('.services-slider', {
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  autoHeight: true,
  loop: true,
  speed: 1000,
  slidesPerView: 4,
  spaceBetween: 1,
  navigation: {
    nextEl: '#services-arrows .swiper-button-next',
    prevEl: '#services-arrows .swiper-button-prev',
  },
});

/*- services-slider -*/
var swiper = new Swiper('.partners-slider', {
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  spaceBetween: 170,
  slidesPerView: 5,
  loop: true,
  speed: 5000,
});

/*- works-catalog -*/
$('.works-catalog__item:lt(9)').show();

$('#load-more').click(function() {
  event.preventDefault();
  var $hidden = $('.works-catalog__item:hidden');
  $($hidden).slice(0, 3).fadeIn(800);
  if ($hidden.length == 3) {
    $('#load-more').addClass('btn_hidden');
  }
});