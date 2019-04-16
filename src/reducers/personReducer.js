export const personReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return action.person
    default:
      return state
  }
}
