import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import DeliveryPage from "./DeliveryPage";
import HomePage from "./HomePage";
import ItemPage from "./ItemPage";
import ShopPage from "./ShopPage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./LoginPage/RegisterPage";
import AdminPage from "./AdminPage/AdminPage";
import AdminCreate from "./AdminPage/AdminCreate";

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
