import "../styles/keypoints.scss";
import { RiCustomerServiceLine } from 'react-icons/ri';
import { FiCreditCard } from 'react-icons/fi';
import { GiReturnArrow } from 'react-icons/gi';


const Points = () => {
    return (
        <div className="note-top">
            <div>
                <button><RiCustomerServiceLine/></button>
                <h3>CUSTOMER SUPPORT</h3>
                <h5>Need Assistance?</h5>
                <p>We really care about you and your website as much as you do. Purchasing Porto or any other theme from us you get 100% free support.</p>
            </div>

            <div>
                <button><FiCreditCard/></button>
                <h3>SECURED PAYMENT</h3>
                <h5>Safe & Fast</h5>
                <p>With Porto you can customize the layout, colors and styles within only a few minutes. Start creating an amazing website right now!</p>
            </div>

            <div>
                <button><GiReturnArrow/></button>
                <h3>RETURNS</h3>
                <h5>Easy & Free</h5>
                <p>Porto has very powerful admin features to help customer to build their own shop in minutes without any special skills in web development.</p>
            </div>
        </div>
    )
}

export default Points;