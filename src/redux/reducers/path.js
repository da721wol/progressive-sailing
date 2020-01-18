import { SELECT_PATH } from '../actionTypes';

const initialState = {
  selectedPath: '/logs'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_PATH:
      const path = action.payload;
      return {
        ...state,
        selectedPath: path
      };
    default:
      return state
  }
}
