import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { relaysActions, updateRelaysActions, updateFeederActions } from "../../redux/actions/relayActions";
import Select from "react-select";

// components
export const FeedOptions = [
  {
    value: "0.5",
    label: "0.5 Kg"
  },
  {
    value: "1",
    label: "1 Kg"
  },
  {
    value: "1.5",
    label: "1.5 Kg"
  },
]
export const RelayOptions = [
  {
    value: true,
    label: "On"
  },
  {
    value: false,
    label: "Off"
  },
]

export default function CardSettings() {
  const getRelays = useSelector((state) => state.RelaysReducers?.Relays);
  const dispatch = useDispatch();

  const [selectedRelOption, setSelectedRelOption] = useState(Boolean);
  const [selectedFeedOption, setSelectedFeedOption] = useState(Boolean);

  const [data, setData] = useState({
    description: "update relay",
    value: false,
    duration: "1",
  });


  useEffect(() => {
    dispatch(relaysActions());

    setSelectedRelOption(getRelays.value);
    setSelectedFeedOption(getRelays.duration);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const handleRelay = (e) => {
    setData({ ...data, value: e })
    //no need dispatch 
    updateRelaysActions({ data })
  }
  const handleFeed = (e) => {
    console.log(data)
    setData({ ...data, duration: e })
    
    //no need dispatch 
    updateRelaysActions({ data })
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
            <h6 className="text-blueGray-400 text-sm mt-3 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 py-4">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Relay Setting
                </label>
                <Select
                  isSearchable={false}
                  value={RelayOptions.find((item) => item.value === selectedRelOption)}
                  options={RelayOptions}
                  onChange={(e) => handleRelay(e.value)} />
              </div>
              <div className="w-full lg:w-6/12 px-4 py-4">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Feeding Load Options
                </label>
                <Select
                  isSearchable={false}
                  value={FeedOptions.find((item) => item.value === selectedFeedOption)}
                  options={FeedOptions}
                  onChange={(e) => handleFeed(e.value)} />
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </form>
        </div>
      </div>
    </>
  );
}
