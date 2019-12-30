export const getLogState = store => store.logs;

export const getLogList = store =>
  getLogState(store) ? getLogState(store).allIds : [];

export const getLogById = (store, id) =>
  getLogState(store) ? {...getLogState(store).byIds[id], id} : {};

export const getLogs = store =>
  getLogList(store).map(id => getLogById(store, id));

export const getSelectedLog = store => store.logs.selectedLog;

