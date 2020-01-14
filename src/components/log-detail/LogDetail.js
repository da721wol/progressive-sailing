import React from 'react'
import styled from 'styled-components'
import Icons from '../icons'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(${props => props.length}, 1fr);
  grid-gap: 10px;
  padding: 10px;
`;

const Button = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  
`;

const getRowAmount = function (log) {
  if (log.detail.value) {
    if (typeof log.detail.value !== "object") {
      return 2
    }
    return Object.keys(log.detail.value).length
  } else {
    return Object.keys(log.detail).length / 2 + 1
  }
};

const getIcon = function (name) {
  switch (name) {
    case 'position':
      return <Icons.Position width={"50px"} height={"50px"}/>;
    case 'longitude':
      return <Icons.Longitude width={"35px"} height={"35px"}/>;
    case 'latitude':
      return <Icons.Latitude width={"35px"} height={"35px"}/>;
    case 'datetime':
      return <Icons.Datetime width={"50px"} height={"50px"}/>;
    case 'gnss':
      return <Icons.Gnss width={"50px"} height={"50px"}/>;
    case 'magneticVariation':
      return <Icons.MagneticVariation width={"35px"} height={"35px"}/>;
    case 'satellites':
      return <Icons.Satellites width={"35px"} height={"35px"}/>;
    case 'Speed':
      return <Icons.Speed width={"35px"} height={"35px"}/>;
    case 'speedThroughWater':
      return <Icons.SpeedThroughWater width={"35px"} height={"35px"}/>;
    case 'trip':
      return <Icons.Trip width={"35px"} height={"35px"}/>;
    case 'date':
      return <Icons.Date width={"35px"} height={"35px"}/>;
    case 'time':
      return <Icons.Datetime width={"35px"} height={"35px"}/>;
    case 'antennaAltitude':
      return <Icons.AntennaAltitude width={"35px"} height={"35px"}/>;
    case 'horizontalDilution':
      return <Icons.HorizontalDilution width={"35px"} height={"35px"}/>;
    case 'type':
      return <Icons.Gnss width={"35px"} height={"35px"}/>;
    case 'log':
      return <Icons.Log width={"35px"} height={"35px"}/>;
    case 'speedOverGround':
      return <Icons.SpeedOverGround width={"35px"} height={"35px"}/>;
    case 'courseOverGroundTrue':
      return <Icons.CourseOverGround width={"35px"} height={"35"}/>;
    case 'headingTrue':
      return <Icons.Compass width={"35px"} height={"35px"}/>;
    case 'water':
      return <Icons.Water width={"35px"} height={"35px"}/>;
    case 'current':
      return <Icons.Current width={"35px"} height={"35px"}/>;
    default:
      return null
  }
};

const getValues = function (log) {
  let values = {};
  switch (log.name) {
    case 'position':
      values = {
        longitude: {value: log.detail.value.longitude},
        latitude: {value: log.detail.value.latitude}
      };
      break;
    case 'datetime':
      values = {
        date: {value: log.detail.value.substr(0, 10)},
        time: {value: log.detail.value.substr(11, 8)}
      };
      break;
    case 'current':
      values = {
        setTrue: {value: log.detail.value.setTrue},
        drift: {value: log.detail.value.drift}
      };
      break;
    case 'batteries':
      // eslint-disable-next-line
      Object.keys(log.detail).map(function (key) {
        values[key +' (time remaining)'] = {value: log.detail[key].capacity.timeRemaining.value};
        values[key + ' (voltage)'] = {value: log.detail[key].voltage.value};
        values[key + ' (current)'] = {value: log.detail[key].current.value};
        values[key + ' (temperature)'] = {value: log.detail[key].temperature.value}

      });
      break;
    default:
      values = log.detail;
      break;
  }
  return values
};

const capitalize = function (word) {
  return word[0].toUpperCase() + word.slice(1)
};

export function LogDetail(props) {
  const detailsLength = getRowAmount(props);
  const values = getValues(props);
  console.log(props);
  // const isMobile = window.innerWidth <= 500;
  return (
    <div className={"card"}>
      <Container detail={props.detail} length={detailsLength}>
        <div style={{justifySelf: "start"}}>
          {getIcon(props.name)}
          <div className={"detail-name"}>
            <b>{capitalize(props.name)}</b>
          </div>
        </div>
        <div style={{justifySelf: "end"}}>
          <Button>
            <Icons.Edit width={"35px"} height={"35px"} style={{justifySelf: "end"}}/>
            <b>Edit</b>
          </Button>
        </div>
        {!values.value
          ? Object.keys(values).map(key => {
            return (
              <div style={{justifySelf: "start"}} key={key}>
                {getIcon(key)}
                {capitalize(key)} : {values[key].value}
              </div>
            )
          })
          : <div style={{justifySelf: "start"}}>Value: {values.value} </div>

        }
      </Container>
    </div>
  )
}
