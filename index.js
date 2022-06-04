let calcSum = (a, b) => a+b;
let calcMinus = (a, b) => a-b;
let calcMultiply = (a, b) => a*b;
let calcDivision = (a, b) => a/b;
let askQuestion = function(){
    let firstNumber = +prompt("Enter first number", "")
    let secondNumber = +prompt("Enter second number", "")
    let operation = prompt("Enter operator", "")
    if (isNaN(firstNumber) || isNaN(secondNumber)){
        alert ("Your input is not a number")
    }else{
        if (operation === "+"){
            alert (calcSum(firstNumber, secondNumber))
        }else if (operation === "-"){
            alert (calcMinus(firstNumber, secondNumber))
        }else if (operation === "*"){
            alert (calcMultiply(firstNumber, secondNumber))
        }else if (operation === "/") {
            alert(calcDivision(firstNumber, secondNumber))
        }else{
            alert("Invalid operator")
        }
    }

}
askQuestion();

