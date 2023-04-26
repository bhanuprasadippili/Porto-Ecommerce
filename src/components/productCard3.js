import React from "react";
import "../styles/productCard3.scss";

const ProductCard3 = ({data}) => {
    return (
        <div className="productCard3">
            <img className="productCard-img3" src={data.pictures && data.pictures[0].url} />
            <p className="text3"><span>{data.categories[0].name}, </span><span> {data.categories[1].name}</span></p>
            <p>{data.name}</p>
            <b>${data.price[0]} - ${data.price[1]}</b>

        </div>
    )
}

export default ProductCard3;