import React from 'react'
import editIcon from '../../assets/icons/edit.svg'

export function LogDetail(props) {

    // const isMobile = window.innerWidth <= 500;
    return (
      <div className={"card"}>
        <div className={"container"}>
          <div className={"detail-name"}>
            {props.name}
          </div>
          <img className={"edit"} src={editIcon} alt={"icon"} />
        </div>
      </div>
    )
}
