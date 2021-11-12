let scrollController;
let slideScene;
let pageScene;

function animateSlides() {
  scrollController = new ScrollMagic.Controller();
  console.log('controller made');

  const sliders = document.querySelectorAll('.slide');
  const nav = document.querySelector('.nav-header');

  sliders.forEach((slide, i, slides) => {
    const revealImg = slide.querySelector('.reveal-img');
    const img = slide.querySelector('img');
    const revealText = slide.querySelector('.reveal-text');
    console.log(revealImg);
    // gsap
    //set timeline with default animation styles
    const slideTL = gsap.timeline({defaults: {duration: 1, ease: 'power2.inOut'}});
    slideTL.fromTo(revealImg, {x: "0%"}, {x: "100%"})
    slideTL.fromTo(img, {scale: 2}, {scale: 1}, "-=1")
    slideTL.fromTo(revealText, {x: "0%"}, {x: "100%"}, "-=0.75")
    slideTL.fromTo(nav, {y: "-100%"}, {y: "0%"}, "-=0.5 ")
    // gsap.to(revealImg, 1, {x: "100%"});
    // gsap.to(img , 1, {scale: 1.5});

    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false
    })
    .setTween(slideTL)
    .addIndicators({colorStart: 'white', colorTrigger: 'white', name: 'slide'})
    .addTo(scrollController)

    //page animation
    const pageTL = gsap.timeline({defaults: {duration: 1, ease: 'power2.inOut'}});
    let nextSlide = slides.length - 1 === i ? 'end' : slides[i+1];
    pageTL.fromTo(nextSlide, {y:"0%"},{y:"50%"});
    pageTL.fromTo(slide, {opacity: 1, scale: 1},{opacity: 0, scale: 0.5});
    pageTL.fromTo(nextSlide, {y:"50%"},{y:"0%"}, "-=0.5");

    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0
    })
    .setPin(slide, {pushFollowers: false})
    .setTween(pageTL)
    .addIndicators({colorStart: 'white', colorTrigger: 'white', name: 'page', indent: 200})
    .addTo(scrollController)

  });
}

const mouseDiv = document.querySelector('.cursor');
const mouseText = mouseDiv.querySelector('span');
const burger = document.querySelector('.burger');

function cursorTrack(e) {
  mouseDiv.style.top = e.pageY + "px";
  mouseDiv.style.left = e.pageX + "px";
}

function activeCursor(e) {
  const item = e.target;
  if (item.id === 'logo' || item.classList.contains('burger')) {
    mouseDiv.classList.add("nav-active");
  } else {
    mouseDiv.classList.remove("nav-active");
  }
  if (item.classList.contains('explore')) {
    mouseDiv.classList.add("explore-active");
    gsap.to('.title-swipe', 1, {y: "0%"});
    mouseText.innerText = 'Tap';
  } else {
    mouseDiv.classList.remove("explore-active");
    gsap.to('.title-swipe', 1, {y: "100%"});
    mouseText.innerText = '';
  }
}

function navToggle(e) {
  if (!e.target.classList.contains('active')) {
    e.target.classList.add('active');
    gsap.to(".burger-line1", 0.5, {rotate: "45", y: 5, background: "black"});
    gsap.to(".burger-line2", 0.5, {rotate: "-45", y: -5, background: "black"});
    gsap.to("#logo", 1, {color: "black"});
    gsap.to('.nav-bar', 1, {clipPath: "circle(2500px at 100% -10%)"});
    document.body.classList.add('hide');
  } else {
    e.target.classList.remove('active');
    gsap.to(".burger-line1", 0.5, {rotate: "0", y: 0, background: "white"});
    gsap.to(".burger-line2", 0.5, {rotate: "0", y: 0, background: "white"});
    gsap.to("#logo", 1, {color: "white"});
    gsap.to('.nav-bar', 1, {clipPath: "circle(50px at 100% 0%)"});
    document.body.classList.remove('hide');
  }


}


//Barba
const logo = document.querySelector('#logo');
barba.init({
  views: [
    {
      namespace: 'home',
      beforeEnter() {
        animateSlides();
        logo.href = './index.html';
      },
      beforeLeave() {
        slideScene.destroy();
        pageScene.destroy();
        scrollController.destroy();
      }
    },
    {
      namespace: 'fashion',
      beforeEnter() {
        logo.href = '../index.html';
      }
    }
  ],
  transitions: [
    {
      leave({current, next}) {
        let done = this.async();
        //add animation
        const tl = gsap.timeline({defaults: {ease: 'power2.inOut'}});
        tl.fromTo(current.container, 1, {opacity: 1}, {opacity:0} );
        tl.fromTo('.swipe', 0.75, {x: '-100%'}, {x:'0%', onComplete: done}, "-=0.5" );
      },
      enter({current, next}) {
        let done = this.async();
        window.scrollTo(0,0);
        //add animation
        const tl = gsap.timeline({defaults: {ease: 'power2.inOut'}});
        tl.fromTo('.swipe', 1, {x: '0%'}, {x:'100%', stagger: 0.25,onComplete: done}, "-=0.5" );

        tl.fromTo(current.container, 1, {opacity: 0}, {opacity:1}, );


      }
    }
  ]
})

//Event listeners
window.addEventListener('mousemove', cursorTrack);
window.addEventListener('mouseover', activeCursor);
burger.addEventListener('click', navToggle);


// animateSlides();
