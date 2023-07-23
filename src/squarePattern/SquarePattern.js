import React from "react";

function SquarePattern() {
  let n = 5;
  let string = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      string += "*";
    }
    string += "\n";
  }
  return (
    <>
      <h2>Square pattern in javascript</h2>
        {string}
    </>
  );
}

export default SquarePattern;