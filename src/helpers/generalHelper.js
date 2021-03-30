import {DateTime} from 'luxon'

export const getDateFromISO = (isoDate="") => {
    return DateTime.fromISO(isoDate).toFormat("dd/MM/yyyy")
}
