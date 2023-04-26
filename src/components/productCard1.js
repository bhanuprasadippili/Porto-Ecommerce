import React from "react";
import "../styles/productCard1.scss";

const ProductCard1 = ({data}) => {
    return (
        <div className="productCard1">
            <img className="productCard-img1" src={data.pictures && data.pictures[0].url} />
            <p className="text1"><span>{data.categories[0].name}, </span><span> {data.categories[1].name}</span></p>
            <p>{data.name}</p>
            <b>${data.price[0]} - ${data.price[1]}</b>

        </div>
    )
}

export default ProductCard1;