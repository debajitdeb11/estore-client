import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { signup } from "../authentication/helper";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signup = () => {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        error: "",
        success: false,
    });

    const { firstname, lastname, email, password, error, success } = values;

    const handleChange = (name) => (e) => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        signup({
            firstname,
            lastname,
            email,
            password,
        })
            .then((data) => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false });
                } else {
                    setValues({
                        ...values,
                        firstname: "",
                        lastname: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true,
                    });
                }
            })
            .catch((err) => {
                console.error("Error has occurred", err);
            });
    };

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-success"
                        style={{ display: success ? "" : "none" }}
                    >
                        New account was created successfully. Please{" "}
                        <Link to="/signin">sign in here</Link>
                    </div>
                </div>
            </div>
        );
    };

    const failureMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        {error}
                    </div>
                </div>
            </div>
        );
    };

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form action="">
                        <div className="form-group">
                            <label className="text-light">First Name</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange("firstname")}
                                value={firstname}
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-light">Last Name</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange("lastname")}
                                value={lastname}
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input
                                className="form-control"
                                type="email"
                                onChange={handleChange("email")}
                                value={email}
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                onChange={handleChange("password")}
                                value={password}
                            />
                        </div>

                        <div>
                            <Button
                                variant="success"
                                className="btn-block"
                                onClick={onSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    return (
        <Base title="Sign up" description="Please signup here">
            {successMessage()}
            {failureMessage()}
            {signUpForm()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    );
};

export default Signup;
