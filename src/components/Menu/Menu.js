import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    

    renderMenuItem = ({label}, index) => {
        return (
            <div key={label} className="menu-item p4" onClick={()=>this.setState({selectedMenuItemIndex: index})}>
                {label}
            </div>
        )
    }

    renderMenuItems = (menuItems) => menuItems.map((menuItem, i)=>this.renderMenuItem(menuItem, i))
    
    render() {
        return (
            <div className="menu m10 grow">
                <div className="menu-items col grow">
                    {this.renderMenuItems(this.props.menuItems)}
                </div>
                <div className="body col grow">
                    {this.props.menuItems[this.state.selectedMenuItemIndex].view}
                </div>
            </div>
        )
    }
}
