

const logopic = document.querySelector(".logodiv");
const navside = document.querySelector(".navside");
const burguer = document.querySelector(".burguer");
const menubar = document.querySelector(".menu");
const sidedown1 = document.querySelector(".loc");
const sidedown2 = document.querySelector(".message");
const menuOver = document.getElementById("menuover");
const menu = document.querySelectorAll(".menuli");
let isMenuDisplayed = false;

//burguer

function displayMenu(){
    if (isMenuDisplayed == false){
        menuOver.style.display = "flex";
    } else {
        menuOver.style.display = "none";
    }
    isMenuDisplayed = !isMenuDisplayed;
}

function menuOff(){
    menubar.style.display = "none";
    isMenuDisplayed = false;
}
burguer.addEventListener('click', displayMenu);
menubar.addEventListener('click', menuOff);


//carroussel

const big = document.querySelector(".big");
const dot = document.querySelectorAll(".dot");
dot.forEach(( cadadot, i )=>{
    dot[i].addEventListener('click', ()=>{
        let position = i;
        let operation = position * -33.33;
        big.style.transform = `translateX(${operation}%)`;

        dot.forEach (( cadadot, i) =>{
            dot[i].classList.remove('active');
        });
        dot[i].classList.add('active');

    });

});

//scroll
let body = document.body,
    html = document.documentElement;
    let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
window.addEventListener('scroll', ()=>{

    const scroll = window.pageYOffset;
    if (scroll > 20){
        logopic.classList.add('logodown');
        navside.classList.add('teldown');
        burguer.classList.add('burguerdown');
        for (let i = 0; i < menu.length; i++){
            menu[i].classList.add('menudown');
            }
    } else {
        logopic.classList.remove('logodown');
        navside.classList.remove('teldown');
        burguer.classList.remove('burguerdown');
        for (let i = 0; i < menu.length; i++){
            menu[i].classList.remove('menudown');
        }
    }
})

// Map over

    const sidetab = document.querySelectorAll(".sidetab");
    const over = document.querySelector(".over");
    document.getElementById("over").style.visibility = "hidden";
    sidetab[0].addEventListener('click',()=>{
        if (document.getElementById("over").style.visibility === "hidden"){
            document.getElementById("over").style.visibility = "visible";
        } else {
            document.getElementById("over").style.visibility = "hidden";
        }
    })
    over.addEventListener('click',()=>{
        document.getElementById("over").style.visibility = "hidden";
    })
