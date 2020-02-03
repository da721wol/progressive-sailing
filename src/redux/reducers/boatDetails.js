import { SET_BOAT_DETAILS } from "../actionTypes";

const initialState = {
  uuid: null,
  name: null,
  mmsi: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_BOAT_DETAILS: {
      const details = action.payload;
      return {
        ...state,
        uuid: details.uuid,
        name: details.name,
        mmsi: details.mmsi
      }
    }
    default:
      return state;
  }
}
