export const saveState = (state) => {
  let json = localStorage.getItem('state') || '{}';
  let stringifiedNewState = JSON.stringify(state);
  if (stringifiedNewState !== json && stringifiedNewState !== '{}') {
    localStorage.setItem('state', stringifiedNewState);
  }
};

export const loadState = () => {
  let json = localStorage.getItem('state') || '{}';
  let state = JSON.parse(json);

  if (state) {
    return state;
  } else {
    return undefined;  // To use the defaults in the reducers
  }
};