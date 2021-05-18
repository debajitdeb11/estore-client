import React, { useState } from "react";
import Base from "../core/Base";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
    authenticate,
    isAuthenticated,
    signin,
} from "../authentication/helper";

const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false,
    });

    const { email, password, error, loading, didRedirect } = values;

    const { user } = isAuthenticated();

    const handleChange = (name) => (e) => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({
            email,
            password,
        })
            .then((data) => {
                if (error.data) {
                    setValues({ ...values, error: data.error, loading: false });
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            didRedirect: true,
                        });
                    });
                }
            })
            .catch((err) => {
                console.error("Something went wrong", err);
            });
    };

    const performRedirect = () => {
        if (didRedirect) {
            if (user && user.role === 1) {
                return <p>Redirect to admin</p>;
            } else {
                return <p>Redirect to user dashboard</p>;
            }
        }

        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    const onFailure = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-success"
                        style={{ display: error ? "" : "none" }}
                    >
                        {error}
                    </div>
                </div>
            </div>
        );
    };

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        );
    };

    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input
                                className="form-control"
                                type="email"
                                required
                                placeholder="user@abc.xyz"
                                value={email}
                                onChange={handleChange("email")}
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                required
                                value={password}
                                placeholder="********"
                                onChange={handleChange("password")}
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
        <Base title="Sign in" description="Please signin here">
            {loadingMessage()}
            {onFailure()}
            {signInForm()}
            {performRedirect()}
        </Base>
    );
};

export default Signin;
