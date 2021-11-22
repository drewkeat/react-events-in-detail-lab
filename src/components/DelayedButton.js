import React, {Component} from 'react'

class DelayedButton extends Component {
    
    passOn = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.passOn}>Delayed Button</button>
        )
    }
}

export default DelayedButton