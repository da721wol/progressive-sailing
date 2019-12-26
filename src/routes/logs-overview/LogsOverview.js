import React, {lazy} from 'react';
import {Link} from 'react-router-dom';
import {LogEntry} from '../../components/log-entry/LogEntry';
import './LogsOverview.css'
import volare1 from '../../assets/data/volare1';
import volare2 from '../../assets/data/volare2';
import volare3 from '../../assets/data/volare3';

const LogDetails = lazy(() => import('../../routes/log-details/LogDetails'));



export default class LogsOverview extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      selectedLog: null
    };
  }

  componentWillUnmount() {
    window.removeEventListener('resize',
      this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  componentDidMount() {
    window.addEventListener('resize',
      this.handleWindowSizeChange);
  }

  selectLog(log) {
    this.setState({
      selectedLog: log
    });
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return <MobileView selectLog={this.selectLog.bind(this)} isMobile={this.state.isMobile}/>;
    } else {
      return (
        <div className={"logs-view"}>
          <div className={"log-list"}>
            <LogEntry logEntry={volare1} customClickEvent={this.selectLog.bind(this, volare1)}/>
            <LogEntry logEntry={volare2} customClickEvent={this.selectLog.bind(this, volare2)}/>
            <LogEntry logEntry={volare3} customClickEvent={this.selectLog.bind(this, volare3)}/>
          </div>
          {!this.state.selectedLog && <div>Select Log</div>}
          {this.state.selectedLog &&
          <div className={"details-list"}>
            <LogDetails log={this.state.selectedLog}/>
          </div>
          }
        </div>
      )
    }
  }
}

function MobileView(props) {
  return (
    <div className={"log-list App-content"}>
      <Link to={{
        pathname:"/logs/details",
        state: {
          log: volare1
        }
      }} onClick={props.selectLog.bind(this, volare1)}>
        <LogEntry logEntry={volare1}/>
      </Link>
      <Link to={{
        pathname:"/logs/details",
        state: {
          log: volare2
        }
      }} onClick={props.selectLog.bind(this, volare2)}>
        <LogEntry logEntry={volare2}/>
      </Link>
      <Link to={{
        pathname:"/logs/details",
        state: {
          log: volare3
        }
      }} onClick={props.selectLog.bind(this, volare3)}>
        <LogEntry logEntry={volare3}/>
      </Link>
    </div>
  )
}
