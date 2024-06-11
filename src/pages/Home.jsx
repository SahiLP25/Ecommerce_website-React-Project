import React, { useEffect, useState } from 'react';

// Css file
import './Home.css'

// Slider Images

import one from '../assets/sliderimg/one.webp'
import two from '../assets/sliderimg/two.webp'
import three from '../assets/sliderimg/three.webp'
import four from '../assets/sliderimg/four.webp'
import five from '../assets/sliderimg/five.webp'

// React icoons

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Card from '../components/product/Card';


const Home = () => {


let imgarr=[one,two,three,four,five]
let [cnt,setCnt] = useState(0)
let [slider,setSlider] = useState(imgarr[cnt])


function pre(){
cnt==0?setCnt(4):setCnt(cnt-1);
}


function next(){
cnt==4?setCnt(0):setCnt(cnt+1);
}



useEffect(()=>{
    setSlider(imgarr[cnt]);
},[cnt])


useEffect(()=>{
    setInterval(()=>{next()},[6000])
},[])


    return (
        <div>
           <div className="slider">
            <img src={slider} alt="slider" />
            <button className='pre' onClick={pre}><GrPrevious /></button>
            <button className='next' onClick={next}><GrNext /></button>
           </div>
           <Card/>
        </div>
    );
}

export default Home;
