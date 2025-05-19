 const swiper = new Swiper('.banner', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
		autoplay: {
    	delay: 2000,
    },
    effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
});

const secondSwiper = new Swiper('.swiper.family', {
  slidesPerView: 'auto', // Важный момент!
  spaceBetween: 0,
  loop: true,
  speed: 3000, // медленное движение
  autoplay: {
    delay: 0,         // чтобы он не останавливался
    disableOnInteraction: false,
  },
});


