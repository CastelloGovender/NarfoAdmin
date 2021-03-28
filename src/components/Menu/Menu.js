import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from 'components/Image/Image'
import './index.scss'

export default class Menu extends Component {
    static propTypes = {
        menuItems : PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                view: PropTypes.element.isRequired,
            }),
        )
    }

    constructor(props) {
        super(props)
    
        this.state = {
             selectedMenuItemIndex: 0
        }
    }
    

    renderMenuItem = ({label, icon}, index) => {
        const activeStyle = index===this.state.selectedMenuItemIndex ? `active` : ``
        return (
            <div key={label} className={`menu-item row p4 pointer align-center hover ${activeStyle}`} onClick={()=>this.setState({selectedMenuItemIndex: index})}>
                <Image className="image" src={icon}/>
                <div className="menu-item-label">{label}</div>
            </div>
        )
    }

    renderMenuItems = (menuItems) => menuItems.map((menuItem, i)=>this.renderMenuItem(menuItem, i))
    
    render() {
        return (
            <div className="menu grow">
                <div className="menu-items col grow gr1">
                    {this.renderMenuItems(this.props.menuItems)}
                </div>
                <div className="body col grow px12">
                    {this.props.menuItems[this.state.selectedMenuItemIndex].view}
                </div>
            </div>
        )
    }
}
