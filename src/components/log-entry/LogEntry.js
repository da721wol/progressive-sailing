import React from 'react';
import './LogEntry.css'
import Icons from '../icons'
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-areas:
    "time time title title title"
    "type-icon d1 d2 d3 d4";
  grid-template-rows: 1fr 4fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 5px;
`;

const setTime = (time, format) => {
  if (format === "24-hour") {
     return new Date(time)
      .toLocaleTimeString('de-DE');
  } else {
    return new Date(time)
      .toLocaleTimeString('en-US');
  }
};

export function LogEntry(props) {
  let time = setTime(props.logEntry.content.navigation.datetime.value, props.settings.timeFormat);

  return (
    <div className="card" onClick={props.customClickEvent}>
      <Container>
        <div className={"time"}>
          {props.logEntry.content.navigation.datetime
            ? time
            : 'No time available'
          }
        </div>
        <div className={"title"}>
          Engine on
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
            courseOverGround={props.logEntry.content.navigation.courseOverGroundTrue.value}
          />
        </div>
        <div className={"d3"}>
          <Icons.SpeedThroughWater
            width={"60px"}
            height={"60px"}
            speedThroughWater={props.logEntry.content.navigation.speedThroughWater.value}
          />
        </div>
        <div className={"d4"}>
          <Icons.Current
            width={"60px"}
            height={"60px"}
            drift={props.logEntry.content.environment.current.value.drift}
            setTrue={props.logEntry.content.environment.current.value.setTrue}
          />
        </div>
      </Container>
    </div>
  )
}
