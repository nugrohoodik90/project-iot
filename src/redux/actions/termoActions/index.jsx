import axios from "axios"

export default function termoActions(){
    return dispatch => {
        axios.get("https://cyclic-rest-iot.onrender.com").then(res =>{
            dispatch({
                type : "TERMO",
                payload: res.data
            });
        }).catch(err=>{
            console.log("error",err);
        })
    }
}