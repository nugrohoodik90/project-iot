const initalState = {
  Termos:[]
}

export default function TermosReducers(state=initalState,action){
  switch (action.type) {
      case "TERMO":
          return{
              ...state,
              Termos: action.payload
          }
      default:
          return state;
  }
}