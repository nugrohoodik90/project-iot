import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css'

import { relaysActions, updateRelaysActions } from "../../redux/actions/relayActions";
import Select from "react-select";

// components
export const FeedOptions = [
  {
    value: "1",
    label: "0.5 Kg"
  },
  {
    value: "3",
    label: "1 Kg"
  },
  {
    value: "4",
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
  const [load, setLoad] = useState(true);
  const getRelays = useSelector((state) => state.RelaysReducers?.Relays);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    description: "update data relay on",
    status: true,
    load_1: getRelays?.load_1,
    load_2: getRelays?.load_2,
    load_3: getRelays?.load_3,
    time_1: new Date(getRelays.time_1),
    time_2: new Date(getRelays.time_2),
    time_3: new Date(getRelays.time_3)
  });

  const [selectedFeedOption, setSelectedFeedOption] = useState(Boolean);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    dispatch(relaysActions());
    setTimeout(() => {
      setLoad(false);
    }, 3000);

    setSelectedTime(new Date(data?.time_1))
    setSelectedFeedOption(data?.load_1)
    //return (() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const handleTimeChange = (time) => {
    console.log(data)
    setSelectedTime(time);
    setData({ ...data, time_1: time.toISOString() });
  };
 const handleFeed = (e) => {
    setSelectedFeedOption({...data, load_1: e})
    setData({ ...data, load_1: e })
  }

  const handleUpdate = () => {
    console.log(data)
    updateRelaysActions(data)
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        {
          load ? <div>...Loading</div> :
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 font-bold uppercase">
                  Feeding Scheduler
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 py-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Time Setting 1
                    </label>
                    <DatePicker
                      id="time1"
                      //isClearable
                      selected={selectedTime}
                      onChange={handleTimeChange}
                      value={new Date(data?.time_1)}
                      placeholderText="Select Time"
                      showTimeSelect
                      //showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="yyyy-MM-dd HH:mm aa"
                      showLeadingZeros={true}
                      className="flex flex-wrap border border-gray-300 rounded px-3 py-2 w-full"
                      popperClassName="z-50" // This is to ensure the dropdown is above other elements
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 py-3">
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
                <div className="flex justify-center mt-3">
                  <button
                    className="github-star sm:ml-1 text-white font-bold px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    type="button"
                    onClick={() => handleUpdate()}
                  >
                    <i className="fas fa-arrow-alt-circle-right"></i> Update Schedule
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </form>
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 font-bold uppercase">
                  Sync Now
                </h6>
                <div className="flex flex-wrap">
                  {/* <div className="w-full lg:w-6/12 px-4 py-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Time Setting 1
                </label>
                <DatePicker
                  id="time4"
                  isClearable
                  selected={selectedTime}
                  onChange={handleTimeChange}
                  placeholderText="Select DateTime"
                  showTimeSelect
                  // showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="yyyy/dd/mm hh:mm aa"
                  className="border border-gray-300 rounded px-3 py-2"
                  popperClassName="z-50" // This is to ensure the dropdown is above other elements
                />
              </div> */}
                  <div className="w-full lg:w-6/12 px-4 py-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Feeding Load Options
                    </label>
                    <Select
                      isSearchable={false}
                      value={FeedOptions.find((item) => item.value === data?.load_3)}
                      options={FeedOptions}
                      onChange={(e) => handleFeed(e.value)} />
                  </div>
                </div>
                <div className="flex justify-center mt-3">
                  <button
                    className="github-star sm:ml-1 text-white font-bold px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    type="button"
                  >
                    <i className="fas fa-arrow-alt-circle-right"></i> Run Now
                  </button>
                </div>
              </form>
            </div>
        }
      </div>
    </>
  );
}
