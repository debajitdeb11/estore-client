import React, { useEffect, useState } from "react";
import Card from "./Card";
import Base from "./Base";
import { getAllProducts } from "../admin/helper/adminapicall";

const Home = () => {
    const [products, setProducts] = useState([]);

    const preload = () => {
        return getAllProducts().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    useEffect(() => {
        return preload();
    }, []);

    return (
        <Base title="Home Page">
            <div className="row text-center">
                {products.map((item, idx) => {
                    console.log(item.name);
                    return (
                        <Card
                            key={idx}
                            product={item}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    );
                })}

                {/* <div className="col-4">
                    <Button variant="success">TEST</Button>
                </div>
                <div className="col-4">
                <Button variant="success">TEST</Button>

                </div>
                <div className="col-4">
                <Button variant="success">TEST</Button>

                </div> */}
            </div>
        </Base>
    );
};

export default Home;
