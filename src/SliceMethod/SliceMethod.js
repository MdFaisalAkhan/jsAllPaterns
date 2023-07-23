import React from "react";

function SliceMethod() {
  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const myBest = fruits.slice(-4, -2);
  return <>
      {myBest}
  </>;
}

export default SliceMethod;
