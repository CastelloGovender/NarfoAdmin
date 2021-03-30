

import { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class Hidden extends Component {
    static propTypes = {
        show: PropTypes.bool
    }

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return this.props.show ? this.props.children : null
    }
}

