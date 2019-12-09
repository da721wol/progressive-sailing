import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import Client from '@signalk/client';
import NavBav from '../nav-bar/NavBav'

class SignalKClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: new Client({
        hostname: 'localhost',
        port: 3000,
        useTLS: false,
        reconnect: true,
        autoConnect: false,
      }),
      subscription: {
        context: 'vessels.self',
        subscribe: [{path: 'navigation.position'}]
      },
      position: {
        longitude: 0,
        latitude: 0
      }
    };
  }

  connect() {
    if (this.state.client) {
      this.state.client.connect().then(() => this.state.client.subscribe(this.state.subscription));

      this.state.client.on('delta', delta => {
        const position = {
          longitude: delta.updates[0].values[0].value.longitude,
          latitude: delta.updates[0].values[0].value.latitude
        };
        this.setState({
          position: position
        })
      })
    }
  }

  render() {
    let longitude = this.state.position.longitude;
    let latitude = this.state.position.latitude;

    return (
      <div className="position">
        <button onClick={() => this.connect()}>Connect</button>
        <div>Longitude: {longitude}</div>
        <div>Latitude: {latitude}</div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
      </header>
      <div className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <SignalKClient/>
      </div>
      <div className="Nav-Panel" >
        <NavBav/>
      </div>
    </div>
  );
}

export default App;
