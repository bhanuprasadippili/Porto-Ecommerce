import React from "react";
import "../styles/productCard2.scss";

const ProductCard2 = ({data}) => {
    return (
        <div className="productCard2">
            <img className="productCard-img2" src={data.pictures && data.pictures[0].url} />
            <p className="text2"><span>{data.categories[0].name}, </span><span> {data.categories[1].name}</span></p>
            <p>{data.name}</p>
            <b>${data.price[0]} - ${data.price[1]}</b>

        </div>
    )
}

export default ProductCard2;