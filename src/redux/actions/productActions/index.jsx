import axios from "axios"

export default function productsActions(){
    return async (dispatch) => {
        const res = await axios.get("https://cyclic-rest-iot.onrender.com/dist-get")

        if (res.status === 201) {
            dispatch({
                type : "PRODUCTS",
                payload: res.data
            })
        }
    }
}