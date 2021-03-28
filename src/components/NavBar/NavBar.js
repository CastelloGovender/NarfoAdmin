import {Image} from 'components'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Chevron, Profile, Menu} from 'assets/svg'
import logo from 'assets/narfoLogo.jpg'
import "./index.scss"

export default class NavBar extends Component {
    static propTypes = {
        items : PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
            }),
        )
    }

    renderItem = ({label}) => {
        return (
            <div key={label} className="item m4">
                {label}
            </div>
        )
    }

    renderItems = (items) => items.map(item=>this.renderItem(item))
    
    renderTail = (name, src) => {
        return (
            <div className="tail h100 align-center px4 gc3">
                <div className="grow"></div>
                <div className="name pl12">{name}</div>
                <div>
                    <Image src={src}/>
                </div>
                <div className="chevron">
                    <Image src={Chevron}/>
                </div>
            </div>
        )
    }

    renderHamburger = () => {
        return (
            <div className="hamburger p4 ml2 pointer hover">
                <Image src={Menu}/>
            </div>
        )
    }
    
    
    render() {
        const name = "Bob Small"
        const src = Profile
        return (
            <div className="nav-bar">
                {this.renderHamburger()}
                <div className="logo">
                    <Image src={logo}/>
                </div>
                {this.renderItems(this.props.items)}
                <div className="grow"></div>
                {this.renderTail(name, src)}
            </div>
        )
    }
}
