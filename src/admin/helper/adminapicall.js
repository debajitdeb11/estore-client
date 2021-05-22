import { API } from "../../backend";

// Create categories
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(category),
    })
        .then((response) => response.json())
        .catch((err) => console.error(err));
};

// Get all categories
export const getAllCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET",
    })
        .then((response) => response.json())
        .catch((err) => console.error(err));
};

// Create a product
export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: product,
    })
        .then((response) => response.json())
        .catch((err) => console.error(err));
};

// Get all products
export const getAllProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET",
    })
        .then((response) => response.json())
        .catch((err) => console.error(err));
};

// Get a product
export const getProduct = (productId) => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET",
    })
        .then((response) => response.json())
        .catch((err) => console.error(err));
};

// TODO: Backend Pending
// update a product
export const updateProduct = (userId, token, product, productId) => {
    return fetch(`${API}/product/update/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: product,
    })
        .then((response) => response.json())
        .catch((err) => console.error(err));
};

// TODO: Backend Pending
// delete a product
export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => response.json())
        .catch((err) => console.error(err));
};
