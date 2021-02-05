"use strict";
const num1Element = document.getElementById("num1"); //type casting
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button"); //! assumes that we are certain it is not null
const numArray = []; //alt syntax to number[]
const stringArray = [];
buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const numResult = add(+num1, +num2);
    const stringResult = add(num1, num2);
    numArray.push(numResult);
    stringArray.push(stringResult);
    console.log(numResult);
    console.log(stringResult);
    printObject({ val: numResult, date: new Date() });
    console.log(numArray);
    console.log(stringArray);
});
const printObject = (obj) => {
    console.log(obj.val, obj.date);
};
const add = (number1, number2) => {
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
//specifying the type to which the promise will resolve to
const promise = new Promise((resolve, reject) => {
    const worked = true;
    if (worked) {
        setTimeout(() => {
            resolve("Test Result - Worked!");
        }, 1000);
    }
    else {
        reject(new Error("Test Result - Failed!"));
    }
});
promise
    .then((result) => {
    console.log(result.split(" "));
})
    .catch((err) => {
    console.log(err);
});
