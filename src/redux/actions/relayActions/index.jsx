import axios from "axios"

export function relaysActions() {
    return dispatch => {
        axios.get("https://expressjs-postgres-production-cd3a.up.railway.app/api/relayget/1").then(res => {
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
    await axios.put("http://expressjs-postgres-production-cd3a.up.railway.app/api/relayupdate/1", { 
        description: data.description,
        value: Boolean(data.value) ,
        duration : data.duration
    }).then(res => {
        console.log(`${res.status}-success`);
    }).catch(err => {
        console.log("error", err);
    })
}

