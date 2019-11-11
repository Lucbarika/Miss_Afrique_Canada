/*
import typed from 'typed.js'


function loadDynamicText() {

  new Typed('#banner-typed-text', {
    strings: ["gala, evenements, culture, danse"],
    typeSpeed: 50,
    loop: true

  });
}

export { loadDynamicText };
*/

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
    }
  })
});



