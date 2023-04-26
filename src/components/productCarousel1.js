import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarouselProducts1 } from "../redux/slice/productsSlice1";
import ProductCard1 from "./productCard1";
import {v4 as uuid} from "uuid";
import "../styles/productCarousel1.scss";


import {GrNext, GrPrevious} from "react-icons/gr"

const ProductCarousel1 = ()=>{
    const products = useSelector(state=> state.Products1.value);
    console.log(products);


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCarouselProducts1());

    },[]);

    const [count, setCount] = useState(0)

    function previous(){
        setCount(count-1);
        let body = document.getElementById("cont");
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
        let body = document.getElementById("cont");
        if(count<products.length-1){
        body.style.transform += "translateX(-300px)";
        body.style.transition = ".3s";
        }else{
        body.style.transform += "translateX(0)";
        setCount(products.length-1)

        }

    }

    return(
        <div className="product-container">
            <b>FEATURED PRODUCTS</b>
        <div id="cont" className="Productcarousel1">
                {products.length && products.map(e=><ProductCard1 key={uuid()} data={e}/>)}
        </div>
        <div className="prev" onClick={previous}><GrPrevious/></div>
            <div className="next" onClick={next}><GrNext/></div>
        </div>
    )
}

export default ProductCarousel1;