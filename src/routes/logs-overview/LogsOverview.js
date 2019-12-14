import React from 'react';
import {LogEntry} from '../../components/log-entry/LogEntry';
import './LogsOverview.css'

export default function LogsOverview() {
  return (
    <div className={"log-list"}>
      <LogEntry/>
    </div>
  );
}
