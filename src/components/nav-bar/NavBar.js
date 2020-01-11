import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './NavBar.css';
import logIcon from '../../assets/icons/log.svg';
import mapIcon from '../../assets/icons/map.svg';
import instrumentPanelIcon from '../../assets/icons/sextant.svg';
import statisticsIcon from '../../assets/icons/insert_chart.svg';
import settingsIcon from '../../assets/icons/settings_applications.svg';

const Logs = lazy(() => import('../../routes/logs-overview/LogsOverview'));

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <a href="#logs" className="active">
          <img src={logIcon} className="icon" alt="log-icon" />
          Logs
        </a>
        <a href="#map">
          <img src={mapIcon} className="icon" alt="map-icon" />
          Map
        </a>
        <a href="#instrument-panel">
          <img src={instrumentPanelIcon} className="icon" alt="instrument-panel-icon" />
          Panel
        </a>
        <a href="#statistics">
          <img src={statisticsIcon} className="icon" alt="statistics-icon" />
          Statistics
        </a>
        <a href="#settings">
          <img src={settingsIcon} className="icon" alt="settings-icon" />
          Settings
        </a>
      </div>
    );
  }
}

export default NavBar;
