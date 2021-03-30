

import React, { Component } from 'react'
import { Group } from 'components'
import { getDateFromISO } from 'helpers/generalHelper'
import { TYPE } from 'components/Group/Group'
import { Print } from 'assets/svg'
import './index.scss'

export default class StatusInformation extends Component {

    getStatusInfo = () => {
        return {
            isDedicatedSportsShooter: true,
            isDedicatedHunter: true,
            inceptionDate: new Date(2020, 2, 12).toISOString(),
            expiryDate: new Date(2020, 9, 13).toISOString(),
        }
    }
    
    getStatus = (statusInfo) => {
        const dedicatedSportsShooterText = statusInfo.isDedicatedSportsShooter?`dedicated sports shooter`:``
        const dedicatedHunterText = statusInfo.isDedicatedHunter ? `dedicated hunter` : ``
        return [dedicatedSportsShooterText, dedicatedHunterText].filter(el=>el).join(` and `)
    }
    

    render() {
        const statusInfo = this.getStatusInfo()
        const status = this.getStatus(statusInfo)
        return (
            <div className="status-information grow">
                <Group className="col g2" label="Status information">
                    <div className="row g1 bold">
                        <div>{"Status:"}</div><div className="capitalize">{status}</div>
                    </div>
                    <div>{`Inception date: ${getDateFromISO(statusInfo.inceptionDate)}`}</div>
                    <div>{`Expiry date: ${getDateFromISO(statusInfo.expiryDate)}`}</div>
                    <Group type={TYPE.INDENTED}>
                        <Group label="My Account" button={{label:"Print", src: Print}}>

                        </Group>
                    </Group>
                </Group>
            </div>
        )
    }
}

