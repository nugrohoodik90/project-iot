/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import Sidebar from "../../components/Sidebar";
import productAtions from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";

export default function Admin() {
  const store = useSelector(store => store.ProductsReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productAtions());
  },[dispatch])
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 px-2">
        Bagian dashboard
      </div>
    </>
  );
}