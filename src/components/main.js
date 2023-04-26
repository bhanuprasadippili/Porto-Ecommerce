import "../styles/main.scss";
import { FaShippingFast } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Ri24HoursLine } from "react-icons/ri";


const Main = () => {
    return (
        <div className="main">
            <div className="main-div">
                <FaShippingFast className="icon" />
                <span>
                    <b>FREE SHIPPING & RETURN</b>
                    <p>Freeshipping on all orders over $99</p>
                </span>
            </div>

            <div className="main-div">
                <RiMoneyDollarCircleLine className="icon "/>
                <span>
                    <b>MONEY BACK GUARANTEE</b>
                    <p>100% money back guarantee</p>
                </span>
            </div>

            <div className="main-div">
                <Ri24HoursLine className="icon" />
                <span>
                    <b>ONLINE SUPPORT 24/7</b>
                    <p>Lorem ipsum dolor sit amet</p>
                </span>
            </div>
        </div>
    )
}

export default Main;