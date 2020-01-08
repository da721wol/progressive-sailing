import React from 'react';
import './LogDetails.css';
import {connect} from 'react-redux';
import styled from 'styled-components'
import {getSelectedLog} from '../../redux/selectors';
import {LogDetail} from '../../components/log-detail/LogDetail';

// const LogDetail = lazy(() => import('../../components/log-detail/LogDetail'));

const mapStateToProps = state => {
  return {
    selectedLog: getSelectedLog(state)
  }
};

const DetailsList = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, 200px);
  //grid-template-columns: 1fr 1fr 1fr;
`;

const DesktopColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 400px));
  overflow-x: scroll;
`;

class LogDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLog: null
    }
  }

  render() {
    return (
      <DesktopColumns>
        <div>
          <h4>Navigation</h4>
          <DetailsList>
            {this.props.selectedLog.content.navigation
              ? Object.keys(this.props.selectedLog.content.navigation).map(key => {
                return (<LogDetail key={key} name={key} detail={this.props.selectedLog.content.navigation[key]}/>)
              })
              : 'Navigation Details not found!'}
          </DetailsList>
        </div>
        <div>
          <h4>Environment</h4>
          <DetailsList>
            {this.props.selectedLog.content.environment
              ? Object.keys(this.props.selectedLog.content.environment).map(key => {
                return (<LogDetail key={key} name={key} detail={this.props.selectedLog.content.environment[key]}/>)
              })
              : 'Environment Details not found!'}
          </DetailsList>
        </div>
        <div>
          <h4>Electrical</h4>
          <DetailsList>
            {this.props.selectedLog.content.electrical
              ? Object.keys(this.props.selectedLog.content.electrical).map(key => {
                return (<LogDetail key={key} name={key} detail={this.props.selectedLog.content.electrical[key]}/>)
              })
              : 'Environment Details not found!'}
          </DetailsList>
        </div>
      </DesktopColumns>
    )

  }
}

export default connect(mapStateToProps)(LogDetails);
