import React from "react";

const ReversedPyramidPattern = () => {
  let n = 5;
  let string = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      string += "";
    }
    for (let k = 0; k < 2 * (n - 1) - 1; k++) {
      string += " ";
    }
    string += "\n";
  }
  return <>{string}</>;
};

export default ReversedPyramidPattern;
