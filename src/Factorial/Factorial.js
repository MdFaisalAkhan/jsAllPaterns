import React from "react";

const Factorial = () => {
  const number = parseInt(prompt("Enter a positive integer: "));

  if (number < 0) {
    alert("Error! Factorial for negative number does not exist.");
  } else if (number === 0) {
    alert(`The factorial of ${number} is 1.`);
  } else {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
      fact *= i;
    }
    alert(`The factorial of ${number} is ${fact}.`);
  }
  return <>{}</>;
};

export default Factorial;
