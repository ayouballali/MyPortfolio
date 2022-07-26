/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu') ,
      navClose = document.getElementById('nav-close') ,
      navToggle = document.getElementById('nav-toggle') ;

      

/*===== MENU SHOW =====*/
/* Validate if constant exists */
   if (navToggle) {
     navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
     })
   }

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click',()=>{
       navMenu.classList.remove('show-menu');
    })
  }

/*==================== REMOVE MENU MOBILE ====================*/
// this code is very repeted we use it for (look below)
const navLinks = document.querySelectorAll('.nav__link')

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
      let itemClass = this.parentNode.className;

      for (let index = 0; index < skillsContent.length; index++) {
         skillsContent[index].className = 'skills__content skills__close';
      }
      if(itemClass == 'skills__content skills__close'){
         this.parentNode.className = 'skills__content skills__open' ;
      }
}

skillsHeader.forEach(element => {
   element.addEventListener('click',toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content');

      tabs.forEach(tab=>{
         tab.addEventListener('click',()=>{
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent=>{
               tabContent.classList.remove('qualification__active');
            })
            target.classList.add('qualification__active')

            tabs.forEach(tab=>{
               tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
         })
      })

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button');
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
   modalViews[modalClick].classList.add('active-modal');
} 

modalBtns.forEach((modalBtn,i)=>{
   modalBtn.addEventListener('click',()=>{
      modal(i);
   })
})

modalCloses.forEach((modalClose)=>{
   modalClose.addEventListener('click',()=>{
      modalViews.forEach((modalView)=>{
         modalView.classList.remove('active-modal')
      })
   })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPoertfolio = new Swiper(".portfolio__container", {
   cssMode: true,
   loop:true,

   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
     el: ".swiper-pagination",
     clickable:true,
   },
  
 });

/*==================== TESTIMONIAL ====================*/
let swiperTestmonial = new Swiper(".testimonial__container", {
   loop:true,
   grabCursor:true,
   spaceBetween:48,

  
   pagination: {
     el: ".swiper-pagination",
     clickable:true,
     dynamicBullets:true,
   },
   breakpoints:{
      568:{
         slidesPerView:2,
         
      }
   }
  
 });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/* this code is really intressting just copy paste */
const sections = document.querySelectorAll('section[id]')

console.log(sections);

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
   const nav = document.getElementById('header')
   // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
   if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 