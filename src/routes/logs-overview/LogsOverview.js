import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { LogEntry } from '../../components/log-entry/LogEntry';
import './LogsOverview.css'
import { connect } from 'react-redux';
import { getLogs, getSelectedLog, getSettings } from '../../redux/selectors';
import { selectLog, selectPath } from '../../redux/actions';

const LogDetails = lazy(() => import('../../routes/log-details/LogDetails'));

const mapStateToProps = state => {
  return {
    logs: getLogs(state),
    selectedLog: getSelectedLog(state),
    settings: getSettings(state)
  }
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
    this.selectPath = this.selectPath.bind(this);
  }

  selectPath(path) {
    this.setState({selectedPath: path});
    this.props.selectPath(path);
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

    this.setState({selectedLog: log});
    this.props.selectLog(log.id, log.content)
  }

  render() {
    const {width} = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return <MobileView
        settings={this.props.settings}
        logs={this.props.logs}
        selectLog={this.selectLog}
        selectPath={this.selectPath}
      />;
    } else {
      return <DesktopView
        settings={this.props.settings}
        logs={this.props.logs}
        selectedLog={this.state.selectedLog}
        selectLog={this.selectLog}
      />

    }
  }
}

export default connect(mapStateToProps, { selectLog, selectPath })(LogsOverview);

function DesktopView(props) {
  return (
    <div className={"logs-view"}>
      <div className={"log-list"}>
        {props.logs && props.logs.length
          ? props.logs.slice(0).reverse().map((log, index) => {
            return (
              <LogEntry
                key={log.id}
                logEntry={log}
                customClickEvent={props.selectLog.bind(this, log)}
                settings={props.settings}
                selected={props.selectedLog ? props.selectedLog.id : null }
              />
            )
          })
          : 'No Logs yet!'}
      </div>
      {!props.selectedLog && <div>Select Log</div>}
      {props.selectedLog && <LogDetails/>}
    </div>
  )
}

function MobileView(props) {
  return (
    <div className={"log-list App-content"}>
      {props.logs && props.logs.length
        ? props.logs.slice(0).reverse().map((log, index) => {
          return <Link key={`log-${log.id}`}  to={{
            pathname: "/logs/details",
          }} onClick={() => {props.selectLog(log); props.selectPath("/logs/details")}}>
            <LogEntry
              logEntry={log}
              settings={props.settings}
            />
          </Link>
        })
        : 'No Logs yet!'}
    </div>
  )
}
