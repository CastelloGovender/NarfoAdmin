import React, { Component } from 'react'
import { Group, Image } from 'components'
import {Download} from 'assets/svg'
import './index.scss'

export default class MembershipCardCertificate extends Component {
    

    render() {
        return (
            <div className="membership-card-certificate">
                <Group class="col gr4" label="My membership card and certificate">
                    <div>{"Download your membership card"}</div>
                    <div className="button-secondary gc4 shrink center mb4">
                        <div>{"Download"}</div>
                        <div className="filter-primary">
                            <Image src={Download}/>
                        </div>
                    </div>
                    <div>{"Download your membership certificate"}</div>
                    <div className="button-secondary gc4 shrink center mb4">
                        <div>{"Download"}</div>
                        <div className="filter-primary">
                            <Image src={Download}/>
                        </div>
                    </div>
                </Group>
            </div>
        )
    }
}

