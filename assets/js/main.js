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


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 