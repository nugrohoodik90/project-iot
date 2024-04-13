import axios from "axios"

export default function productsActions(){
    return dispatch => {
        axios.get("https://cyclic-rest-iot.onrender.com/dist-get").then(res =>{
            dispatch({
                type : "PRODUCTS",
                payload: res.data
            });
        }).catch(err=>{
            console.log("error",err);
        })
    }
}