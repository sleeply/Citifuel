let navbar = document.querySelector("nav");
let btn = document.querySelector(".icon");
let closeBtn = document.querySelector('#closeBtn')
let list = document.querySelector("nav-links");


btn.addEventListener("click", () => {
    document.querySelector('.nav-links').classList.toggle('nav-active');
    document.querySelector('#opacity0').classList.add('opacity1');
    btn.style.display = " none "
    closeBtn.style.display = " block "
})
closeBtn.addEventListener("click", () => {
    document.querySelector('.nav-links').classList.toggle('nav-active');
    document.querySelector('#opacity0').classList.add('opacity1');
    document.querySelector('#opacity0').classList.remove('opacity1');

    btn.style.display = " block "
    closeBtn.style.display = " none "
})

window.addEventListener("scroll", () =>{
    var nav = document.querySelector("nav");
    nav.classList.toggle("fixed", window.scrollY > 0)
})

/* animation */
/* window.addEventListener('scroll', () =>{
    let content = document.querySelector(".us-blogs");
    let contentP = content.getBoundingClientRect().top;
    let screenP = window.innerHeight;

    if(contentP < screenP){
        content.classList.add("us-blogs-animate")
    }
})
window.addEventListener("scroll", () => {
    let why = document.querySelector(".why");
    let whyP = why.getBoundingClientRect().top;
    let screenW = window.innerHeight;

    if(whyP < screenW){
        why.classList.add("why-active")
    }
}) */