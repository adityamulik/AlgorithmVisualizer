import React, { useEffect } from 'react';
import D3 from './D3';

const BinarySearchTree = (data) => {

  useEffect(() => {
    console.log(data);
  }, [])

  return(
    <div>
      <p>SVG goes here</p>
      <D3 data={data}/>
    </div>
  )
}

export default BinarySearchTree;