import React from 'react';

export default class LogDetail extends React.Component {

  render() {
    // const isMobile = window.innerWidth <= 500;

    return (
      <div className={"card"}>
        <div className={"container"}>
          {this.props.log.name}
        </div>
      </div>
    )


  }
}
