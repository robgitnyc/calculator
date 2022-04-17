//in progress lalalalalalalalala probando cambios 

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
    return add(numA, numB);
};
let display = document.querySelector("#displayID"); // selecciona div #display  
let operand = "";
let numberClass = document.querySelectorAll(".number") // nodelist of number buttons
for (i = 0; i < numberClass.length; i++) {
    numberClass[i].addEventListener("click", function abc() {
          operand += this.id;
          console.log(operand);
          display.textContent = operand;
          });
}

let result = "";
let arrOperand1 = [];
let arrOperand2 = [];
let tmpResult = [];
let lastOperator = "";

let operatorClass = document.querySelectorAll(".operator");
for (i = 0; i < operatorClass.length ; i++) {
    operatorClass[i].addEventListener("click", function () {
            lastOperator = this.id;
            console.log(this.id);
            display.textContent = this.id;
        
         //   splittedArray = operand.split(/[.\*+-/_]/);
      
            arrOperand1.push(operand); 
            operand = ""; 

    });
};
let equalBtn = document.querySelector("#equals");
equalBtn.addEventListener("click", function precalc() {
    arrOperand2.push(operand)
    operand = "";
    calculate(+arrOperand1[arrOperand1.length-1], +arrOperand2[arrOperand2.length-1]);

});

function calculate(op1, op2) {
    if (lastOperator=="+") {
 //   console.log(arrOperand1);
 //   console.log(arrOperand2);
      result = add(op1, op2);
      console.log(result);
      display.textContent = result;
      operand = result;
  
     // arrOperand1.push(+result+" f calculateA");
    //  console.log(arrOperand1+" arrOpnd1");
    //  console.log(arrOperand2+" arrOpnd2");
    }   else if (lastOperator == "-") {
        result = substract(op1, op2);
        console.log(result);
        display.textContent = result;
        operand = result;
    } else if (lastOperator == "*") {
        result = multiply(op1, op2);
        console.log(result);
        display.textContent = result;
        operand = result;
    } else if (lastOperator == "/") {
        result = divide(op1, op2);
        console.log(result);
        display.textContent = result;
        operand = result;
    };
    operand = "";


}
let clearBtn = document.querySelector("#clear_all");
clearBtn.addEventListener("click", function() {
    operand = "";
    lastOperator = "";
    arrOperand1 = [];
    arrOperand2 = [];
    display.textContent = "0";


})

