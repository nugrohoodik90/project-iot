import axios from "axios"

export default function productsActions(){
    return dispatch => {
        axios.get("https://expressjs-postgres-production-cd3a.up.railway.app/api/measureget").then(res =>{
            console.log(res);
            dispatch({
                type : "PRODUCTS",
                payload: res.data
            });
        }).catch(err=>{
            console.log("error",err);
        })
    }
}