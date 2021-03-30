import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import { Button, Hidden } from 'components'

export const TYPE = {
    DEFAULT: 0,
    INDENTED: 1
}
export default class Group extends Component {
    static propTypes = {
        label: PropTypes.string,
        button: PropTypes.shape({
            label: PropTypes.string,
            src: PropTypes.string,
            type: PropTypes.string,
            onClick: PropTypes.func,
        }),
        type: PropTypes.number,
    }

    getTypeStyle = (type) => {
        switch (type) {
            case TYPE.INDENTED:
                return `indent px4 mt8`
            default:
                return ``;
        }
    }
    

    renderButton = (button) => {
        if(button) {
            const { label="", src, type, onClick=()=>{} } = button;
            return (
                <Button className={"group-button"} label={label} src={src} type={type} onClick={()=>onClick()}/>
            )
        }
    }

    render() {
        const typeStyle = this.getTypeStyle(this.props.type)
        return (
            <div className={`group col grow mt2`}>
                <Hidden show={this.props.label}>
                    <div className="group-header pb2">
                        <div className={`group-label center`}>{this.props.label}</div>
                        <div className="grow"/>
                        {this.renderButton(this.props.button)}
                    </div>
                </Hidden>
                <div className={`group-body py6 ${typeStyle} ${this.props.className}`}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
