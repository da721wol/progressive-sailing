import React from 'react'
import styled from 'styled-components'
import Icons from '../icons'
import {
  convertAngle, convertDate, convertDistance,
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
  grid-template-columns: 50px 1fr 35px;
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

const getIcon = function (name, width, height) {
  switch (name) {
    case 'position':
      return <Icons.Position width={width} height={height}/>;
    case 'longitude':
      return <Icons.Longitude width={width} height={height}/>;
    case 'latitude':
      return <Icons.Latitude width={width} height={height}/>;
    case 'datetime':
      return <Icons.Datetime width={width} height={height}/>;
    case 'gnss':
      return <Icons.Gnss width={width} height={height}/>;
    case 'magneticVariation':
      return <Icons.MagneticVariation width={width} height={height}/>;
    case 'satellites':
      return <Icons.Satellites width={width} height={height}/>;
    case 'Speed':
      return <Icons.Speed width={width} height={height}/>;
    case 'speedThroughWater':
      return <Icons.SpeedThroughWater width={width} height={height}/>;
    case 'trip':
      return <Icons.Trip width={width} height={height}/>;
    case 'date':
      return <Icons.Date width={width} height={height}/>;
    case 'time':
      return <Icons.Datetime width={width} height={height}/>;
    case 'antennaAltitude':
      return <Icons.AntennaAltitude width={width} height={height}/>;
    case 'horizontalDilution':
      return <Icons.HorizontalDilution width={width} height={height}/>;
    case 'type':
      return <Icons.Gnss width={width} height={height}/>;
    case 'log':
      return <Icons.Log width={width} height={height}/>;
    case 'speedOverGround':
      return <Icons.SpeedOverGround width={width} height={height}/>;
    case 'courseOverGroundTrue':
      return <Icons.CourseOverGround width={width} height={"35"}/>;
    case 'headingTrue':
      return <Icons.Compass width={width} height={height}/>;
    case 'water':
      return <Icons.Water width={width} height={height}/>;
    case 'current':
      return <Icons.Current width={width} height={height}/>;
    case 'navigation':
      return <Icons.Navigation width={width} height={height}/>;
    case 'uuid':
      return <Icons.Uuid width={width} height={height}/>;
    case 'name':
      return <Icons.Name width={width} height={height}/>;
    case 'performance':
      return <Icons.Performance width={width} height={height}/>;
    case 'environment':
      return <Icons.Environment width={width} height={height}/>;
    case 'wind':
      return <Icons.Wind width={width} height={height}/>;
    case 'depth':
      return <Icons.Depth width={width} height={height}/>;
    case 'mmsi':
      return <Icons.Mmsi width={width} height={height}/>;
    case 'electrical':
      return <Icons.Electrical width={width} height={height}/>;
    case 'batteries':
      return <Icons.Battery width={width} height={height}/>;
    case 'notifications':
      return <Icons.Notification width={width} height={height}/>;
    default:
      break;
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
      case "mm/dd/yy": case "dd/mm/yy":
        return convertDate(value, this.props.settings.dateFormat);
      case "24-hour": case "am/pm":
        return convertTime(value, this.props.settings.timeFormat);
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
    // console.log(detail);
    switch(typeof detail) {
      case 'string':
        renderElement = <p>{detail}</p>;
        break;
      case 'object':
        renderElement = Object.keys(detail).map(key => {
          switch (key) {
            case 'speedThroughWater': case 'speedThroughWaterReferenceType': case 'log': case 'speedOverGround':
            case 'speedOverGroundTrue': case 'courseOverGroundTrue': case 'headingTrue': case 'magneticVariation':
            case 'courseOverGroundMagnetic': case 'velocityMadeGood':
              let unit = this.getUnit(detail, key);
              return <ValueListItem key={key}>
                <div>{getIcon(key, "35px", "35px")}</div>
                <div>{this.capitalize(key)}</div>
                <div>{this.roundValue(this.convert(detail[key].value, unit))}</div>
                <div>{this.getSettingsUnit(unit)}</div>
              </ValueListItem>;
            case 'position': case 'current':
              return (
                <Category key={key}>
                  <TitleBar weight={500}>
                    {getIcon(key, "35px", "35px")}
                    {this.capitalize(key)}
                  </TitleBar>
                  {Object.keys(detail[key].value).map(k => {
                    let unit = this.getUnit(detail, key);
                    return (
                      <ValueListItem key={key + k}>
                        <div>{getIcon(k, "35px", "35px")}</div>
                        <div>{this.capitalize(k)}</div>
                        <div>{this.roundValue(this.convert(detail[key].value[k], unit))}</div>
                        <div>{this.getSettingsUnit(unit)}
                        </div>
                      </ValueListItem>
                    )
                  })}
                </Category>);
            case 'gnss': case 'trip': case 'water': case 'wind': case 'depth': case 'courseRhumbline':
              return (
                <Category key={key}>
                  <TitleBar weight={500}>
                    {getIcon(key, "35px", "35px")}
                    {this.capitalize(key)}
                  </TitleBar>
                  {Object.keys(detail[key]).map(k => {
                    let unit = this.getUnit(detail[key], k);
                    return <ValueListItem key={key + k}>
                      <div>{getIcon(k)}</div>
                      <div>{this.capitalize(k)}</div>
                      <div>{this.roundValue(this.convert(detail[key][k].value, unit))}</div>
                      <div>{this.getSettingsUnit(unit)}</div>
                    </ValueListItem>
                  })}
                </Category>);
            case 'datetime':
              return (
                <Category key={key}>
                  <TitleBar weight={500}>
                    {getIcon(key, "35px", "35px")}
                    {this.capitalize(key)}
                  </TitleBar>
                  <ValueListItem key={key + 'date'}>
                    <div>{getIcon('date', "35px", "35px")}</div>
                    <div>{this.capitalize('date')}</div>
                    <div>{this.convert(detail.datetime.value, "dd/mm/yy")}</div>
                  </ValueListItem>
                  <ValueListItem key={key + 'time'}>
                    <div>{getIcon('time', "35px", "35px")}</div>
                    <div>{this.capitalize('time')}</div>
                    <div>{this.convert(detail.datetime.value, "24-hour")}</div>
                  </ValueListItem>
                </Category>
              );
            case 'server':
              return (
                <Category key={key}>
                  <TitleBar weight={500}>
                    {getIcon(key, "35px", "35px")}
                    {this.capitalize(key)}
                  </TitleBar>
                    <div>{detail[key].newVersion ? detail[key].newVersion.value.message : 'value not found'}</div>
                </Category>
              );
            case 'batteries':
              return (
                <Category key={key}>
                  <TitleBar weight={500}>
                    {getIcon(key, "35px", "35px")}
                    {this.capitalize(key)}
                  </TitleBar>
                  {Object.keys(detail[key]).map(battery => {
                    return <Category key={battery}>
                      <TitleBar weight={400}>{battery}</TitleBar>
                      <ValueListItem>
                        <div>{getIcon('capacity')}</div>
                        <div>Capacity(Time Remaining)</div>
                        <div>{detail[key][battery].capacity.timeRemaining.value}</div>
                        <div>{detail[key][battery].capacity.timeRemaining.meta.units}</div>
                      </ValueListItem>
                      <ValueListItem>
                        <div>{getIcon('voltage')}</div>
                        <div>Voltage</div>
                        <div>{detail[key][battery].voltage.value}</div>
                        <div>{detail[key][battery].voltage.meta.units}</div>
                      </ValueListItem>
                      <ValueListItem>
                        <div>{getIcon('')}</div>
                        <div>Current</div>
                        <div>{detail[key][battery].current.value}</div>
                        <div>{detail[key][battery].current.meta.units}</div>
                      </ValueListItem>
                      <ValueListItem>
                        <div>{getIcon('temperature')}</div>
                        <div>Temperature</div>
                        <div>{detail[key][battery].temperature.value}</div>
                        <div>{detail[key][battery].temperature.meta.units}</div>
                      </ValueListItem>
                    </Category>
                  })}
                </Category>
              );
            default:
              console.log(key);
              break;
          }

          // if (typeof detail[key].value !== 'object' && detail[key].value || detail[key].value === 0) {
          //   console.log(`case a: ${key}`);
          //   let unit = this.getUnit(detail, key);
          //   return <ValueListItem key={key}>
          //     <div>{getIcon(key, "35px", "35px")}</div>
          //     <div>{this.capitalize(key)}</div>
          //     <div>{this.roundValue(this.convert(detail[key].value, unit))}</div>
          //     <div>{this.getSettingsUnit(unit)}
          //     </div>
          //   </ValueListItem>;
          // } else if (key !== 'server') {
          //   if (detail[key].value) {
          //     console.log(`case b: ${key}`);
          //     return (
          //       <Category key={key}>
          //         <TitleBar weight={500}>
          //           {getIcon(key, "35px", "35px")}
          //           {this.capitalize(key)}
          //         </TitleBar>
          //       {Object.keys(detail[key].value).map(k => {
          //       let unit = this.getUnit(detail, key);
          //       return (
          //         <ValueListItem key={key + k}>
          //           <div>{getIcon(k, "35px", "35px")}</div>
          //           <div>{this.capitalize(k)}</div>
          //           <div>{this.roundValue(this.convert(detail[key].value[k], unit))}</div>
          //           <div>{this.getSettingsUnit(unit)}
          //           </div>
          //         </ValueListItem>
          //       )
          //     })}
          //       </Category>)
          //   } else {
          //     console.log(`case c: ${key}`);
          //     return (
          //       <Category key={key}>
          //         <TitleBar weight={500}>
          //           {getIcon(key, "35px", "35px")}
          //           {this.capitalize(key)}
          //         </TitleBar>
          //       {Object.keys(detail[key]).map(k => {
          //       let unit = this.getUnit(detail[key], k);
          //       return <ValueListItem key={key + k}>
          //         <div>{getIcon(k)}</div>
          //         <div>{this.capitalize(k)}</div>
          //         <div>{this.roundValue(this.convert(detail[key][k].value, unit))}</div>
          //         <div>{this.getSettingsUnit(unit)}
          //         </div>
          //       </ValueListItem>
          //     })}
          //       </Category>)
          //   }
          // }
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
            {getIcon(this.props.name, "50px", "50px")}
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
