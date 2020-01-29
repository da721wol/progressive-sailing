import React from 'react'
import styled from 'styled-components'
import Icons from '../icons'
import {
  convertAngle, convertDistance,
  convertSpeed,
  convertTemperature,
  convertTime
} from "../UnitConverter"

const Container = styled.div`
  padding: 15px;
`;

const Button = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  
`;

const TitleBar = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr 35px;
  font-weight: 600;
  font-size: 1.2em;
  align-items: center;
  margin: 0 0 20px;
`;

const ValueList = styled.div`
  display: grid;
  grid-row-gap: 10px;

`;

const ValueListItem = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 35px 1fr 1fr 35px;
  align-items: center;
  justify-items: start;
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
      return <Icons.Datetime width={"35px"} height={"35px"}/>;
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
      return <Icons.Edit width={"35px"} height={"35px"}/>;
  }
};

const getValues = function (log) {
  let values = {};
  if (typeof log ==='object') {
    Object.keys(log).map( key => {
      console.log(log[key])
      switch (key) {
        case 'position':
          values['position'] = {
            longitude: {value: log[key].value.longitude},
            latitude: {value: log[key].value.latitude}
          };
          break;
        case 'current':
          values = {
            setTrue: {value: log.detail.value.setTrue},
            drift: {value: log.detail.value.drift},
            setMagnetic: {value: log.detail.setMagnetic}
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
        case 'server':
          values[key] = {value: log.detail.newVersion.value.message};
          break;
        default:
          values[key] = log[key];
          break;
      }
    })
  }
  return values
};

export class LogDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2');
  };

  convert(value, unit=undefined) {
    switch(unit) {
      case "C": case "F": case "K":
        return convertTemperature(value, this.props.settings.temperature);
      case "m": case "i":
        return convertDistance(value, this.props.settings.distance);
      case "m/s": case "km/h": case "knot": case "m/h":
        return convertSpeed(value, this.props.settings.speed);
      case "deg": case "rad":
        return convertAngle(value, this.props.settings.angle);
      default:
        return value
    }
  };

  getUnit(unit) {
    switch(unit) {
      case "C": case "F": case "K":
        return this.props.settings.temperature;
      case "m": case "i":
        return this.props.settings.distance;
      case "m/s": case "km/h": case "knot": case "m/h":
        return this.props.settings.speed;
      case "deg": case "rad":
        return this.props.settings.angle;
      default:
        return unit
    }
  }

  valueRender = detail => {
    let renderElement;
    console.log(detail);
    switch(typeof detail) {
      case 'string':
        renderElement = <ValueListItem>{detail}</ValueListItem>;
        break;
      case 'object':
        renderElement = Object.keys(detail).map(key => {
          let unit = detail[key].meta
            ? detail[key].meta.units
              ? detail[key].meta.units : ""
            : "";
          if (typeof detail[key].value !== 'object' && detail[key].value) {
            return <ValueListItem key={key}>
              <div>{getIcon(key)}</div>
              <div>{this.capitalize(key)}</div>
              <div>{this.convert(detail[key].value, unit)}</div>
              <div>{this.getUnit(unit)}
              </div>
            </ValueListItem>;
          } else {
            if (detail[key].value) {
              return Object.keys(detail[key].value).map(k => {
                return <ValueListItem key={key + k}>
                  <div>{getIcon(k)}</div>
                  <div>{this.capitalize(k)}</div>
                  <div>{this.convert(detail[key].value[k], unit)}</div>
                  <div>{this.getUnit(unit)}
                  </div>
                </ValueListItem>
              })
            }
          }
        });
        break;
      default:
        renderElement = <div>Uhm</div>;
        break;
    }
    return renderElement
  };

  render() {
    return (
      <div className={"card"}>
        <Container>
          <TitleBar>
            {getIcon(this.props.name)}
            {this.capitalize(this.props.name)}
            <Icons.MoreVert height={"35px"} width={"35px"}/>
          </TitleBar>
          <ValueList>
            {this.valueRender(this.props.detail)}
          </ValueList>
          {/*{typeof props.detail === 'object'*/}
          {/*  ? Object.keys(props.detail).map(key => {*/}
          {/*    return (*/}
          {/*      <ValueListItem>*/}
          {/*        {getIcon(key)}*/}
          {/*        {key}*/}

          {/*      </ValueListItem>*/}
          {/*    )*/}
          {/*  })*/}
          {/*  : props.detail*/}
          {/*}*/}
        </Container>
      </div>
      // <div className={"card"}>
      //   <Container detail={props.detail} length={detailsLength}>
      //     <div style={{justifySelf: "start"}}>
      //       {getIcon(props.name)}
      //       <div className={"detail-name"}>
      //         <b>{capitalize(props.name)}</b>
      //       </div>
      //     </div>
      //     <div style={{justifySelf: "end"}}>
      //       <Button>
      //         <Icons.Edit width={"35px"} height={"35px"} style={{justifySelf: "end"}}/>
      //         <b>Edit</b>
      //       </Button>
      //     </div>
      //     {!values.value
      //       ? Object.keys(values).map(key => {
      //         return (
      //           <div style={{justifySelf: "start"}} key={key}>
      //             {getIcon(key)}
      //             {capitalize(key)} : {typeof values[key].value !== 'object' ? values[key].value : 'Value missing'}
      //           </div>
      //         )
      //       })
      //       : <div style={{justifySelf: "start"}}>Value: {values.value} </div>
      //     }
      //   </Container>
      // </div>
    )
  }

}
