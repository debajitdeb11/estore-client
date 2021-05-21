import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import PrivateRoute from "./authentication/helper/PrivateRoute";
import AdminRoute from "./authentication/helper/AdminRoute";
import UserDashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";
export default function Routers() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/signin" exact component={Signin} />
                    <PrivateRoute
                        path="/user/dashboard"
                        exact
                        component={UserDashboard}
                    />
                    <AdminRoute
                        path="/admin/dashboard"
                        exact
                        component={AdminDashboard}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
