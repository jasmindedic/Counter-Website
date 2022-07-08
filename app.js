"use strict";

let displayCounter = document.querySelector(".text_counter");
let counter = 0;


let buttonCounter = document.querySelector(".counter_btn");

buttonCounter.addEventListener("click", function(e){
    counter++;
    displayCounter.innerHTML = counter;
    
    // When the number is higher than 10 the displayed value should flote a little to the left
    if (counter >= 10){

        displayCounter.style.paddingLeft = "10px";
    };
});


// Create the possibilty to increament the counter with the spacebar
document.onkeydown = function (e) {
    if (e.keyCode == 32) {
        displayCounter.click();
    }
};