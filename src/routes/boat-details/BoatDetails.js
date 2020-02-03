import React from 'react';
import {connect} from "react-redux";
import {getBoatDetails} from "../../redux/selectors";
import {getIcon} from "../../components/icons";
import styled from "styled-components";

const mapStateToProps = state => {
  return {
    boatDetails: getBoatDetails(state)
  }
};

const Wrapper = styled.div`
  overflow: auto;
  width: 100%;
  max-width: 680px;
  justify-self: center;
  display: grid;
  grid-template-rows: 100px 1fr;
`;

const Form = styled.form`
  max-width: 680px;
  padding: 20px;
  display: grid;
  grid-template-rows: repeat(${props => props.rows}, 70px);
  grid-gap: 20px;
  margin: 0 20px;
  align-items: center;
  justify-items: start;
  position: relative;
  height: min-content;
`;

const TitleBar = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 35px;
  grid-gap: 10px;
  font-weight: ${props => props.weight || 700};
  font-size: 1.2em;
  align-items: center;
  margin: 0 0 20px;
`;

class BoatDetails extends React.Component {

  capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2');
  };

  render() {
    return (
      <Wrapper>
        <h2 style={{textAlign: "start", margin: "20px"}}>Boat Details</h2>
        <Form className={"card"} rows={Object.keys(this.props.boatDetails).length}>
          {Object.keys(this.props.boatDetails).map(key => {
            return (
              <div key={key}>
                <TitleBar weight={500}>
                  {getIcon(key, "35px", "35px")}
                  {this.capitalize(key)}
                </TitleBar>
                <div>{this.props.boatDetails[key]}</div>
              </div>
            )
          })}
        </Form>
      </Wrapper>
    );
  }

}

export default connect(mapStateToProps)(BoatDetails);
