import React, { Component } from 'react'
import {TabGroup} from 'components'
import MyDetails from 'views/MyProfile/MyDetailsTab/MyDetailsTab'
import UnderConstruction from 'views/UnderConstruction/UnderConstruction';

export default class MyProfile extends Component {

    getTabs = () => {
        return [
            {
                label: "My details",
                view: <MyDetails/>
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
                <div className="title mt2">{"My profile"}</div>
                <TabGroup items={tabs}/>
            </div>
        )
    }
}
