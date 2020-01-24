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
            <div key={category}>
              <h4>{capitalize(category)}</h4>
              <DetailsList>
                {typeof this.props.selectedLog.content[category] === 'object' && this.props.selectedLog.content[category] !== null
                  ? Object.keys(this.props.selectedLog.content[category]).map(key => {
                    return (<LogDetail key={key} name={key} detail={this.props.selectedLog.content[category][key]}/>)
                  })
                  : <h5>{this.props.selectedLog.content[category]}</h5>
                }
              </DetailsList>
            </div>
          )
        })}
      </DesktopColumns>
    )

  }
}

export default connect(mapStateToProps)(LogDetails);
