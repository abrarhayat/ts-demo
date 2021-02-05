"use strict";
var num1Element = document.getElementById("num1"); //type casting
var num2Element = document.getElementById("num2");
var buttonElement = document.querySelector("button"); //! assumes that we are certain it is not null
var numArray = [];
var stringArray = [];
buttonElement.addEventListener("click", function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var numResult = add(+num1, +num2);
    var stringResult = add(num1, num2);
    numArray.push(numResult);
    stringArray.push(stringResult);
    console.log(numResult);
    console.log(stringResult);
    printObject({ val: numResult, date: new Date() });
    console.log(numArray);
    console.log(stringArray);
});
var printObject = function (obj) {
    console.log(obj.val, obj.date);
};
var add = function (number1, number2) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        return number1 + number2;
    }
    else if (typeof number1 === "string" && typeof number2 === "string") {
        return number1 + "  " + number2;
    }
    else {
        return +number1 + +number2;
    }
};
