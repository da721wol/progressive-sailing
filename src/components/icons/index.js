import Edit from "./Edit"
import Position from "./Position"
import Longitude from "./Longitude"
import Datetime from "./Datetime"
import Gnss from "./Gnss"
import HorizontalDilution from "./HorizontalDilution"
import Latitude from "./Latitude"
import Environment from "./Environment"
import MagneticVariation from "./MagneticVariation"
import Satellites from "./Satellites"
import Speed from "./Speed"
import SpeedThroughWater from "./SpeedThroughWater"
import Trip from "./Trip"
import Log from "./Log"
import Map from "./Map"
import Sextant from "./Sextant"
import Settings from "./Settings"
import CourseOverGround from "./CourseOverGround"
import SpeedOverGround from "./SpeedOverGround";
import Current from "./Current";
import Moored from "./Moored";
import Rotor from "./Rotor";
import Date from "./Date";
import AntennaAltitude from "./AntennaAltitude";
import Compass from "./Compass";
import Water from "./Water";
import Hamburger from "./Hamburger";
import Arrow from "./Arrow";
import MoreVert from "./MoreVert";
import Navigation from "./Navigation";
import Uuid from "./Uuid";
import Name from "./Name";
import Performance from "./Performance";
import Wind from "./Wind";
import Depth from "./Depth";
import Mmsi from "./Mmsi";
import Electrical from "./Electrical";
import Battery from "./Battery";
import Notification from "./Notification";
import React from "react";
import RotorOff from "./RotorOff";
import SetSail from "./SetSail";
import Docked from "./Docked";
import Departed from "./Departed";
import LogType from "./LogType";

export default {
  AntennaAltitude,
  Edit,
  Position,
  Longitude,
  Datetime,
  Gnss,
  HorizontalDilution,
  Environment,
  Latitude,
  MagneticVariation,
  Satellites,
  SpeedThroughWater,
  Speed,
  Trip,
  Log,
  Map,
  Sextant,
  Settings,
  CourseOverGround,
  SpeedOverGround,
  Current,
  Moored,
  Rotor,
  Date,
  Compass,
  Water,
  Hamburger,
  Arrow,
  MoreVert,
  Navigation,
  Uuid,
  Name,
  Performance,
  Wind,
  Depth,
  Mmsi,
  Electrical,
  Battery,
  Notification,
  SetSail,
  Departed
}

export const getIcon = function (name, width, height) {
  switch (name) {
    case 'position':
      return <Position width={width} height={height}/>;
    case 'longitude':
      return <Longitude width={width} height={height}/>;
    case 'latitude':
      return <Latitude width={width} height={height}/>;
    case 'datetime':
      return <Datetime width={width} height={height}/>;
    case 'gnss':
      return <Gnss width={width} height={height}/>;
    case 'magneticVariation':
      return <MagneticVariation width={width} height={height}/>;
    case 'satellites':
      return <Satellites width={width} height={height}/>;
    case 'Speed':
      return <Speed width={width} height={height}/>;
    case 'speedThroughWater':
      return <SpeedThroughWater width={width} height={height}/>;
    case 'trip':
      return <Trip width={width} height={height}/>;
    case 'date':
      return <Date width={width} height={height}/>;
    case 'time':
      return <Datetime width={width} height={height}/>;
    case 'antennaAltitude':
      return <AntennaAltitude width={width} height={height}/>;
    case 'horizontalDilution':
      return <HorizontalDilution width={width} height={height}/>;
    case 'type':
      return <Gnss width={width} height={height}/>;
    case 'log':
      return <Log width={width} height={height}/>;
    case 'speedOverGround':
      return <SpeedOverGround width={width} height={height}/>;
    case 'courseOverGroundTrue':
      return <CourseOverGround width={width} height={"35"}/>;
    case 'headingTrue':
      return <Compass width={width} height={height}/>;
    case 'water':
      return <Water width={width} height={height}/>;
    case 'current':
      return <Current width={width} height={height}/>;
    case 'navigation':
      return <Navigation width={width} height={height}/>;
    case 'uuid':
      return <Uuid width={width} height={height}/>;
    case 'name':
      return <Name width={width} height={height}/>;
    case 'performance':
      return <Performance width={width} height={height}/>;
    case 'environment':
      return <Environment width={width} height={height}/>;
    case 'wind':
      return <Wind width={width} height={height}/>;
    case 'depth':
      return <Depth width={width} height={height}/>;
    case 'mmsi':
      return <Mmsi width={width} height={height}/>;
    case 'electrical':
      return <Electrical width={width} height={height}/>;
    case 'batteries':
      return <Battery width={width} height={height}/>;
    case 'notifications':
      return <Notification width={width} height={height}/>;
    case 'Engine On':
      return <Rotor width={width} height={height}/>;
    case 'Engine Off':
      return <RotorOff width={width} height={height}/>;
    case 'Set Sail':
      return <SetSail width={width} height={height}/>;
    case 'Docked':
      return <Docked width={width} height={height}/>;
    case 'Departed':
      return <Departed width={width} height={height}/>;
    case 'logType':
      return <LogType width={width} height={height}/>;
    default:
      break;
  }
};

