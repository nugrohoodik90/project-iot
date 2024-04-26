import 'react-datepicker/dist/react-datepicker.module.css'

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DatePicker from 'react-datepicker';
import Select from "react-select";
import axios from "axios"
import { updateRelaysActions } from "../../redux/actions/relayActions";

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
    status: getRelays?.status,
    sync: getRelays?.sync,
    load_1: getRelays?.load_1,
    load_2: getRelays?.load_2,
    load_3: getRelays?.load_3,
    time_1: new Date(getRelays?.time_1),
    time_2: new Date(getRelays?.time_2),
    time_3: new Date(getRelays?.time_3)
  });

  const [selectedRel, setSelectedRel] = useState(Boolean);
  const [selectedFeedOption, setSelectedFeedOption] = useState(Boolean);
  const [selectedFeedOption2, setSelectedFeedOption2] = useState(Boolean);
  const [selectedFeedOption3, setSelectedFeedOption3] = useState(Boolean);
  const [selectedFeedOption4, setSelectedFeedOption4] = useState(Boolean);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTime2, setSelectedTime2] = useState(null);
  const [selectedTime3, setSelectedTime3] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("https://cyclic-rest-iot.onrender.com/rel-get/6603410169bdae33c35a3247")
        if (res.status !== 200) {
          throw new Error('error fetching')
        }

        const respon = await res.data;
        dispatch({
          type: "RELAYS",
          payload: res.data
        })
        setData(respon);
        setSelectedTime(new Date(respon?.time_1))
        setSelectedTime2(new Date(respon?.time_2))
        setSelectedTime3(new Date(respon?.time_3))
        setSelectedFeedOption(respon?.load_1)
        setSelectedFeedOption2(respon?.load_2)
        setSelectedFeedOption3(respon?.load_3)
        setSelectedFeedOption4(respon?.load_4)
        setSelectedRel(respon?.status)
      } catch (error) {
        console.log(error)
      }
    }
    fetch();
    setLoad(false);


    //return (() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const notify = (m) => toast(m);

  const handleTimeChange = (time) => {
    // console.log(data)
    setSelectedTime(time);
    setData({ ...data, time_1: time.toString() });
  };
  const handleTimeChange2 = (time) => {
    setSelectedTime2(time);
    setData({ ...data, time_2: time.toString() });
  };
  const handleTimeChange3 = (time) => {
    setSelectedTime3(time);
    setData({ ...data, time_3: time.toString() });
  };

  const handleFeed = (e, id) => {

    //console.log(id)
    if (id === 1) {
      setSelectedFeedOption({ ...data, load_1: e })
      setData({ ...data, load_1: e })
    }
    if (id === 2) {
      setSelectedFeedOption2({ ...data, load_2: e })
      setData({ ...data, load_2: e })
    } else if (id === 3) {
      setSelectedFeedOption3({ ...data, load_3: e })
      setData({ ...data, load_3: e })
    } else if (id === 0) {
      setSelectedFeedOption4({ ...data, load_4: e })
      setData({ ...data, load_4: e })
      setData({ ...data, sync: true })
    }
  }

  const handleRel = (e) => {
    setSelectedRel({ ...data, status: e })
    setData({ ...data, status: e })
  }
  const handleUpdate = (message) => {
    //console.log(data)
    updateRelaysActions(data)
    notify(message);
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        {
          load ? <div>...Loading</div> :
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 font-bold uppercase">
                  Feeding Scheduler Last Update
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full px-4 pt-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      SYSTEM
                    </label>
                    <Select
                      id="feed4"
                      isSearchable={false}
                      value={RelayOptions.find((item) => item.value === selectedRel)}
                      options={RelayOptions}
                      onChange={(e) => handleRel(e.value)} />
                    <p className="text-sm text-danger mt-1">
                      System Will Be Stop If You Turn Off
                    </p>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
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
                      //value={new Date(data?.time_1)}
                      placeholderText="Select Time"
                      showTimeSelect
                      //showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="dd/MM/yyyy HH:mm aa"
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
                      id="feed"
                      isSearchable={false}
                      value={FeedOptions.find((item) => item.value === selectedFeedOption)}
                      options={FeedOptions}
                      onChange={(e) => handleFeed(e.value, 1)} />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 py-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Time Setting 2
                    </label>
                    <DatePicker
                      id="time2"
                      //isClearable
                      selected={selectedTime2}
                      onChange={handleTimeChange2}
                      //value={new Date(data?.time_1)}
                      placeholderText="Select Time"
                      showTimeSelect
                      //showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time 2"
                      dateFormat="dd/MM/yyyy HH:mm aa"
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
                      id="feed"
                      isSearchable={false}
                      value={FeedOptions.find((item) => item.value === selectedFeedOption2)}
                      options={FeedOptions}
                      onChange={(e) => handleFeed(e.value, 2)} />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 py-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Time Setting 3
                    </label>
                    <DatePicker
                      id="time3"
                      //isClearable
                      selected={selectedTime3}
                      onChange={handleTimeChange3}
                      //value={new Date(data?.time_1)}
                      placeholderText="Select Time"
                      showTimeSelect
                      //showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time 2"
                      dateFormat="dd/MM/yyyy HH:mm aa"
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
                      id="feed"
                      isSearchable={false}
                      value={FeedOptions.find((item) => item.value === selectedFeedOption3)}
                      options={FeedOptions}
                      onChange={(e) => handleFeed(e.value, 3)} />
                  </div>
                </div>
                <div className="flex justify-center mt-3">
                  <button
                    className="github-star sm:ml-1 text-white font-bold px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    type="button"
                    onClick={() => handleUpdate("update Schedule")}
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
                  <div className="w-full lg:w-6/12 px-4 py-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Feeding Load Options
                    </label>
                    <Select
                      id="feed4"
                      isSearchable={false}
                      value={FeedOptions.find((item) => item.value === selectedFeedOption4)}
                      options={FeedOptions}
                      onChange={(e) => handleFeed(e.value, 0)} />

                  </div>
                  <div className="w-full lg:w-6/12 px-4 py-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Status
                    </label>
                    {data?.sync === true ? <p>ON</p> : <p>OFF</p>}
                  </div>
                </div>
                <div className="flex justify-center mt-3">
                  <button
                    className="github-star sm:ml-1 text-white font-bold px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    type="button"
                    onClick={() => handleUpdate("synchronize")}
                  >
                    <i className="fas fa-arrow-alt-circle-right"></i> Run Now
                  </button>

                </div>
                <p className="text-sm text-danger mt-1">
                  System Auto Run After Clicking The Button Run Now
                </p>
              </form>
            </div>
        }
      </div>
      <ToastContainer />
    </>
  );
}
