import React, { useEffect } from "react";
import { ItemsDropsdowns } from "../ItemsDropdowns";
import { useDispatch, useSelector } from "react-redux";

import relaysActions from "../../redux/actions/relayActions";

// components
export const drop = [
  {
    "key": "1",
    "lable": "1000"
  },
  {
    "key": "2",
    "lable": "2000"
  },
  {
    "key": "3",
    "lable": "3000"
  }
]
export const RelayOptions = [
  {
    "key": true,
    "lable": "On"
  },
  {
    "key": false,
    "lable": "Off"
  },
]

export default function CardSettings() {
  const dataRelays = useSelector((state) => state.RelaysReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(relaysActions(1));

    handleOnchange(dataRelays.value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch])

  const handleOnchange = (e) => {
    console.log(e);
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">IOT Setting</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 py-4">
                <ItemsDropsdowns label="System Relay Setting" options={RelayOptions} onChange={(e) => handleOnchange(e.target.value)}/>
              </div>
              <div className="w-full lg:w-6/12 px-4 py-4">
                <ItemsDropsdowns label="Load Feeder Setting (/gr)" options={drop} />
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </form>
        </div>
      </div>
    </>
  );
}
