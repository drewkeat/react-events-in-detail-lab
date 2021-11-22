import React, {Component} from 'react'

class CoordinatesButton extends Component {

    getCoords = (e) => {    
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return (
            <button onClick={this.getCoords}>Coordinates Button</button>
        )
    }
}

export default CoordinatesButton