let sun = document.querySelector("#sun");
let moist = document.querySelector("#moist");
let serum = document.querySelector("#serum");
let face = document.querySelector("#face");

let sunscreen = document.querySelector("#sunscreen");
let moisturizer = document.querySelector("#moisturizer");
let serumSection = document.querySelector("#serum-section");
let facewash = document.querySelector("#facewash");


sun.addEventListener("click", function(e) {
    e.preventDefault();
    sunscreen.scrollIntoView({
        behavior: "smooth"
    });
});

moist.addEventListener("click", function(e) {
    e.preventDefault();
    moisturizer.scrollIntoView({
        behavior: "smooth"
    });
});

serum.addEventListener("click", function(e) {
    e.preventDefault();
    serumSection.scrollIntoView({
        behavior: "smooth"
    });
});

face.addEventListener("click", function(e) {
    e.preventDefault();
    facewash.scrollIntoView({
        behavior: "smooth"
    });
});


let cartBtns = document.querySelectorAll(".cart");
let count = 0;
cartBtns.forEach(function(btn) {
    btn.onclick = function(){
        count++;
        alert("Product Added Successfully");
        document.querySelector("#cart-count").innerHTML = count;
    }
});


let links = document.querySelectorAll(".product-title button");
links.forEach(function(link){
    link.onclick = function(){
        links.forEach(function(item){
            item.classList.remove("active");
        });
        this.classList.add("active");
    }
})