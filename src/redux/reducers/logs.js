import { ADD_LOG, SELECT_LOG } from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {},
  selectedLog: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_LOG: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content
          }
        }
      }
    }
    case SELECT_LOG: {
      const { id, content } = action.payload;
      return {
        ...state,
        selectedLog: { id, content }
      }
    }
    default:
      return state;
  }
}
