// let els = document.querySelectorAll('.js-fadeIn');
// els.forEach(function(fadeIn) {
//   let windowHeight = window.innerHeight;
//   window.addEventListener('scroll', function() {
//     let offset = fadeIn.getBoundingClientRect().top;
//     let scroll = window.scrollY;
//     if(scroll > offset - windowHeight + 500){
//       fadeIn.classList.add('is-scrollIn');
//     }
//   })
// })

const iSObservers = document.querySelectorAll('.fade-animation');
const options = {
    rootMargin: '-10% 0px',
};
const fadeIn = (target) => {
    target.classList.add('is-scrollIn');
};
const observeUse = (entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        fadeIn(entry.target);
    }
});
};
const observer = new IntersectionObserver(observeUse, options);
iSObservers.forEach(iSObserver => {
    observer.observe(iSObserver);
});