import {ADD_LOG_TYPE} from '../actionTypes'

const initialState = [
    'Engine On',
    'Engine Off',
    'Set Sail',
    'Docked',
    'Departed'
];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_LOG_TYPE:
      return state.push(action.payload);
    default:
      return state
  }
}
