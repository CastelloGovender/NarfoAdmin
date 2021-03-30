import React, { Component } from 'react'
import { Group, Table } from 'components'
import { formatCurrency, formatDate } from 'helpers/generalHelper'
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

    getAccountColumns = () => {
        return [
            { label: "Payment type", fieldName: "paymentType"},
            { label: "Amount paid", fieldName: "amount", renderOverride: (value) => <div>{formatCurrency(value)}</div>},
            { label: "Payment date", fieldName: "paymentDate", renderOverride: (value) => <div>{formatDate(value)}</div>},
        ]
    }

    getAccountData = () => {
        return [
            {
                paymentType: "EFT",
                amount: {amount: 23000, currency: `R`},
                paymentDate: new Date(2021, 0, 2).toISOString(),
            },
            {
                paymentType: "EFT",
                amount: {amount: 24000, currency: `R`},
                paymentDate: new Date(2021, 0, 3).toISOString(),
            },
            {
                paymentType: "EFT",
                amount: {amount: 25000, currency: `R`},
                paymentDate: new Date(2021, 0, 4).toISOString(),
            },
        ]
    }
    
    

    render() {
        const statusInfo = this.getStatusInfo()
        const status = this.getStatus(statusInfo)
        const accountColumns = this.getAccountColumns()
        const accountData = this.getAccountData()

        return (
            <div className="status-information grow">
                <Group className="col g2" label="Status information">
                    <div className="row g1 bold">
                        <div>{"Status:"}</div><div className="capitalize">{status}</div>
                    </div>
                    <div>{`Inception date: ${formatDate(statusInfo.inceptionDate)}`}</div>
                    <div>{`Expiry date: ${formatDate(statusInfo.expiryDate)}`}</div>
                    <Group type={TYPE.INDENTED}>
                        <Group label="My Account" button={{label:"Print", src: Print}}>
                            <Table columns={accountColumns} data={accountData}/>
                        </Group>
                    </Group>
                </Group>
            </div>
        )
    }
}

