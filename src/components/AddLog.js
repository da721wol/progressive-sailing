import React from 'react';
import {connect} from 'react-redux';
import {addLog, addLogType, setBoatDetails} from '../redux/actions';
import {getLogTypes} from "../redux/selectors";
import styled from "styled-components";
import {getIcon} from "./icons";
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
      logType: null,
      boatDetails: null
    };
    this.handleAddLog = this.handleAddLog.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  getBoatDetails(log) {
    let details = {};
    // eslint-disable-next-line
    Object.keys(log).map(key => {
      if (typeof log[key] === 'string') {
        details[key] = log[key]
      }
    });
    return details
  }

  // ec2: http://ec2-3-120-129-157.eu-central-1.compute.amazonaws.com/signalk/v1/api/vessels/self
  // local: http://localhost:3000/signalk/v1/api/vessels/self
  // demo server: http://demo.signalk.org/signalk/v1/api/vessels/self
  handleAddLog() {
    fetch("http://localhost:3000/signalk/v1/api/vessels/self")
      .then(res => res.json())
      .then((result) => {
          if (!result.datetime) {
            const date = new Date();
            result.navigation.datetime = {
              value: date.toISOString(),
              meta: {description: "Time and Date from the GNSS Positioning System"}
            };
          }
          this.setState({boatDetails: this.getBoatDetails(result)});
          result.logType = this.state.logType;
          this.setState({log: result});
          this.props.setBoatDetails(this.state.boatDetails);
          this.props.addLog(this.state.log);
          this.setState({log: '', boatDetails: '', logType: ''})
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
      logType: {value}
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
            {getIcon(type, "40px", "40px")}
            <ListItemText primary={type}/>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default connect(mapStateToProps, {addLog, addLogType, setBoatDetails})(AddLog)
