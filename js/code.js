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