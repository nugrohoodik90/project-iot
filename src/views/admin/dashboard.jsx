/* eslint-disable no-unused-vars */
import React from "react";

import Sidebar from "../../components/Sidebar";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 px-2">
        Bagian dashboard
      </div>
    </>
  );
}