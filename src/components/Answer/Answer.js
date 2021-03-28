import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class Answer extends Component {
    static propTypes = {
        label: PropTypes.string,
        value: PropTypes.string,
    }

    render() {
        return (
            <div className="answer col">
                <div className="value px4 py2">{this.props.value}</div>
                <div className="label px4">{this.props.label}</div>
            </div>
        )
    }
}
