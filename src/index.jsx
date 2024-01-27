import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Admin from "./layouts/Admin"
import Landing from "./views/index"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/dasboard" element={<Admin />}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
