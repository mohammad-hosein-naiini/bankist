'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const html = document.querySelector("html");
const navLinkAll = document.querySelectorAll(".nav__link");
const navLink = document.querySelector(".nav__link");
const sections = document.querySelectorAll(".section");
const section3 = document.querySelector("#section--3")
const lazyImage = document.querySelectorAll(".lazy-img");
const slide1 = document.querySelector(".slide--1");
const slide2 = document.querySelector(".slide--2");
const slide3 = document.querySelector(".slide--3");
const slideButtonRight = document.querySelector(".slider__btn--right");
const slideButtonLeft = document.querySelector(".slider__btn--left");
const slides = document.querySelectorAll(".slide")
const operationTabs = document.querySelectorAll(".operations__tab");
const operationTab = document.querySelector(".operations__tab");
const stickyNavIndicator = document.querySelector(".features__header");
const operations__content = document.querySelectorAll(".operations__content")
const dot = document.querySelectorAll(".dot");
///////////////////////////////////////
// Modal window

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////
// Button Scrolling

btnScroll.onclick = function () {

  section1.scrollIntoView();

}

//////////////////////////////////////////////
// Page Navigation (Smooth scroll to sections)

html.style.scrollBehavior = "smooth";

//////////////////////////////////////////////
// Tabbed Component

for (let i = 0 ; i < operationTabs.length ; i++){

  operationTabs[i].addEventListener("click" , function(){

    
    for( let j = 0 ; j < 3  ; j++){
      
      operationTabs[j].classList.remove("operations__tab--active")
    }
    operationTabs[i].classList.add("operations__tab--active")

    
    if( i == 0 ){

      for( let num1 = 0 ; num1 < 3 ; num1++){

        operations__content[num1].classList.remove("displayBlock")
        operations__content[num1].classList.add("displayNone")

      }

      operations__content[i].classList.remove("displayNone")
      operations__content[i].classList.add("displayBlock")
    }

  
    if( i == 1 ){

      for( let num1 = 0 ; num1 < 3 ; num1++){

        operations__content[num1].classList.remove("displayBlock")
        operations__content[num1].classList.add("displayNone")

      }
      
      operations__content[i].classList.remove("displayNone")
      operations__content[i].classList.add("displayBlock")
    }


    if( i == 2 ){

      for( let num1 = 0 ; num1 < 3 ; num1++){

        operations__content[num1].classList.remove("displayBlock")
        operations__content[num1].classList.add("displayNone")

      }

      operations__content[i].classList.remove("displayNone")
      operations__content[i].classList.add("displayBlock")
    }
  
  
    
  })
  
}
//////////////////////////////////////////////
// Navigation link fadeout animation (opacity)


for( let i = 0 ; i < navLinkAll.length ; i++ ){

  navLinkAll[i].addEventListener("mouseover" , function(){


    navLinkAll.forEach( link =>{

      link.classList.add("lowOpacity");

    })
 
    navLinkAll[i].classList.add("highOpacity");

  })
}


for( let i =0 ; i < navLinkAll.length ; i++ ){

  navLinkAll[i].addEventListener("mouseleave" , function(){

    navLinkAll.forEach( link =>{

      
      link.classList.remove("lowOpacity")
      link.classList.remove("highOpacity")
      
    })

  })
}


//////////////////////////////////////////////
// Sticky Navigation


const stickyNav = new IntersectionObserver ( ( entry ) => {
console.log(entry)
  
  if(entry[0].isIntersecting){

    nav.classList.add("stickyNav")
  }

});

stickyNav.observe(stickyNavIndicator)

//////////////////////////////////////////
// Reveal Sections

const sectionAnimation = new IntersectionObserver( ( entries ) =>{
   
  entries.forEach(entry => {

    if(entry.isIntersecting ){

      entry.target.style.animation = "animation 1.5s forwards ease-out";
      
    }
    else{
      entry.target.style.animation = "none" ;
    }
    
  })
});

sections.forEach( section =>{
  sectionAnimation.observe(section)

} )

//////////////////////////////////////////
// Lazy loading images

const lazyImageRemove = new IntersectionObserver ((entries) => {

  entries.forEach(entry =>{

    if(entry.isIntersecting){
    
      entry.target.classList.remove("lazy-img")
    }
    
    else{
    
      return
    }
  })
});

lazyImage.forEach(image =>{
  lazyImageRemove.observe(image)
})

//////////////////////////////////////////
// Slider

let number = 1 ;

showSlides(number);

function nextSlide(n){
  showSlides( number += 1)
}

function dotIndicator(n){
  showSlides(number = n)
}

function showSlides(n){ 

  if( n > slides.length) {
    number = 1 ;
  }

  if( n < 1){
    number = slides.length ;
  }

  for( let i = 0 ; i < slides.length ; i++){
    slides[i].style.display = "none";
  }

  for( let j = 0 ; j < dot.length ; j++ ){
    dot[j].style.backgroundColor = "rgb( 163 , 163 , 163)";
  }

  slides[number-1].style.display = "flex";

}