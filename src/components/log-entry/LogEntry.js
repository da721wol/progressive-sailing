import React from 'react';
import './LogEntry.css'
import Icons from '../icons'
import styled from "styled-components";
import {convertAngle, convertSpeed, convertTime} from "../UnitConverter"

const Container = styled.div`
  margin: 10px;
  box-shadow: ${props => props.id === props.selected  ? " inset 0 4px 8px 0 rgba(0,0,0,0.2)" : "0 4px 8px 0 rgba(0,0,0,0.2)"};
  transition: 0.3s;
  border-radius: 10px;
  display: grid;
  grid-gap: 5px;
  grid-template-areas:
    "time time title title title"
    "type-icon d1 d2 d3 d4";
  grid-template-rows: 1fr 4fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 5px;
`;

export function LogEntry(props) {
  let time = convertTime(props.logEntry.content.navigation.datetime.value, props.settings.timeFormat);

  return (
    <div onClick={props.customClickEvent}>
      <Container selected={props.selected} id={props.logEntry.id}>
        <div className={"time"}>
          {props.logEntry.content.navigation.datetime
            ? time
            : 'No time available'
          }
        </div>
        <div className={"title"}>
          {props.logEntry.content.logType}
        </div>
        <div className={"type-icon"}>
          <Icons.Rotor
            width={"60px"}
            height={"60px"}
          />
        </div>
        <div className={"d1"}>
          <Icons.Position
            longitude={props.logEntry.content.navigation.position.value.longitude}
            latitude={props.logEntry.content.navigation.position.value.latitude}
            width={"60px"}
            height={"60px"}
          />
        </div>
        <div className={"d2"}>
          <Icons.CourseOverGround
            width={"60px"}
            height={"60px"}
            courseOverGround={convertAngle(props.logEntry.content.navigation.courseOverGroundTrue.value, props.settings.angle)}
          />
        </div>
        <div className={"d3"}>
          <Icons.SpeedThroughWater
            width={"60px"}
            height={"60px"}
            speedThroughWater={convertSpeed(props.logEntry.content.navigation.speedThroughWater.value, props.settings.speed)}
          />
        </div>
        <div className={"d4"}>
          <Icons.Current
            width={"60px"}
            height={"60px"}
            drift={convertAngle(props.logEntry.content.environment.current.value.drift, props.settings.angle)}
            setTrue={convertAngle(props.logEntry.content.environment.current.value.setTrue, props.settings.angle)}
          />
        </div>
      </Container>
    </div>
  )
}
