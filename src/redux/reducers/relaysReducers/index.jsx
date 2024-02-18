const initalState = {
    Relays:[]
}

export default function RelaysReducers(state=initalState,action){
    switch (action.type) {
        case "RELAYS":
            return{
                ...state,
                Relays: action.payload
            }
        default:
            return state;
    }
}
