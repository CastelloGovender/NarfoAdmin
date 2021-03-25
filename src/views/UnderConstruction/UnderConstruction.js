import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UnderConstruction extends Component {
    static propTypes = {
        label: PropTypes.string
    }

    render() {
        return (
            <div className="under-construction grow col center p4">
                <div className="text-center">{this.props.label}</div>
                <div className="text-center">{"This view is currently under construction"}</div>
            </div>
        )
    }
}
