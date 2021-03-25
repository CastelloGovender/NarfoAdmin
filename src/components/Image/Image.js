import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class Image extends Component {
    static propTypes = {
        src: PropTypes.string,
    }

    render() {
        return (
            <div className="image">
                <img src={this.props.src} alt=""/>
            </div>
        )
    }
}
