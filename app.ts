const num1Element = document.getElementById("num1") as HTMLInputElement; //type casting
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!; //! assumes that we are certain it is not null

buttonElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  console.log(result);
});

function add(number1: number, number2: number) {
  return number1 + number2;
}
