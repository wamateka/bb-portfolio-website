(function() {
  "use strict";

  var carousel = document.getElementsByClassName('carousel')[0],
      slider = carousel.getElementsByClassName('carousel__slider')[0],
      items = carousel.getElementsByClassName('carousel__slider__item'),
      prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
      nextBtn = carousel.getElementsByClassName('carousel__next')[0];
  
  var width, height, totalWidth, margin = 20,
      currIndex = 0,
      interval, intervalTime = 2000;
  
  function init() {
      resize();
      move(Math.floor(items.length / 2));
      bindEvents();
  }
  
  function resize() {
      width = Math.max(window.innerWidth * .25, 275),
      height = window.innerHeight * .5,
      totalWidth = width * items.length;
    
      slider.style.width = totalWidth + "px";
    
      for(var i = 0; i < items.length; i++) {
          let item = items[i];
          item.style.width = (width - (margin * 2)) + "px";
          item.style.height = height + "px";
      }
  }
  
  function move(index) {
    
      if(index < 1) index = items.length;
      if(index > items.length) index = 1;
      currIndex = index;
    
      for(var i = 0; i < items.length; i++) {
          let item = items[i],
              box = item.getElementsByClassName('item__3d-frame')[0];
          if(i == (index - 1)) {
              item.classList.add('carousel__slider__item--active');
              box.style.transform = "perspective(1200px)"; 
          } else {
            item.classList.remove('carousel__slider__item--active');
              box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
          }
      }
    
      slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
  }
  
  function timer() {
      clearInterval(interval);    
      interval = setInterval(() => {
        move(++currIndex);
      }, intervalTime);    
  }
  
  function prev() {
    move(--currIndex);
  }
  
  function next() {
    move(++currIndex);    
  }
  
  
  function bindEvents() {
      window.onresize = resize;
      prevBtn.addEventListener('click', () => { prev(); });
      nextBtn.addEventListener('click', () => { next(); });    
  }




  
  init();
  
})();
//manual slides
//--------------------------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var slide2Index = 1;
showDivs2(slide2Index);

function plusDivs2(s) {
  showDivs2(slide2Index += s);
}

function showDivs2(s) {
  var j;
  var y = document.getElementsByClassName("mySlides2");
  if (s > y.length) {slide2Index = 1}
  if (s < 1) {slide2Index = y.length}
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  y[slide2Index-1].style.display = "block";  
}
window.addEventListener('load', function() {
  var links = document.querySelectorAll('.external-link');
  links.forEach(function(link) {
    link.setAttribute('target', '_blank');
  });
})