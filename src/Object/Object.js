import React from "react";

const Object = () => {
  const object1 = { a: "foo", b: 42, c: {} };

  const a = "foo";
  const b = 42;
  const c = {};
  const object2 = { a: a, b: b, c: c };
  const object3 = { a, b, c };
  return <>
      {object3.a}{object3.b}
  </>;
};

export default Object;
