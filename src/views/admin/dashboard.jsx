/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import Sidebar from "../../components/Sidebar";
import productActions from "../../redux/actions/productActions";
import termoActions from "../../redux/actions/termoActions";
import { useDispatch } from "react-redux";
import CardLineChart from "../../components/graphic/CardLineChart";
import CardBarChart from "../../components/graphic/CardBarChart";
import CardPageVisits from "../../components/graphic/CardPageVisits";

export default function Admin() {

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 px-2 pt-4">
        <div className="flex flex-start py-1">
          <div className="w-full xl:w-12 mb-12 xl:mb-0 px-4">
            <CardPageVisits />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
            <CardBarChart />
          </div>
        </div>
      </div>
    </>
  );
}