export const toCloseTour = (isTourOpen) => {
  return {
    type: "GET_ISTOUROPEN",
    payload: isTourOpen
  }
}
