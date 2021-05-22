import React, { useEffect, useState } from "react";
import Card from "./Card";
import Base from "./Base";
import { loadCart } from "./helper/carthelper";

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        return setProducts[loadCart()];
    }, []);

    const loadAllProducts = () => {
        return (
            <div>
                <h2>This section is to load products</h2>
            </div>
        );
    };

    const loadCheckout = () => {
        return (
            <div>
                <h2>This section is for checkout</h2>

                {products.map((item, idx) => {
                    return (
                        <Card
                            product={item}
                            key={idx}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            addtoCart="false"
                            removeFromCart="true"
                        />
                    );
                })}
            </div>
        );
    };

    return (
        <Base title="Cart Page" description="Ready to checkout">
            <div className="row text-center">
                <div className="col-6">{loadAllProducts()}</div>
                <div className="col-6">{loadCheckout()}</div>
            </div>
        </Base>
    );
};

export default Cart;
