import React from 'react'
import styled from 'styled-components'
import Icons from '../icons'


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(${props => props.length}, 1fr);
  padding: 10px;
`;

const Button = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  
`

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
  // const isMobile = window.innerWidth <= 500;
  return (
    <div className={"card"}>
      <Container detail={props.detail} length={detailsLength}>
        <div style={{justifySelf: "start"}}>
          <Icons.Position width={"50px"} height={"50px"} style={{boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"}}/>
          <div className={"detail-name"}>
            <b>{props.name}</b>
          </div>
        </div>
        <div style={{justifySelf: "end"}}>
          <Button>
            <Icons.Edit width={"35px"} height={"35px"} style={{justifySelf: "end"}}/>
            <b>Edit</b>
          </Button>
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
