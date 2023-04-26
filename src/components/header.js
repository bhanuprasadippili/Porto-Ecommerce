import "../styles/header.scss";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <div className="header-top">
            <div>
            <p>FREE RETURNS. STANDARD SHIPPING ORDERS $99+</p>
            </div>
            <div className="header-bar">
            <ul>
            <li>My Account</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>My Wishlist</li>
            <li>Cart</li>
            <li>Log In</li>
            </ul>

            <div className="header-tick">
                <select>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <select>
                    <option>ENG</option>
                    <option>FRA</option>
                </select>
            </div>

            <div>
                <ul>
                    <li><FaFacebookF /></li>
                    <li><AiOutlineTwitter /></li>
                    <li><AiOutlineInstagram /></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Header;