import React from 'react'
import styled from 'styled-components'
import editIcon from '../../assets/icons/edit.svg'
import Position from '../icons/Position'



const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(${props =>props.length}, 1fr);
   padding: 5px;
`;

const getDetailsLength = function(obj) {
  if (obj.detail.value) {
    if (typeof obj.detail.value !== "object") {
      return 2
    }
    return Object.keys(obj.detail.value).length + 1
  } else {
    return Object.keys(obj.detail).length + 1
  }
};

export function LogDetail(props) {
  const detailsLength = getDetailsLength(props);

  console.log(props);
  // const isMobile = window.innerWidth <= 500;
  return (
    <div className={"card"}>
      <Container detail={props.detail} length={detailsLength}>
        <div>
          <Position/>
          <div className={"detail-name"}>
            {props.name}
          </div>
        </div>
        <img className={"edit"} src={editIcon} alt={"icon"} style={{justifySelf: "end"}}/>
      </Container>
    </div>
  )
}
