"use strict";
/***************COLLAPSING NAV****************/

const bars = document.getElementById('bars');
const nav = document.getElementById('menu');
const close = document.getElementById('close');


function slidingNav(){
    if (bars){
        bars.addEventListener("click", ()=>{
            nav.style.right= "0";
        })
                close.addEventListener('click', ()=>{
            nav.style.right="-300px";
        })    
    }
    } slidingNav();

/*********************LOGO TO HOME******************/

const mainPg = document.querySelector(".logo");

function backToHome(){
    mainPg.addEventListener('click', ()=>{
        window.location.href='index.html';
})} backToHome();


/*********************PRODUCT SLIDER*********************/

const mainImg = document.getElementById('main-img');
const thumbnails = document.getElementsByClassName('thumb');

function changeImg(){
for(let i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('click', ()=>{
        mainImg.src = thumbnails[i].src;
    })
    mainImg.addEventListener('click', ()=>{
            mainImg.src = mainImg.src;})

}} changeImg();


/*********************TESTIMONIALS*************************/

let testimonial = document.getElementById('review');
let usersPic = Array.from(document.getElementsByClassName('user'));
let usr = document.getElementById('usr');
let reviews = [
    "I recently purchased a guitar from harmony and I couldn't be happier! The staff was incredibly knowledgeable and helped me find the perfect instrument for my needs. I would definitely recommend this store to any musician looking for high-quality instruments.",
    "I've been a customer of Harmony for years and they never disappoint. Their selection of instruments is top-notch and the staff is always friendly and helpful. Whether you're a beginner or a seasoned pro, this store has everything you need to make beautiful music.",
    "I was blown away by the level of customer service I received at this music store. The staff went above and beyond to help me find the perfect keyboard for my home studio. They even gave me some great advice on setting up my equipment.",
    "This music store is simply the best! They have an incredible selection of instruments and accessories, and the prices are unbeatable. I always feel welcome when I come in, and the staff is always happy to answer my questions."

]

let users = [
    "Sophia Davis", "Emily Johnson", "David Thompson","John Smith"
]


function swipeReview() {
    let prevIndex = 0;
    for (let i = 0; i < usersPic.length; i++) {
        usersPic[i].addEventListener('click', () => {
        testimonial.textContent = reviews[i];
        usr.textContent = users[i];
        usersPic[prevIndex].classList.remove("clicked");
        usersPic[i].classList.add("clicked");
        prevIndex = i;
        });
    }
} swipeReview();


