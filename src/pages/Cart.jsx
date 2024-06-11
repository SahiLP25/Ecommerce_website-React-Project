import React, { useContext } from 'react';
import { NoteContext } from '../components/context/NoteState';
import './Cart.css'

// icon import
import { MdDelete } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";


const Cart = () => {
    let data=useContext(NoteContext)
    // console.log(data.cartItem);
    return (
        <div className="cartinfo">
        <h1>SHOPING CART</h1>
        
          {
            data.cartItem ?
        data.cartItem.map((e)=>(
          <section className='mcart'>
            
            <img className='imgss' src={e.images} alt="" />
           
            <div className="itemdec">
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </div>
            <div className="cprice">
              <h3>{e.price}$</h3>
            </div>
            <div className="quantity">
              <button onClick={()=>data.handleRemoveToCart(e)}><IoMdRemove /></button>
              <div>{e.quantity}</div>
              <button onClick={()=>data.HandleAddCart(e)}><IoMdAdd /></button>
              
            </div>
            <div className="extra">
            <button onClick={()=> data.deleteProduct(e)}><MdDelete /></button>
            
            </div>
            <div className="cclear">
            <button onClick={data.clearCart}><FaDeleteLeft /></button>
            </div>
    
          </section>
        ))
        :
        <h3>Cart is Empthy</h3>
          }
        </div>
    );
}

export default Cart;
