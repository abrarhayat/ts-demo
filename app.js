"use strict";
var num1Element = document.getElementById("num1"); //type casting
var num2Element = document.getElementById("num2");
var buttonElement = document.querySelector("button"); //! assumes that we are certain it is not null
buttonElement.addEventListener("click", function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    var result2 = add('test', 'test2');
    console.log(result);
    console.log(result2);
});
var add = function (number1, number2) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        return number1 + number2;
    }
    else if (typeof number1 === 'string' && typeof number2 === 'string') {
        return number1 + "  " + number2;
    }
    else {
        return +number1 + +number2;
    }
};
