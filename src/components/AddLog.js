import React from 'react';
import {connect} from 'react-redux';
import {addLog, addLogType} from '../redux/actions';
import {getLogTypes} from "../redux/selectors";
import styled from "styled-components";
import {Dialog, DialogTitle, List, ListItem, ListItemText} from "@material-ui/core";

const mapStateToProps = state => {
  return {
    logTypes: getLogTypes(state)
  }
};

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
      logTypes: this.props.logTypes,
      error: null,
      log: null,
      onClose: false,
      open: false,
      logType: null
    };
    this.handleAddLog = this.handleAddLog.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  // local: http://localhost:3000/signalk/v1/api/vessels/self
  // demo server: http://demo.signalk.org/signalk/v1/api/vessels/self
  handleAddLog() {
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
          result.logType = this.state.logType;
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

  handleClickOpen() {
    this.setState({open: true})
  }

  handleOnClose(value) {
    this.setState({
      open: false,
      logType: value
    });
  }

  render() {
    return (
      <div>
        <Button variant={"outlined"} onClick={this.handleClickOpen}>
          +
        </Button>
        <LogDialog handleAddLog={this.handleAddLog} logTypes={this.state.logTypes} selectedValue={this.state.logType}
                   open={this.state.open} onClose={this.handleOnClose}/>
      </div>
    )
  }
}

function LogDialog(props) {
  const {onClose, open, selectedValue, logTypes, handleAddLog} = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
    handleAddLog()
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby={"simple-dialog-title"} open={open}>
      <DialogTitle id={"dialog-title"}>Select Log Type</DialogTitle>
      <List>
        {logTypes.map(type => (
          <ListItem className={'item'} button onClick={() => handleListItemClick(type)} key={type}>
            <ListItemText primary={type}/>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default connect(mapStateToProps, {addLog, addLogType})(AddLog)
