import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class Group extends Component {
    static propTypes = {
        label: PropTypes.string
    }

    render() {
        return (
            <div className="group col grow mt2">
                <div className="group-header pb1">
                    <div className="group-label">{this.props.label}</div>
                </div>
                <div className="group-body py6">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
