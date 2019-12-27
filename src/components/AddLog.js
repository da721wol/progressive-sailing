import React from 'react';
import {connect} from 'react-redux';
import {addLog} from '../redux/actions';

class AddLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      time: Date.now(),
      log: null
    }
  }

  handleAddLog = () => {
    fetch("http://localhost:3000/signalk/v1/api/vessels/self")
      .then(res => res.json())
      .then((result) => {
          this.setState({log: result});
          this.props.addLog(this.state.log);
          this.setState({log: ''})
        },
        (error) => {
          console.log(error);
          this.setState({
            error
          })
        }
      );


  };

  render() {
    return (
      <div>
        <button className={"add-log"} onClick={this.handleAddLog}>
          +
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  { addLog }
)(AddLog)
