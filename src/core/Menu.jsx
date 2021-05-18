import React from "react";
import { Link, withRouter } from "react-router-dom";
const Menu = ({history}) => {

    const activeTab = (history, path)=> {
        if (history.location.pathname === path) {
            return {color: "#2ecc72"}
        } else {
            return {color: "#FFFFFF"}
        }

    }

    return (
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link style={activeTab(history, "/")} className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={activeTab(history, "/cart")} to="/cart">Cart</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={activeTab(history, "/user/dashboard")} to="/user/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={activeTab(history, "/admin/dashboard")} to="/admin/dashboard">Admin Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={activeTab(history, "/signin")} to="/signin">Sign</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={activeTab(history, "/signup")} to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={activeTab(history, "/signout")} to="/signout">Signout</Link>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Menu);