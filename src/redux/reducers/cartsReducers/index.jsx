const initialState = {
    carts: [],
    cartsNumb: 0,
    cartsPrice: 0
}

export default function CartsReducers(state = initialState, action) {
    // console.log(action.grandTotal)
    switch (action.type) {
        case "ADDCART":
            return {
                ...state,
                carts: action.payload,
                cartsNumb: state.carts.length,
                cartsPrice: action.grandTotal
            };
        case "INCREMENT":
            return {
                ...state,
                carts: action.payload,
                cartsNumb: state.carts.length,
                cartsPrice: action.grandTotal
            }
        case "DELETE":
            return{
                ...state,
                carts: action.payload,
                cartsNumb: state.carts.length - 1,
                cartsPrice: action.grandTotal
            }
        default:
            return state;
    }
}