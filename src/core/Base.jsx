import React from "react";
import { Button } from "react-bootstrap";
import Menu from "./Menu";

const Base = ({
    title = "My Title",
    description = "My description",
    className = "bg-dark text-white p-4",
    children
}) => {
    return (<div>
        <Menu></Menu>
        <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="footer bg-dark mt-auto py-3">
            <div className="container-fluid bg-success text-white text-center py-3">
                <h4>If you have query contact us</h4>
                <Button variant="warning" className="btn btn-lg">Contact us</Button>
            </div>
            <div className="container">
                <span className="text-muted">
                    An Amazing place to <span className="text-white" >Buy Stuff</span>
                </span>
            </div>
        </footer>

    </div>)
};

export default Base;