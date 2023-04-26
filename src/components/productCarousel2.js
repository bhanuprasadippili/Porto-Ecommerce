import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarouselProducts2 } from "../redux/slice/productsSlice2";
import ProductCard2 from "./productCard2";
import {v4 as uuid} from "uuid";
import "../styles/productCarousel2.scss";


import {GrNext, GrPrevious} from "react-icons/gr"

const ProductCarousel2 = ()=>{
    const products = useSelector(state=> state.Products2.value);
    console.log(products);


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCarouselProducts2());

    },[]);

    const [count, setCount] = useState(0)

    function previous(){
        setCount(count-1);
        let body = document.getElementById("cont2");
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
        let body = document.getElementById("cont2");
        if(count<products.length-1){
        body.style.transform += "translateX(-300px)";
        body.style.transition = ".3s";
        }else{
        body.style.transform += "translateX(0)";
        setCount(products.length-1)

        }

    }

    return(
        <div className="product-container2">
            <b>BEST SELLERS</b>
        <div id="cont2" className="Productcarousel2">
                {products.length && products.map(e=><ProductCard2 key={uuid()} data={e}/>)}
        </div>
        <div className="prev2" onClick={previous}><GrPrevious/></div>
            <div className="next2" onClick={next}><GrNext/></div>
        </div>
    )
}

export default ProductCarousel2;