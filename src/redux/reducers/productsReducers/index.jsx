const initalState = {
    Products:[]
}

export default function ProductsReducers(state=initalState,action){
    switch (action.type) {
        case "PRODUCTS":
            return{
                ...state,
                Products: action.payload
            }
        default:
            return state;
    }
}
