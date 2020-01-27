import { SET_SETTING } from '../actionTypes'

const initialState = {
  temperature: 'C',
  distance: 'm',
  speed: 'm/s',
  angle: 'deg',
  timeFormat: '24-hour'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SETTING: {
      return action.payload
    }
    default:
      return state
  }
}