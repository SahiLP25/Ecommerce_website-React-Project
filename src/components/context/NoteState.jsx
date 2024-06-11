import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// create and export NoteContext
let NoteContext = createContext(null);
export { NoteContext };

// getting data from API
const NoteState = (props) => {
  let [data, setData] = useState(null);
  let [displayItem,SetDisplayItem] = useState(null);
  let [cartItem,SetCartItem] = useState([]);

  let url = `https://dummyjson.com/products`;

  function getData() {
    axios.get(url).then((response) => {
      // console.log(response.data.products);
      setData(response.data.products);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  function HandleAddCart(product){
    let productExist = cartItem.find((item)=> item.id === product.id);

    productExist ?
    SetCartItem(
      cartItem.map((item)=> item.id === product.id ? 
      {...productExist , quantity: productExist.quantity + 1}
      :
      item
    )
    )
    : SetCartItem([...cartItem, {...product, quantity : 1}]);
  }

  function getDisplayItem(product){
    SetDisplayItem(product);
  
  }

  function handleRemoveToCart(product){
    let productExist = cartItem.find((item)=> item.id === product.id);
  
    productExist.quantity === 1 ?
    SetCartItem(
      cartItem.filter((item)=> item.id !== product.id)
    )
    :
    SetCartItem(
      cartItem.map((item)=> item.id === product.id ? 
      {...productExist , quantity: productExist.quantity - 1}
      :
      item
    )
    )
  
  }
  function deleteProduct(product){
    SetCartItem(
      cartItem.filter((item)=> item.id !== product.id)
    )
  }
  
  function clearCart(){
    SetCartItem([]);
  }

  return (
    <NoteContext.Provider value={{data,getDisplayItem,displayItem,HandleAddCart,cartItem,handleRemoveToCart,clearCart,deleteProduct}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
