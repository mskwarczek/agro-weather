import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {

    render() {
        console.log(this.props.initialText);
        return (
            <div>
                <p>It's alive!</p>
                <p>{this.props.initialText}</p>
                <button onClick={() => console.log('CLICK!')}>Test button</button>
            </div>
        )
    }
}

App.propTypes = {
    initialText: PropTypes.string.isRequired
}