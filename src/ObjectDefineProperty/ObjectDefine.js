import React from 'react';

const ObjectDefine = () => {
    const object1 = {};
    Object.defineProperties(object1, 'property1', {
        value: 33,
        writable: false
        });
  return (
    <>
    {object1.property1}
    </>
  )
}

export default ObjectDefine;