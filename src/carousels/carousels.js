import "../styles/carousels.scss";

import ProductCarousel1 from "../components/productCarousel1";
import ProductCarousel2 from '../components/productCarousel2';
import ProductCarousel3 from '../components/productCarousel3';

const Carousels = () => {
    return (
        <div className="carousel-top">
            <ProductCarousel1/>
            <ProductCarousel2/>
            <ProductCarousel3/>
        </div>
    )
}

export default Carousels;