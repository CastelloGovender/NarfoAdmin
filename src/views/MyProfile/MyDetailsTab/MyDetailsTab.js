import React, { Component } from 'react'
import MyStatus from './MyStatus/MyStatus'
import MyDetails from './MyDetails/MyDetails'
import MembershipCardCertificate from './MembershipCardCertificate/MembershipCardCertificate'
import './index.scss'

export default class MyDetailsTab extends Component {

    render() {
        return (
            <div className="my-details-tab col gr8">
                <MyStatus/>
                <MyDetails/>
                <MembershipCardCertificate/>
            </div>
        )
    }   
}
