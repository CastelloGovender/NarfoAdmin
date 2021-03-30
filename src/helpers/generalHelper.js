import {DateTime} from 'luxon'

export const formatDate = (isoDate="") => {
    return DateTime.fromISO(isoDate).toFormat("dd/MM/yyyy")
}

export const formatCurrency = (amount) => {
    const value = amount.amount.toString()
    const whole = value.substring(0, value.length-2)
    const remainer = value.substring(value.length-2, value.length)
    return `${amount.currency} ${whole}.${remainer}`
}
