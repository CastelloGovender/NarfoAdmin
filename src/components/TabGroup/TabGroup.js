import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class TabGroup extends Component {
    static propTypes = {
        items : PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                view: PropTypes.element.isRequired,
            }),
        )
    }

    constructor(props) {
        super(props)
    
        this.state = {
            selectedItemIndex: 0
        }
    }
    

    renderItem = ({label, icon}, index) => {
        const activeStyle = index===this.state.selectedItemIndex ? `active` : ``
        return (
            <div key={label} className={`item py2 px4 pointer align-center hover ${activeStyle}`} onClick={()=>this.setState({selectedItemIndex: index})}>
                <div>{label}</div>
            </div>
        )
    }

    renderItems = (items) => items.map((item, i)=>this.renderItem(item, i))
    
    render() {
        return (
            <div className="tab-group col grow">
                <div className="items row p1 my4 shrink">
                    {this.renderItems(this.props.items)}
                </div>
                <div className="body col grow">
                    {this.props.items[this.state.selectedItemIndex].view}
                </div>
            </div>
        )
    }
}
