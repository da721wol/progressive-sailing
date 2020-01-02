import React from 'react';
import './LogDetails.css';
import {connect} from 'react-redux';
import {getSelectedLog} from '../../redux/selectors';
import {LogDetail} from '../../components/log-detail/LogDetail';

// const LogDetail = lazy(() => import('../../components/log-detail/LogDetail'));

const mapStateToProps = state => {
  return {
    selectedLog: getSelectedLog(state)
  }
};

class LogDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLog: null
    }
  }

  render() {
    return (
      <div className={"desktop-columns"}>
        <div className={"details-list"}>
          <h4>Navigation</h4>
          {this.props.selectedLog.content.navigation
            ? Object.keys(this.props.selectedLog.content.navigation).map(key => {
              return (<LogDetail key={key} name={key} detail={this.props.selectedLog.content.navigation[key]}/>)
            })
            : 'Navigation Details not found!'}
        </div>
        <div className={"details-list"}>
          <h4>Environment</h4>
          {this.props.selectedLog.content.environment
            ? Object.keys(this.props.selectedLog.content.environment).map(key => {
              return (<LogDetail key={key} name={key} detail={this.props.selectedLog.content.environment[key]}/>)
            })
            : 'Environment Details not found!'}
        </div>
        <div className={"details-list"}>
          <h4>Electrical</h4>
          {this.props.selectedLog.content.electrical
            ? Object.keys(this.props.selectedLog.content.electrical).map(key => {
              return (<LogDetail key={key} name={key} detail={this.props.selectedLog.content.electrical[key]}/>)
            })
            : 'Environment Details not found!'}
        </div>

      </div>
    )

  }
}

export default connect(mapStateToProps)(LogDetails);
