import React from "react";
import { Button } from "react-bootstrap";

import Base from "./Base";
const Home = () => {
    return (
        <Base title="Home Page">
            <div className="row">
                <div className="col-4">
                    <Button variant="success">TEST</Button>
                </div>
                <div className="col-4">
                <Button variant="success">TEST</Button>

                </div>
                <div className="col-4">
                <Button variant="success">TEST</Button>

                </div>
            </div>
        </Base>
    );
};

export default Home;
