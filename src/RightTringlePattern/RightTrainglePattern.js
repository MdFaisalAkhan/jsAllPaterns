import React from "react";

const RightTrainglePattern = () => {
  let n = 5;
  let string = "";
  for (let i = 1; i < n; i++) {
      
    for (let j = 0; j <= n - i; j++) {
      string += "*";
    }
    string += " \n";
  }
  return <>{string}</>;
};

export default RightTrainglePattern;
