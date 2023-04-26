import "../styles/navbar2.scss";
import Modal from "./modal";


const Navbar2 = ()=> {
    return (
        <div className="navbar2-top">
            <Modal/>
            <ul>
            <li>HOME</li>
            <li>CATEGORIES</li>
            <li>PRODUCTS</li>
            <li>PAGES</li>
            <li>BLOG</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            </ul>

            <ul>
                <li>SPECIAL OFFER!</li>
                <li>BUY PORTO!</li>
            </ul>
        </div>
    )
}

export default Navbar2;