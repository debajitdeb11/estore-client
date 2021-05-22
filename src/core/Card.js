import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { addItemToCart, removeItemFromCart } from "./helper/carthelper";
import ImageHelper from "./helper/ImageHelper";

const Card = ({
    product,
    name = "NAME",
    description = "DESCRIPTION",
    price = "10",
    addtoCart = true,
    removeFromCart = false,
}) => {
    const [redirect, setRedirect] = useState(false);

    // const [product, setProduct] = useState([]);

    const getARedirect = (redirect) => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const addToCart = () => {
        return addItemToCart(product, () => setRedirect(true));
    };

    const showAddToCart = () =>
        addtoCart && (
            <button
                onClick={addToCart}
                className="btn btn-block btn-outline-success mt-2 mb-2"
            >
                Add to Cart
            </button>
        );

    const showRemoveFromCart = () =>
        removeFromCart && (
            <button
                onClick={() => removeItemFromCart(product._id)}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
            >
                Remove from cart
            </button>
        );

    return (
        <div className="col-4">
            <div className="card text-white bg-dark border border-info ">
                <div className="card-header lead">{name}</div>
                <div className="card-body">
                    {getARedirect(redirect)}
                    <ImageHelper />
                    <p className="lead bg-success font-weight-normal text-wrap">
                        {description}
                    </p>
                    <p className="btn btn-success rounded  btn-sm px-4">
                        {price}
                    </p>
                    <div className="row">
                        <div className="col-12">{showAddToCart()}</div>
                        <div className="col-12">{showRemoveFromCart()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
