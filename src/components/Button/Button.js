

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, Hidden } from 'components'
import './index.scss'

export const TYPE = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
}

export default class Button extends Component {
    static propTypes = {
        type: PropTypes.string,
        label: PropTypes.string,
        src: PropTypes.string,
    }

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    getTypeStyle = (type) => {
        switch (type) {
            case TYPE.SECONDARY:
                return "button-secondary";
                
            case TYPE.PRIMARY:
            default:
                return "button-primary";
        }
    }
    
    

    render() {
        const { label, src, type, className } = this.props
        const typeStyle = this.getTypeStyle(type)

        return (
            <div className={`button pointer center ${typeStyle} ${className}`}>
                <Hidden show={label}>
                    <div className="button-label">{label}</div>
                </Hidden>
                <Hidden show={src}>
                    <div className="button-image">
                        <Image src={src}/>
                    </div>
                </Hidden>
            </div>
        )
    }
}

