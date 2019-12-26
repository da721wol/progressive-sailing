import React, {lazy} from 'react';
import './LogDetails.css';

const LogDetail = lazy(() => import('../../components/log-detail/LogDetail'));

export default class LogDetails extends React.Component {
  render() {
    const isMobile = window.innerWidth <= 500;
    console.log(this.props);
    if (isMobile) {
      return (
        <div className={"details-list"}>
          <LogDetail log={this.props.location.state.log}/>
        </div>
      )
    }
    return (
      <div className={"details-list"}>
        <LogDetail log={this.props.log}/>
      </div>
    )
  }
}
