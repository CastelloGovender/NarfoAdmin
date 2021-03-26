import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class Group extends Component {
    static propTypes = {
        label: PropTypes.string
    }

    render() {
        return (
            <div class="group col grow">
                <div className="group-header pb1">
                    <div className="group-label">{this.props.label}</div>
                </div>
                <div className="group-body py">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
