import "../styles/footer.scss";
import { TiSocialFacebook } from 'react-icons/ti';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer-top">
            <div className="footer-card1">
                <h4>CONTACT INFO</h4>
                <div>
                <span>
                    <p>ADDRESS:</p>
                    <p>1234 Street Name, City, England</p>
                </span>
                <span>
                    <p>PHONE:</p>
                    <p>(123) 456-7890</p>
                </span>
                <span>
                    <p>EMAIL:</p>
                    <p>mail@example.com</p>
                </span>
                <span>
                    <p>WORKING DAYS/HOURS:</p>
                    <p>Mon - Sun / 9:00AM - 8:00PM</p>
                </span>
                </div>
                <section><TiSocialFacebook className="foot-icon"/><AiOutlineTwitter className="foot-icon"/><AiOutlineInstagram className="foot-icon"/></section>
            </div>
            <div className="footer-card2">
                <div className="footer-sub1">
                    <div>
                        <h4>SUBSCRIBE NEWSLETTER</h4>
                        <p>Get all the latest information on Events, Sales and Offers. Sign up for newsletter today.</p>
                    </div>
                    <div>
                        <input placeholder="Email Address" />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <hr/>
                <div className="footer-sub2">
                    <div>
                        <h4>CUSTOMER SERVICE</h4>
                        <section>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>My Account</li>
                            </ul>
                            <ul>
                                <li>Orders History</li>
                                <li>Advanced search</li>
                                <li>Login</li>
                            </ul>
                        </section>
                    </div>
                    <div>
                        <h4>ABOUT US</h4>
                        <section>
                            <ul>
                                <li>Super Fast React Template</li>
                                <li>1st Fully working Ajax Theme</li>
                                <li>33 Unique Shop Layouts</li>
                            </ul>
                            <ul>
                                <li>Powerful Admin Panel</li>
                                <li>Mobile & Retina Optimized</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;