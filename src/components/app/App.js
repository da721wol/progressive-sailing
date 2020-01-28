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
import {getSelectedPath} from "../../redux/selectors";
import {selectPath} from "../../redux/actions";
import {connect} from "react-redux";

const LogsOverview = lazy(() => import('../../routes/logs-overview/LogsOverview'));
const LogDetails = lazy(() => import('../../routes/log-details/LogDetails'));
const Settings = lazy(() => import('../../routes/settings/Settings'));

const mapStateToProps = state => {
  return {
    selectedPath: getSelectedPath(state)
  }
};

const AppGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 80px 1fr;
  transition: margin-left .5s;
`;

const Header = styled.div`
text-align: center;
  display: grid;
  z-index: 2;
  grid-area: header;
  grid-template-columns: 6em 1fr 6em;
  background-color: #e1f1ff;
  font-size: calc(10px + 2vmin);
  color: #000000;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  align-content: center;
  
  .c1 {
    justify-self: start;
    grid-column: 1;
  }
  .c2 {
    align-self: center;
    text-align: center;
    grid-column: 2;
  }
  .c3 {
    justify-self: end;
    grid-column: 3;
  }
`;

const SideNav = styled.div`
  height: 100%;
  width: ${props => props.navToggled ? "150px" : "0"}; 
  position: fixed; 
  z-index: 1; 
  top: 80px; 
  left: 0;
  background-color: #e1f1ff; 
  overflow-x: hidden; 
  transition: 0.5s; 
  box-shadow: 4px 0 5px -2px rgba(0,0,0,0.2);
  
  .link {
    width:100%;
    padding:8px 16px;
    text-align:left;
    border:none;
    white-space:normal;
    float:none;
    outline:0;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: grid;
    grid-template-columns: 50px 1fr;
    transition: 0.5s;
    justify-items: start;
    align-items: center;
    font-weight: 600;
    
    &:hover {
      background-color: #ffffff;
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
  font-size: 36px;
  border: none;
  background: none;
  align-content: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navToggled: false,
      selectedPath: null
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.selectPath = this.selectPath.bind(this);
  }

  selectPath(path) {
    this.setState({selectedPath: path});
    this.props.selectPath(path);
  }

  toggleNav() {
    this.setState({navToggled: !this.state.navToggled});
  }

  closeNav() {
    if (this.state.navToggled) this.setState({navToggled: false});
  }

  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <AppGrid onClick={this.closeNav} navToggled={this.state.navToggled}>
            <Header>
              {this.props.selectedPath === '/logs/details'
                ? <div className={"c1"}>
                  <Button onClick={this.toggleNav}>
                    <Icons.Hamburger/>
                  </Button>
                  <Button>
                    <Link onClick={() => this.selectPath('/logs')} to={"/logs"}>
                      <Icons.Arrow/>
                    </Link>
                  </Button>
                </div>
                : <Button className={"c1"} onClick={this.toggleNav}>
                  <Icons.Hamburger/>
                </Button>
              }
              <div className={"c2"}>
                <b>Progressive Sailing</b>
              </div>
              <div className={"c3"}>
                <AddLog />
              </div>
            </Header>
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
              <Route path={"/settings"} component={Settings}>
              </Route>
            </Switch>
            <SideNav navToggled={this.state.navToggled}>
              <Link
                className={"link"}
                onClick={() => this.selectPath('/logs')}
                to="/logs"
              >
                <Icons.Log width={"35px"} height={"35px"}/>
                <div>Logs</div>
              </Link>
              <Link
                className={"link"}
                onClick={() => this.selectPath('/map')}
                to="/map"
              >
                <Icons.Map width={"35px"} height={"35px"}/>
                <div>Map</div>
              </Link>
              <Link
                className={"link"}
                onClick={() => this.selectPath('/panel')}
                to="/panel"
              >
                <Icons.Sextant width={"35px"} height={"35px"}/>
                <div>Panel</div>
              </Link>
              <Link
                className={"link"}
                onClick={() => this.selectPath('/settings')}
                to="/settings">
                <Icons.Settings width={"35px"} height={"35px"}/>
                <div>Settings</div>
              </Link>
            </SideNav>
          </AppGrid>
        </Suspense>
      </Router>
    );
  }
}

export default connect(mapStateToProps, {selectPath})(App);
