import React, { useContext } from 'react';
import './Cartbtn.css'
import { NoteContext } from '../context/NoteState';
const Cartbtn = (props) => {
    let data=useContext(NoteContext)
    console.log(props.e);
    return (
        <div>
            <button className='cartbtn' onClick={()=>data.HandleAddCart(props.e)} >Add to Cart</button>
        </div>
    );
}

export default Cartbtn;
