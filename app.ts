const num1Element = document.getElementById("num1") as HTMLInputElement; //type casting
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!; //! assumes that we are certain it is not null

const numArray: number[] = [];
const stringArray: string[] = [];

buttonElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const numResult = add(+num1, +num2);
  const stringResult = add(num1, num2);
  numArray.push(numResult as number);
  stringArray.push(stringResult as string);
  console.log(numResult);
  console.log(stringResult);
  printObject({ val: numResult as number, date: new Date() });
  console.log(numArray);
  console.log(stringArray);
});

function printObject(obj: { val: number; date: Date }) {
  console.log(obj.val, obj.date);
}

const add = (number1: number | string, number2: number | string) => {
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 + number2;
  } else if (typeof number1 === "string" && typeof number2 === "string") {
    return number1 + "  " + number2;
  } else {
    return +number1 + +number2;
  }
};
