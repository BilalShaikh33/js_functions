function sum(a,b) {
    // console.log("Sum of a and b is : ", a+b)

    return a+b
}

let num = sum(2,3);
console.log(num);



const calculator = (a, b, symbol) => {
    let result;
    if (symbol == "+") {
        result = a + b

    }
    if (symbol == "-") {
        result = a - b

    }
    if (symbol == "*") {
        result = a * b

    }
    if (symbol == "/") {
        result = a / b

    }
    else {
        result = "Invalid operator"
    }
    return result



}

var n1 = +prompt("Enter first number: ")
var n2 = +prompt("Enter second number: ")
var op = prompt("Enter operator(+,-,*,/): ")
console.log(calculator(n1, n2, op))



const vowelChecker = (a) => {

    let checker;
    if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
        checker = "It is a vowel"
    }
    else {
        checker = "It is not a vowel"
    }
    return checker
}


var letter = prompt("Enter any character: ").toLowerCase()
console.log(vowelChecker(letter))

