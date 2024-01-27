import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Admin from "./views/admin/dashboard"
import Landing from "./views/index"
import Settings from "./views/admin/setting";
import Tables from "./views/admin/table";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/dashboard" element={<Admin />}/>
          <Route path="/admin/settings" element={<Settings />}/>
          <Route path="/admin/tables" element={<Tables />}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
