import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import PrivateRoute from "./authentication/helper/PrivateRoute";
import AdminRoute from "./authentication/helper/AdminRoute";
import UserDashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import ManageCategory from "./admin/ManageCategory";
import AddProduct from "./admin/AddProduct";
import ManageProduct from "./admin/ManageProduct";
import UpdateProduct from "./admin/UpdateProduct";

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
                    <AdminRoute
                        path="/admin/create/category"
                        exact
                        component={AddCategory}
                    />
                    <AdminRoute
                        path="/admin/categories"
                        exact
                        component={ManageCategory}
                    />
                    <AdminRoute
                        path="/admin/create/product"
                        exact
                        component={AddProduct}
                    />
                    <AdminRoute
                        path="/admin/products"
                        exact
                        component={ManageProduct}
                    />

                    <AdminRoute
                        path="/admin/product/update/:productId"
                        exact
                        component={UpdateProduct}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
