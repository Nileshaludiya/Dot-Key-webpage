let sun = document.querySelector("#sun");
let moist = document.querySelector("#moist");
let serum = document.querySelector("#serum");
let face = document.querySelector("#face");

let sunscreen = document.querySelector("#sunscreen");
let moisturizer = document.querySelector("#moisturizer");
let serumSection = document.querySelector("#serum-section");
let facewash = document.querySelector("#facewash");

smoothScroll(sun, sunscreen);
smoothScroll(moist, moisturizer);
smoothScroll(serum, serumSection);
smoothScroll(face, facewash);

function smoothScroll(button, section) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        section.scrollIntoView({
            behavior: "smooth"
        });
    });
}



let cartBtns = document.querySelectorAll(".cart");
let count = 0;

cartBtns.forEach(function (btn) {

    btn.addEventListener("click", function () {

        count++;

        document.querySelector("#cart-count").innerHTML = count;

        // alert("Product Added Successfully");

    });

});


let links = document.querySelectorAll(".product-title button");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        links.forEach(function (item) {
            item.classList.remove("btn-active");
        });

        this.classList.add("btn-active");

    });

});



let weightBoxes = document.querySelectorAll(".outer-box");

weightBoxes.forEach(function (box) {

    let buttons = box.querySelectorAll(".weight");
    let prices = box.querySelectorAll(".price");

    // Default Active Button
    if (buttons.length >= 1) {
        buttons[0].classList.add("active");
    }

    buttons.forEach(function (btn, index) {

        btn.addEventListener("click", function () {

            // Active Button Change
            buttons.forEach(function (b) {
                b.classList.remove("active");
            });

            this.classList.add("active");

            // Price Change
            if (prices.length > 1) {

                prices.forEach(function (price) {
                    price.classList.add("hide-price");
                });

                prices[index].classList.remove("hide-price");
            }

        });

    });

});

let searchInput = document.querySelector("#search-input");

let products = document.querySelectorAll(".outer-box");

searchInput.addEventListener("keyup", function () {

    let value = searchInput.value.toLowerCase();

    products.forEach(function(product){

        let title = product.querySelector(".title-print").innerText.toLowerCase();

        if(title.includes(value)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }

    });

});
