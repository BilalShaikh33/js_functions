// function sum(a,b) {
//     // console.log("Sum of a and b is : ", a+b)

//     return a+b
// }

// let num = sum(2,3);
// console.log(num);



const calculator = (a,b,symbol) =>{
    let result;
    if (symbol == "+") {
        result = a+b
        
    }
    if (symbol == "-") {
        result = a-b
        
    }
    if (symbol == "*") {
        result = a*b
        
    }
    if (symbol == "/") {
        result = a/b
        
    }
    return result
  



}




