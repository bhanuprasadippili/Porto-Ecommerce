import React from "react";
import "../styles/productCard.scss";
import { BsCartXFill } from 'react-icons/bs';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slice/cartSlice";



const ProductCard4= ({data}) => {
    const cart = useSelector(state => state.Cart);
    // console.log(cart)
    const dispatch = useDispatch();
    
    return (
        <div className="product-card">
            
            <div><img className="product-image" src={data.pictures && data.pictures[0].url} />
            <div className="cart-icon">
                <button><BsCartXFill onClick={() => dispatch(removeFromCart(data))} /></button> 
                <button><BsFillCartCheckFill onClick={() => dispatch(addToCart(data))}/></button>
                </div>
            </div>
             <p className="text4"><span>{data.categories[0].name}, </span><span> {data.categories[1].name}</span></p>
            <p>{data.name}</p>
            <b>${data.price[0]} - ${data.price[1]}</b> 

        </div>
    )
}

export default ProductCard4;