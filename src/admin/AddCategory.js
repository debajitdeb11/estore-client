import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../authentication/helper/index";
import { Link } from "react-router-dom";
import { createCategory } from "./helper/adminapicall";
const AddCategory = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const { user, token } = isAuthenticated();

    const goBack = () => {
        return (
            <div className="mt-5">
                <Link
                    className="btn btn-sm btn-info mb-3 "
                    to="/admin/dashboard"
                >
                    Admin Home
                </Link>
            </div>
        );
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        // backend request
        createCategory(user._id, token, { name }).then((data) => {
            if (data.error) {
                setError(true);
            } else {
                setError("");
                setSuccess(true);
                setName("");
            }
        });
    };

    const handleChange = (e) => {
        setError("");
        setName(e.target.value);
    };

    const onSuccess = () => {
        if (success) {
            return (
                <h4 className="text-success">Category Created Successfully</h4>
            );
        }
    };

    const onFailure = () => {
        if (error) {
            return <h4 className="text-danger">Unable to create category</h4>;
        }
    };

    const myCategoryForm = () => {
        return (
            <form>
                <div className="form-group">
                    <p className="lead">Enter the Category</p>
                    <input
                        className="form-control my-3"
                        autoFocus
                        required
                        placeholder="Electronics, Smartphone ...."
                        value={name}
                        onChange={handleChange}
                    />
                    <button onClick={onSubmit} className="btn btn-outline-info">
                        Create Category
                    </button>
                </div>
            </form>
        );
    };

    return (
        <Base
            title="Create a new Category"
            description="Create a new category for products"
            className="container bg-info"
        >
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {onSuccess()} {onFailure()}
                    {goBack()}
                    {myCategoryForm()}
                </div>
            </div>
        </Base>
    );
};

export default AddCategory;
