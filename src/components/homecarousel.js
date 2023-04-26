import '../styles/homecarousel.scss';
import React, { useState } from "react";

import{GrNext,GrPrevious} from 'react-icons/gr';


const HomeCarousel = () => {
    const [count,setcount] = useState(0);

    function previous(){
        setcount(count-1);
        let body = document.getElementById('count');
        if(count>0){
            body.style.transform += "translateX(72rem)";
            body.style.transition = ".2s";
        }else{
            body.style.transform += "translateX(0)";
            setcount(0)
        }
    }
    function Next(){
        setcount(count+1);
        let body = document.getElementById("count");
        if(count<1){
            body.style.transform +="translateX(-72rem)";
            body.style.transition = ".3s";
        }else{
            body.style.transform += "translateX(0)";
            setcount(1);
        }
    }

    return (
    <div className="carousel-container">
    <div id="count" className="carousel-item-cont">
        <div className="carousel-item">
            <div className='homeCarousel-first'>
                <p>Find the Boundaries. Push Through!</p>
                <h2>Jeans Sale</h2>
                <section>
                    <span><h3>up</h3><h3>to</h3></span>
                    <h1>80% OFF</h1>
                </section>
                <div><h5>STARTING AT</h5><b><small>$</small>199<small>99</small></b><button>SHOP NOW!</button></div>
            </div>
        </div>
        <div className="carousel-item">
            <div className='homeCarousel-last'>
                <h3>Women's Business Fashion</h3>
                <section>
                    <span><h2>up</h2><h2>to</h2></span>
                    <h1>60% OFF</h1>
                </section>
                <div><h5>STARTING AT</h5><b><small>$</small>29<small>99</small></b><button>SHOP NOW!</button></div>
            </div>    
        </div>
    
    </div>
    <div className="prev" onClick={previous}><GrPrevious/></div>
    <div className="next" onClick={Next}><GrNext/></div>
</div>

    )
}


export default HomeCarousel;