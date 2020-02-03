import convert from "convert-units";

export const convertTime = (time, setting) => {
  if (setting === "24-hour") {
    return new Date(time)
      .toLocaleTimeString('de-DE');
  } else {
    return new Date(time)
      .toLocaleTimeString('en-US');
  }
};

export const convertDate = (date, setting) => {
  if (setting === "dd/mm/yy") {
    return new Date(date).toLocaleDateString('de-DE')
  } else {
    return new Date(date).toLocaleDateString('en-US')
  }
};

export const convertDistance = (val, setting) => {
  if (setting !== 'm') {
    return convert(val).from('m').to('ft-us')
  } else {
    return val
  }
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
  if (setting !== 'K') {
    return convert(val).from('K').to(setting)
  } else {
    return val
  }
};

const toDegreeAndMinutes = (coordinate) => {
  const absolute = Math.abs(coordinate);
  const degrees = Math.floor(absolute);
  const minutesNotTruncated = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesNotTruncated);
  const seconds = Math.floor((minutesNotTruncated - minutes) * 60);
  return `${degrees}°${minutes}'${seconds}''`
};

export const convertDMS = (coordinate, type) => {
  let value, cardinal;
  if (type === 'longitude') {
    value = toDegreeAndMinutes(coordinate);
    cardinal = coordinate >= 0 ? "N" : "S";
  } else {
    value = toDegreeAndMinutes(coordinate);
    cardinal = coordinate >= 0 ? "E" : "W";
  }
  return {value, cardinal}
}
