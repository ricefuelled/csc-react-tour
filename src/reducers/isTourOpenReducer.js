export const isTourOpenReducer = (state = 'false', actions) => {
  switch(actions.type){
    case "GET_ISTOUROPEN":
      return actions.payload;
    default:
      return state;
  }
}