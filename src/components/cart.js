import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/cart.scss";
import { addToCart, removeFromCart } from "../redux/slice/cartSlice";


const ShoppingCart = (prop) => {
    const cart = useSelector(state => state.Cart);
    const dispatch = useDispatch();
    return (
        <div className={prop.pass ? ("cart" + " " + "cartmove") : "cart"}>
            <AiOutlineClose onClick={() => prop.setPass(false)} className="close" />
            <div className="cart-container">
                <u><h3>Shopping Cart</h3></u>
                <div className="cart-product-container">
                    {cart.items.map(e => {
                        return (
                            <div className="cart-item">
                                <div className="cart-item-header">
                                    <div style={{paddingBottom:'1rem'}} className="cart-item-price">
                                        <p>{e.name}</p>
                                        <p>{e.cartQty}*{e.price[0]}</p>
                                    
                                    <div style={{display:"flex", gap:"1rem"}}>
                <button onClick={() => dispatch(removeFromCart(e))} >Remove</button> 
                <button onClick={() => dispatch(addToCart(e))} >Add</button>
                </div>
                </div>
                                    <img className="cart-img" src={e.pictures && e.pictures[0].url}></img>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h4>Total: ${cart.totalPrice}</h4>
                <button>CHECKOUT</button>

            </div>
        </div>
    )
}

export default ShoppingCart;