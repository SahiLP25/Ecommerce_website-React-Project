import React, { useContext } from 'react';
import './Display.css'
import { NoteContext } from '../context/NoteState';
import Cartbtn from '../cartbtn/Cartbtn'
import { Navigate } from 'react-router-dom';

const Display = () => {
    let data = useContext(NoteContext)
    console.log(data.displayItem);
    return (
        
            data.displayItem ? 


            <div className='display'>
            <div className="imgcard"><img src={data.displayItem.images} alt="" />         
            </div>
            <div className="descard">
            <h2 className='destitle'>{data.displayItem.title}</h2> 
            <h4 className='desprice'>{data.displayItem.price}$</h4>
            
            <h4 className='desbrand'>Brand : {data.displayItem.brand}</h4>
            <h5 className='descat'>{data.displayItem.category}</h5>
            <hr />
            <p className='desdec'>{data.displayItem.description}</p>
            
            <h4 className='desdiscount'> Discount : {data.displayItem.discountPercentage}%</h4>
            <h4 className='desrating'> Rating : {data.displayItem.rating}</h4>
            <Cartbtn e={data.displayItem}/>
            </div>
            
            
            </div>
            
            
            
            
            : <Navigate to='/'/>
        
    );
}

export default Display;
