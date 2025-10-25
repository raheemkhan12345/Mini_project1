let display = document.getElementById("display")
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function press(num){
  display.value += num;
}

function setOperator(op){
  firstNumber = display.value;
  operator = op;
  display.value = "";
}

function calculate(){
  secondNumber = display.value;
  let n1 = Number(firstNumber);
  let n2 = Number(secondNumber);


if (operator === "+"){
  result = n1+n2;
}
else if (operator === "-"){
  result = n1-n2;
}
else if (operator === "*"){
  result = n1*n2;
}
else if (operator === "/" ){
   if (n2 === 0) {
      result = "Cannot divide by 0"; 
    } else {
      result = n1 / n2;
    }
}
  display.value = result;
}

function clearDisplay(){
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  
}
