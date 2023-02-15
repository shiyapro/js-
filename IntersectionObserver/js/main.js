const options = {
    root: null,
    rootMargin: "-200px -100px",
    threshold: 0
};

const elm = document.querySelector(".elm");
const callback = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}

const io = new IntersectionObserver(callback, options);
io.observe(elm);