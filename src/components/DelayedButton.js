import React, {Component} from 'react'

class DelayedButton extends Component {

    getCoords = (e) => {    
        return [e.clientX, e.clientY]
    }

    render() {
        return (
            <button onClick={this.props.onReceiveCoordinates(getCoords)}>Delayed Button</button>
        )
    }
}

export default DelayedButton