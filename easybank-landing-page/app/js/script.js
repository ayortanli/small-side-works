const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function(){
    if(header.classList.contains("open")) {
        header.classList.remove("open");
        body.classList.remove("noscroll");
        fadeElems.forEach( item => {            
            item.classList.remove("fade-in");        
            item.classList.add("fade-out");
        });
    }
    else {
        header.classList.add("open");        
        body.classList.add("noscroll");
        fadeElems.forEach( item => {            
            item.classList.remove("fade-out");       
            item.classList.add("fade-in");
        });
    }
});