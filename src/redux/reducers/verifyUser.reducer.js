export const verifyUserReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_VERIFIED':
      return action.payload;
    default:
      return state;
  }
}