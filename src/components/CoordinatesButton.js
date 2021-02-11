import React, {Component} from 'react'

class CoordinatesButton extends Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  render = () => {
    return (<button onClick={this.handleClick}>Coordinates Button</button>)
  }

}

export default CoordinatesButton