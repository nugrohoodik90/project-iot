import axios from "axios"

const productsActions = () => {
    return async (dispatch) => {
        const res = await axios.get("https://cyclic-rest-iot.onrender.com/dist-get")

        if (res.status === 200) {
            await dispatch({
                type : "PRODUCTS",
                payload: res.data
            })
        }
    }
    // return (dispatch) => {
    //     axios.get("https://cyclic-rest-iot.onrender.com/dist-get").then(res =>{
    //         dispatch({
    //             type : "PRODUCTS",
    //             payload: res.data
    //         });
    //     }).catch(err=>{
    //         console.log("error",err);
    //     })
    // }
}

export default productsActions