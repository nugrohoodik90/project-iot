import axios from "axios"
// import { toast } from 'react-toastify';

// const notify = (m) => toast(m);

export const relaysActions = async () => {
    const res = await axios.get("https://cyclic-rest-iot.onrender.com/rel-get/6603410169bdae33c35a3247")
    if (res.status === 200) {
        return res
    }
}

export const updateRelaysActions = async (data) => {
    await axios.put("https://cyclic-rest-iot.onrender.com/rel-update/6603410169bdae33c35a3247", {
        description: data.description,
        status: Boolean(data.status),
        duration: data.duration,
        load_1: data.load_1,
        load_2: data.load_2,
        load_3: data.load_3,
        load_4: data.load_4,
        time_1: data.time_1,
        time_2: data.time_2,
        time_3: data.time_3,
        sync: Boolean(data.sync)
    }).then(res => {
        console.log(`${res.status}`);
         if (res.status === 200) {
            // notify("success");
        }
        //console.log(res.data);
    }).catch(err => {
        console.log("error", err);
    })
}

