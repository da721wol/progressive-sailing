import React from 'react';
import './LogDetails.css';
import {connect} from 'react-redux';
import styled from 'styled-components'
import {getSelectedLog, getSettings} from '../../redux/selectors';
import {LogDetail} from '../../components/log-detail/LogDetail';

const mapStateToProps = state => {
  return {
    selectedLog: getSelectedLog(state),
    settings: getSettings(state)
  }
};

const DetailsList = styled.div`
  display: grid;
`;

const DesktopColumns = styled.div`
  display: grid;
  //grid-template-columns: repeat(auto-fill, minmax(350px, 400px));
  overflow-x: scroll;
`;

const capitalize = function (word) {
  return word[0].toUpperCase() + word.slice(1)
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
      <DesktopColumns>
        {Object.keys(this.props.selectedLog.content).map(category => {
          return (
            <DetailsList key={category}>
              <LogDetail settings={this.props.settings} key={category} name={category} detail={this.props.selectedLog.content[category]}/>
            </DetailsList>
          )
        })}
      </DesktopColumns>
    )

  }
}

export default connect(mapStateToProps)(LogDetails);
