import React, { Component } from 'react'
import {Group, Answer} from 'components'
import './index.scss'

export default class MyDetailsTab extends Component {

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
            <div className="answers wrap">
                {answers.map(answer=><Answer key={answer.label} label={answer.label} value={answer.value}/>)}
            </div>
        )
    }
    
    
    render() {
        const answers = this.getAnswers()
        return (
            <div className="my-details">
                <Group label="My status">
                    {this.renderAnswers(answers)}
                </Group>
            </div>
        )
    }   
}
