//in progress

function add(numA, numB) {
    return numA + numB;
};

function substract(numA, numB) {
    return numA - numB;
};

function multiply(numA, numB) {
    return numA * numB;
};

function divide(numA, numB) {
    return numA / numB; 
};

function operate(numA, numB) {

};


let display = document.querySelector("#display"); // selecciona div #display


function storeNum() {   
    let clickedNumber = "";
    let numberClass = document.querySelectorAll(".number") // nodelist of number buttons

    for (i = 0; i < numberClass.length; i++) {
        numberClass[i].addEventListener("click", function() {
            clickedNumber += this.id;
            console.log(clickedNumber);
            display.textContent = clickedNumber;
        });
    }
    let clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", function() {
        clickedNumber = "0";
        display.textContent = clickedNumber;
    })
}


storeNum();