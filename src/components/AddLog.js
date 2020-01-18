import React from 'react';
import {connect} from 'react-redux';
import {addLog} from '../redux/actions';
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  font-size: 36px;
  border: none;
  background: none;
`;

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
        <Button onClick={this.handleAddLog}>
          +
        </Button>
      </div>
    )
  }
}

export default connect(null, { addLog })(AddLog)
