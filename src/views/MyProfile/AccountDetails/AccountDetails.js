import React, { Component } from 'react'
import StatusInformation from './StatusInformation/StatusInformation'
import './index.scss'

export default class AccountDetails extends Component {
    
    render() {
        return (
            <div className="account-details">
                <StatusInformation/>
            </div>
        )
    }
}

