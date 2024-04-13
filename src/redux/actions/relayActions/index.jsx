import axios from "axios"

export function relaysActions() {
    return dispatch => {
        axios.get("https://cyclic-rest-iot.onrender.com/rel-get/").then(res => {
            dispatch({
                type: "RELAYS",
                payload: res.data
            });
        }).catch(err => {
            console.log("error", err);
        })
    }
}

export const updateRelaysActions = async ({data}) => {
    await axios.put("https://cyclic-rest-iot.onrender.com/", { 
        description: data.description,
        value: Boolean(data.value) ,
        duration : data.duration
    }).then(res => {
        console.log(`${res.status}-success`);
    }).catch(err => {
        console.log("error", err);
    })
}
