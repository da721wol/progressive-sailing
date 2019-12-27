import React, {lazy} from 'react';
import {Link} from 'react-router-dom';
import {LogEntry} from '../../components/log-entry/LogEntry';
import './LogsOverview.css'
import {connect} from 'react-redux';
import {getLogs} from '../../redux/selectors';
import volare1 from '../../assets/data/volare1';
import volare2 from '../../assets/data/volare2';
import volare3 from '../../assets/data/volare3';
import AddLog from "../../components/AddLog";

const LogDetails = lazy(() => import('../../routes/log-details/LogDetails'));

const mapStateToProps = state => {
  const {byIds, allIds} = state.logs || {};
  const logs =
    allIds && allIds.length
      ? allIds.map(id => (byIds ? {...byIds[id], id} : null))
      : null;
  return {logs};
};

class LogsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      selectedLog: null,
      logs: null
    };
    this.selectLog = this.selectLog.bind(this);
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
    const {width} = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return <MobileView logs={this.props.logs} selectLog={this.selectLog.bind(this)}/>;
    } else {
      return <DesktopView logs={this.props.logs} selectedLog={this.state.selectedLog} selectLog={this.selectLog} />

    }
  }
}

export default connect(state => ({logs: getLogs(state)}))(LogsOverview);

function DesktopView(props) {
  return (
    <div className={"logs-view"}>
      <div className={"log-list"}>
        {props.logs && props.logs.length
          ? props.logs.map((log, index) => {
            return <LogEntry key={`log-${log.id}`} logEntry={log} customClickEvent={() => props.selectLog(log)}/>
          })
          : 'No Logs yet!'}
      </div>
      {!props.selectedLog && <div>Select Log</div>}
      {props.selectedLog &&
      <div className={"details-list"}>
        <LogDetails log={props.selectedLog}/>
      </div>
      }
    </div>
  )
}

function MobileView(props) {
  return (
    <div className={"log-list App-content"}>
      {props.logs && props.logs.length
        ? props.logs.map((log, index) => {
          return <Link key={`log-${log.id}`}  to={{
            pathname: "/logs/details",
            state: {
              log: log
            }
          }} onClick={props.selectLog.bind(this, volare1)}>
            <LogEntry logEntry={log}/>
          </Link>
        })
        : 'No Logs yet!'}
    </div>
  )
}
