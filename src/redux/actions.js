import { ADD_LOG } from './actionTypes';

let nextLogId = 0;
export const addLog = content =>({
  type: ADD_LOG,
  payload: {
    id: ++nextLogId,
    content
  }
});
