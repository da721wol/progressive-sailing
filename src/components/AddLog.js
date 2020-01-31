import React from 'react';
import {connect} from 'react-redux';
import {addLog} from '../redux/actions';
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  font-size: 36px;
  border: none;
  background: none;
  align-content: center;
  color: #ffffff;
  padding: 0 10px;
`;

class AddLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      log: null
    }
  }

  // local: http://localhost:3000/signalk/v1/api/vessels/self
  // demo server: http://demo.signalk.org/signalk/v1/api/vessels/self
  handleAddLog = () => {
    fetch("http://demo.signalk.org/signalk/v1/api/vessels/self")
      .then(res => res.json())
      .then((result) => {
          if (!result.datetime) {
            const date = new Date();
            result.navigation.datetime = {
              value: date.toISOString(),
              meta: {description: "Time and Date from the GNSS Positioning System"}
            };
          }
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
      <Button onClick={this.handleAddLog}>
        +
      </Button>
    )
  }
}

export default connect(null, {addLog})(AddLog)
