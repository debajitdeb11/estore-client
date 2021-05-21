import React from "react";
import { isAuthenticated } from "../authentication/helper";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    const {
        user: { name = "user", email, role },
    } = isAuthenticated();

    const adminLeftSide = () => {
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white">
                    Admin Navigation
                </h4>

                <ul className="list-group">
                    <li className="list-group-item">
                        <Link
                            to="/admin/create/category"
                            className="nav-link text-success"
                        >
                            Create Category
                        </Link>
                    </li>

                    <li className="list-group-item">
                        <Link
                            to="/admin/create/product"
                            className="nav-link text-success"
                        >
                            Create Product
                        </Link>
                    </li>

                    <li className="list-group-item">
                        <Link
                            to="/admin/category"
                            className="nav-link text-success"
                        >
                            Manage Category
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link
                            to="/admin/product"
                            className="nav-link text-success"
                        >
                            Manage Product
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const adminRightSide = () => {
        return (
            <div className="card mb-4">
                <h4 className="card-header">Admin Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Name: </span>{" "}
                        {name.toString().toUpperCase()}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">
                            Email:{" "}
                        </span>{" "}
                        {email}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Role: </span>{" "}
                        {role}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-danger">
                            Admin Privilages
                        </span>
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Base
            title="Welcome to Admin area"
            description="Manage all of your products here"
            className="container bg-warning p-4 "
        >
            <div className="row">
                <div className="col-3">{adminLeftSide()}</div>
                <div className="col-9">{adminRightSide()}</div>
            </div>
        </Base>
    );
};

export default AdminDashboard;
