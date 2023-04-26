import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarouselProducts3 } from "../redux/slice/productsSlice3";
import ProductCard3 from "./productCard3";
import {v4 as uuid} from "uuid";
import "../styles/productCarousel3.scss";


import {GrNext, GrPrevious} from "react-icons/gr"

const ProductCarousel3 = ()=>{
    const products = useSelector(state=> state.Products3.value);
    console.log(products);


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCarouselProducts3());

    },[]);

    const [count, setCount] = useState(0)

    function previous(){
        setCount(count-1);
        let body = document.getElementById("cont3");
        if(count>0){
        body.style.transform += "translateX(300px)";
        body.style.transition = ".3s";
        }else{
        body.style.transform += "translateX(0)";
        setCount(0)
            
        }
    }
    function next(){
        setCount(count+1);
        let body = document.getElementById("cont3");
        if(count<products.length-1){
        body.style.transform += "translateX(-300px)";
        body.style.transition = ".3s";
        }else{
        body.style.transform += "translateX(0)";
        setCount(products.length-1)

        }

    }

    return(
        <div className="product-container3">
            <b>NEW ARRIVALS</b>
        <div id="cont3" className="Productcarousel3">
                {products.length && products.map(e=><ProductCard3 key={uuid()} data={e}/>)}
        </div>
        <div className="prev3" onClick={previous}><GrPrevious/></div>
            <div className="next3" onClick={next}><GrNext/></div>
        </div>
    )
}

export default ProductCarousel3;