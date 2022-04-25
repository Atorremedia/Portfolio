

const logopic = document.querySelector(".logodiv");
const navside = document.querySelector(".navside");
const burguer = document.querySelector(".burguer");
const menu = document.querySelectorAll(".menuli");
const sidedown1 = document.getElementById("loc");
const sidedown2 = document.getElementById("message");
const menuOver = document.getElementById("menuover");
let burguerOn = false;

//burguer

burguer.addEventListener('click',()=>{
    if (burguerOn == false){
    menuOver.style.display = "flex";
    burguerOn = true;
    } else {
        menuOver.style.display = "none";
        burguerOn = false;
    }
})


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

window.addEventListener('scroll', ()=>{

    const scroll = window.pageYOffset;
    if (scroll <= 550){
        sidedown1.classList.remove('sidedown1');
        sidedown2.classList.remove('sidedown2');
    }
    if (scroll > 20){
        logopic.classList.add('logodown');
        navside.classList.add('teldown');
        burguer.classList.add('burguerdown');
        for (let i = 0; i < menu.length; i++){
            menu[i].classList.add('menudown');
            }
        if (scroll >550){
            sidedown1.classList.add('sidedown1');
            sidedown2.classList.add('sidedown2');
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
