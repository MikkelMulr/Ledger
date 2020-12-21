export const viewReducer = (state = 'login', action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return action.payload;
    default:
      return state;
  }
}