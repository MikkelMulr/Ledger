import {SET_VIEW, SET_VERIFY_USER} from './actionConstants';

export const setView = (viewVal) => ({
  type: SET_VIEW,
  payload: viewVal
});

export const setVerifyUser = (verified) => ({
  type: SET_VERIFY_USER,
  payload: verified
});