import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../authentication/helper";
import Base from "../core/Base";
import {
    getAllProducts,
    getProduct,
    deleteProduct,
} from "./helper/adminapicall";
const ManageProduct = () => {
    const { user, token } = isAuthenticated();

    const [products, setProducts] = useState([]);

    const preload = () => {
        return getAllProducts().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data);
                setProducts(data);
            }
        });
    };

    // TODO: Backend work remain
    const deleteAProduct = (productId) => {
        deleteProduct(productId, user, token).then((data) => {
            if (data.error) {
                console.error(data.error);
            } else {
                preload();
            }
        });
    };

    useEffect(() => {
        return preload();
    }, []);

    return (
        <Base title="Welcome admin" description="Manage products here">
            <h2 className="mb-4">All products:</h2>
            <Link className="btn btn-info" to={`/admin/dashboard`}>
                <span className="">Admin Home</span>
            </Link>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-white my-3">
                        {products.length}
                    </h2>

                    {products &&
                        products.map((item, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="row text-center mb-2 "
                                >
                                    <div className="col-4">
                                        <h3 className="text-white text-left">
                                            {item.name}
                                        </h3>
                                    </div>
                                    <div className="col-4">
                                        <Link
                                            className="btn btn-success"
                                            to={`/admin/product/update/${item._id}`}
                                        >
                                            <span className="">Update</span>
                                        </Link>
                                    </div>
                                    <div className="col-4">
                                        <button
                                            onClick={() => {
                                                deleteAProduct(item._id);
                                            }}
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </Base>
    );
};

export default ManageProduct;
