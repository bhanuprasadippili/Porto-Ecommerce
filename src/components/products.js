import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/productsSlice";
import ProductCard4 from "./productCard";
import {v4 as uuid} from "uuid";
import "../styles/products.scss";

const ProductItems = ()=>{
    const products = useSelector(state=> state.Products4.value);
    console.log(products);


    const dispatch = useDispatch();

    
    useEffect(()=>{
        dispatch(fetchProducts());

    },[]);



    return(
        <div className="productitem-top">
        <div className="product-group">
                {products.length && products.map(e=><ProductCard4 key={uuid()} data={e}/>)}
        </div>
         </div>
    )
}

export default ProductItems;