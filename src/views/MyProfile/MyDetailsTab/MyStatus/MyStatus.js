

import React, { Component } from 'react'
import {Group, Answer, Image} from 'components'
import { Profile } from 'assets/svg'
import { TYPE } from 'components/Answer/Answer'
import './index.scss'

export default class MyStatus extends Component {
    
    getAnswers = () => {
        return [
            { label: "Current", value: "2020"},
            { label: "Membership", value: "Ordinary"},
            { label: "Status", value: "Active"},
            { label: "Sports - Comply", value: "Yes"},
            { label: "Hunter - Comply", value: "Yes"},
            { label: "Loyalty days", value: "26 Days"},
            { label: "Expired firearms", value: "2"},
            { label: "Firearms to be renewed", value: "3"},
            { label: "Firearms", value: "8"},
        ]
    }

    renderAnswers = (answers) => {
        return (
            <div className="answers wrap g4">
                {answers.map(answer=><Answer key={answer.label} label={answer.label} value={answer.value} type={TYPE.INDENTED}/>)}
            </div>
        )
    }

    renderImage = () => {
        return (
            <div className="status-image-container grow col align-center gr4">
                <div className="status-image center">
                    <Image src={Profile}/>
                </div>
                <div className="button-primary">{"Replace image"}</div>
            </div>
        )
    }
    
    
    render() {
        const answers = this.getAnswers()

        return (
            <div className="my-status">
                <Group label="My status" class="gc8">
                    {this.renderImage()}
                    {this.renderAnswers(answers)}
                </Group>
            </div>
        )
    }
}

