import React from 'react';

const Splicemethod = () => {
    const data = ["orange", "banana", "apple", "kiwi"];
    data.splice(2, 2, "Lemon", "kiwi");
  return (
    <>
        {data}
    </>
  )
}

export default Splicemethod;