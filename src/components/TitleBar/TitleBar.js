import Image from 'components/Image/Image'
import React, { Component } from 'react'
import logo from 'assets/narfoLogo.jpg'
import "./index.scss"

export default class TitleBar extends Component {
    render() {
        return (
            <div className="title-bar">
                <div className="logo">
                    <Image src={logo}/>
                </div>
                <div className="grow"/>
                <div className="m4">{"Logout"}</div>
            </div>
        )
    }
}
