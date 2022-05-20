let layer1 = document.querySelector('.layer1');
let layer2 = document.querySelector('.layer2');
let layer3 = document.querySelector('.layer3');
let arrow = document.querySelector('.arrow-container');

const svg = document.querySelectorAll('svg');
window.addEventListener('scroll', scrollParallax);

function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    layer1.style.transform = 'translateY('+ scrollTop * -.2 +'px)';
    layer2.style.transform = 'translateY('+ scrollTop * -1.4 +'px)';
    layer3.style.transform = 'translateY('+ scrollTop * -2.5 +'px)';
    if (scrollTop > 20){arrow.style.display = "none"}
    else {arrow.style.display = "block"}
    svgAnimate();
}

function svgAnimate(){
    let scroll = document.documentElement.scrollTop;
    if (scroll>120){svg[0].classList.add('active')}
    else {svg[0].classList.remove('active')}    
    if (scroll>250){svg[1].classList.add('active')}
    else {svg[1].classList.remove('active')}    
}
