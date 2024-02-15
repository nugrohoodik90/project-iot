import axios from "axios"

export default function productsActions(){
    return dispatch => {
        axios.get("https://expressjs-postgres-production-cd3a.up.railway.app/api/termoget").then(res =>{
            dispatch({
                type : "TERMO",
                payload: res.data
            });
        }).catch(err=>{
            console.log("error",err);
        })
    }
}