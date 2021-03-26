import React, { Component } from 'react'
import {TabGroup} from 'components'
import UnderConstruction from 'views/UnderConstruction/UnderConstruction';

export default class MyProfile extends Component {

    getTabs = () => {
        return [
            {
                label: "My details",
                view: <UnderConstruction label="My details"/>
            },
            {
                label: "Account details",
                view: <UnderConstruction label="Account details"/>
            },
            {
                label: "Loyalty programme",
                view: <UnderConstruction label="Loyalty programme"/>
            }
        ]
    }
    

    render() {
        const tabs = this.getTabs()
        return (
            <div className="my-profile col grow">
                <div className="title mt2">{"My Profile"}</div>
                <TabGroup items={tabs}/>
            </div>
        )
    }
}
