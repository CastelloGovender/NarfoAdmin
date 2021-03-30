

import React, { Component } from 'react'
import { Answer, Group } from 'components'
import { TYPE } from 'components/Group/Group'
import './index.scss'

export default class MyDetails extends Component {

    getGroups = () => {
        return [
            {
                groupName: "Personal details",
                answers: [
                    { label: "Nick name", value: "Marco"},
                    { label: "First name", value: "Marco"},
                    { label: "Surname", value: "Alves"},
                    { label: "Occupation", value: "Doctor"},
                    { label: "Identification number", value: "9806205116082"},
                ]
            },
            {
                groupName: "Contact details",
                answers: [
                    { label: "Cell number", value: "+27 12 345 6789"},
                    { label: "Email address", value: "Marco@gmail.com"},
                ]
            },
            {
                groupName: "Residential address",
                answers: [
                    { label: "Street address", value: "674 Tortoise Road"},
                    { label: "Suburb", value: "Garsfontain"},
                    { label: "Postal code", value: "0000"},
                    { label: "City", value: "Pretoria"},
                    { label: "Province", value: "Gauteng"},
                ]
            },

        ]
    }

    renderAnswers = (answers) => answers.map(answer=><Answer key={answer.label} label={answer.label} value={answer.value}/>)

    renderGroups = (groups) => {
        return groups.map(group=>{
            return(
                <Group className="answers wrap g4" key={group.groupName} label={group.groupName}>
                    {this.renderAnswers(group.answers)}
                </Group>
            )
        })
    }
    

    render() {
        const myDetailsButton = {label: "Edit"}
        const groups = this.getGroups()

        return (
            <div className="my-details">
                <Group className="col" label="My details" button={myDetailsButton} type={TYPE.INDENTED}>
                    {this.renderGroups(groups)}
                </Group>
            </div>
        )
    }
}

