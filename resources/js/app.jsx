/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../js/components/AboutUs.jsx";
import DeliveryPage from "../js/components/DeliveryPage.jsx";
import HomePage from "../js/components/HomePage.jsx";
import ItemPage from "../js/components/ItemPage.jsx";
import ShopPage from "../js/components/ShopPage.jsx";
import LoginPage from "../js/components/LoginPage/LoginPage.jsx";

import RegisterPage from "../js/components/LoginPage/RegisterPage.jsx";
import AdminPage from "./components/AdminPage/AdminPage.jsx";
import AdminCreate from "./components/AdminPage/AdminCreate.jsx";

function App() {
    const [state, setState] = useState();
    const [checkState, setCheckState] = useState(1);
    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage state={state} setState={setState} />}
            />
            <Route
                path="/shop"
                element={<ShopPage state={state} setState={setState} />}
            ></Route>
            <Route path="/item/:itemid" element={<ItemPage />}></Route>
            <Route path="/delivery" element={<DeliveryPage />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route
                path="/admin"
                element={
                    <AdminPage checkState={checkState} setCheckState={setCheckState} />
                }
            ></Route>
            <Route
                path="/admin/:create"
                element={
                    <AdminCreate checkState={checkState} setCheckState={setCheckState} />
                }
            ></Route>
        </Routes>
    );
}

export default App;
