import React, {Suspense, lazy} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Icons from '../icons'
import AddLog from "../AddLog";
import styled from 'styled-components'

const LogsOverview = lazy(() => import('../../routes/logs-overview/LogsOverview'));
const LogDetails = lazy(() => import('../../routes/log-details/LogDetails'));

const AppGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 80px 1fr;
  text-align: center;
  transition: margin-left .5s;
  margin-left: ${props =>props.navToggled ? "150px" : "0"};
`;

const SideNav = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${props => props.navToggled ? "150px" : "0"}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #f5f5f5; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  box-shadow: inset -5px 0 5px -2px #555;
  
  .link {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: grid;
    grid-template-columns: 50px 1fr;
    transition: 0.3s;
    justify-items: start;
    
    &:hover {
      color: #000000;
    }
  }
  
  @media screen and (max-height: 450px) {
    padding-top: 15px;
    Link {font-size: 18px;}
  }
`;

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 13px;
  font-size: 36px;
  border: none;
  background: none;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navToggled: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }


  toggleNav() {
    this.setState({navToggled: !this.state.navToggled});
  }

  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <AppGrid navToggled={this.state.navToggled}>
            <header className="App-header">
              <Button onClick={this.toggleNav}>
                <Icons.Hamburger className={"closebtn"} />
              </Button>
              Progressive Sailing
              <AddLog/>
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
              <Route path={"/settings"}>
                Settings!
              </Route>
            </Switch>
            <SideNav navToggled={this.state.navToggled}>
              <Button onClick={this.toggleNav}>
                <Icons.Hamburger className={"closebtn"} />
              </Button>
              <Link className={"link"} to="/logs">
                <Icons.Log width={"35px"} height={"35px"}/>
                Logs
              </Link>
              <Link className={"link"} to="/map">
                <Icons.Map width={"35px"} height={"35px"}/>
                Map
              </Link>
              <Link className={"link"} to="/panel">
                <Icons.Sextant width={"35px"} height={"35px"}/>
                Panel
              </Link>
              <Link className={"link"} to="/settings">
                <Icons.Settings width={"35px"} height={"35px"}/>
                Settings
              </Link>
            </SideNav>
          </AppGrid>
        </Suspense>
      </Router>
    );
  }
}
