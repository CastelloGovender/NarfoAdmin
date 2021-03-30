

import React, { Component } from 'react'
import {Group, Answer, Image, Button} from 'components'
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
            <div className="answers grow wrap g4">
                {answers.map(answer=><Answer key={answer.label} label={answer.label} value={answer.value} type={TYPE.INDENTED}/>)}
            </div>
        )
    }

    renderImage = () => {
        return (
            <div className="status-image-container col center gr4">
                <div className="status-image center">
                    <Image src={Profile}/>
                </div>
                <Button type="primary" label="Replace image"/>
            </div>
        )
    }
    
    
    render() {
        const answers = this.getAnswers()

        return (
            <div className="my-status">
                <Group label="My status" class="my-status-group g8 wrap">
                    {this.renderImage()}
                    {this.renderAnswers(answers)}
                </Group>
            </div>
        )
    }
}

