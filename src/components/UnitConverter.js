import convert from "convert-units";

export const convertTime = (time, setting) => {
  if (setting=== "24-hour") {
    return new Date(time)
      .toLocaleTimeString('de-DE');
  } else {
    return new Date(time)
      .toLocaleTimeString('en-US');
  }
};

export const convertDate = (date, setting) => {
  return new Date(date).toLocaleDateString()
};

export const convertDistance = (val, setting) => {
  return val
};

export const convertAngle = (val, setting) => {
  if (setting === 'deg') {
    return val * (180/Math.PI)
  } else {
    return val
  }
};

export const convertSpeed = (val, setting) => {
  if (setting !== 'm/s') {
    return convert(val).from('m/s').to(setting)
  } else {
    return val
  }
};

export const convertTemperature = (val, setting) => {
  return val
};


