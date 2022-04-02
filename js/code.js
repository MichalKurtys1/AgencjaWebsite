
// Menu

const bntB = document.querySelector('.bnt');
const bntX = document.querySelector('.fa-x');
const menu = document.querySelector('.menu');

bntB.addEventListener('click', function(){
    menu.classList.toggle('active');
    menu.classList.toggle('inactive');
    bntX.classList.toggle('active');
    bntX.classList.toggle('inactive');
    bntB.classList.toggle('inactive');
    bntB.classList.toggle('active');
});

bntX.addEventListener('click', function(){
    menu.classList.toggle('active');
    menu.classList.toggle('inactive');
    bntX.classList.toggle('active');
    bntX.classList.toggle('inactive');
    bntB.classList.toggle('inactive');
    bntB.classList.toggle('active');
});

// about wysuwanie contentu

const img1 = document.getElementById("img1");
const content1 = document.getElementById("content1");

img1.addEventListener('click', function() {
    content1.classList.toggle("active");
});

const img2 = document.getElementById("img2");
const content2 = document.getElementById("content2");

img2.addEventListener('click', function() {
    content2.classList.toggle("active");
});

const img3 = document.getElementById("img3");
const content3 = document.getElementById("content3");

img3.addEventListener('click', function() {
    content3.classList.toggle("active");
});

// Slider

const offersBntL = document.querySelector(".left");
const offersBntR = document.querySelector(".right");
const offers = document.querySelectorAll(".offer");
let clickCount = 0; 
let windowWidth = window.outerWidth;
let widthTab = [0,windowWidth,windowWidth*2,windowWidth*3,windowWidth*4,windowWidth*5];
let widthTabReverse = [-windowWidth*5,-windowWidth*4,-windowWidth*3,-windowWidth*2,-windowWidth,0];

offersBntL.addEventListener("click", function() {
    rotation();
});

offersBntR.addEventListener("click", function() {
    rotation();
});

function rotation() {
    clickCount--;
    if(clickCount <= 0 && clickCount > -6) {
        offers.forEach((item,i) => {
            let courrentWidth = parseInt(window.getComputedStyle(item,null).getPropertyValue('left'),10);
            let viewportWidth = window.outerWidth;
            let newWidth = courrentWidth - viewportWidth;

            item.style.left = newWidth + "px";
        });
    }
    if(clickCount == -6) {
        clickCount = 0;
        offers.forEach((item,i) => {
            item.style.left = widthTab[i] + "px";
        });
    } 
}

// Animation

$(document).on('scroll', function(){
    const windowHeight = $(window).height();
    const scrollVal = $(this).scrollTop();
    
    const $bntChoose = $('.chooseBnt');
    const bntChooseFromTop = $bntChoose.offset().top;
    const bntChooseHeight = $bntChoose.height();

    if(scrollVal > bntChooseFromTop + bntChooseHeight - windowHeight) {
        $bntChoose.addClass('active');
    }

    const $bntOffer = $('.bntOffer');
    const bntOfferFromTop = $bntOffer.offset().top;
    const bntOfferHeight = $bntOffer.height();

    if(scrollVal > bntOfferFromTop + bntOfferHeight - windowHeight) {
        $bntOffer.addClass('active');
    }

    const $about = $('.about');
    const aboutFromTop = $about.offset().top;
    const aboutHeight = $about.height();

    if(scrollVal > aboutFromTop + aboutHeight - windowHeight) {
        $about.addClass('active');
    }
});