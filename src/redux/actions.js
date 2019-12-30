import { ADD_LOG, SELECT_LOG } from './actionTypes';

let nextLogId = 0;
export const addLog = content =>({
  type: ADD_LOG,
  payload: {
    id: nextLogId++,
    content
  }
});

export const selectLog = (id, content) => ({
  type:SELECT_LOG,
  payload: {
    id,
    content
  }
});
