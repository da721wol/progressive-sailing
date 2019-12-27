import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import logIcon from "../../assets/icons/menu_book.svg";
import mapIcon from "../../assets/icons/map.svg";

import instrumentPanelIcon from "../../assets/icons/sextant.svg";
import statisticsIcon from "../../assets/icons/insert_chart.svg";
import settingsIcon from "../../assets/icons/settings_applications.svg";
import AddLog from "../AddLog";

const LogsOverview = lazy(() => import('../../routes/logs-overview/LogsOverview'));
const LogDetails = lazy(() => import('../../routes/log-details/LogDetails'));

// class SignalKClient extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       client: new Client({
//         hostname: 'localhost',
//         port: 3000,
//         useTLS: false,
//         reconnect: true,
//         autoConnect: false,
//       }),
//       subscription: {
//         context: 'vessels.self',
//         subscribe: [{path: 'navigation.position'}]
//       },
//       position: {
//         longitude: 0,
//         latitude: 0
//       }
//     };
//   }
//
//   connect() {
//     if (this.state.client) {
//       this.state.client.connect().then(() => this.state.client.subscribe(this.state.subscription));
//
//       this.state.client.on('delta', delta => {
//         const position = {
//           longitude: delta.updates[0].values[0].value.longitude,
//           latitude: delta.updates[0].values[0].value.latitude
//         };
//         this.setState({
//           position: position
//         })
//       })
//     }
//   }
//
//   render() {
//     let longitude = this.state.position.longitude;
//     let latitude = this.state.position.latitude;
//
//     return (
//       <div className="position">
//         <button onClick={() => this.connect()}>Connect</button>
//         <div>Longitude: {longitude}</div>
//         <div>Latitude: {latitude}</div>
//       </div>
//     );
//   }
// }

function App() {
  return (

      // <div className="App-content">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <SignalKClient/>
      // </div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="App">
            <header className="App-header">
              Hello World
              <AddLog />
            </header>
            <Switch className="App-content">
              <Route path={"/logs/details"} component={LogDetails}>
              </Route>
              <Route path={"/logs"} component={LogsOverview}>
              </Route>
              <Route path={"/map"}>
                Map!
              </Route>
              <Route path={"/panel"}>
                Panel!
              </Route>
              <Route path={"/statistics"}>
                Statistics!
              </Route>
              <Route path={"/settings"}>
                Settings!
              </Route>
            </Switch>
            <div className="nav-bar">
              <Link to="/logs">
                <img src={logIcon} className="icon" alt="log-icon" />
                Logs
              </Link>
              <Link to="/map">
                <img src={mapIcon} className="icon" alt="map-icon" />
                Map
              </Link>
              <Link to="/panel">
                <img src={instrumentPanelIcon} className="icon" alt="instrument-panel-icon" />
                Panel
              </Link>
              <Link to="/statistics">
                <img src={statisticsIcon} className="icon" alt="statistics-icon" />
                Statistics
              </Link>
              <Link to="/settings">
                <img src={settingsIcon} className="icon" alt="settings-icon" />
                Settings
              </Link>
            </div>
          </div>
        </Suspense>
      </Router>
  );
}

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

export default App;
