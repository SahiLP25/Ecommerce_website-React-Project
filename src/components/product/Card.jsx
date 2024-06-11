import React, { useContext } from 'react';
import './Card.css'
import  { NoteContext } from '../context/NoteState'; // Adjust the path according to your file structure
import Cartbtn from '../cartbtn/Cartbtn';
import { Link } from 'react-router-dom'





const Card = (props) => {
  let apiData = useContext(NoteContext);

 

  return (
    <div>
     {apiData.data ? 
    <section className='pcard'>
      {apiData.data.map((e)=>(
        

      e.images != null ?
      
      <div className="card">

      <Link to='/Display' onClick={()=>{apiData.getDisplayItem(e)}}>
      <img src={e.images} alt="" />
      <h3 className='title'>{e.title}</h3>
      <p className='price'>{e.price}$</p>
      </Link>
     <div className="details">
     
      <Cartbtn e={e}/>
     
     </div>
      </div>
      
      : null
    ))}
    </section>
    : <h1>Loading...</h1>}

    </div>
  );
}

export default Card;
