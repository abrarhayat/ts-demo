var num1Element = document.getElementById("num1"); //type casting
var num2Element = document.getElementById("num2");
var buttonElement = document.querySelector("button"); //! assumes that we are certain it is not null
buttonElement.addEventListener("click", function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    console.log(result);
});
function add(number1, number2) {
    return number1 + number2;
}
