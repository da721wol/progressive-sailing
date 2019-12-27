import React from 'react';

export default class LogDetail extends React.Component {

  render() {
    // const isMobile = window.innerWidth <= 500;
    console.log(this.props)
    return (
      <div className={"card"}>
        <div className={"container"}>
          {this.props.log.content.navigation.position.value.latitude}N
          {this.props.log.content.navigation.position.value.longitude}E
        </div>
      </div>
    )


  }
}
