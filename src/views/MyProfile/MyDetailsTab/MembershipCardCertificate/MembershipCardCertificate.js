import React, { Component } from 'react'
import { Button, Group } from 'components'
import {Download} from 'assets/svg'
import './index.scss'

export default class MembershipCardCertificate extends Component {
    
    render() {
        return (
            <div className="membership-card-certificate">
                <Group className="col gr4" label="My membership card and certificate">
                    <div>{"Download your membership card"}</div>
                    <Button className="shrink" label="Download" type="secondary" src={Download}/>
                    <div>{"Download your membership certificate"}</div>
                    <Button className="shrink" label="Download"type="secondary" src={Download}/>
                </Group>
            </div>
        )
    }
}

