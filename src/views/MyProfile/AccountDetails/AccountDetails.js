

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StatusInformation from './StatusInformation/StatusInformation'
import './index.scss'

export default class AccountDetails extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div className="account-details">
                <StatusInformation/>
            </div>
        )
    }
}

