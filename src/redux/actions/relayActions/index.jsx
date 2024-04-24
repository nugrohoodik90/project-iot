import axios from "axios"

export const relaysActions = async () => {
    const res = await axios.get("https://cyclic-rest-iot.onrender.com/rel-get/6603410169bdae33c35a3247")
    if (res.status === 200) {
        return res
    }
}

export const updateRelaysActions = (data) => {
    console.log(data)
    axios.put("https://cyclic-rest-iot.onrender.com/rel-update/6603410169bdae33c35a3247", {
        description: data.description,
        status: Boolean(data.status),
        duration: data.duration,
        load_1: data.load_1,
        load_2: data.load_2,
        load_3: data.load_3,
        load_4: data.load_3,
        time_1: data.time_1,
        time_2: data.time_3,
        time_3: data.time_3,
        sync: Boolean(data.sync)
    }).then(res => {
        console.log(`${res.status}`);
        //console.log(res.data);
    }).catch(err => {
        console.log("error", err);
    })
}

