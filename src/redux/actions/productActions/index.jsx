import axios from "axios"

export default function productsActions(){
    return dispatch => {
        axios.get("http://localhost:3300/Products").then(res =>{
            console.log(res.status);
            dispatch({
                type: "PRODUCTS",
                payload: res.data
            })
        }).catch(err=>{
            console.log("error",err);
        })
    }
}