import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect( () => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
    .then(response => {
      console.log('this is the id', response)
      setColorList(response.data);
    }).catch(error => {
      console.log(error)
    });
  }, []);

  return (
    <>

    
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;