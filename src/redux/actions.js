import {
  ADD_LOG,
  SELECT_LOG,
  SELECT_PATH,
  SET_SETTING,
  ADD_LOG_TYPE
} from './actionTypes';
import {store} from './store';

let nextLogId = store.getState().logs.allIds.length;
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

export const selectPath = content => ({
  type: SELECT_PATH,
  payload: content
});

export const setSettings = content => ({
  type: SET_SETTING,
  payload: content
});

export const addLogType = content => ({
  type: ADD_LOG_TYPE,
  payload: content
});
