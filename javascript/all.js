$(function () {
  new Swiper('.mySwiperFirst', {
    effect: 'cards',
    grabCursor: true,
    rewind: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  new Swiper('.mySwiperLast', {
    rewind: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var textWrapper = document.querySelectorAll('.item');
  textWrapper.forEach((element) => {
    element.innerHTML = element.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
  });

  anime
    .timeline({ loop: true })
    .add({
      targets: '.animation-container .a .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutElastic',
      duration: 950,
      delay: (el, i) => 70 * i,
    })
    .add({
      targets: '.animation-container .a .letter',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 5000,
    })
    .add({
      targets: '.animation-container .b .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutElastic',
      duration: 950,
      delay: (el, i) => 70 * i,
    })
    .add({
      targets: '.animation-container .b .letter',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 5000,
    })
    .add({
      targets: '.animation-container .c .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutElastic',
      duration: 950,
      delay: (el, i) => 70 * i,
    })
    .add({
      targets: '.animation-container .c .letter',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 5000,
    });
});
