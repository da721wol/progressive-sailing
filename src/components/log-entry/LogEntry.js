import React from 'react';
import './LogEntry.css'
import volare1 from '../../assets/data/volare1';
import moorBoat from '../../assets/icons/moor-boat.svg'

export class LogEntry extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="container">
          <div className={"time"}>
            11:11
          </div>
          <div className={"title"}>
            Moored
          </div>
          <div className={"type-icon"}>
            <img src={moorBoat} alt="type-icon" />
          </div>
          <div className={"d1"}>
            {volare1.navigation.position.value.longitude}
            <br/>
            {volare1.navigation.position.value.latitude}
          </div>
          <div className={"d2"}>
            <p></p>
          </div>

        </div>
      </div>
    )
  }
}
