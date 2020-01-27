import React from 'react';
import './LogEntry.css'
import Icons from '../icons'

export function LogEntry(props) {
  let time = new Date(props.logEntry.content.navigation.datetime.value);
  return (
    <div className="card" onClick={props.customClickEvent}>
      <div className="container">
        <div className={"time"}>
          {props.logEntry.content.navigation.datetime
            ? time.toLocaleTimeString('de-DE')
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
      </div>
    </div>
  )
}
