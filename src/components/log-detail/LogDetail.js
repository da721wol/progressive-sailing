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
  grid-gap: 10px;
  font-weight: ${props => props.weight || 700};
  font-size: 1.2em;
  align-items: center;
  margin: 0 0 20px;
`;

const Category = styled.div`
  //border: solid 1px black;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  padding: 10px;

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
      return <Icons.Position width={"35px"} height={"35px"}/>;
    case 'longitude':
      return <Icons.Longitude width={"35px"} height={"35px"}/>;
    case 'latitude':
      return <Icons.Latitude width={"35px"} height={"35px"}/>;
    case 'datetime':
      return <Icons.Datetime width={"35px"} height={"35px"}/>;
    case 'gnss':
      return <Icons.Gnss width={"35px"} height={"35px"}/>;
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

  getSettingsUnit(unit) {
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

  getUnit(val, key) {
    return val[key].meta ? val[key].meta.units ? val[key].meta.units : "" : ""
  }

  roundValue(val) {
    return typeof val === 'number' ? val.toFixed(2) : val
  }

  valueRender(detail) {
    let renderElement;
    console.log(detail);
    switch(typeof detail) {
      case 'string':
        renderElement = <ValueListItem>{detail}</ValueListItem>;
        break;
      case 'object':
        renderElement = Object.keys(detail).map(key => {
          if (typeof detail[key].value !== 'object' && detail[key].value) {
            let unit = this.getUnit(detail, key);
            return <ValueListItem key={key}>
              <div>{getIcon(key)}</div>
              <div>{this.capitalize(key)}</div>
              <div>{this.roundValue(this.convert(detail[key].value, unit))}</div>
              <div>{this.getSettingsUnit(unit)}
              </div>
            </ValueListItem>;
          } else if (key !== 'server') {
            if (detail[key].value) {
              return (
                <Category key={key}>
                  <TitleBar weight={500}>
                    {getIcon(key)}
                    {this.capitalize(key)}
                  </TitleBar>
                {Object.keys(detail[key].value).map(k => {
                let unit = this.getUnit(detail, key);
                return (
                  <ValueListItem key={key + k}>
                    <div>{getIcon(k)}</div>
                    <div>{this.capitalize(k)}</div>
                    <div>{this.roundValue(this.convert(detail[key].value[k], unit))}</div>
                    <div>{this.getSettingsUnit(unit)}
                    </div>
                  </ValueListItem>
                )
              })}
                </Category>)
            } else {
              return (
                <Category key={key}>
                  <TitleBar weight={500}>
                    {getIcon(key)}
                    {this.capitalize(key)}
                  </TitleBar>
                {Object.keys(detail[key]).map(k => {
                let unit = this.getUnit(detail[key], k);
                return <ValueListItem key={key + k}>
                  <div>{getIcon(k)}</div>
                  <div>{this.capitalize(k)}</div>
                  <div>{this.roundValue(this.convert(detail[key][k].value, unit))}</div>
                  <div>{this.getSettingsUnit(unit)}
                  </div>
                </ValueListItem>
              })}
                </Category>)
            }
          }
        });
        break;
      default:
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
            <Icons.MoreVert height={"20px"} width={"20px"}/>
          </TitleBar>
          <ValueList>
            {this.valueRender(this.props.detail)}
          </ValueList>
        </Container>
      </div>
    )
  }

}
