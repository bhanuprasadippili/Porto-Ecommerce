import "../styles/navbar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "./cart";

const Navbar = () => {
    const [display, setDisplay] = useState(false);
    const cart = useSelector(state => state.Cart);
    
    return (
        <div className="navbar-top">
            <img src="https://d-themes.com/react/porto/demo5/images/logo.png" alt="" />
            <p>
                <input placeholder="Search..." />  |   
                <select>
                <option>All Categories</option>
                <option>Fashion</option>
                <option>-Women</option>
                <option>-Men</option>
                <option>-Jewellery</option>
                <option>-Kids Fashion</option>
                <option>Electronics</option>
                <option>-Smart TVs</option>
                <option>-Cameras</option>
                <option>-Games</option>
                <option>Home & Garden</option>
                <option>Motors</option>
                <option>-Cars & Trucks</option>
                <option>-Motorcycles & Powersports</option>
                <option>-Parts & Accesories</option>
                <option>-Boats</option>
                <option>-Auto Tools & Supplies</option>
                </select> |

                <AiOutlineSearch/>
            </p>
            <div className="navbar-dial">
                <BsTelephone className="dial"/>
                <span>
                    <l>CALL US NOW</l>
                    <b>+123 4567 890</b>
                </span>
            </div>

            <div className="prof">
                <VscAccount/>
                <AiOutlineHeart/>
                <div className="cart-product"  onClick={() => setDisplay(true)}>
                <BsHandbag/>
                <div className="count">{cart.totalQty}</div>
                </div>
                <div><ShoppingCart pass={display} setPass={setDisplay}/></div>

            </div>
        </div>
    )
}

export default Navbar;