import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export const TYPE = {
    DEFAULT: 0,
    INDENTED: 1
}

export default class Answer extends Component {
    static propTypes = {
        label: PropTypes.string,
        value: PropTypes.string,
        type: PropTypes.number,
    }

    getTypeStyle = (type) => {
        switch (type) {
            case TYPE.INDENTED:
                return `indent`
            default:
                return ``;
        }
    }

    render() {
        const typeStyle = this.getTypeStyle(this.props.type)

        return (
            <div className="answer col g2">
                <div className={`value px4 py2 ${typeStyle}`}>{this.props.value}</div>
                <div className="label px4">{this.props.label}</div>
            </div>
        )
    }
}
