import React from "react";

import Sidebar from "../../components/Sidebar";
import CardSettings from "../../components/Cards/CardSettings";

export default function Settings() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 px-2 pt-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:12 px-4">
            <CardSettings />
          </div>
        </div>
      </div>
    </>
  );
}