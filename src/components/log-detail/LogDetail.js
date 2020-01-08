import React from 'react'
import styled from 'styled-components'
import Position from '../icons/Position'
import Edit from '../icons/Edit'


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(${props => props.length}, 1fr);
  padding: 10px;
`;

const getRowAmount = function (log) {
  if (log.detail.value) {
    if (typeof log.detail.value !== "object") {
      return 2
    }
    return Object.keys(log.detail.value).length
  } else {
    return Object.keys(log.detail).length / 2 + 1
  }
};

const getValues = function (log) {
  let values = {};
  switch (log.name) {
    case 'position':
      values = {
        longitude: {value: log.detail.value.longitude},
        latitude: {value: log.detail.value.latitude}
      };
      break;
    case 'datetime':
      values = {
        date: {value: log.detail.value.substr(0, 10)},
        time: {value: log.detail.value.substr(11, 8)}
      };
      break;
    // case 'speedThroughWater':
    //   values = {
    //     speed: {value: log.detail.value}
    //   };
    //   break;
    case 'current':
      values = {
        setTrue: {value: log.detail.value.setTrue},
        drift: {value: log.detail.value.drift}
      };
      break;
    default:
      values = log.detail;
      break;
  }
  return values
};

export function LogDetail(props) {
  const detailsLength = getRowAmount(props);
  const values = getValues(props);
  console.log(props);
  console.log(values);
  // const isMobile = window.innerWidth <= 500;
  return (
    <div className={"card"}>
      <Container detail={props.detail} length={detailsLength}>
        <div style={{justifySelf: "start"}}>
          <Position/>
          <div className={"detail-name"}>
            {props.name}
          </div>
        </div>
        <div style={{justifySelf: "end"}}>
          <Edit style={{justifySelf: "end"}}/>
          Edit
        </div>
        {!values.value
          ? Object.keys(values).map(key => {
            return (
              <div key={key}>
                {key} : {values[key].value}
              </div>
            )
          })
          : <div>Value: {values.value} </div>

        }
      </Container>
    </div>
  )
}
