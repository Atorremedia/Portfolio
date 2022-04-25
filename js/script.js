let layer1 = document.querySelector('.layer1');
let layer2 = document.querySelector('.layer2');
let layer3 = document.querySelector('.layer3');
let photo = document.querySelector('.photo-container');
let burguer = document.querySelector('.burguer-container');
let menubar = document.querySelector('.menu');
let isMenuDisplayed = false;

function displayMenu(){
    if (isMenuDisplayed == false){
        menubar.style.display = "flex";
    } else {
        menubar.style.display = "none";
    }
    isMenuDisplayed = !isMenuDisplayed;
}

function menuOff(){
    menubar.style.display = "none";
    isMenuDisplayed = false;
}
burguer.addEventListener('click', displayMenu);
menubar.addEventListener('click', menuOff);

