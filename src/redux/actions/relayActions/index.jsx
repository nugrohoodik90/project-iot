import axios from "axios"

export default function relaysActions(){
    return dispatch => {
        axios.get("https://expressjs-postgres-production-cd3a.up.railway.app/api/relayget/1").then(res =>{
            dispatch({
                type : "RELAYS",
                payload: res.data
            });
        }).catch(err=>{
            console.log("error",err);
        })
    }
}