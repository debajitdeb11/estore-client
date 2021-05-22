import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../authentication/helper/index";
import { Link } from "react-router-dom";
import { createProduct, getAllCategories } from "./helper/adminapicall";
import {} from "../admin/helper/adminapicall";

const AddProduct = () => {
    const { user, token } = isAuthenticated();

    const [values, setValues] = useState({
        description: "",
        name: "",
        price: "",
        stock: "",
        photo: "",
        categories: [],
        category: "",
        loading: false,
        error: "",
        createdProduct: "",
        getaRedirect: false,
        formData: "",
    });

    const {
        name,
        description,
        price,
        stock,
        categories,
        category,
        loading,
        error,
        createdProduct,
        getaRedirect,
        formData,
    } = values;

    const preload = () => {
        return getAllCategories().then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    categories: data,
                    formData: new FormData(),
                });
                console.log("Form Data: \n", formData);
            }
        });
    };

    useEffect(() => {
        return preload();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, error: "", loading: true });
        return createProduct(user._id, token, formData).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: "",
                    description: "",
                    price: "",
                    stock: "",
                    photo: "",
                    loading: false,
                    createdProduct: data.name,
                });
            }
        });
    };

    const onSuccess = () => {
        return (
            <div
                className="alert alert-success mt-3"
                style={{ display: createdProduct ? "" : "none" }}
            >
                <h4>{createProduct} created successfully </h4>
            </div>
        );
    };

    const onFailure = () => {
        return (
            <div
                className="alert alert-danger mt-3"
                style={{ display: error ? "" : "none" }}
            >
                <h4>{error}</h4>
            </div>
        );
    };

    const handleChange = (name) => (event) => {
        const value =
            name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, error: "" });
    };

    const createProductForm = () => (
        <form>
            <span>Post photo</span>
            <div className="form-group">
                <label className="btn btn-block btn-success">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image"
                        placeholder="choose a file"
                    />
                </label>
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("name")}
                    name="photo"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                />
            </div>
            <div className="form-group">
                <textarea
                    onChange={handleChange("description")}
                    name="photo"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("price")}
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                />
            </div>
            <div className="form-group">
                <select
                    onChange={handleChange("category")}
                    className="form-control"
                    placeholder="Category"
                >
                    <option>Select</option>

                    {categories &&
                        categories.map((item, idx) => (
                            <option key={idx} value={item._id}>
                                {item.name}
                            </option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("stock")}
                    type="number"
                    className="form-control"
                    placeholder="Quantity"
                    value={stock}
                />
            </div>

            <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-outline-success my-3"
            >
                Create Product
            </button>
        </form>
    );

    return (
        <Base
            title="Create Products"
            description="Create your Products here"
            className="container bg-info p-4"
        >
            <Link
                className="btn btn-sm btn-warning mb-3 "
                to="/admin/dashboard"
            >
                Admin Home
            </Link>

            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">
                    {onSuccess()} {onFailure()}
                    {createProductForm()}
                </div>
            </div>
        </Base>
    );
};

export default AddProduct;
